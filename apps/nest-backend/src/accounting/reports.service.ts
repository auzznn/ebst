import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  /**
   * General Ledger — all transactions for a specific account in a period.
   * Maps to: BUKU BESAR (file 2)
   */
  async getLedger(accountId: string, period?: string) {
    const account = await this.prisma.chartOfAccount.findUnique({
      where: { id: accountId },
    });

    if (!account) {
      return { account: null, entries: [], totalDebit: 0, totalCredit: 0, endingBalance: 0 };
    }

    const lines = await this.prisma.journalLine.findMany({
      where: {
        accountId,
        ...(period ? { journalEntry: { period } } : {}),
      },
      include: {
        journalEntry: {
          select: { date: true, description: true, period: true },
        },
      },
      orderBy: { journalEntry: { date: 'asc' } },
    });

    // Calculate running balance
    let balance = 0;
    const entries = lines.map((line) => {
      const debit = line.isDebit ? line.amount : 0;
      const credit = !line.isDebit ? line.amount : 0;

      // Normal balance: Assets/Expenses increase with debit, Liabilities/Equity/Revenue with credit
      if (['ASSET', 'EXPENSE'].includes(account.type)) {
        balance += debit - credit;
      } else {
        balance += credit - debit;
      }

      return {
        date: line.journalEntry.date,
        description: line.description || line.journalEntry.description,
        debit,
        credit,
        balance,
      };
    });

    return {
      account,
      entries,
      totalDebit: entries.reduce((sum, e) => sum + e.debit, 0),
      totalCredit: entries.reduce((sum, e) => sum + e.credit, 0),
      endingBalance: balance,
    };
  }

  /**
   * Trial Balance — all accounts with their total debits, credits, and balances.
   * Maps to: Worksheet / Neraca Lajur (file 4)
   */
  async getTrialBalance(period?: string) {
    const accounts = await this.prisma.chartOfAccount.findMany({
      where: { isActive: true },
      orderBy: { code: 'asc' },
    });

    const lines = await this.prisma.journalLine.findMany({
      where: period ? { journalEntry: { period } } : undefined,
      select: {
        accountId: true,
        amount: true,
        isDebit: true,
      },
    });

    // Aggregate per account
    const accountTotals = new Map<string, { debit: number; credit: number }>();
    for (const line of lines) {
      const current = accountTotals.get(line.accountId) || { debit: 0, credit: 0 };
      if (line.isDebit) {
        current.debit += line.amount;
      } else {
        current.credit += line.amount;
      }
      accountTotals.set(line.accountId, current);
    }

    const rows = accounts.map((account) => {
      const totals = accountTotals.get(account.id) || { debit: 0, credit: 0 };
      const balance = totals.debit - totals.credit;

      return {
        code: account.code,
        name: account.name,
        type: account.type,
        debit: totals.debit,
        credit: totals.credit,
        balanceDebit: balance > 0 ? balance : 0,
        balanceCredit: balance < 0 ? Math.abs(balance) : 0,
      };
    }).filter((row) => row.debit !== 0 || row.credit !== 0);

    const totalDebit = rows.reduce((sum, r) => sum + r.balanceDebit, 0);
    const totalCredit = rows.reduce((sum, r) => sum + r.balanceCredit, 0);

    return {
      period: period || 'All periods',
      rows,
      totalDebit,
      totalCredit,
      isBalanced: Math.abs(totalDebit - totalCredit) < 0.01,
    };
  }

  /**
   * Profit & Loss Statement — revenue minus expenses.
   * Maps to: Lap. Laba Rugi (file 6)
   */
  async getProfitLoss(period?: string) {
    const lines = await this.prisma.journalLine.findMany({
      where: {
        ...(period ? { journalEntry: { period } } : {}),
        account: {
          type: { in: ['REVENUE', 'EXPENSE'] },
        },
      },
      include: {
        account: true,
      },
    });

    // Group by account
    const accountTotals = new Map<string, {
      code: string;
      name: string;
      type: string;
      amount: number;
    }>();

    for (const line of lines) {
      const key = line.accountId;
      const current = accountTotals.get(key) || {
        code: line.account.code,
        name: line.account.name,
        type: line.account.type,
        amount: 0,
      };

      // Revenue: credits increase, debits decrease
      // Expense: debits increase, credits decrease
      if (line.account.type === 'REVENUE') {
        current.amount += line.isDebit ? -line.amount : line.amount;
      } else {
        current.amount += line.isDebit ? line.amount : -line.amount;
      }

      accountTotals.set(key, current);
    }

    const allAccounts = Array.from(accountTotals.values());
    const revenue = allAccounts
      .filter((a) => a.type === 'REVENUE')
      .sort((a, b) => a.code.localeCompare(b.code));
    const expenses = allAccounts
      .filter((a) => a.type === 'EXPENSE')
      .sort((a, b) => a.code.localeCompare(b.code));

    const totalRevenue = revenue.reduce((sum, a) => sum + a.amount, 0);
    
    // Separate operational (6.1-6.5) and non-operational (6.6+) expenses
    const operationalExpenses = expenses.filter((a) => {
      const code = parseFloat(a.code);
      return code >= 6.1 && code <= 6.5;
    });
    const nonOperationalExpenses = expenses.filter((a) => {
      const code = parseFloat(a.code);
      return code < 6.1 || code > 6.5;
    });
    // Include purchases (5.x) as cost of goods
    const costOfGoods = expenses.filter((a) => a.code.startsWith('5.'));
    const pureOperational = operationalExpenses.filter((a) => !a.code.startsWith('5.'));

    const totalCostOfGoods = costOfGoods.reduce((sum, a) => sum + a.amount, 0);
    const totalOperational = pureOperational.reduce((sum, a) => sum + a.amount, 0);
    const totalNonOperational = nonOperationalExpenses.reduce((sum, a) => sum + a.amount, 0);
    const totalExpenses = totalCostOfGoods + totalOperational + totalNonOperational;
    const grossProfit = totalRevenue - totalCostOfGoods;
    const netProfit = totalRevenue - totalExpenses;

    return {
      period: period || 'All periods',
      revenue,
      totalRevenue,
      costOfGoods,
      totalCostOfGoods,
      grossProfit,
      operationalExpenses: pureOperational,
      totalOperational,
      nonOperationalExpenses,
      totalNonOperational,
      totalExpenses,
      netProfit,
    };
  }

  /**
   * Balance Sheet — assets = liabilities + equity.
   * Maps to: Neraca (file 7)
   */
  async getBalanceSheet(period?: string) {
    const lines = await this.prisma.journalLine.findMany({
      where: {
        ...(period ? { journalEntry: { period } } : {}),
        account: {
          type: { in: ['ASSET', 'CONTRA_ASSET', 'LIABILITY', 'EQUITY'] },
        },
      },
      include: {
        account: true,
      },
    });

    // Group by account
    const accountTotals = new Map<string, {
      code: string;
      name: string;
      type: string;
      amount: number;
    }>();

    for (const line of lines) {
      const key = line.accountId;
      const current = accountTotals.get(key) || {
        code: line.account.code,
        name: line.account.name,
        type: line.account.type,
        amount: 0,
      };

      // Assets: debits increase, credits decrease
      // Contra assets: credits increase, debits decrease
      // Liabilities & Equity: credits increase, debits decrease
      if (line.account.type === 'ASSET') {
        current.amount += line.isDebit ? line.amount : -line.amount;
      } else if (line.account.type === 'CONTRA_ASSET') {
        current.amount += line.isDebit ? -line.amount : line.amount;
      } else {
        // LIABILITY, EQUITY
        current.amount += line.isDebit ? -line.amount : line.amount;
      }

      accountTotals.set(key, current);
    }

    const allAccounts = Array.from(accountTotals.values());

    const currentAssets = allAccounts
      .filter((a) => a.type === 'ASSET' && a.code.startsWith('1.1') || a.code.startsWith('1.3'))
      .sort((a, b) => a.code.localeCompare(b.code));

    const fixedAssets = allAccounts
      .filter((a) => (a.type === 'ASSET' || a.type === 'CONTRA_ASSET') &&
        (a.code.startsWith('1.4') || a.code.startsWith('1.5') || a.code.startsWith('1.6') || a.code.startsWith('1.7')))
      .sort((a, b) => a.code.localeCompare(b.code));

    const liabilities = allAccounts
      .filter((a) => a.type === 'LIABILITY')
      .sort((a, b) => a.code.localeCompare(b.code));

    const equity = allAccounts
      .filter((a) => a.type === 'EQUITY')
      .sort((a, b) => a.code.localeCompare(b.code));

    const totalCurrentAssets = currentAssets.reduce((sum, a) => sum + a.amount, 0);
    const totalFixedAssets = fixedAssets.reduce((sum, a) => sum + (a.type === 'CONTRA_ASSET' ? -a.amount : a.amount), 0);
    const totalAssets = totalCurrentAssets + totalFixedAssets;
    const totalLiabilities = liabilities.reduce((sum, a) => sum + a.amount, 0);
    const totalEquity = equity.reduce((sum, a) => sum + a.amount, 0);

    return {
      period: period || 'All periods',
      currentAssets,
      totalCurrentAssets,
      fixedAssets,
      totalFixedAssets,
      totalAssets,
      liabilities,
      totalLiabilities,
      equity,
      totalEquity,
      totalLiabilitiesAndEquity: totalLiabilities + totalEquity,
      isBalanced: Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01,
    };
  }
}
