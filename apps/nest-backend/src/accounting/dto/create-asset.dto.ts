import { IsString, IsDateString, IsNumber } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsDateString()
  acquisitionDate: string;

  @IsNumber()
  usefulLifeMonths: number;

  @IsNumber()
  acquisitionCost: number;
}
