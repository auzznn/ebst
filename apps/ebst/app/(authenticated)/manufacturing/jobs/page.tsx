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
import { Plus, Eye, Loader2, List, Save, Trash2, ClipboardList } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { authClient } from "@/lib/auth-client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const statusVariants: Record<JobCardStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "outline",
  IN_PROGRESS: "default",
  COMPLETED: "secondary",
  ON_HOLD: "outline",
  CANCELLED: "destructive",
};

export default function JobsPage() {
  const { jobs, loading } = useJobCards();
  const { data: session } = authClient.useSession();
  const [activeTab, setActiveTab] = useState("list");
  const isAdminOrExecutive = session?.user?.role === "ADMIN" || session?.user?.role === "EXECUTIVE";

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

        <TabsContent value="list" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="glass-effect">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
              <CardTitle className="text-xl">All Jobs</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : jobs.length === 0 ? (
                <div className="text-center p-8 text-muted-foreground">
                  No job cards found.
                </div>
              ) : (
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent">
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
                          <TableCell>{job.purchaseOrder?.poNumber || "N/A"}</TableCell>
                          <TableCell>{job.purchaseOrder?.customer?.name || "Stock"}</TableCell>
                          <TableCell className="min-w-[120px]">
                            <div className="flex items-center gap-2">
                              <Progress value={pct} className="h-2 flex-1" />
                              <span className="text-xs text-muted-foreground w-8 text-right">{pct}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={statusVariants[job.status]} className="rounded-md shrink-0">
                              {job.status.replace("_", " ")}
                            </Badge>
                          </TableCell>
                          <TableCell>{formatDate(job.createdAt)}</TableCell>
                          <TableCell className="text-right p-3">
                            <Button variant="outline" size="sm" asChild className="hover:bg-primary/5 hover:text-primary transition-colors">
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
  const [items, setItems] = useState<{ partId: string; quantity: number }[]>([]);

  const handleAddItem = () => {
    setItems([...items, { partId: "", quantity: 1 }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: "partId" | "quantity", value: string | number) => {
    const newItems = [...items];
    if (field === "partId") {
      newItems[index].partId = value as string;
    } else {
      newItems[index].quantity = Number(value);
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
        : { items, jobNo: jobName.trim() || undefined };

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
            value={jobName}
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
              <Select onValueChange={setSelectedPoId} value={selectedPoId}>
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
                      value={item.partId} 
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
                      type="number" 
                      min="1" 
                      value={item.quantity}
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
