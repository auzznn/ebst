import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { JournalService } from './journal.service';
import { JournalController } from './journal.controller';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';

@Module({
  providers: [AccountsService, JournalService, ReportsService, AssetsService],
  controllers: [
    AccountsController,
    JournalController,
    ReportsController,
    AssetsController,
  ],
})
export class AccountingModule {}
