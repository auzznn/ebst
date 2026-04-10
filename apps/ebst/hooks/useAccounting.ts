import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

export interface Account {
  id: string;
  code: string;
  name: string;
  type: string;
  parentCode: string | null;
  isActive: boolean;
}

export interface JournalLine {
  id: string;
  amount: number;
  isDebit: boolean;
  description: string | null;
  account: Account;
}

export interface JournalEntry {
  id: string;
  date: string;
  description: string;
  period: string;
  createdAt: string;
  createdBy: { id: string; name: string };
  lines: JournalLine[];
}

export interface FixedAsset {
  id: string;
  name: string;
  category: string;
  acquisitionDate: string;
  usefulLifeMonths: number;
  acquisitionCost: number;
  monthlyDepreciation: number;
  accumulatedDepreciation: number;
  bookValue: number;
}

export interface LedgerEntry {
  date: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

export interface LedgerData {
  account: Account;
  entries: LedgerEntry[];
  totalDebit: number;
  totalCredit: number;
  endingBalance: number;
}

export interface ProfitLossData {
  period: string;
  revenue: any[];
  totalRevenue: number;
  costOfGoods: any[];
  totalCostOfGoods: number;
  grossProfit: number;
  operationalExpenses: any[];
  totalOperational: number;
  nonOperationalExpenses: any[];
  totalNonOperational: number;
  totalExpenses: number;
  netProfit: number;
}

export interface BalanceSheetData {
  period: string;
  currentAssets: any[];
  totalCurrentAssets: number;
  fixedAssets: any[];
  totalFixedAssets: number;
  totalAssets: number;
  liabilities: any[];
  totalLiabilities: number;
  equity: any[];
  totalEquity: number;
  totalLiabilitiesAndEquity: number;
  isBalanced: boolean;
}

export interface TrialBalanceData {
  period: string;
  rows: any[];
  totalDebit: number;
  totalCredit: number;
  isBalanced: boolean;
}

export function useAccounting() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["accountingOverview"],
    queryFn: async () => {
      const [plRes, bsRes] = await Promise.all([
        api.get("/accounting/reports/profit-loss"),
        api.get("/accounting/reports/balance-sheet"),
      ]);
      return {
        profitLoss: plRes.data as ProfitLossData,
        balanceSheet: bsRes.data as BalanceSheetData,
      };
    },
  });

  return {
    profitLoss: data?.profitLoss ?? null,
    balanceSheet: data?.balanceSheet ?? null,
    loading: isLoading,
    error,
    refetch,
  };
}

export function useAccounts() {
  const query = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const res = await api.get("/accounting/accounts");
      return res.data as Account[];
    },
  });

  return {
    accounts: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useAssets() {
  const query = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const res = await api.get("/accounting/assets");
      return res.data as FixedAsset[];
    },
  });

  return {
    assets: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useJournal(period?: string) {
  const query = useQuery({
    queryKey: ["journal", period],
    queryFn: async () => {
      const params = period ? `?period=${period}` : "";
      const res = await api.get(`/accounting/journal${params}`);
      return res.data as JournalEntry[];
    },
  });

  return {
    entries: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useLedger(accountId: string, period?: string) {
  const query = useQuery({
    queryKey: ["ledger", accountId, period],
    queryFn: async () => {
      const params = new URLSearchParams({ accountId });
      if (period) params.set("period", period);
      const res = await api.get(`/accounting/reports/ledger?${params.toString()}`);
      return res.data as LedgerData;
    },
    enabled: !!accountId, // Only run if accountId is provided
  });

  return {
    ledger: query.data ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useTrialBalance(period?: string) {
  const query = useQuery({
    queryKey: ["trialBalance", period],
    queryFn: async () => {
      const params = period ? `?period=${period}` : "";
      const res = await api.get(`/accounting/reports/trial-balance${params}`);
      return res.data as TrialBalanceData;
    },
  });

  return {
    data: query.data ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useProfitLoss(period?: string) {
  const query = useQuery({
    queryKey: ["profitLoss", period],
    queryFn: async () => {
      const params = period ? `?period=${period}` : "";
      const res = await api.get(`/accounting/reports/profit-loss${params}`);
      return res.data as ProfitLossData;
    },
  });

  return {
    data: query.data ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useBalanceSheet(period?: string) {
  const query = useQuery({
    queryKey: ["balanceSheet", period],
    queryFn: async () => {
      const params = period ? `?period=${period}` : "";
      const res = await api.get(`/accounting/reports/balance-sheet${params}`);
      return res.data as BalanceSheetData;
    },
  });

  return {
    data: query.data ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
