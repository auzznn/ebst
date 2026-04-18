"use client";
import { createPortal } from "react-dom";

import { useState, useRef, useEffect } from "react";
import {
  Plus, Trash2, FileText, Loader2, Save, Eye, Search, X,
  UserPlus, Receipt, ChevronDown, Download, ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDocumentGen, useInvoices, useUpdateInvoiceStatus, InvoiceItemData, GenerateInvoiceData, InvoiceStatus } from "@/hooks/useDocumentGen";
import { InvoicePreview } from "@/components/document-gen/invoice-preview";
import { useCustomerSearch, useCreateCustomer, CustomersResult, CreateCustomerData } from "@/hooks/useCustomers";
import { useDebounce } from "@/hooks/useDebounce";
import { toast } from "sonner";
import api from "@/lib/api";

// ─── Status Badge ─────────────────────────────────────────────────────────────

const statusConfig: Record<InvoiceStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  UNPAID: { label: "Unpaid", variant: "destructive" },
  PAID: { label: "Paid", variant: "default" },
  PARTIAL: { label: "Partial", variant: "secondary" },
  CANCELLED: { label: "Cancelled", variant: "outline" },
};

function StatusBadge({ status }: { status: InvoiceStatus }) {
  const cfg = statusConfig[status];
  return <Badge variant={cfg.variant}>{cfg.label}</Badge>;
}

// ─── Add Customer Dialog ─────────────────────────────────────────────────────

