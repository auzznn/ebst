"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useLedger, useAccounts } from "@/hooks/useAccounting";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function LedgerPage() {
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [period, setPeriod] = useState("");

  const { accounts } = useAccounts();
  const { ledger, loading } = useLedger(selectedAccountId, period);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">General Ledger</h1>
        <p className="text-muted-foreground">
          Buku Besar — View transactions per account
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-end">
        <div className="flex-1 max-w-sm flex flex-col gap-2">
          <Label>Account</Label>
          <Select value={selectedAccountId} onValueChange={setSelectedAccountId}>
            <SelectTrigger>
              <SelectValue placeholder="Select an account" />
            </SelectTrigger>
            <SelectContent>
              {accounts.map((a) => (
                <SelectItem key={a.id} value={a.id}>
                  {a.code} — {a.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-40 flex flex-col gap-2">
          <Label>Period</Label>
          <Input
            placeholder="e.g. 2025-12"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
        </div>
      </div>

      {/* Ledger Data */}
      {selectedAccountId && ledger && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">
                  {ledger.account.code} — {ledger.account.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Type:{" "}
                  <Badge variant="outline">{ledger.account.type}</Badge>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Ending Balance</p>
                <p className="text-xl font-bold font-mono">
                  {formatCurrency(ledger.endingBalance)}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Debit</TableHead>
                  <TableHead className="text-right">Credit</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : ledger.entries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      No transactions for this account
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    {ledger.entries.map((entry, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{formatDate(entry.date)}</TableCell>
                        <TableCell>{entry.description}</TableCell>
                        <TableCell className="text-right font-mono">
                          {entry.debit > 0 ? formatCurrency(entry.debit) : "—"}
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          {entry.credit > 0 ? formatCurrency(entry.credit) : "—"}
                        </TableCell>
                        <TableCell className="text-right font-mono font-medium">
                          {formatCurrency(entry.balance)}
                        </TableCell>
                      </TableRow>
                    ))}
                    {/* Totals row */}
                    <TableRow className="font-bold border-t-2">
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell className="text-right font-mono">
                        {formatCurrency(ledger.totalDebit)}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {formatCurrency(ledger.totalCredit)}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {formatCurrency(ledger.endingBalance)}
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {!selectedAccountId && (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">
              Select an account to view its ledger
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
