import { IsString, IsArray, ValidateNested, IsNumber, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class InvoiceItemDto {
  @IsNumber()
  no: number;

  @IsString()
  partNo: string;

  @IsString()
  description: string;

  @IsNumber()
  unitPrice: number;

  @IsNumber()
  qty: number;

  @IsString()
  qtyUnit: string;
}

export class GenerateInvoiceDto {
  @IsString()
  invoiceNo: string;

  @IsString()
  to: string;

  @IsString()
  poNo: string;

  @IsDateString()
  date: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceItemDto)
  items: InvoiceItemDto[];
}
