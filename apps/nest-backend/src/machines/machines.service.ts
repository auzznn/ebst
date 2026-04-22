import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Injectable()
export class MachinesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.machine.findMany({
      include: {
        operations: {
          where: { status: 'IN_PROGRESS' },
        },
      },
    });
  }

  async findOne(id: string) {
    const machine = await this.prisma.machine.findUnique({
      where: { id },
      include: {
        operations: {
          where: { status: 'IN_PROGRESS' },
        },
      },
    });
    if (!machine) {
      throw new NotFoundException(`Machine with ID ${id} not found`);
    }
    return machine;
  }

  async create(data: CreateMachineDto) {
    return this.prisma.machine.create({
      data: {
        name: data.name,
        machineType: data.machineType,
        isActive: data.isActive ?? true,
      },
    });
  }

  async update(id: string, data: UpdateMachineDto) {
    return this.prisma.machine.update({
      where: { id },
      data: {
        name: data.name,
        machineType: data.machineType,
        isActive: data.isActive,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.machine.delete({
      where: { id },
    });
  }
}