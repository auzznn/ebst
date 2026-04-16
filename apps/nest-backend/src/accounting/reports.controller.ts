import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { HttpAuthGuard } from 'src/communication/guards/http-auth.guard';
import { RolesGuard } from 'src/communication/guards/roles.guard';
import { Roles } from 'src/communication/decorators/roles.decorator';

@Controller('accounting/reports')
@UseGuards(HttpAuthGuard, RolesGuard
)
export class ReportsController {
  constructor(private reportsService: ReportsService) { }

  @Get('ledger')
  @Roles('FINANCE', 'EXECUTIVE')
  getLedger(
    @Query('accountId') accountId: string,
    @Query('period') period?: string,
  ) {
    return this.reportsService.getLedger(accountId, period);
  }

  @Get('trial-balance')
  @Roles('FINANCE', 'EXECUTIVE')
  getTrialBalance(@Query('period') period?: string) {
    return this.reportsService.getTrialBalance(period);
  }

  @Get('profit-loss')
  @Roles('FINANCE', 'EXECUTIVE')
  getProfitLoss(@Query('period') period?: string) {
    return this.reportsService.getProfitLoss(period);
  }

  @Get('balance-sheet')
  @Roles('FINANCE', 'EXECUTIVE')
  getBalanceSheet(@Query('period') period?: string) {
    return this.reportsService.getBalanceSheet(period);
  }
}
