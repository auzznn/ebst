"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useAccounting } from "@/hooks/useAccounting";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function AccountingPage() {
  const { profitLoss, balanceSheet, loading } = useAccounting();

  const cards = [
    {
      title: "Total Revenue",
      value: profitLoss ? formatCurrency(profitLoss.totalRevenue) : "—",
      description: "All income this period",
      icon: DollarSign,
      trend: "up" as const,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Total Expenses",
      value: profitLoss ? formatCurrency(profitLoss.totalExpenses) : "—",
      description: "All costs this period",
      icon: TrendingDown,
      trend: "down" as const,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Net Profit/Loss",
      value: profitLoss ? formatCurrency(profitLoss.netProfit) : "—",
      description: profitLoss && profitLoss.netProfit >= 0 ? "Profit" : "Loss",
      icon: profitLoss && profitLoss.netProfit >= 0 ? TrendingUp : TrendingDown,
      trend: profitLoss && profitLoss.netProfit >= 0 ? ("up" as const) : ("down" as const),
      color:
        profitLoss && profitLoss.netProfit >= 0
          ? "text-emerald-500"
          : "text-red-500",
      bgColor:
        profitLoss && profitLoss.netProfit >= 0
          ? "bg-emerald-500/10"
          : "bg-red-500/10",
    },
    {
      title: "Total Assets",
      value: balanceSheet ? formatCurrency(balanceSheet.totalAssets) : "—",
      description: "What the company owns",
      icon: Building2,
      trend: "up" as const,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Accounting Overview
        </h1>
        <p className="text-muted-foreground">
          Financial summary for your enterprise
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <div className={`rounded-lg p-2 ${card.bgColor}`}>
                <card.icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-8 bg-muted animate-pulse rounded w-32" />
              ) : (
                <>
                  <div className="text-xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    {card.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 text-red-500" />
                    )}
                    {card.description}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Balance Check */}
      {balanceSheet && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Balance Sheet Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 rounded-lg bg-blue-500/10">
                <p className="text-sm text-muted-foreground">Total Assets</p>
                <p className="text-lg font-bold text-blue-500">
                  {formatCurrency(balanceSheet.totalAssets)}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-amber-500/10">
                <p className="text-sm text-muted-foreground">
                  Total Liabilities
                </p>
                <p className="text-lg font-bold text-amber-500">
                  {formatCurrency(balanceSheet.totalLiabilities)}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-emerald-500/10">
                <p className="text-sm text-muted-foreground">Total Equity</p>
                <p className="text-lg font-bold text-emerald-500">
                  {formatCurrency(balanceSheet.totalEquity)}
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
                  balanceSheet.isBalanced
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {balanceSheet.isBalanced ? "✓ Balanced" : "✗ Not Balanced"}
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
