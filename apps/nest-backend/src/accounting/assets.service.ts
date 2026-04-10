import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.fixedAsset.findMany({
      orderBy: { category: 'asc' },
    });
  }

  async findOne(id: string) {
    const asset = await this.prisma.fixedAsset.findUnique({ where: { id } });
    if (!asset) {
      throw new NotFoundException(`Asset ${id} not found`);
    }
    return asset;
  }

  async create(dto: CreateAssetDto) {
    const monthlyDepreciation = dto.acquisitionCost / dto.usefulLifeMonths;

    return this.prisma.fixedAsset.create({
      data: {
        name: dto.name,
        category: dto.category,
        acquisitionDate: new Date(dto.acquisitionDate),
        usefulLifeMonths: dto.usefulLifeMonths,
        acquisitionCost: dto.acquisitionCost,
        monthlyDepreciation,
        accumulatedDepreciation: 0,
        bookValue: dto.acquisitionCost,
      },
    });
  }

  /**
   * Run monthly depreciation for all assets.
   * This uses the straight-line method matching the Excel files.
   */
  async depreciate() {
    const assets = await this.prisma.fixedAsset.findMany({
      where: {
        bookValue: { gt: 0 },
      },
    });

    const results: Array<{
      id: string;
      name: string;
      depreciationAmount: number;
      newBookValue: number;
      newAccumulatedDepreciation: number;
    }> = [];

    for (const asset of assets) {
      const depreciationAmount = Math.min(
        asset.monthlyDepreciation,
        asset.bookValue,
      );

      const updated = await this.prisma.fixedAsset.update({
        where: { id: asset.id },
        data: {
          accumulatedDepreciation: asset.accumulatedDepreciation + depreciationAmount,
          bookValue: asset.bookValue - depreciationAmount,
        },
      });

      results.push({
        id: updated.id,
        name: updated.name,
        depreciationAmount,
        newBookValue: updated.bookValue,
        newAccumulatedDepreciation: updated.accumulatedDepreciation,
      });
    }

    const totalDepreciation = results.reduce(
      (sum, r) => sum + r.depreciationAmount,
      0,
    );

    return {
      message: `Depreciated ${results.length} assets`,
      totalDepreciation,
      assets: results,
    };
  }
}
