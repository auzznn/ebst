import { IsEnum, IsNotEmpty, IsOptional, IsString, IsArray, IsNumber, ValidateNested, IsObject, Min, Max } from 'class-validator';
import { Type, Transform, plainToInstance } from 'class-transformer';
import { CastingType } from '@ebst/db';

export class PartMaterialDto {
  @IsString()
  @IsNotEmpty()
  materialId: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  @Transform(({ value }) => {
    if (value === null || value === undefined || value === '') return undefined;
    return typeof value === 'string' ? Number(value) : value;
  })
  ratio: number;
}

export class PartSpecificationDto {
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value === null || value === '' || value === 'undefined' || value === undefined) ? undefined : Number(value))
  length?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value === null || value === '' || value === 'undefined' || value === undefined) ? undefined : Number(value))
  width?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value === null || value === '' || value === 'undefined' || value === undefined) ? undefined : Number(value))
  height?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value === null || value === '' || value === 'undefined' || value === undefined) ? undefined : Number(value))
  weight?: number;

  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @IsString()
  tolerance?: string;

  @IsOptional()
  @IsString()
  surfaceFinish?: string;

  @IsOptional()
  @IsObject()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try { return JSON.parse(value); } catch { return value; }
    }
    return value;
  })
  otherSpecs?: any;
}

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

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string' && value !== '') {
      try {
        const parsed = JSON.parse(value);
        // Manually convert to instances to prevent whitelist stripping
        return plainToInstance(PartMaterialDto, parsed);
      } catch (e) {
        return value;
      }
    }
    return value;
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PartMaterialDto)
  materials?: PartMaterialDto[];

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string' && value !== '') {
      try {
        const parsed = JSON.parse(value);
        // Manually convert to instances to prevent whitelist stripping
        return plainToInstance(PartSpecificationDto, parsed);
      } catch (e) {
        return value;
      }
    }
    return value;
  })
  @IsObject()
  @ValidateNested()
  @Type(() => PartSpecificationDto)
  specifications?: PartSpecificationDto;

  @IsOptional()
  @IsString()
  drawingId?: string;
}
