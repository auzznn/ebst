import { Controller, Get, Post, Patch, Body, Param, UseGuards, Req } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { HttpAuthGuard } from 'src/communication/guards/http-auth.guard';
import { RolesGuard } from 'src/communication/guards/roles.guard';
import { Roles } from 'src/communication/decorators/roles.decorator';

@Controller('accounting/accounts')
@UseGuards(HttpAuthGuard, RolesGuard)
export class AccountsController {
  constructor(private accountsService: AccountsService) { }

  @Get()
  @Roles('FINANCE', 'EXECUTIVE')
  findAll() {
    return this.accountsService.findAll();
  }

  @Post()
  @Roles('FINANCE', 'EXECUTIVE')
  create(@Body() dto: CreateAccountDto) {
    return this.accountsService.create(dto);
  }

  // @Post('seed')
  // seed() {
  //   return this.accountsService.seed();
  // }

  @Patch(':id')
  @Roles('FINANCE', 'EXECUTIVE')
  update(@Param('id') id: string, @Body() dto: UpdateAccountDto) {
    return this.accountsService.update(id, dto);
  }
}
