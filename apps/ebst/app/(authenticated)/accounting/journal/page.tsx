"use client";

import { useState, Fragment } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import api from "@/lib/api";
import { useJournal, useAccounts } from "@/hooks/useAccounting";

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

export default function JournalPage() {
  const [periodFilter, setPeriodFilter] = useState("");
  const { entries, loading: entriesLoading, refetch: refetchJournal } = useJournal(periodFilter);
  const { accounts, loading: accountsLoading } = useAccounts();
  const loading = entriesLoading || accountsLoading;

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // New entry form state
  const [newDate, setNewDate] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPeriod, setNewPeriod] = useState("");
  const [newLines, setNewLines] = useState([
    { accountId: "", amount: 0, isDebit: true, description: "" },
    { accountId: "", amount: 0, isDebit: false, description: "" },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function fetchData() {
    refetchJournal();
  }

  function addLine() {
    setNewLines([...newLines, { accountId: "", amount: 0, isDebit: true, description: "" }]);
  }

  function removeLine(index: number) {
    if (newLines.length <= 2) return;
    setNewLines(newLines.filter((_, i) => i !== index));
  }

  function updateLine(index: number, field: string, value: any) {
    const updated = [...newLines];
    (updated[index] as any)[field] = value;
    setNewLines(updated);
  }

  async function handleSubmit() {
    setError("");
    setSubmitting(true);
    try {
      await api.post("/accounting/journal", {
        date: newDate,
        description: newDescription,
        period: newPeriod,
        lines: newLines.map((l) => ({
          accountId: l.accountId,
          amount: Number(l.amount),
          isDebit: l.isDebit,
          description: l.description || undefined,
        })),
      });

      // Reset form
      setNewDate("");
      setNewDescription("");
      setNewPeriod("");
      setNewLines([
        { accountId: "", amount: 0, isDebit: true, description: "" },
        { accountId: "", amount: 0, isDebit: false, description: "" },
      ]);
      setDialogOpen(false);
      fetchData();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create journal entry");
    } finally {
      setSubmitting(false);
    }
  }

  const totalDebit = newLines
    .filter((l) => l.isDebit)
    .reduce((sum, l) => sum + Number(l.amount), 0);
  const totalCredit = newLines
    .filter((l) => !l.isDebit)
    .reduce((sum, l) => sum + Number(l.amount), 0);
  const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Journal Entries</h1>
          <p className="text-muted-foreground">
            Record and view all financial transactions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Input
            placeholder="Filter by period (e.g. 2025-12)"
            value={periodFilter}
            onChange={(e) => setPeriodFilter(e.target.value)}
            className="w-52"
          />

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Entry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create Journal Entry</DialogTitle>
                <DialogDescription>
                  Add a new journal entry. Total debits must equal total credits.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-1 flex-col gap-2">
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Label>Period</Label>
                    <Input
                      placeholder="2025-12"
                      value={newPeriod}
                      onChange={(e) => setNewPeriod(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Label>Description</Label>
                    <Input
                      placeholder="Transaction description"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Lines</Label>
                    <Button variant="outline" size="sm" onClick={addLine}>
                      <Plus className="h-3 w-3 mr-1" />
                      Add Line
                    </Button>
                  </div>

                  {newLines.map((line, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr_100px_100px_80px_40px] gap-2 items-end"
                    >
                      <div>
                        <Select
                          value={line.accountId}
                          onValueChange={(v) => updateLine(index, "accountId", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select account" />
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
                      <div>
                        <Input
                          type="number"
                          placeholder="Amount"
                          value={line.amount || ""}
                          onChange={(e) =>
                            updateLine(index, "amount", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Select
                          value={line.isDebit ? "debit" : "credit"}
                          onValueChange={(v) =>
                            updateLine(index, "isDebit", v === "debit")
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="debit">Debit</SelectItem>
                            <SelectItem value="credit">Credit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Input
                          placeholder="Note"
                          value={line.description}
                          onChange={(e) =>
                            updateLine(index, "description", e.target.value)
                          }
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeLine(index)}
                        disabled={newLines.length <= 2}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Balance indicator */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Debit: {formatCurrency(totalDebit)}
                    </span>
                    <span className="mx-4 text-sm text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">
                      Credit: {formatCurrency(totalCredit)}
                    </span>
                  </div>
                  <Badge variant={isBalanced ? "default" : "destructive"}>
                    {isBalanced ? "Balanced ✓" : "Unbalanced ✗"}
                  </Badge>
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <Button
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={submitting || !isBalanced || !newDate || !newDescription || !newPeriod}
                >
                  {submitting ? "Creating..." : "Create Journal Entry"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Journal Entries Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Period</TableHead>
                <TableHead className="text-right">Total Debit</TableHead>
                <TableHead className="text-right">Total Credit</TableHead>
                <TableHead>Created By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : entries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No journal entries found. Create your first entry above.
                  </TableCell>
                </TableRow>
              ) : (
                entries.map((entry) => {
                  const isExpanded = expandedId === entry.id;
                  const entryTotalDebit = entry.lines
                    .filter((l) => l.isDebit)
                    .reduce((sum, l) => sum + l.amount, 0);
                  const entryTotalCredit = entry.lines
                    .filter((l) => !l.isDebit)
                    .reduce((sum, l) => sum + l.amount, 0);

                  return (
                    <Fragment key={entry.id}>
                      <TableRow
                        key={entry.id}
                        className="cursor-pointer hover:bg-muted/50"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : entry.id)
                        }
                      >
                        <TableCell>
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </TableCell>
                        <TableCell>{formatDate(entry.date)}</TableCell>
                        <TableCell className="font-medium">
                          {entry.description}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{entry.period}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          {formatCurrency(entryTotalDebit)}
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          {formatCurrency(entryTotalCredit)}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {entry.createdBy.name}
                        </TableCell>
                      </TableRow>
                      {isExpanded && (
                        <TableRow key={`${entry.id}-detail`}>
                          <TableCell colSpan={7} className="bg-muted/30 p-4">
                            <div className="space-y-1">
                              {entry.lines.map((line) => (
                                <div
                                  key={line.id}
                                  className={`flex items-center justify-between py-1 text-sm ${!line.isDebit ? "pl-8" : ""
                                    }`}
                                >
                                  <span>
                                    <span className="text-muted-foreground">
                                      {line.account.code}
                                    </span>{" "}
                                    {line.account.name}
                                    {line.description && (
                                      <span className="text-muted-foreground ml-2">
                                        ({line.description})
                                      </span>
                                    )}
                                  </span>
                                  <span className="font-mono">
                                    {line.isDebit ? (
                                      <span className="text-blue-500">
                                        D {formatCurrency(line.amount)}
                                      </span>
                                    ) : (
                                      <span className="text-amber-500">
                                        C {formatCurrency(line.amount)}
                                      </span>
                                    )}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </Fragment>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