function AddCustomerDialog({ onCreated }: { onCreated: (customer: CustomersResult) => void }) {
  const [open, setOpen] = useState(false);
  const createCustomer = useCreateCustomer();

  const [form, setForm] = useState<CreateCustomerData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleField(field: keyof CreateCustomerData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit() {
    if (!form.name.trim()) {
      toast.error("Customer name is required.");
      return;
    }
    createCustomer.mutate(form, {
      onSuccess: (data) => {
        toast.success(`Customer "${data.name}" created.`);
        onCreated(data);
        setOpen(false);
        setForm({ name: "", email: "", phone: "", address: "" });
      },
      onError: () => {
        toast.error("Failed to create customer.");
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="icon" title="Add new customer">
          <UserPlus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="space-y-1">
            <label className="text-sm font-medium">Name <span className="text-destructive">*</span></label>
            <Input
              placeholder="e.g. PT Maju Bersama"
              value={form.name}
              onChange={(e) => handleField("name", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="customer@company.com"
              value={form.email}
              onChange={(e) => handleField("email", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Phone</label>
            <Input
              placeholder="+62 21 ..."
              value={form.phone}
              onChange={(e) => handleField("phone", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Address</label>
            <Input
              placeholder="Street, City, Country"
              value={form.address}
              onChange={(e) => handleField("address", e.target.value)}
            />
          </div>
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={createCustomer.isPending}
          >
            {createCustomer.isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Create Customer
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Customer Searchable Field ─────────────────────────────────────────────

function CustomerSearchField({
  selected,
  onSelect,
}: {
  selected: CustomersResult | null;
  onSelect: (customer: CustomersResult) => void;
}) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownRect, setDropdownRect] = useState<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);

  const debouncedQuery = useDebounce(query, 400);
  const { data: searchResults, isFetching } = useCustomerSearch(debouncedQuery);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      const inContainer = containerRef.current?.contains(target);
      const inPortal = portalRef.current?.contains(target);
      if (!inContainer && !inPortal) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (showDropdown && inputRef.current) {
      setDropdownRect(inputRef.current.getBoundingClientRect());
    }
  }, [showDropdown, debouncedQuery]);

  function handleSelect(customer: CustomersResult) {
    onSelect(customer);
    setQuery("");
    setShowDropdown(false);
  }

  function handleClear() {
    onSelect({ id: "", name: "", email: "", phone: "", address: "" });
    setQuery("");
  }

  return (
    <div ref={containerRef} className="relative flex-1">
      {selected && selected.id ? (
        <div className="flex items-center gap-2 h-9 px-3 border rounded-md bg-muted/50">
          <span className="flex-1 text-sm font-medium truncate">{selected.name}</span>
          <button
            type="button"
            onClick={handleClear}
            className="text-muted-foreground hover:text-destructive shrink-0"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              id="to"
              placeholder="Search customer by name, email or phone..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => {
                setShowDropdown(true);
                if (inputRef.current) setDropdownRect(inputRef.current.getBoundingClientRect());
              }}
              className="pl-9"
            />
          </div>

          {showDropdown && debouncedQuery.length > 1 && dropdownRect && createPortal(
            <div
              ref={portalRef}
              style={{
                position: "fixed",
                top: dropdownRect.bottom + 4,
                left: dropdownRect.left,
                width: dropdownRect.width,
                zIndex: 9999,
              }}
              className="border rounded-lg overflow-hidden shadow-lg bg-popover text-popover-foreground"
            >
              {isFetching && (
                <p className="text-xs text-muted-foreground px-3 py-2 flex items-center gap-2">
                  <Loader2 className="h-3 w-3 animate-spin" /> Searching...
                </p>
              )}
              {!isFetching && searchResults?.length === 0 && (
                <p className="text-xs text-muted-foreground px-3 py-2">No customers found</p>
              )}
              {searchResults?.map((customer) => (
                <button
                  key={customer.id}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(customer)}
                  className="w-full flex flex-col items-start px-3 py-2.5 hover:bg-accent text-left transition-colors"
                >
                  <p className="text-sm font-medium">{customer.name}</p>
                  {customer.email && (
                    <p className="text-xs text-muted-foreground">{customer.email}</p>
                  )}
                </button>
              ))}
            </div>,
            document.body
          )}
        </>
      )}
    </div>
  );
}

// ─── Invoice List Tab ─────────────────────────────────────────────────────────

function InvoiceListTab({ onCreateNew }: { onCreateNew: () => void }) {
  const { data: invoices, isLoading } = useInvoices();
  const updateStatus = useUpdateInvoiceStatus();

  // Filters State
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [periodFilter, setPeriodFilter] = useState<string>(
    new Date().toISOString().substring(0, 7) // Default to current month "YYYY-MM"
  );

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("id-ID", { style: "decimal", minimumFractionDigits: 0 }).format(amount);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });

  const filteredInvoices = invoices?.filter((invoice) => {
    const statusMatch = statusFilter === "ALL" || invoice.status === statusFilter;
    const periodMatch = !periodFilter || invoice.date.startsWith(periodFilter);
    return statusMatch && periodMatch;
  });

  async function handleViewPdf(key: string) {
    try {
      const res = await api.get<{ url: string }>(`/files/${encodeURIComponent(key)}/download`);
      window.open(res.data.url, "_blank");
    } catch {
      toast.error("Failed to get PDF link.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Status</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Status</SelectItem>
                <SelectItem value="UNPAID">Unpaid</SelectItem>
                <SelectItem value="PAID">Paid</SelectItem>
                <SelectItem value="PARTIAL">Partial</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Period</Label>
            <Input
              type="month"
              className="w-[180px]"
              value={periodFilter}
              onChange={(e) => setPeriodFilter(e.target.value)}
            />
          </div>

          { (statusFilter !== "ALL" || periodFilter) && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-6 text-muted-foreground h-9"
              onClick={() => {
                setStatusFilter("ALL");
                setPeriodFilter("");
              }}
            >
              <X className="h-4 w-4 mr-2" />
              Reset
            </Button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <p className="text-sm text-muted-foreground">
            {filteredInvoices?.length ?? 0} invoice{filteredInvoices?.length !== 1 ? "s" : ""} found
          </p>
          <Button size="sm" onClick={onCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice No</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>PO No</TableHead>
              <TableHead className="text-right">Total (Rp)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  <Loader2 className="h-5 w-5 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            )}
            {!isLoading && (!filteredInvoices || filteredInvoices.length === 0) && (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                  No invoices found for the selected filters.
                </TableCell>
              </TableRow>
            )}
            {filteredInvoices?.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-mono font-medium">{invoice.invoiceNo}</TableCell>
                <TableCell className="text-muted-foreground">{formatDate(invoice.date)}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium text-sm">{invoice.customer.name}</p>
                    {invoice.customer.email && (
                      <p className="text-xs text-muted-foreground">{invoice.customer.email}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{invoice.poNo ?? "—"}</TableCell>
                <TableCell className="text-right font-medium">{formatCurrency(invoice.total)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                        disabled={updateStatus.isPending}
                      >
                        <StatusBadge status={invoice.status} />
                        <ChevronDown className="h-3 w-3 text-muted-foreground" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {(["UNPAID", "PAID", "PARTIAL", "CANCELLED"] as InvoiceStatus[]).map((s) => (
                        <DropdownMenuItem
                          key={s}
                          disabled={invoice.status === s}
                          onClick={() => updateStatus.mutate({ id: invoice.id, status: s })}
                        >
                          {statusConfig[s].label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  {invoice.document && (
                    <Button
                      variant="ghost"
                      size="icon"
                      title="View PDF"
                      onClick={() => handleViewPdf(invoice.document!.key)}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Create Invoice Tab ───────────────────────────────────────────────────────

function CreateInvoiceTab({ onSuccess }: { onSuccess: () => void }) {
  const { generateInvoice } = useDocumentGen();

  const [invoiceNo, setInvoiceNo] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<CustomersResult | null>(null);
  const [poNo, setPoNo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [items, setItems] = useState<InvoiceItemData[]>([
    { no: 1, partNo: "", description: "", unitPrice: 0, qty: 1, qtyUnit: "PCS" },
  ]);

  const handleAddItem = () => {
    setItems([...items, { no: items.length + 1, partNo: "", description: "", unitPrice: 0, qty: 1, qtyUnit: "PCS" }]);
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

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("id-ID", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);

  const dppHargaJual = items.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
  const dppNilaiLain = Math.round((dppHargaJual * 11) / 12);
  const ppn = Math.round(dppNilaiLain * 0.12);
  const total = dppHargaJual + ppn;

  const getPreviewData = () => ({
    invoiceNo: invoiceNo || "INV/YYYY/XXX",
    to: selectedCustomer?.name || "Customer Name",
    poNo: poNo || "-",
    date,
    items,
    dppHargaJual,
    dppNilaiLain,
    ppn,
    total,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomer?.id) {
      toast.error("Please select a customer.");
      return;
    }
    generateInvoice.mutate(
      {
        invoiceNo,
        to: selectedCustomer.name,
        customerId: selectedCustomer.id,
        poNo,
        date,
        items,
      },
      {
        onSuccess: () => {
          // Reset form
          setInvoiceNo("");
          setSelectedCustomer(null);
          setPoNo("");
          setDate(new Date().toISOString().split("T")[0]);
          setItems([{ no: 1, partNo: "", description: "", unitPrice: 0, qty: 1, qtyUnit: "PCS" }]);
          onSuccess();
        },
      }
    );
  };

  return (
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
          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="to">To (Customer)</Label>
            <div className="flex items-center gap-2">
              <CustomerSearchField
                selected={selectedCustomer}
                onSelect={setSelectedCustomer}
              />
              <AddCustomerDialog
                onCreated={(customer) => setSelectedCustomer(customer)}
              />
            </div>
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
                        onFocus={(e) => { if (e.target.value === "0") e.target.value = ""; }}
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

      <InvoicePreview
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        data={getPreviewData()}
      />
    </form>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function InvoiceGeneratorPage() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoice</h1>
          <p className="text-muted-foreground">Track, manage, and generate invoices.</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="list">
            <Receipt className="h-4 w-4 mr-2" />
            All Invoices
          </TabsTrigger>
          <TabsTrigger value="create">
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          <InvoiceListTab onCreateNew={() => setActiveTab("create")} />
        </TabsContent>

        <TabsContent value="create" className="mt-6">
          <CreateInvoiceTab onSuccess={() => setActiveTab("list")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
