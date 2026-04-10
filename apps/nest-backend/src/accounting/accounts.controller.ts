import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounting/accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) { }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateAccountDto) {
    return this.accountsService.create(dto);
  }

  // @Post('seed')
  // seed() {
  //   return this.accountsService.seed();
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAccountDto) {
    return this.accountsService.update(id, dto);
  }
}
