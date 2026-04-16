"use client";

import { useState } from "react";
import { Plus, Trash2, FileText, Loader2, Save, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDocumentGen, InvoiceItemData, GenerateInvoiceData } from "@/hooks/useDocumentGen";
import { InvoicePreview } from "@/components/document-gen/invoice-preview";

export default function InvoiceGeneratorPage() {
  const { generateInvoice } = useDocumentGen();

  const [invoiceNo, setInvoiceNo] = useState("");
  const [to, setTo] = useState("");
  const [poNo, setPoNo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [items, setItems] = useState<InvoiceItemData[]>([
    { no: 1, partNo: "", description: "", unitPrice: 0, qty: 1, qtyUnit: "PCS" }
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { no: items.length + 1, partNo: "", description: "", unitPrice: 0, qty: 1, qtyUnit: "PCS" }
    ]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index).map((item, i) => ({ ...item, no: i + 1 }));
    setItems(newItems);
  };

  const handleItemChange = (index: number, field: keyof InvoiceItemData, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const dppHargaJual = items.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const dppNilaiLain = Math.round((dppHargaJual * 11) / 12);
  const ppn = Math.round(dppNilaiLain * 0.12);
  const total = dppHargaJual + ppn;

  const getPreviewData = () => ({
    invoiceNo: invoiceNo || "INV/YYYY/XXX",
    to: to || "Customer Name",
    poNo: poNo || "-",
    date,
    items,
    dppHargaJual,
    dppNilaiLain,
    ppn,
    total
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateInvoice.mutate({
      invoiceNo,
      to,
      poNo,
      date,
      items
    });
  };

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoice</h1>
          <p className="text-muted-foreground">Create invoice now easier than before.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Invoice Details</CardTitle>
            <CardDescription>Enter the customer and document information.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="invoiceNo">Invoice No</Label>
              <Input
                id="invoiceNo"
                required
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                placeholder="e.g. INV/2026/001"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="to">To (Customer)</Label>
              <Input
                id="to"
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Customer Name / Company"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="poNo">PO No.</Label>
              <Input
                id="poNo"
                value={poNo}
                onChange={(e) => setPoNo(e.target.value)}
                placeholder="Purchase Order Number"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Line Items</CardTitle>
              <CardDescription>Add the products or services for this invoice.</CardDescription>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">No</TableHead>
                    <TableHead className="w-[15%]">Part No.</TableHead>
                    <TableHead className="w-[30%]">Description</TableHead>
                    <TableHead className="w-[15%]">Unit Price (Rp)</TableHead>
                    <TableHead className="w-20">Qty</TableHead>
                    <TableHead className="w-24">Unit</TableHead>
                    <TableHead className="w-[15%]">Amount (Rp)</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.no}</TableCell>
                      <TableCell>
                        <Input
                          value={item.partNo}
                          onChange={(e) => handleItemChange(index, "partNo", e.target.value)}
                          placeholder="Optional"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          required
                          value={item.description}
                          onChange={(e) => handleItemChange(index, "description", e.target.value)}
                          placeholder="Item Description"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          required
                          min="0"
                          value={item.unitPrice}
                          onChange={(e) => handleItemChange(index, "unitPrice", Number(e.target.value))}
                          onFocus={(e) => { if (e.target.value === '0') e.target.value = ''; }}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          required
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleItemChange(index, "qty", Number(e.target.value))}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          required
                          value={item.qtyUnit}
                          onChange={(e) => handleItemChange(index, "qtyUnit", e.target.value)}
                          placeholder="PCS"
                        />
                      </TableCell>
                      <TableCell className="font-medium text-right">
                        {formatCurrency(item.unitPrice * item.qty)}
                      </TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          disabled={items.length === 1}
                          onClick={() => handleRemoveItem(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 flex justify-end">
              <div className="w-[300px] space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">DPP Harga Jual</span>
                  <span className="font-medium">{formatCurrency(dppHargaJual)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">DPP Nilai Lain</span>
                  <span className="font-medium">{formatCurrency(dppNilaiLain)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">PPN 12%</span>
                  <span className="font-medium">{formatCurrency(ppn)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>TOTAL</span>
                  <span className="text-primary">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/50 flex justify-end border-t p-6 gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview Document
            </Button>
            <Button
              type="submit"
              size="lg"
              className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              disabled={generateInvoice.isPending}
            >
              {generateInvoice.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Invoice PDF
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <InvoicePreview
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        data={getPreviewData()}
      />
    </div>
  );
}
