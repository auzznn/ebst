"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/lib/api";
import { useTrialBalance, useProfitLoss, useBalanceSheet } from "@/hooks/useAccounting";

type ReportTab = "trial-balance" | "profit-loss" | "balance-sheet";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// ─── Trial Balance ──────────────────────────────────────────
function TrialBalance({ period }: { period: string }) {
  const { data, loading } = useTrialBalance(period);

  if (loading) return <p className="text-center py-8 text-muted-foreground">Loading...</p>;
  if (!data) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Neraca Saldo (Trial Balance)</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Period: {data.period}
            </p>
          </div>
          <Badge variant={data.isBalanced ? "default" : "destructive"}>
            {data.isBalanced ? "✓ Balanced" : "✗ Not Balanced"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Debit</TableHead>
              <TableHead className="text-right">Credit</TableHead>
              <TableHead className="text-right">Balance (D)</TableHead>
              <TableHead className="text-right">Balance (C)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.rows.map((row: any) => (
              <TableRow key={row.code}>
                <TableCell className="font-mono text-muted-foreground">
                  {row.code}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {row.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {row.debit > 0 ? formatCurrency(row.debit) : "—"}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {row.credit > 0 ? formatCurrency(row.credit) : "—"}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {row.balanceDebit > 0 ? formatCurrency(row.balanceDebit) : "—"}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {row.balanceCredit > 0 ? formatCurrency(row.balanceCredit) : "—"}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold border-t-2">
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right font-mono">
                {formatCurrency(data.totalDebit)}
              </TableCell>
              <TableCell className="text-right font-mono">
                {formatCurrency(data.totalCredit)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// ─── Profit & Loss ──────────────────────────────────────────
function ProfitLoss({ period }: { period: string }) {
  const { data, loading } = useProfitLoss(period);

  if (loading) return <p className="text-center py-8 text-muted-foreground">Loading...</p>;
  if (!data) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Laporan Laba Rugi (Profit & Loss)</CardTitle>
        <p className="text-sm text-muted-foreground">Period: {data.period}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Revenue */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Pendapatan (Revenue)
          </h3>
          {data.revenue.map((r: any) => (
            <div key={r.code} className="flex justify-between py-1">
              <span className="text-sm">
                <span className="text-muted-foreground">{r.code}</span> {r.name}
              </span>
              <span className="font-mono text-sm">{formatCurrency(r.amount)}</span>
            </div>
          ))}
          <div className="flex justify-between py-2 border-t font-semibold">
            <span>Total Penjualan</span>
            <span className="font-mono">{formatCurrency(data.totalRevenue)}</span>
          </div>
        </div>

        {/* Cost of Goods */}
        {data.costOfGoods.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Harga Pokok (Cost of Goods)
            </h3>
            {data.costOfGoods.map((r: any) => (
              <div key={r.code} className="flex justify-between py-1">
                <span className="text-sm">
                  <span className="text-muted-foreground">{r.code}</span> {r.name}
                </span>
                <span className="font-mono text-sm text-red-500">
                  ({formatCurrency(r.amount)})
                </span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t font-semibold">
              <span>Laba Kotor (Gross Profit)</span>
              <span
                className={`font-mono ${data.grossProfit >= 0 ? "text-emerald-500" : "text-red-500"}`}
              >
                {formatCurrency(data.grossProfit)}
              </span>
            </div>
          </div>
        )}

        {/* Operational Expenses */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Biaya Operasional (Operational Expenses)
          </h3>
          {data.operationalExpenses.map((r: any) => (
            <div key={r.code} className="flex justify-between py-1">
              <span className="text-sm">
                <span className="text-muted-foreground">{r.code}</span> {r.name}
              </span>
              <span className="font-mono text-sm">{formatCurrency(r.amount)}</span>
            </div>
          ))}
          <div className="flex justify-between py-2 border-t font-medium text-sm">
            <span>Total Biaya Operasional</span>
            <span className="font-mono">{formatCurrency(data.totalOperational)}</span>
          </div>
        </div>

        {/* Non-Operational Expenses */}
        {data.nonOperationalExpenses.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Biaya Non-Operasional
            </h3>
            {data.nonOperationalExpenses.map((r: any) => (
              <div key={r.code} className="flex justify-between py-1">
                <span className="text-sm">
                  <span className="text-muted-foreground">{r.code}</span> {r.name}
                </span>
                <span className="font-mono text-sm">{formatCurrency(r.amount)}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t font-medium text-sm">
              <span>Total Biaya Non-Operasional</span>
              <span className="font-mono">
                {formatCurrency(data.totalNonOperational)}
              </span>
            </div>
          </div>
        )}

        {/* Net Profit */}
        <div className="p-4 rounded-lg bg-muted">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">
              Laba/Rugi Bersih (Net Profit/Loss)
            </span>
            <span
              className={`text-xl font-bold font-mono ${data.netProfit >= 0 ? "text-emerald-500" : "text-red-500"}`}
            >
              {formatCurrency(data.netProfit)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Balance Sheet ──────────────────────────────────────────
function BalanceSheet({ period }: { period: string }) {
  const { data, loading } = useBalanceSheet(period);

  if (loading) return <p className="text-center py-8 text-muted-foreground">Loading...</p>;
  if (!data) return null;

  const renderSection = (title: string, items: any[], total: number) => (
    <div className="space-y-1">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      {items.map((item: any) => (
        <div key={item.code} className="flex justify-between py-1">
          <span className="text-sm">
            <span className="text-muted-foreground">{item.code}</span> {item.name}
          </span>
          <span className="font-mono text-sm">{formatCurrency(item.amount)}</span>
        </div>
      ))}
      <div className="flex justify-between py-2 border-t font-semibold">
        <span>Total {title}</span>
        <span className="font-mono">{formatCurrency(total)}</span>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Neraca (Balance Sheet)</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Period: {data.period}
            </p>
          </div>
          <Badge variant={data.isBalanced ? "default" : "destructive"}>
            {data.isBalanced ? "✓ Balanced" : "✗ Not Balanced"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Assets */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold border-b pb-2">AKTIVA (Assets)</h2>
            {renderSection("Aktiva Lancar (Current Assets)", data.currentAssets, data.totalCurrentAssets)}
            {renderSection("Aktiva Tetap (Fixed Assets)", data.fixedAssets, data.totalFixedAssets)}
            <div className="p-3 rounded-lg bg-blue-500/10">
              <div className="flex justify-between font-bold">
                <span>Total Aktiva</span>
                <span className="font-mono text-blue-500">
                  {formatCurrency(data.totalAssets)}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Liabilities + Equity */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold border-b pb-2">
              PASIVA (Liabilities & Equity)
            </h2>
            {renderSection("Kewajiban (Liabilities)", data.liabilities, data.totalLiabilities)}
            {renderSection("Modal (Equity)", data.equity, data.totalEquity)}
            <div className="p-3 rounded-lg bg-amber-500/10">
              <div className="flex justify-between font-bold">
                <span>Total Pasiva</span>
                <span className="font-mono text-amber-500">
                  {formatCurrency(data.totalLiabilitiesAndEquity)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Main Reports Page ──────────────────────────────────────
export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState<ReportTab>("trial-balance");
  const [period, setPeriod] = useState("");

  const tabs: { id: ReportTab; label: string }[] = [
    { id: "trial-balance", label: "Neraca Saldo (Trial Balance)" },
    { id: "profit-loss", label: "Laba Rugi (Profit & Loss)" },
    { id: "balance-sheet", label: "Neraca (Balance Sheet)" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Financial Reports
          </h1>
          <p className="text-muted-foreground">
            Generated from your journal entries
          </p>
        </div>
        <div className="w-40">
          <Label>Period</Label>
          <Input
            placeholder="e.g. 2025-12"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
        </div>
      </div>

      {/* Tab buttons */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            onClick={() => setActiveTab(tab.id)}
            className="text-sm"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Active report */}
      {activeTab === "trial-balance" && <TrialBalance period={period} />}
      {activeTab === "profit-loss" && <ProfitLoss period={period} />}
      {activeTab === "balance-sheet" && <BalanceSheet period={period} />}
    </div>
  );
}
