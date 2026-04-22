import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FilesService } from '../files/files.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';

@Injectable()
export class PartsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly filesService: FilesService
  ) {}

  async findAll() {
    return this.prisma.part.findMany({
      include: {
        material: true
      }
    });
  }

  async findOne(id: string) {
    const part = await this.prisma.part.findUnique({
      where: { id },
      include: {
        material: true
      }
    });
    if (!part) {
      throw new NotFoundException(`Part with ID ${id} not found`);
    }
    return part;
  }

  async create(data: CreatePartDto, file?: Express.Multer.File) {
    let drawingRef = data.drawingRef || undefined;

    if (file) {
      const { key } = await this.filesService.uploadFileDirect(file.originalname, file.mimetype, file.buffer);
      const { url } = await this.filesService.getSignedUrlDirect(key);
      drawingRef = url;
    }

    return this.prisma.part.create({
      data: {
        partNo: data.partNo,
        description: data.description,
        castingType: data.castingType,
        materialId: data.materialId || undefined,
        drawingRef,
      },
    });
  }

  async update(id: string, data: UpdatePartDto, file?: Express.Multer.File) {
    let drawingRef = data.drawingRef || undefined;

    if (file) {
      const { key } = await this.filesService.uploadFileDirect(file.originalname, file.mimetype, file.buffer);
      const { url } = await this.filesService.getSignedUrlDirect(key);
      drawingRef = url;
    }

    return this.prisma.part.update({
      where: { id },
      data: {
        partNo: data.partNo,
        description: data.description,
        castingType: data.castingType,
        materialId: data.materialId || undefined,
        drawingRef,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.part.delete({
      where: { id },
    });
  }
}