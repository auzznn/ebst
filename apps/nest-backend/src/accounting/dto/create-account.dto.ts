import { IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator';

export enum AccountTypeDto {
  ASSET = 'ASSET',
  CONTRA_ASSET = 'CONTRA_ASSET',
  LIABILITY = 'LIABILITY',
  EQUITY = 'EQUITY',
  REVENUE = 'REVENUE',
  EXPENSE = 'EXPENSE',
}

export class CreateAccountDto {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsEnum(AccountTypeDto)
  type: AccountTypeDto;

  @IsOptional()
  @IsString()
  parentCode?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
