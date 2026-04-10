"use client";

import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Plus, Sprout, Pencil } from "lucide-react";
import api from "@/lib/api";
import { useAccounts, type Account } from "@/hooks/useAccounting";

const ACCOUNT_TYPES = [
  "ASSET",
  "CONTRA_ASSET",
  "LIABILITY",
  "EQUITY",
  "REVENUE",
  "EXPENSE",
];

const TYPE_COLORS: Record<string, string> = {
  ASSET: "bg-blue-500/10 text-blue-500",
  CONTRA_ASSET: "bg-slate-500/10 text-slate-500",
  LIABILITY: "bg-amber-500/10 text-amber-500",
  EQUITY: "bg-purple-500/10 text-purple-500",
  REVENUE: "bg-emerald-500/10 text-emerald-500",
  EXPENSE: "bg-red-500/10 text-red-500",
};

export default function AccountsPage() {
  const { accounts, loading, refetch: fetchAccounts } = useAccounts();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [seeding, setSeeding] = useState(false);

  // Create form state
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [parentCode, setParentCode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Edit form state
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [editName, setEditName] = useState("");
  const [editType, setEditType] = useState("");
  const [editParentCode, setEditParentCode] = useState("");
  const [editIsActive, setEditIsActive] = useState(true);
  const [editSubmitting, setEditSubmitting] = useState(false);
  const [editError, setEditError] = useState("");

  async function handleSeed() {
    setSeeding(true);
    try {
      const res = await api.post("/accounting/accounts/seed");
      alert(res.data.message);
      fetchAccounts();
    } catch (err) {
      console.error(err);
    } finally {
      setSeeding(false);
    }
  }

  async function handleCreate() {
    setError("");
    setSubmitting(true);
    try {
      await api.post("/accounting/accounts", {
        code,
        name,
        type,
        parentCode: parentCode || undefined,
      });
      setDialogOpen(false);
      setCode("");
      setName("");
      setType("");
      setParentCode("");
      fetchAccounts();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create account");
    } finally {
      setSubmitting(false);
    }
  }

  function openEditDialog(account: Account) {
    setEditingAccount(account);
    setEditName(account.name);
    setEditType(account.type);
    setEditParentCode(account.parentCode || "");
    setEditIsActive(account.isActive);
    setEditError("");
    setEditDialogOpen(true);
  }

  async function handleUpdate() {
    if (!editingAccount) return;
    setEditError("");
    setEditSubmitting(true);
    try {
      await api.patch(`/accounting/accounts/${editingAccount.id}`, {
        name: editName,
        type: editType,
        parentCode: editParentCode || undefined,
        isActive: editIsActive,
      });
      setEditDialogOpen(false);
      setEditingAccount(null);
      fetchAccounts();
    } catch (err: any) {
      setEditError(err.response?.data?.message || "Failed to update account");
    } finally {
      setEditSubmitting(false);
    }
  }

  // Group by type
  const grouped = accounts.reduce(
    (acc, account) => {
      if (!acc[account.type]) acc[account.type] = [];
      acc[account.type].push(account);
      return acc;
    },
    {} as Record<string, Account[]>
  );

  const typeOrder = ["ASSET", "CONTRA_ASSET", "LIABILITY", "EQUITY", "REVENUE", "EXPENSE"];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Chart of Accounts
          </h1>
          <p className="text-muted-foreground">
            Daftar Akun — Manage account codes used in journal entries
          </p>
        </div>
        <div className="flex gap-2">
          {accounts.length === 0 && (
            <Button
              variant="outline"
              onClick={handleSeed}
              disabled={seeding}
            >
              <Sprout className="h-4 w-4 mr-2" />
              {seeding ? "Seeding..." : "Seed Default Accounts"}
            </Button>
          )}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Account
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Account</DialogTitle>
                <DialogDescription>
                  Add a new account code to the chart of accounts
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-1 flex-col gap-2">
                    <Label>Account Code</Label>
                    <Input
                      placeholder="e.g. 6.17"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Label>Account Type</Label>
                    <Select value={type} onValueChange={setType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {ACCOUNT_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Label>Account Name</Label>
                  <Input
                    placeholder="e.g. Biaya Sewa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Label>Parent Code (optional)</Label>
                  <Input
                    placeholder="e.g. 6.1"
                    value={parentCode}
                    onChange={(e) => setParentCode(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button
                  className="w-full"
                  onClick={handleCreate}
                  disabled={submitting || !code || !name || !type}
                >
                  {submitting ? "Creating..." : "Create Account"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-3 flex-wrap">
        {typeOrder.map((t) => (
          <Badge
            key={t}
            className={`${TYPE_COLORS[t]} border-0 text-xs px-3 py-1`}
          >
            {t}: {grouped[t]?.length || 0}
          </Badge>
        ))}
        <Badge variant="outline" className="text-xs px-3 py-1">
          Total: {accounts.length}
        </Badge>
      </div>

      {/* Accounts Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24">Code</TableHead>
                <TableHead>Account Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Parent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-16">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-8 text-muted-foreground"
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              ) : accounts.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No accounts yet. Click &quot;Seed Default Accounts&quot; to
                    populate the standard chart of accounts.
                  </TableCell>
                </TableRow>
              ) : (
                accounts.map((account) => (
                  <TableRow key={account.id}>
                    <TableCell className="font-mono font-medium">
                      {account.code}
                    </TableCell>
                    <TableCell
                      className={
                        account.parentCode ? "pl-8 text-sm" : "font-medium"
                      }
                    >
                      {account.parentCode && "└ "}
                      {account.name}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${TYPE_COLORS[account.type]} border-0 text-xs`}
                      >
                        {account.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground font-mono text-sm">
                      {account.parentCode || "—"}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={account.isActive ? "default" : "secondary"}
                      >
                        {account.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openEditDialog(account)}
                        title="Edit account"
                      >
                        <Pencil className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Account Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Account</DialogTitle>
            <DialogDescription>
              {editingAccount && (
                <>
                  Editing account{" "}
                  <span className="font-mono font-medium">
                    {editingAccount.code}
                  </span>
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          {editingAccount && (
            <div className="space-y-4 mt-4">
              <div className="flex flex-1 flex-col gap-2">
                <Label className="text-muted-foreground text-xs">
                  Account Code (read-only)
                </Label>
                <Input value={editingAccount.code} disabled className="opacity-60" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label>Account Name</Label>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label>Account Type</Label>
                <Select value={editType} onValueChange={setEditType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ACCOUNT_TYPES.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Label>Parent Code</Label>
                <Input
                  placeholder="e.g. 6.1 (leave empty for none)"
                  value={editParentCode}
                  onChange={(e) => setEditParentCode(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <Label>Active Status</Label>
                  <p className="text-xs text-muted-foreground">
                    Inactive accounts won&apos;t appear in journal dropdowns
                  </p>
                </div>
                <Switch
                  checked={editIsActive}
                  onCheckedChange={setEditIsActive}
                />
              </div>
              {editError && (
                <p className="text-sm text-red-500">{editError}</p>
              )}
              <Button
                className="w-full"
                onClick={handleUpdate}
                disabled={editSubmitting || !editName || !editType}
              >
                {editSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
