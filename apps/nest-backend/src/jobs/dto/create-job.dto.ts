import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateJobPartDto {
  @IsString()
  @IsNotEmpty()
  partId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsOptional()
  lineItemId?: string;
}

export class CreateJobMaterialDto {
  @IsString()
  @IsNotEmpty()
  materialId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

export class CreateJobDto {
  @IsString()
  @IsOptional()
  purchaseOrderId?: string;

  @IsString()
  @IsOptional()
  jobNo?: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateJobPartDto)
  parts?: CreateJobPartDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateJobPartDto)
  items?: CreateJobPartDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateJobMaterialDto)
  materials?: CreateJobMaterialDto[];
}
