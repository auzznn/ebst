"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { Plus, Play } from "lucide-react";
import api from "@/lib/api";
import { useAssets, type FixedAsset } from "@/hooks/useAccounting";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const CATEGORIES = ["Gedung", "Kendaraan", "Mesin", "Peralatan"];

export default function AssetsPage() {
  const { assets, loading, refetch: fetchAssets } = useAssets();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [depreciating, setDepreciating] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [acquisitionDate, setAcquisitionDate] = useState("");
  const [usefulLifeYears, setUsefulLifeYears] = useState(5);
  const [acquisitionCost, setAcquisitionCost] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  async function handleCreate() {
    setSubmitting(true);
    try {
      await api.post("/accounting/assets", {
        name,
        category,
        acquisitionDate,
        usefulLifeMonths: usefulLifeYears * 12,
        acquisitionCost: Number(acquisitionCost),
      });
      setDialogOpen(false);
      setName("");
      setCategory("");
      setAcquisitionDate("");
      setUsefulLifeYears(5);
      setAcquisitionCost(0);
      fetchAssets();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDepreciate() {
    setDepreciating(true);
    try {
      const res = await api.post("/accounting/assets/depreciate");
      alert(
        `Depreciated ${res.data.assets.length} assets. Total: ${formatCurrency(res.data.totalDepreciation)}`
      );
      fetchAssets();
    } catch (err) {
      console.error(err);
    } finally {
      setDepreciating(false);
    }
  }

  // Group by category
  const grouped = assets.reduce(
    (acc, asset) => {
      if (!acc[asset.category]) acc[asset.category] = [];
      acc[asset.category].push(asset);
      return acc;
    },
    {} as Record<string, FixedAsset[]>
  );

  const totalAcquisition = assets.reduce((s, a) => s + a.acquisitionCost, 0);
  const totalAccumulated = assets.reduce((s, a) => s + a.accumulatedDepreciation, 0);
  const totalBookValue = assets.reduce((s, a) => s + a.bookValue, 0);
  const totalMonthly = assets.reduce((s, a) => s + a.monthlyDepreciation, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fixed Assets</h1>
          <p className="text-muted-foreground">
            Daftar Penyusutan Aktiva Tetap — Manage and depreciate company assets
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleDepreciate}
            disabled={depreciating}
          >
            <Play className="h-4 w-4 mr-2" />
            {depreciating ? "Running..." : "Run Monthly Depreciation"}
          </Button>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Asset
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Register New Asset</DialogTitle>
                <DialogDescription>
                  Add a new fixed asset to the depreciation schedule
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex flex-1 flex-col gap-2">
                  <Label>Asset Name</Label>
                  <Input
                    placeholder="e.g. Mesin Milling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Label>Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-1 flex-col gap-2">
                    <Label>Acquisition Date</Label>
                    <Input
                      type="date"
                      value={acquisitionDate}
                      onChange={(e) => setAcquisitionDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Label>Useful Life (Years)</Label>
                    <Input
                      type="number"
                      value={usefulLifeYears}
                      onChange={(e) =>
                        setUsefulLifeYears(Number(e.target.value))
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <Label>Acquisition Cost (Rp)</Label>
                  <Input
                    type="number"
                    value={acquisitionCost || ""}
                    onChange={(e) =>
                      setAcquisitionCost(Number(e.target.value))
                    }
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Monthly depreciation:{" "}
                  <span className="font-mono font-medium">
                    {usefulLifeYears > 0 && acquisitionCost > 0
                      ? formatCurrency(acquisitionCost / (usefulLifeYears * 12))
                      : "—"}
                  </span>
                </p>
                <Button
                  className="w-full"
                  onClick={handleCreate}
                  disabled={submitting || !name || !category || !acquisitionDate}
                >
                  {submitting ? "Adding..." : "Add Asset"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Assets</p>
            <p className="text-2xl font-bold">{assets.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Acquisition Cost</p>
            <p className="text-xl font-bold font-mono">
              {formatCurrency(totalAcquisition)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Accumulated Depr.</p>
            <p className="text-xl font-bold font-mono text-amber-500">
              {formatCurrency(totalAccumulated)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Book Value</p>
            <p className="text-xl font-bold font-mono text-emerald-500">
              {formatCurrency(totalBookValue)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Assets Table grouped by category */}
      {Object.entries(grouped)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([cat, catAssets]) => (
          <Card key={cat}>
            <CardHeader>
              <CardTitle className="text-lg">{cat}</CardTitle>
              <CardDescription>
                {catAssets.length} asset(s) — Monthly depreciation:{" "}
                {formatCurrency(
                  catAssets.reduce((s, a) => s + a.monthlyDepreciation, 0)
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Acquisition Date</TableHead>
                    <TableHead>Useful Life</TableHead>
                    <TableHead className="text-right">Cost</TableHead>
                    <TableHead className="text-right">Monthly Depr.</TableHead>
                    <TableHead className="text-right">Accumulated</TableHead>
                    <TableHead className="text-right">Book Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {catAssets.map((asset) => (
                    <TableRow key={asset.id}>
                      <TableCell className="font-medium">{asset.name}</TableCell>
                      <TableCell>
                        {new Date(asset.acquisitionDate).toLocaleDateString(
                          "id-ID"
                        )}
                      </TableCell>
                      <TableCell>
                        {Math.round(asset.usefulLifeMonths / 12)} years
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {formatCurrency(asset.acquisitionCost)}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {formatCurrency(asset.monthlyDepreciation)}
                      </TableCell>
                      <TableCell className="text-right font-mono text-amber-500">
                        {formatCurrency(asset.accumulatedDepreciation)}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {asset.bookValue <= 0 ? (
                          <Badge variant="secondary">Fully Depreciated</Badge>
                        ) : (
                          formatCurrency(asset.bookValue)
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}

      {loading && (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">Loading assets...</p>
          </CardContent>
        </Card>
      )}

      {!loading && assets.length === 0 && (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">
              No assets registered yet. Add your first asset above.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
