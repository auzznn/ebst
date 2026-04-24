import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpsertRoutingDto } from './dto/upsert-routing.dto';

@Injectable()
export class RoutingService {
  constructor(private readonly prisma: PrismaService) {}

  async findByPartId(partId: string) {
    const routing = await this.prisma.routingTemplate.findUnique({
      where: { partId },
      include: {
        steps: {
          orderBy: { stepOrder: 'asc' },
          include: {
            defaultMachine: true,
          },
        },
      },
    });
    if (!routing) {
      return null;
    }
    return routing;
  }

  async upsertRouting(partId: string, data: UpsertRoutingDto) {
    // Check if routing template exists
    let routing = await this.prisma.routingTemplate.findUnique({
      where: { partId },
    });

    if (!routing) {
      routing = await this.prisma.routingTemplate.create({
        data: { partId },
      });
    } else {
      // Delete existing steps to replace them
      await this.prisma.routingStep.deleteMany({
        where: { routingTemplateId: routing.id },
      });
    }

    // Create new steps
    if (data.steps && data.steps.length > 0) {
      await this.prisma.routingStep.createMany({
        data: data.steps.map(step => ({
          routingTemplateId: routing.id,
          stepOrder: step.stepOrder,
          operationName: step.operationName,
          defaultMachineType: step.defaultMachineType || null,
          defaultMachineId: step.defaultMachineId || null,
          estimatedMinutes: step.estimatedMinutes || null,
        })),
      });
    }

    return this.findByPartId(partId);
  }
}