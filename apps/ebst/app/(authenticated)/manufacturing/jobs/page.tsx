"use client";

import { useJobCards, JobCardStatus, useCreateJobCard } from "@/hooks/useJobs";
import { usePurchaseOrders } from "@/hooks/usePurchaseOrders";
import { useParts } from "@/hooks/useParts";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Loader2, List, Save, Trash2, ClipboardList, ChevronLeft, ChevronRight, Search, X, Calendar, Filter } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { authClient } from "@/lib/auth-client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, format } from "date-fns";
import { useDebounce } from "@/hooks/useDebounce";

const statusVariants: Record<JobCardStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "outline",
  IN_PROGRESS: "default",
  COMPLETED: "secondary",
  ON_HOLD: "outline",
  CANCELLED: "destructive",
};

export default function JobsPage() {
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [status, setStatus] = useState<JobCardStatus | "ALL">("ALL");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { jobs, loading, totalPages } = useJobCards(
    page,
    10,
    startDate || undefined,
    endDate || undefined,
    status === "ALL" ? undefined : status,
    debouncedSearch || undefined
  );

  const { data: session } = authClient.useSession();
  const [activeTab, setActiveTab] = useState("list");
  const isAdminOrExecutive = session?.user?.role === "ADMIN" || session?.user?.role === "EXECUTIVE";

  const clearFilters = () => {
    setStartDate("");
    setEndDate("");
    setStatus("ALL");
    setSearch("");
    setPage(1);
  };

  const setThisWeek = () => {
    const start = startOfWeek(new Date(), { weekStartsOn: 1 });
    const end = endOfWeek(new Date(), { weekStartsOn: 1 });
    setStartDate(format(start, "yyyy-MM-dd"));
    setEndDate(format(end, "yyyy-MM-dd"));
    setPage(1);
  };

  const setThisMonth = () => {
    const start = startOfMonth(new Date());
    const end = endOfMonth(new Date());
    setStartDate(format(start, "yyyy-MM-dd"));
    setEndDate(format(end, "yyyy-MM-dd"));
    setPage(1);
  };

  return (
    <div className="w-full p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 pb-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary/5 text-primary rounded-xl border border-primary/10 shadow-sm">
            <ClipboardList className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Job Cards</h1>
        </div>
        <p className="text-muted-foreground text-lg ml-[3.25rem]">
          Manage and monitor manufacturing job cards.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px] h-12 p-1 bg-muted/40 rounded-xl border border-border/50">
          <TabsTrigger value="list" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
            <List className="h-4 w-4" /> Job List
          </TabsTrigger>
          <TabsTrigger value="create" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all" disabled={!isAdminOrExecutive}>
            <Plus className="h-4 w-4" /> Create Job
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
          <Card className="glass-effect overflow-hidden">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Filter className="h-5 w-5 text-primary" />
                    All Jobs
                  </CardTitle>
                  {(startDate || endDate || status !== "ALL" || search) && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                      <X className="h-4 w-4 mr-2" /> Clear Filters
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap items-end gap-4">
                  <div className="space-y-1.5 flex-1 min-w-[200px]">
                    <Label htmlFor="search" className="text-xs font-medium text-muted-foreground ml-1">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="search"
                        placeholder="Search Job No, PO, or Customer..."
                        className="h-9 pl-9"
                        value={search ?? ""}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setPage(1);
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 min-w-[150px]">
                    <Label htmlFor="status" className="text-xs font-medium text-muted-foreground ml-1">Status</Label>
                    <Select
                      value={status || "ALL"}
                      onValueChange={(v) => {
                        setStatus(v as JobCardStatus | "ALL");
                        setPage(1);
                      }}
                    >
                      <SelectTrigger id="status" className="h-9">
                        <SelectValue placeholder="All Statuses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ALL">All Statuses</SelectItem>
                        <SelectItem value="PENDING">Pending</SelectItem>
                        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                        <SelectItem value="COMPLETED">Completed</SelectItem>
                        <SelectItem value="ON_HOLD">On Hold</SelectItem>
                        <SelectItem value="CANCELLED">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="startDate" className="text-xs font-medium text-muted-foreground ml-1">From Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="startDate"
                        type="date"
                        className="h-9 w-[160px] pl-9"
                        value={startDate ?? ""}
                        onChange={(e) => {
                          setStartDate(e.target.value);
                          setPage(1);
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="endDate" className="text-xs font-medium text-muted-foreground ml-1">To Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="endDate"
                        type="date"
                        className="h-9 w-[160px] pl-9"
                        value={endDate ?? ""}
                        onChange={(e) => {
                          setEndDate(e.target.value);
                          setPage(1);
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 h-9">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={setThisWeek}
                      className="h-full bg-background/50 hover:bg-primary/5 hover:text-primary border-dashed"
                    >
                      This Week
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={setThisMonth}
                      className="h-full bg-background/50 hover:bg-primary/5 hover:text-primary border-dashed"
                    >
                      This Month
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex justify-center p-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary opacity-50" />
                </div>
              ) : jobs.length === 0 ? (
                <div className="text-center p-12 text-muted-foreground flex flex-col items-center gap-3">
                  <div className="p-4 bg-muted/30 rounded-full">
                    <Search className="h-8 w-8 opacity-20" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">No job cards found</p>
                    <p className="text-sm">Try adjusting your filters or date range.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-muted/30">
                        <TableRow className="hover:bg-transparent border-none">
                          <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Job No</TableHead>
                          <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">PO Reference</TableHead>
                          <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Customer</TableHead>
                          <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Progress</TableHead>
                          <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Status</TableHead>
                          <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Created At</TableHead>
                          <TableHead className="text-right font-semibold text-muted-foreground uppercase text-xs tracking-wider">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {jobs.map((job) => {
                          const totalOps = job.jobLists.flatMap(l => l.operations).length;
                          const doneOps = job.jobLists.flatMap(l => l.operations).filter(o => o.status === "COMPLETED").length;
                          const pct = totalOps > 0 ? Math.round((doneOps / totalOps) * 100) : 0;
                          return (
                            <TableRow key={job.id} className="hover:bg-muted/40 transition-colors">
                              <TableCell className="font-medium">{job.jobNo}</TableCell>
                              <TableCell>
                                <span className="font-mono text-xs">{job.purchaseOrder?.poNumber || "N/A"}</span>
                              </TableCell>
                              <TableCell className="max-w-[150px] truncate">{job.purchaseOrder?.customer?.name || "Stock"}</TableCell>
                              <TableCell className="min-w-[140px]">
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                                    <span>{doneOps} / {totalOps} ops</span>
                                    <span>{pct}%</span>
                                  </div>
                                  <Progress value={pct} className="h-1.5" />
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant={statusVariants[job.status]} className="rounded-md shrink-0 font-medium">
                                  {job.status.replace("_", " ")}
                                </Badge>
                              </TableCell>
                              <TableCell className="whitespace-nowrap text-muted-foreground">{formatDate(job.createdAt)}</TableCell>
                              <TableCell className="text-right p-3">
                                <Button variant="outline" size="sm" asChild className="hover:bg-primary/5 hover:text-primary transition-colors border-primary/20">
                                  <Link href={`/manufacturing/jobs/${job.id}`}>
                                    <Eye className="h-4 w-4 mr-2" /> View
                                  </Link>
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 border-t border-border/50 bg-muted/5">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Page <span className="text-foreground">{page}</span> of <span className="text-foreground">{totalPages}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page <= 1}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page >= totalPages}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CreateJobView onSuccess={() => setActiveTab("list")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CreateJobView({ onSuccess }: { onSuccess: () => void }) {
  const createJobMutation = useCreateJobCard();
  const { purchaseOrders } = usePurchaseOrders();
  const { parts } = useParts();

  const [mode, setMode] = useState<"PO" | "MANUAL">("PO");
  const [jobName, setJobName] = useState<string>("");
  const [selectedPoId, setSelectedPoId] = useState<string>("");
  const [items, setItems] = useState<{ partId: string; quantity: string }[]>([]);

  const handleAddItem = () => {
    setItems([...items, { partId: "", quantity: "1" }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: "partId" | "quantity", value: string) => {
    const newItems = [...items];
    if (field === "partId") {
      newItems[index].partId = (value as string) || "";
    } else {
      const sanitized = value.replace(/[^\d]/g, '').replace(/^0+(?=\d)/, '');
      newItems[index].quantity = sanitized || "0"
    }
    setItems(newItems);
  };

  const handleSubmit = async () => {
    try {
      if (mode === "PO" && !selectedPoId) {
        toast.error("Please select a Purchase Order");
        return;
      }
      if (mode === "MANUAL" && items.length === 0) {
        toast.error("Please add at least one item");
        return;
      }
      if (mode === "MANUAL" && items.some(item => !item.partId)) {
        toast.error("Please select a part for all items");
        return;
      }

      const data = mode === "PO"
        ? { purchaseOrderId: selectedPoId, jobNo: jobName.trim() || undefined }
        : {
          items: items.map(it => ({ ...it, quantity: Number(it.quantity) })),
          jobNo: jobName.trim() || undefined

        };

      await createJobMutation.mutateAsync(data);
      toast.success("Job card created successfully");
      onSuccess();
    } catch (error) {
      toast.error("Failed to create job card");
    }
  };

  return (
    <Card className="max-w-4xl glass-effect">
      <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
        <CardTitle className="text-xl">Job Source</CardTitle>
        <CardDescription>
          Choose whether to link this job card to a customer PO or create it for stock.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="jobName">Job Name / Reference <span className="text-muted-foreground">(optional — auto-generated if blank)</span></Label>
          <Input
            id="jobName"
            placeholder="e.g. JOB-2026-0001"
            value={jobName ?? ""}
            onChange={(e) => setJobName(e.target.value)}
          />
        </div>
        <Tabs value={mode} onValueChange={(v) => setMode(v as "PO" | "MANUAL")} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="PO">Link Purchase Order</TabsTrigger>
            <TabsTrigger value="MANUAL">Job to Stock (Manual)</TabsTrigger>
          </TabsList>

          <TabsContent value="PO" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="po">Select Purchase Order</Label>
              <Select onValueChange={setSelectedPoId} value={selectedPoId || ""}>
                <SelectTrigger id="po">
                  <SelectValue placeholder="Select a PO..." />
                </SelectTrigger>
                <SelectContent>
                  {purchaseOrders.map((po) => (
                    <SelectItem key={po.id} value={po.id}>
                      {po.poNumber} - {po.customer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedPoId && (
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <p className="text-sm font-medium">PO Line Items:</p>
                <ul className="text-sm space-y-1">
                  {purchaseOrders.find(p => p.id === selectedPoId)?.lineItems.map(li => (
                    <li key={li.id}>{li.part.partNo} - {li.quantity} units</li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="MANUAL" className="space-y-4">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 items-end">
                  <div className="flex-1 space-y-2">
                    <Label>Part</Label>
                    <Select
                      value={item.partId || ""}
                      onValueChange={(v) => handleItemChange(index, "partId", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a part..." />
                      </SelectTrigger>
                      <SelectContent>
                        {parts.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.partNo} - {p.description}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-32 space-y-2">
                    <Label>Quantity</Label>
                    <Input
                      type="text"
                      min="1"
                      value={item.quantity ?? 1}
                      onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => handleRemoveItem(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={handleAddItem}>
                <Plus className="h-4 w-4 mr-2" /> Add Part
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end pt-6">
          <Button onClick={handleSubmit} disabled={createJobMutation.isPending} className="w-full md:w-auto">
            {createJobMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <Save className="mr-2 h-4 w-4" /> Create Job Card
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
