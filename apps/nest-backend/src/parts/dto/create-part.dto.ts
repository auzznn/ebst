import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CastingType } from '@ebst/db';

export class CreatePartDto {
  @IsString()
  @IsNotEmpty()
  partNo: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(CastingType)
  @IsNotEmpty()
  castingType: CastingType;

  @IsString()
  @IsOptional()
  materialId?: string;

  @IsString()
  @IsOptional()
  drawingRef?: string;
}
