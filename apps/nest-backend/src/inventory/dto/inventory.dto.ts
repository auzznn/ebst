import { IsString, IsEnum, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { MaterialUnit } from '@ebst/db';

export class CreateMaterialDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(MaterialUnit)
  unit: MaterialUnit;

  @IsNumber()
  reorderThreshold: number;

  @IsOptional()
  @IsNumber()
  reorderQty?: number;

  @IsOptional()
  @IsString()
  supplierId?: string;

  @IsOptional()
  @IsNumber()
  unitCost?: number;
}

export class UpdateMaterialDto extends CreateMaterialDto {}

export class StockAdjustmentDto {
  @IsNumber()
  qty: number;

  @IsString()
  reason: string;
}

export class AddJobMaterialDto {
  @IsString()
  jobListId: string;

  @IsString()
  materialId: string;

  @IsNumber()
  qty: number;

  @IsOptional()
  @IsString()
  operationId?: string; // Optional: can be assigned to a specific operation or automatically the first one
}
