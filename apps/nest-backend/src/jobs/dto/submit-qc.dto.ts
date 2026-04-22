import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsBoolean,
  IsArray,
  ValidateNested,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { QcResult, FindingCategory } from '@ebst/db';

export class QcFindingDto {
  @IsEnum(FindingCategory)
  @IsNotEmpty()
  category: FindingCategory;

  @IsString()
  @IsNotEmpty()
  parameter: string; // e.g. "Outer Diameter", "Surface Roughness Ra"

  @IsString()
  @IsOptional()
  specification?: string; // Expected spec / tolerance

  @IsString()
  @IsOptional()
  measuredValue?: string; // Actual measured value

  @IsString()
  @IsOptional()
  unit?: string; // "mm", "µm", "Rc", etc.

  @IsString()
  @IsOptional()
  description?: string; // Free-text observation

  @IsInt()
  @Min(0)
  @Max(10)
  severity: number; // 0 = OK, 5 = minor, 10 = critical

  @IsBoolean()
  isConforming: boolean;

  @IsString()
  @IsOptional()
  documentId?: string; // Pre-uploaded BusinessDocument id
}

export class SubmitQcDto {
  @IsEnum(QcResult)
  @IsNotEmpty()
  result: QcResult;

  @IsString()
  @IsOptional()
  reason?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QcFindingDto)
  @IsOptional()
  findings?: QcFindingDto[];
}
