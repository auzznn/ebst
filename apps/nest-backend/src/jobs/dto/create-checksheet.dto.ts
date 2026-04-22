import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CheckSheetType } from '@ebst/db';

export class CheckSheetRowDto {
  @IsString()
  @IsNotEmpty()
  parameterName: string;

  @IsString()
  @IsNotEmpty()
  actualValue: string;

  @IsBoolean()
  @IsNotEmpty()
  isPass: boolean;
}

export class CreateCheckSheetDto {
  @IsEnum(CheckSheetType)
  @IsNotEmpty()
  type: CheckSheetType;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CheckSheetRowDto)
  rows: CheckSheetRowDto[];
}
