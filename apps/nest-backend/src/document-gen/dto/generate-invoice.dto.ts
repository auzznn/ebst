import { IsString, IsArray, ValidateNested, IsNumber, IsDateString } from 'class-validator';
import { Type, Transform } from 'class-transformer';

// Simple sanitization function to strip HTML tags and trim strings
const sanitize = (value: any) => {
  if (typeof value !== 'string') return value;
  return value.replace(/<[^>]*>?/gm, '').trim();
};

export class InvoiceItemDto {
  @IsNumber()
  no: number;

  @IsString()
  @Transform(({ value }) => sanitize(value))
  partNo: string;

  @IsString()
  @Transform(({ value }) => sanitize(value))
  description: string;

  @IsNumber()
  unitPrice: number;

  @IsNumber()
  qty: number;

  @IsString()
  @Transform(({ value }) => sanitize(value))
  qtyUnit: string;
}

export class GenerateInvoiceDto {
  @IsString()
  @Transform(({ value }) => sanitize(value))
  invoiceNo: string;

  @IsString()
  @Transform(({ value }) => sanitize(value))
  to: string;

  @IsString()
  @Transform(({ value }) => sanitize(value))
  customerId: string;

  @IsString()
  @Transform(({ value }) => sanitize(value))
  poNo: string;

  @IsDateString()
  date: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceItemDto)
  items: InvoiceItemDto[];
}
