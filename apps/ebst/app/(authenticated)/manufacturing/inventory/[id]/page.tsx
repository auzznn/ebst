"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMaterialDetails, useMaterialLedger } from "@/hooks/useInventory";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft, History, Package, TrendingUp, TrendingDown, Info, User, Calendar, Building2 } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

export default function MaterialDetailsPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data: material, isLoading: isMaterialLoading } = useMaterialDetails(id);
  const { data: ledgerData, isLoading: isLedgerLoading } = useMaterialLedger(id, page);

  if (isMaterialLoading || !material) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const getTransactionTypeBadge = (type: string) => {
    switch (type) {
      case "RECEIPT":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Receipt</Badge>;
      case "ADJUSTMENT":
        return <Badge variant="outline" className="text-orange-600 border-orange-200">Adjustment</Badge>;
      case "USAGE":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Usage</Badge>;
      case "RETURN":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Return</Badge>;
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  return (
    <div className="w-full p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 pb-6 border-b border-border/50">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full h-10 w-10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-primary">{material.name}</h1>
            <Badge variant={Number(material.stockQty) <= Number(material.reorderThreshold) ? "destructive" : "secondary"} className="rounded-md">
              {Number(material.stockQty) <= Number(material.reorderThreshold) ? "Low Stock" : "Healthy"}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-[12px]">{material.code}</span>
            <span>•</span>
            <span>{material.description || "No description provided"}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Package className="h-4 w-4" /> Current Stock
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Number(material.stockQty).toFixed(2)} <span className="text-sm font-normal text-muted-foreground">{material.unit}</span></div>
          </CardContent>
        </Card>
        <Card className="glass-effect">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingDown className="h-4 w-4" /> Reorder Threshold
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{Number(material.reorderThreshold).toFixed(2)} <span className="text-sm font-normal text-muted-foreground">{material.unit}</span></div>
          </CardContent>
        </Card>
        <Card className="glass-effect">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Building2 className="h-4 w-4" /> Primary Supplier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-semibold truncate">{material.supplier?.name || "None assigned"}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect">
        <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <History className="h-5 w-5 text-primary" /> Stock Movement Ledger
          </CardTitle>
          <CardDescription>Immutable record of all stock transactions for this material.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {isLedgerLoading ? (
            <div className="flex items-center justify-center p-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead className="w-[180px]">Date & Time</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Balance After</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead className="max-w-[300px]">Reason / Reference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ledgerData?.data.map((entry) => (
                    <TableRow key={entry.id} className="hover:bg-muted/40 transition-colors">
                      <TableCell className="text-sm font-medium">
                        <div className="flex flex-col">
                          <span>{formatDate(entry.createdAt)}</span>
                          <span className="text-[10px] text-muted-foreground">{new Date(entry.createdAt).toLocaleTimeString()}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getTransactionTypeBadge(entry.transactionType)}</TableCell>
                      <TableCell>
                        <span className={`font-bold flex items-center gap-1 ${Number(entry.qtyChange) > 0 ? "text-green-600" : "text-red-600"}`}>
                          {Number(entry.qtyChange) > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {Number(entry.qtyChange) > 0 ? "+" : ""}{Number(entry.qtyChange).toFixed(2)}
                        </span>
                      </TableCell>
                      <TableCell className="font-semibold">{Number(entry.balanceAfter).toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary uppercase">
                            {entry.user?.name.substring(0, 2) || "??"}
                          </div>
                          {entry.user?.name || "System"}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground max-w-[300px] truncate">
                        {entry.reason}
                      </TableCell>
                    </TableRow>
                  ))}
                  {ledgerData?.data.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                        <div className="flex flex-col items-center gap-2">
                          <Info className="h-8 w-8 opacity-20" />
                          <p>No transaction history found for this material.</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              
              <div className="flex items-center justify-between px-4 py-4 border-t border-border/50 bg-muted/10">
                <div className="text-sm text-muted-foreground">
                  Showing page {page} of {ledgerData?.meta.totalPages || 1}
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setPage(p => Math.max(1, p - 1))} 
                    disabled={page <= 1}
                  >
                    Previous
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setPage(p => Math.min(ledgerData?.meta.totalPages || 1, p + 1))} 
                    disabled={page >= (ledgerData?.meta.totalPages || 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
