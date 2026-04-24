import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JobCardStatus, OperationStatus } from '@ebst/db';
import { CreateJobDto } from './dto/create-job.dto';
import { StartOperationDto } from './dto/start-operation.dto';
import { SubmitQcDto } from './dto/submit-qc.dto';
import { CreateCheckSheetDto } from './dto/create-checksheet.dto';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
    startDate?: string,
    endDate?: string,
    status?: JobCardStatus,
    search?: string,
  ) {
    const skip = (page - 1) * limit;

    const where: any = {};
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) {
        where.createdAt.gte = new Date(startDate);
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        where.createdAt.lte = end;
      }
    }

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { jobNo: { contains: search, mode: 'insensitive' } },
        {
          purchaseOrder: {
            poNumber: { contains: search, mode: 'insensitive' },
          },
        },
        {
          purchaseOrder: {
            customer: { name: { contains: search, mode: 'insensitive' } },
          },
        },
      ];
    }

    const [total, data] = await Promise.all([
      this.prisma.jobCard.count({ where }),
      this.prisma.jobCard.findMany({
        skip,
        take: limit,
        where,
        include: {
          jobLists: {
            include: {
              operations: true,
              part: {
                include: {
                  specifications: true,
                  materials: {
                    include: {
                      material: true,
                    },
                  },
                },
              },
              lineItem: {
                include: {
                  part: {
                    include: {
                      specifications: true,
                      materials: {
                        include: {
                          material: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          purchaseOrder: {
            include: { customer: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      })
    ]);

    return { 
      data, 
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) } 
    };
  }

  async findOne(id: string) {
    const job = await this.prisma.jobCard.findUnique({
      where: { id },
      include: {
        jobLists: {
          include: {
            part: {
              include: {
                material: true,
                specifications: true,
                materials: {
                  include: {
                    material: true,
                  },
                },
              },
            },
            lineItem: {
              include: {
                part: {
                  include: {
                    material: true,
                    specifications: true,
                    materials: {
                      include: {
                        material: true,
                      },
                    },
                  },
                },
              },
            },
            jobMaterials: {
              include: {
                material: true,
              },
            },
            operations: {
              include: {
                routingStep: true,
                machine: true,
                operator: true,
                qcLog: {
                  include: {
                    inspector: { select: { name: true } },
                    findings: {
                      include: { document: true },
                    },
                  },
                },
                materialsUsed: {
                  include: {
                    material: true,
                  },
                },
              },
              orderBy: { stepOrder: 'asc' },
            },
          },
        },
        purchaseOrder: {
          include: { customer: true },
        },
        createdBy: true,
      },
    });

    if (!job) throw new NotFoundException('Job card not found');
    return job;
  }

  async createJob(data: CreateJobDto & { createdById: string }) {
    // 1. Determine jobNo
    let jobNo = data.jobNo;
    if (!jobNo) {
      const count = await this.prisma.jobCard.count();
      jobNo = `JOB-${new Date().getFullYear()}-${(count + 1).toString().padStart(4, '0')}`;
    }

    // 2. Create JobCard
    const jobCard = await this.prisma.jobCard.create({
      data: {
        jobNo: jobNo,
        purchaseOrderId: data.purchaseOrderId || undefined,
        createdById: data.createdById,
        status: JobCardStatus.PENDING,
      },
    });

    // 3. Collect parts to process
    let partsToProcess = data.parts || data.items || [];

    // If PO provided and no parts specified, use all line items from PO
    if (data.purchaseOrderId && partsToProcess.length === 0) {
      const po = await this.prisma.purchaseOrder.findUnique({
        where: { id: data.purchaseOrderId },
        include: { lineItems: true },
      });
      if (po) {
        partsToProcess = po.lineItems.map((li) => ({
          partId: li.partId,
          quantity: li.quantity,
          lineItemId: li.id,
        }));
      }
    }

    // 4. Generate JobLists and Operations based on RoutingTemplates
    for (const part of partsToProcess) {
      // Find routing template for part
      const routing = await this.prisma.routingTemplate.findUnique({
        where: { partId: part.partId },
        include: { steps: { orderBy: { stepOrder: 'asc' } } },
      });

      const jobList = await this.prisma.jobList.create({
        data: {
          jobCardId: jobCard.id,
          partId: part.partId,
          lineItemId: (part as any).lineItemId || undefined,
          quantity: part.quantity,
          status: JobCardStatus.PENDING,
        },
      });

      if (routing) {
        for (const step of routing.steps) {
          await this.prisma.operation.create({
            data: {
              jobListId: jobList.id,
              routingStepId: step.id,
              stepOrder: step.stepOrder,
              operationName: step.operationName,
              machineId: step.defaultMachineId || undefined,
              status: OperationStatus.WAITING,
            },
          });
        }
      }
    }

    return jobCard;
  }

  async updateStatus(id: string, status: JobCardStatus) {
    return this.prisma.jobCard.update({
      where: { id },
      data: { status },
    });
  }

  /**
   * Start an operation.
   * Rules:
   *  1. All previous steps (stepOrder < current) in the same JobList must be COMPLETED.
   *  2. Deducts all JobMaterials assigned to the parent JobList from inventory.
   *  3. Updates JobCard status to IN_PROGRESS.
   */
  async startOperation(id: string, data: StartOperationDto) {
    // Fetch the operation with its parent JobList and all sibling operations
    const operation = await this.prisma.operation.findUnique({
      where: { id },
      include: {
        jobList: {
          include: {
            operations: { orderBy: { stepOrder: 'asc' } },
            jobMaterials: { include: { material: true } },
            jobCard: true,
          },
        },
      },
    });

    if (!operation) throw new NotFoundException('Operation not found');

    // Bug fix #4 — enforce sequential order
    const predecessors = operation.jobList.operations.filter(
      (op) => op.stepOrder < operation.stepOrder,
    );
    const allPredecessorsComplete = predecessors.every(
      (op) => op.status === OperationStatus.COMPLETED,
    );
    if (!allPredecessorsComplete) {
      throw new BadRequestException(
        'Previous operations must be completed before starting this one.',
      );
    }

    // Bug fix #2 — deduct materials from inventory on the FIRST operation only
    const isFirstStep = operation.stepOrder === Math.min(...operation.jobList.operations.map((op) => op.stepOrder));
    if (isFirstStep && operation.jobList.jobMaterials.length > 0) {
      for (const jm of operation.jobList.jobMaterials) {
        const qty = Number(jm.quantity);

        // Verify stock still sufficient at start time
        const material = await this.prisma.material.findUnique({ where: { id: jm.materialId } });
        if (!material) throw new NotFoundException(`Material ${jm.materialId} not found`);
        if (Number(material.stockQty) < qty) {
          throw new BadRequestException(
            `Insufficient stock for ${material.name}. Available: ${Number(material.stockQty)} ${material.unit}, Required: ${qty} ${material.unit}.`,
          );
        }

        await this.prisma.material.update({
          where: { id: jm.materialId },
          data: { stockQty: { decrement: qty } },
        });
      }
    }

    // Update operation status
    const updated = await this.prisma.operation.update({
      where: { id },
      data: {
        status: OperationStatus.IN_PROGRESS,
        startedAt: new Date(),
        machineId: data.machineId || undefined,
        operatorId: data.operatorId || undefined,
      },
    });

    // Update JobCard status to IN_PROGRESS if not already
    if (operation.jobList.jobCard.status === JobCardStatus.PENDING) {
      await this.prisma.jobCard.update({
        where: { id: operation.jobList.jobCardId },
        data: { status: JobCardStatus.IN_PROGRESS },
      });
    }

    // Update JobList status to IN_PROGRESS if not already
    if (operation.jobList.status === JobCardStatus.PENDING) {
      await this.prisma.jobList.update({
        where: { id: operation.jobListId },
        data: { status: JobCardStatus.IN_PROGRESS },
      });
    }

    return updated;
  }

  /**
   * Complete an operation.
   * After completion, checks if all operations in the JobList are done
   * and updates JobList / JobCard status accordingly.
   */
  async completeOperation(id: string, notes?: string) {
    const operation = await this.prisma.operation.findUnique({
      where: { id },
      include: {
        jobList: {
          include: {
            operations: true,
            jobCard: {
              include: {
                jobLists: {
                  include: { operations: true },
                },
              },
            },
          },
        },
      },
    });

    if (!operation) throw new NotFoundException('Operation not found');

    // Mark operation complete
    await this.prisma.operation.update({
      where: { id },
      data: {
        status: OperationStatus.COMPLETED,
        completedAt: new Date(),
        notes: notes || undefined,
      },
    });

    // Bug fix #5 — check if all operations in this JobList are now complete
    const siblingOps = operation.jobList.operations.filter((op) => op.id !== id);
    const allOpsComplete = siblingOps.every(
      (op) => op.status === OperationStatus.COMPLETED,
    );

    if (allOpsComplete) {
      await this.prisma.jobList.update({
        where: { id: operation.jobListId },
        data: { status: JobCardStatus.COMPLETED },
      });

      // Check if all JobLists in the JobCard are now complete
      const allLists = operation.jobList.jobCard.jobLists;
      const otherLists = allLists.filter((l) => l.id !== operation.jobListId);
      const allListsComplete = otherLists.every(
        (l) => l.status === JobCardStatus.COMPLETED,
      );

      if (allListsComplete) {
        await this.prisma.jobCard.update({
          where: { id: operation.jobList.jobCardId },
          data: {
            status: JobCardStatus.COMPLETED,
            completedAt: new Date(),
          },
        });
      }
    }

    return operation;
  }

  async submitQc(operationId: string, data: SubmitQcDto, inspectorId: string) {
    const findings = data.findings ?? [];

    return this.prisma.qcLog.create({
      data: {
        operationId,
        result: data.result,
        inspectorId,
        reason: data.reason || undefined,
        findings: {
          create: findings.map((f) => ({
            category: f.category,
            parameter: f.parameter,
            specification: f.specification || undefined,
            measuredValue: f.measuredValue || undefined,
            unit: f.unit || undefined,
            description: f.description || undefined,
            isConforming: f.isConforming,
            documentId: f.documentId || undefined,
          })),
        },
      },
      include: {
        findings: {
          include: { document: true },
        },
      },
    });
  }

  async createCheckSheet(operationId: string, data: CreateCheckSheetDto) {
    return this.prisma.checkSheet.create({
      data: {
        operationId,
        type: data.type,
        rows: {
          create: data.rows.map((r) => ({
            parameterName: r.parameterName,
            actualValue: r.actualValue,
            isPass: r.isPass,
          })),
        },
      },
    });
  }

  /**
   * Add a material to a job list.
   * Bug fix #1 — validates that the requested quantity does not exceed
   * available inventory stock.
   */
  async addJobMaterial(
    jobListId: string,
    data: { materialId: string; quantity: number },
  ) {
    // Verify job is still PENDING (not started yet)
    const jobList = await this.prisma.jobList.findUnique({
      where: { id: jobListId },
    });
    if (!jobList) throw new NotFoundException('Job list not found');
    if (jobList.status !== JobCardStatus.PENDING) {
      throw new BadRequestException(
        'Cannot add materials after the job has started.',
      );
    }

    // Check existing allocations for this material across this jobList
    const existingAllocations = await this.prisma.jobMaterial.aggregate({
      where: { jobListId, materialId: data.materialId },
      _sum: { quantity: true },
    });
    const alreadyAllocated = Number(existingAllocations._sum.quantity ?? 0);

    const material = await this.prisma.material.findUnique({
      where: { id: data.materialId },
    });
    if (!material) throw new NotFoundException('Material not found');

    const available = Number(material.stockQty);
    const totalRequested = alreadyAllocated + data.quantity;

    if (totalRequested > available) {
      throw new BadRequestException(
        `Insufficient stock for ${material.name}. Available: ${available} ${material.unit}, ` +
          `already allocated: ${alreadyAllocated} ${material.unit}, requested: ${data.quantity} ${material.unit}.`,
      );
    }

    return this.prisma.jobMaterial.create({
      data: {
        jobListId,
        materialId: data.materialId,
        quantity: data.quantity,
      },
    });
  }

  /**
   * Remove a material from a job list.
   * Bug fix #3 — prevents removal once the job list is no longer PENDING.
   */
  async removeJobMaterial(id: string) {
    const jobMaterial = await this.prisma.jobMaterial.findUnique({
      where: { id },
      include: { jobList: true },
    });
    if (!jobMaterial) throw new NotFoundException('Job material not found');

    if (jobMaterial.jobList.status !== JobCardStatus.PENDING) {
      throw new BadRequestException(
        'Cannot remove materials after the job has started.',
      );
    }

    return this.prisma.jobMaterial.delete({ where: { id } });
  }
}