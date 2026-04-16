import { Controller, Get, Post, Delete, Body, Param, Query, Req, UseGuards } from '@nestjs/common';
import { JournalService } from './journal.service';
import { CreateJournalEntryDto } from './dto/create-journal-entry.dto';
import { HttpAuthGuard } from 'src/communication/guards/http-auth.guard';
import { RolesGuard } from 'src/communication/guards/roles.guard';
import { Roles } from 'src/communication/decorators/roles.decorator';

@Controller('accounting/journal')
@UseGuards(HttpAuthGuard, RolesGuard)
export class JournalController {
  constructor(private journalService: JournalService) { }

  @Get()
  @Roles('FINANCE', 'EXECUTIVE')
  findAll(@Query('period') period?: string) {
    return this.journalService.findAll(period);
  }

  @Get(':id')
  @Roles('FINANCE', 'EXECUTIVE')
  findOne(@Param('id') id: string) {
    return this.journalService.findOne(id);
  }

  @Post()
  @Roles('FINANCE', 'EXECUTIVE')
  create(@Body() dto: CreateJournalEntryDto, @Req() req: any) {
    return this.journalService.create(dto, req.user.id);
  }

  @Delete(':id')
  @Roles('FINANCE', 'EXECUTIVE')
  delete(@Param('id') id: string, @Req() req: any) {
    const userId = req.user.id
    return this.journalService.delete(id, userId);
  }
}
