import { IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { AccountTypeDto } from './create-account.dto';

export class UpdateAccountDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(AccountTypeDto)
  type?: AccountTypeDto;

  @IsOptional()
  @IsString()
  parentCode?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
