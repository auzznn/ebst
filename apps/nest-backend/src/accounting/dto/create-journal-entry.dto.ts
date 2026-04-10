import {
  IsString,
  IsDateString,
  IsArray,
  ValidateNested,
  IsNumber,
  IsBoolean,
  IsOptional,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

export class JournalLineDto {
  @IsString()
  accountId: string;

  @IsNumber()
  amount: number;

  @IsBoolean()
  isDebit: boolean;

  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateJournalEntryDto {
  @IsDateString()
  date: string;

  @IsString()
  description: string;

  @IsString()
  period: string; // "2025-12"

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JournalLineDto)
  @ArrayMinSize(2)
  lines: JournalLineDto[];
}
