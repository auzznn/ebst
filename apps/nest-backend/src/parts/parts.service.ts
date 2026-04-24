import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FilesService } from '../files/files.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';

@Injectable()
export class PartsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly filesService: FilesService
  ) { }

  private async attachSignedUrl(part: any) {
    if (part.drawing?.key) {
      const { url } = await this.filesService.getSignedUrlDirect(part.drawing.key);
      part.drawingRef = url;
    }
    return part;
  }

  async findAll(page: number = 1, limit: number = 10, search?: string, castingType?: string) {
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { partNo: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (castingType && castingType !== 'ALL') {
      where.castingType = castingType;
    }

    const [total, data] = await Promise.all([
      this.prisma.part.count({ where }),
      this.prisma.part.findMany({
        where,
        skip,
        take: limit,
        include: {
          materials: {
            include: { material: true }
          },
          specifications: true,
          drawing: true,
        },
        orderBy: { createdAt: 'desc' }
      })
    ]);

    const formattedData = await Promise.all(data.map(part => this.attachSignedUrl(part)));

    return {
      data: formattedData,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) }
    };
  }

  async findOne(id: string) {
    const part = await this.prisma.part.findUnique({
      where: { id },
      include: {
        materials: {
          include: { material: true }
        },
        specifications: true,
        drawing: true,
      }
    });
    if (!part) {
      throw new NotFoundException(`Part with ID ${id} not found`);
    }
    return this.attachSignedUrl(part);
  }

  private validateMaterialsRatio(materials?: { ratio: number }[]) {
    if (!materials || materials.length === 0) return;
    const totalRatio = materials.reduce((sum, m) => sum + m.ratio, 0);
    if (Math.abs(totalRatio - 100) > 0.01) {
      throw new BadRequestException('Total material composition ratio must be 100%');
    }
  }

  async create(data: CreatePartDto, file?: Express.Multer.File, userId: string = 'system') {
    console.log('Incoming CreatePartDto:', JSON.stringify(data, null, 2));
    this.validateMaterialsRatio(data.materials);

    let drawingId: string | undefined;

    if (file) {
      const { key } = await this.filesService.uploadFileDirect(file.originalname, file.mimetype, file.buffer);
      const document = await this.filesService.registerDocument({
        key,
        fileName: file.originalname,
        fileType: file.mimetype,
        size: file.size,
        documentType: 'DRAWING',
        userId,
      });
      drawingId = document.id;
    }

    return this.prisma.part.create({
      data: {
        partNo: data.partNo,
        description: data.description,
        castingType: data.castingType,
        drawingId,
        materials: data.materials ? {
          create: data.materials.map(m => ({
            materialId: m.materialId,
            ratio: m.ratio,
          }))
        } : undefined,
        specifications: data.specifications ? {
          create: {
            ...data.specifications,
          }
        } : undefined,
      },
      include: {
        materials: true,
        specifications: true,
      }
    });
  }

  async update(id: string, data: UpdatePartDto, file?: Express.Multer.File, userId: string = 'system') {
    if (data.materials) {
      this.validateMaterialsRatio(data.materials);
    }

    let drawingId: string | undefined;

    if (file) {
      const { key } = await this.filesService.uploadFileDirect(file.originalname, file.mimetype, file.buffer);
      const document = await this.filesService.registerDocument({
        key,
        fileName: file.originalname,
        fileType: file.mimetype,
        size: file.size,
        documentType: 'DRAWING',
        userId,
      });
      drawingId = document.id;
    }

    // Handle nested updates for materials and specifications
    const updateData: any = {
      partNo: data.partNo,
      description: data.description,
      castingType: data.castingType,
      drawingId: drawingId || undefined,
    };

    if (data.materials) {
      updateData.materials = {
        deleteMany: {},
        create: data.materials.map(m => ({
          materialId: m.materialId,
          ratio: m.ratio,
        }))
      };
    }

    if (data.specifications) {
      updateData.specifications = {
        upsert: {
          create: { ...data.specifications },
          update: { ...data.specifications },
        }
      };
    }

    return this.prisma.part.update({
      where: { id },
      data: updateData,
      include: {
        materials: true,
        specifications: true,
      }
    });
  }

  async remove(id: string) {
    return this.prisma.part.delete({
      where: { id },
    });
  }
}