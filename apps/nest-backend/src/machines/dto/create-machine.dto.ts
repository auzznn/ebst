import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMachineDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  machineType: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
