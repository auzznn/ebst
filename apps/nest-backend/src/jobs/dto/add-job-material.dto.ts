import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddJobMaterialDto {
  @IsString()
  @IsNotEmpty()
  materialId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
