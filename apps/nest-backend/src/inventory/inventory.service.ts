import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMaterialDto, UpdateMaterialDto, StockAdjustmentDto, AddJobMaterialDto } from './dto/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.material.findMany({
      include: {
        supplier: true,
        _count: {
          select: { usages: true, adjustments: true },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    const material = await this.prisma.material.findUnique({
      where: { id },
      include: {
        supplier: true,
        adjustments: {
          include: { adjustedBy: true },
          orderBy: { adjustedAt: 'desc' },
          take: 20,
        },
        usages: {
          include: { operation: { include: { jobList: { include: { jobCard: true } } } } },
          orderBy: { loggedAt: 'desc' },
          take: 20,
        },
      },
    });

    if (!material) {
      throw new NotFoundException(`Material with ID ${id} not found`);
    }

    return material;
  }

  async create(data: CreateMaterialDto) {
    return this.prisma.material.create({
      data: {
        name: data.name,
        code: data.code,
        description: data.description,
        unit: data.unit,
        reorderThreshold: data.reorderThreshold,
        reorderQty: data.reorderQty,
        supplierId: data.supplierId,
        unitCost: data.unitCost,
      },
    });
  }

  async update(id: string, data: UpdateMaterialDto) {
    return this.prisma.material.update({
      where: { id },
      data: {
        name: data.name,
        code: data.code,
        description: data.description,
        unit: data.unit,
        reorderThreshold: data.reorderThreshold,
        reorderQty: data.reorderQty,
        supplierId: data.supplierId,
        unitCost: data.unitCost,
      },
    });
  }

  async adjustStock(id: string, userId: string, data: StockAdjustmentDto) {
    return this.prisma.$transaction(async (tx) => {
      const material = await tx.material.findUnique({ where: { id } });
      if (!material) throw new NotFoundException('Material not found');

      // 1. Create adjustment record
      const adjustment = await tx.stockAdjustment.create({
        data: {
          materialId: id,
          qty: data.qty,
          reason: data.reason,
          adjustedById: userId,
        },
      });

      // 2. Update current stock
      await tx.material.update({
        where: { id },
        data: {
          stockQty: { increment: data.qty },
        },
      });

      return adjustment;
    });
  }

  async addMaterialToJob(userId: string, data: AddJobMaterialDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Find operation (either provided or first available for the job list)
      let operationId = data.operationId;
      if (!operationId) {
        const firstOp = await tx.operation.findFirst({
          where: { jobListId: data.jobListId },
          orderBy: { stepOrder: 'asc' },
        });

        if (!firstOp) {
          throw new BadRequestException('No operation found for this job list to assign materials.');
        }
        operationId = firstOp.id;
      }

      // 2. Create material usage record
      const usage = await tx.materialUsage.create({
        data: {
          operationId: operationId,
          materialId: data.materialId,
          qtyUsed: data.qty,
        },
      });

      // 3. Deduct from stock
      await tx.material.update({
        where: { id: data.materialId },
        data: {
          stockQty: { decrement: data.qty },
        },
      });

      // 4. Record stock adjustment for traceability
      await tx.stockAdjustment.create({
        data: {
          materialId: data.materialId,
          qty: -data.qty,
          reason: `Auto-allocated to job (Job List: ${data.jobListId})`,
          adjustedById: userId,
        },
      });

      return usage;
    });
  }
}
