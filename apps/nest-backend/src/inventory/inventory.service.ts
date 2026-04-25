import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMaterialDto, UpdateMaterialDto, StockAdjustmentDto, AddJobMaterialDto } from './dto/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [total, data] = await Promise.all([
      this.prisma.material.count(),
      this.prisma.material.findMany({
        skip,
        take: limit,
        include: {
          supplier: true,
          _count: {
            select: { usages: true, adjustments: true },
          },
        },
        orderBy: { name: 'asc' },
      })
    ]);

    return { 
      data, 
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) } 
    };
  }

  async findOne(id: string) {
    const material = await this.prisma.material.findUnique({
      where: { id },
      include: {
        supplier: true,
      },
    });

    if (!material) {
      throw new NotFoundException(`Material with ID ${id} not found`);
    }

    return material;
  }

  async getMaterialLedger(id: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [total, data] = await Promise.all([
      this.prisma.stockLedger.count({ where: { materialId: id } }),
      this.prisma.stockLedger.findMany({
        where: { materialId: id },
        skip,
        take: limit,
        include: {
          user: {
            select: { id: true, name: true }
          }
        },
        orderBy: { createdAt: 'desc' },
      })
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) }
    };
  }

  async create(data: CreateMaterialDto) {
    return this.prisma.material.create({
      data: {
        name: data.name,
        code: data.code,
        description: data.description,
        unit: data.unit,
        reorderThreshold: data.reorderThreshold,
        reorderQty: data.reorderQty ?? 0,
        supplierId: data.supplierId || null,
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
        reorderQty: data.reorderQty ?? 0,
        supplierId: data.supplierId || null,
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
      const updatedMaterial = await tx.material.update({
        where: { id },
        data: {
          stockQty: { increment: data.qty },
        },
      });

      // 3. Record in Ledger
      await tx.stockLedger.create({
        data: {
          materialId: id,
          transactionType: data.qty > 0 ? 'RECEIPT' : 'ADJUSTMENT',
          qtyChange: data.qty,
          balanceAfter: updatedMaterial.stockQty,
          reason: data.reason,
          referenceId: adjustment.id,
          userId: userId,
        }
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
      const updatedMaterial = await tx.material.update({
        where: { id: data.materialId },
        data: {
          stockQty: { decrement: data.qty },
        },
      });

      // 4. Record stock adjustment for traceability
      const adjustment = await tx.stockAdjustment.create({
        data: {
          materialId: data.materialId,
          qty: -data.qty,
          reason: `Auto-allocated to job (Job List: ${data.jobListId})`,
          adjustedById: userId,
        },
      });

      // 5. Record in Ledger
      await tx.stockLedger.create({
        data: {
          materialId: data.materialId,
          transactionType: 'USAGE',
          qtyChange: -data.qty,
          balanceAfter: updatedMaterial.stockQty,
          reason: `Allocated to Job List: ${data.jobListId}`,
          referenceId: usage.id,
          userId: userId,
        }
      });

      return usage;
    });
  }
}
