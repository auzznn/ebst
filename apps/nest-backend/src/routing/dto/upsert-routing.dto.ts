import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class RoutingStepDto {
  @IsNumber()
  @IsNotEmpty()
  stepOrder: number;

  @IsString()
  @IsNotEmpty()
  operationName: string;

  @IsString()
  @IsOptional()
  defaultMachineType?: string;

  @IsNumber()
  @IsOptional()
  estimatedMinutes?: number;
}

export class UpsertRoutingDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RoutingStepDto)
  steps: RoutingStepDto[];
}
