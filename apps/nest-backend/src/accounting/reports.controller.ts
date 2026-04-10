import { Controller, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('accounting/reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('ledger')
  getLedger(
    @Query('accountId') accountId: string,
    @Query('period') period?: string,
  ) {
    return this.reportsService.getLedger(accountId, period);
  }

  @Get('trial-balance')
  getTrialBalance(@Query('period') period?: string) {
    return this.reportsService.getTrialBalance(period);
  }

  @Get('profit-loss')
  getProfitLoss(@Query('period') period?: string) {
    return this.reportsService.getProfitLoss(period);
  }

  @Get('balance-sheet')
  getBalanceSheet(@Query('period') period?: string) {
    return this.reportsService.getBalanceSheet(period);
  }
}
