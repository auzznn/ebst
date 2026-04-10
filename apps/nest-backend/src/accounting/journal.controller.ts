import { Controller, Get, Post, Delete, Body, Param, Query, Req } from '@nestjs/common';
import { JournalService } from './journal.service';
import { CreateJournalEntryDto } from './dto/create-journal-entry.dto';

@Controller('accounting/journal')
export class JournalController {
  constructor(private journalService: JournalService) {}

  @Get()
  findAll(@Query('period') period?: string) {
    return this.journalService.findAll(period);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.journalService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateJournalEntryDto, @Req() req: any) {
    return this.journalService.create(dto, req.user.id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.journalService.delete(id);
  }
}
