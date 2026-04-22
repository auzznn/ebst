import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PurchaseOrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.purchaseOrder.findMany({
      include: {
        customer: true,
        lineItems: {
          include: { part: true },
        },
      },
    });
  }

  async findOne(id: string) {
    const po = await this.prisma.purchaseOrder.findUnique({
      where: { id },
      include: {
        customer: true,
        lineItems: {
          include: { part: true },
        },
      },
    });
    if (!po) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
    return po;
  }

  async create(data: {
    poNumber: string;
    customerId: string;
    dueDate: Date;
    notes?: string;
    lineItems: { partId: string; quantity: number; unitPrice: number }[];
  }) {
    return this.prisma.purchaseOrder.create({
      data: {
        poNumber: data.poNumber,
        customerId: data.customerId,
        dueDate: new Date(data.dueDate),
        notes: data.notes,
        lineItems: {
          create: data.lineItems.map(item => ({
            partId: item.partId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
          })),
        },
      },
      include: {
        lineItems: true,
      },
    });
  }
}