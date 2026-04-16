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
import { Type, Transform } from 'class-transformer';

const sanitize = (value: any) => {
  if (typeof value !== 'string') return value;
  return value.replace(/<[^>]*>?/gm, '').trim();
};

export class JournalLineDto {
  @IsString()
  accountId: string;

  @IsNumber()
  amount: number;

  @IsBoolean()
  isDebit: boolean;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitize(value))
  description?: string;
}

export class CreateJournalEntryDto {
  @IsDateString()
  date: string;

  @IsString()
  @Transform(({ value }) => sanitize(value))
  description: string;

  @IsString()
  period: string; // "2025-12"

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JournalLineDto)
  @ArrayMinSize(2)
  lines: JournalLineDto[];
}
