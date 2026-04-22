import { IsOptional, IsString } from 'class-validator';

export class StartOperationDto {
  @IsString()
  @IsOptional()
  machineId?: string;

  @IsString()
  @IsOptional()
  operatorId?: string;
}
