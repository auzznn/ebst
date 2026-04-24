"use client";

import { useParams, useRouter } from "next/navigation";
import {
  useJobCardDetail,
  useStartOperation,
  useCompleteOperation,
  useSubmitQc,
  useAddJobMaterial,
  useRemoveJobMaterial,
  OperationStatus,
  QcResult,
  QcFindingInput,
  Material,
} from "@/hooks/useJobs";
import { useMachines } from "@/hooks/useMachines";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2, Play, CheckCircle2, ArrowLeft, Package,
  Plus, Trash2, Lock, CheckCheck, Wrench, XCircle,
  Ruler, Scale, CircleSlash, Sparkles
} from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { QcLogViewer, QcFormDialog } from "@/components/manufacturing/jobs/QcComponents";

// ─── Constants ────────────────────────────────────────────────────────────────

const opStatusVariants: Record<OperationStatus, "default" | "secondary" | "destructive" | "outline"> = {
  WAITING: "outline",
  QUEUED: "outline",
  IN_PROGRESS: "default",
  COMPLETED: "secondary",
  REJECTED: "destructive",
};

const jobStatusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "outline",
  IN_PROGRESS: "default",
  COMPLETED: "secondary",
  ON_HOLD: "destructive",
  CANCELLED: "destructive",
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function JobDetailPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const { job, loading, refetch } = useJobCardDetail(id);
  const { machines } = useMachines();
  const { data: session } = authClient.useSession();

  const startOpMutation = useStartOperation();
  const completeOpMutation = useCompleteOperation();
  const submitQcMutation = useSubmitQc();
  const addMaterialMutation = useAddJobMaterial();
  const removeMaterialMutation = useRemoveJobMaterial();

  const [selectedMachineId, setSelectedMachineId] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const [newMaterialId, setNewMaterialId] = useState<string>("");
  const [newMaterialQty, setNewMaterialQty] = useState<string>("0");

  const isAdminOrExecutive = session?.user?.role === "ADMIN" || session?.user?.role === "EXECUTIVE";

  const { data: allMaterials } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await api.get("/inventory/materials", { params: { limit: 1000 } });
      return res.data.data as Material[];
    }
  });

  const handleStart = async (operationId: string) => {
    try {
      await startOpMutation.mutateAsync({ operationId, machineId: selectedMachineId });
      toast.success("Operation started");
      refetch();
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to start operation");
    }
  };

  const handleComplete = async (operationId: string) => {
    try {
      await completeOpMutation.mutateAsync({ operationId, notes });
      toast.success("Operation completed");
      setNotes("");
      refetch();
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to complete operation");
    }
  };

  const handleSubmitQc = async (
    operationId: string,
    payload: { result: QcResult; reason: string; findings: QcFindingInput[] }
  ) => {
    try {
      await submitQcMutation.mutateAsync({
        operationId,
        result: payload.result,
        reason: payload.reason || undefined,
        findings: payload.findings.length > 0 ? payload.findings : undefined,
      });
      toast.success("QC inspection submitted");
      refetch();
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to submit QC");
    }
  };

  const handleAddMaterial = async (jobListId: string) => {
    try {
      await addMaterialMutation.mutateAsync({
        jobListId,
        materialId: newMaterialId,
        quantity: parseFloat(newMaterialQty)
      });
      toast.success("Material added");
      setNewMaterialId("");
      setNewMaterialQty("0");
      refetch();
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to add material");
    }
  };

  const handleRemoveMaterial = async (jobMaterialId: string) => {
    try {
      await removeMaterialMutation.mutateAsync(jobMaterialId);
      toast.success("Material removed");
      refetch();
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Failed to remove material");
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
        <Button onClick={() => router.back()} variant="ghost" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 pb-6 border-b border-border/50">
        <div className="flex items-center gap-4">
          <Button onClick={() => router.back()} variant="outline" size="icon" className="rounded-xl">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Job Card: {job.jobNo}</h1>
            <Badge variant={job.status === "COMPLETED" ? "secondary" : "default"} className="text-sm rounded-md px-2 py-0.5">
              {job.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect">
          <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
            <CardTitle className="text-xl">Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">PO Number:</span>
              <span className="font-medium">{job.purchaseOrder?.poNumber || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Customer:</span>
              <span className="font-medium">{job.purchaseOrder?.customer?.name || "Stock"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Created At:</span>
              <span className="font-medium">{formatDate(job.createdAt)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Created By:</span>
              <span className="font-medium">{job.createdBy?.name || "Unknown"}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 glass-effect">
          <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
            <CardTitle className="text-xl">Progress Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 shadow-sm transition-all hover:shadow-md">
                <div className="text-3xl font-bold text-primary">{job.jobLists.length}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Total Items</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 shadow-sm transition-all hover:shadow-md">
                <div className="text-3xl font-bold text-primary">
                  {job.jobLists.reduce((acc, list) => acc + (list.status === "COMPLETED" ? 1 : 0), 0)}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Completed Items</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 shadow-sm transition-all hover:shadow-md">
                <div className="text-3xl font-bold text-primary">
                  {job.jobLists.flatMap(l => l.operations).filter(o => o.status === "IN_PROGRESS").length}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Active Ops</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        {job.jobLists.map((list) => {
          const partInfo = list.lineItem?.part || list.part;
          return (
            <Card key={list.id} className="glass-effect overflow-hidden">
              <CardHeader className="bg-muted/20 border-b border-border/50 pb-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    {partInfo?.partNo || "Unknown Part"}
                    {partInfo?.drawingRef && (
                      <Badge variant="outline" className="font-mono bg-background/50">
                        <a href={partInfo.drawingRef} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                          Drawing Ref
                        </a>
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1">
                    <span className="font-medium text-foreground">{partInfo?.description}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span>Qty: {list.quantity}</span>
                    {partInfo?.materials && partInfo.materials.length > 0 ? (
                      <>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-foreground">
                          Composition: {partInfo.materials.map(m => `${m.material.name} (${m.ratio}%)`).join(", ")}
                        </span>
                      </>
                    ) : partInfo?.material && (
                      <>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-foreground">
                          Material: {partInfo.material.name} ({partInfo.material.code})
                        </span>
                      </>
                    )}
                  </CardDescription>
                </div>
                <Badge variant={jobStatusVariants[list.status] || "default"} className="rounded-md">
                  {list.status}
                </Badge>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-6 border-b border-border/50 bg-muted/5">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Parts Specification Section */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Wrench className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Parts Specification</h3>
                      </div>

                      {partInfo?.specifications ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="p-3 rounded-xl bg-background border border-border/50 shadow-sm">
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Ruler className="h-3.5 w-3.5" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Dimensions</span>
                            </div>
                            <div className="text-sm font-semibold">
                              {partInfo.specifications.length && partInfo.specifications.width && partInfo.specifications.height ? (
                                `${partInfo.specifications.length} × ${partInfo.specifications.width} × ${partInfo.specifications.height} ${partInfo.specifications.unit}`
                              ) : (
                                "—"
                              )}
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-background border border-border/50 shadow-sm">
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Scale className="h-3.5 w-3.5" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Weight</span>
                            </div>
                            <div className="text-sm font-semibold">
                              {partInfo.specifications.weight ? `${partInfo.specifications.weight} kg` : "—"}
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-background border border-border/50 shadow-sm">
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <CircleSlash className="h-3.5 w-3.5" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Tolerance</span>
                            </div>
                            <div className="text-sm font-semibold">
                              {partInfo.specifications.tolerance || "—"}
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-background border border-border/50 shadow-sm">
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Sparkles className="h-3.5 w-3.5" />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Surface Finish</span>
                            </div>
                            <div className="text-sm font-semibold truncate" title={partInfo.specifications.surfaceFinish || ""}>
                              {partInfo.specifications.surfaceFinish || "—"}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center p-8 rounded-xl bg-background/50 border border-dashed border-border text-muted-foreground text-sm italic">
                          No technical specifications provided for this part.
                        </div>
                      )}
                    </div>

                    {/* Materials Required Section */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Package className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-bold text-lg">Materials Required</h3>
                        </div>
                        {list.status === "PENDING" && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" className="h-8 rounded-lg shadow-sm">
                                <Plus className="h-3.5 w-3.5 mr-1" /> Add Material
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="rounded-2xl">
                              <DialogHeader>
                                <DialogTitle>Add Material to {partInfo?.partNo}</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                  <Label>Select Material</Label>
                                  <Select onValueChange={setNewMaterialId} value={newMaterialId || ""}>
                                    <SelectTrigger className="rounded-xl">
                                      <SelectValue placeholder="Select a material" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                      {allMaterials?.map((m) => (
                                        <SelectItem key={m.id} value={m.id} className="rounded-lg">
                                          {m.name} ({m.code}) — Available: {m.stockQty} {m.unit}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="qty">Quantity Needed</Label>
                                  <Input
                                    id="qty"
                                    type="number"
                                    min="0.001"
                                    step="0.001"
                                    value={newMaterialQty ?? "0"}
                                    onChange={(e) => setNewMaterialQty(e.target.value)}
                                    className="rounded-xl"
                                  />
                                  {newMaterialId && (() => {
                                    const mat = allMaterials?.find(m => m.id === newMaterialId);
                                    return mat ? (
                                      <p className="text-xs text-muted-foreground">Available stock: <span className="font-medium text-foreground">{mat.stockQty} {mat.unit}</span></p>
                                    ) : null;
                                  })()}
                                </div>
                              </div>
                              <DialogFooter>
                                <Button onClick={() => handleAddMaterial(list.id)} disabled={addMaterialMutation.isPending} className="rounded-xl">
                                  {addMaterialMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                  Add Material
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        )}
                        {list.status !== "PENDING" && (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground px-2 py-1 bg-muted rounded-md">
                            <Lock className="h-3 w-3" /> Materials Locked
                          </span>
                        )}
                      </div>

                      {partInfo?.materials && partInfo.materials.length > 0 && (
                        <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">Standard Part Composition</p>
                          <div className="flex flex-wrap gap-2">
                            {partInfo.materials.map((pm) => (
                              <div key={pm.id} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-background border border-primary/20 text-[11px] font-medium shadow-sm">
                                <span>{pm.material.name}</span>
                                <span className="text-primary font-bold">{pm.ratio}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {list.jobMaterials && list.jobMaterials.length > 0 ? (
                        <div className="grid gap-2">
                          {list.jobMaterials.map((jm) => (
                            <div key={jm.id} className="flex items-center justify-between p-3 rounded-xl bg-background border border-border/50 text-sm shadow-sm transition-all hover:border-primary/30">
                              <div className="flex flex-col">
                                <span className="font-bold">{jm.material.name}</span>
                                <span className="text-[10px] text-muted-foreground uppercase font-mono">{jm.material.code}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">{Number(jm.quantity).toFixed(2)} {jm.material.unit}</span>
                                {list.status === "PENDING" && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive transition-colors rounded-lg"
                                    onClick={() => handleRemoveMaterial(jm.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center p-6 rounded-xl bg-background/50 border border-dashed border-border text-muted-foreground text-sm italic">
                          No materials allocated yet.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-12 font-semibold text-muted-foreground uppercase text-xs tracking-wider p-4">#</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Operation</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Machine</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Status</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Start/End</TableHead>
                      <TableHead className="text-right font-semibold text-muted-foreground uppercase text-xs tracking-wider p-4">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="mx-6">
                    {list.operations.sort((a, b) => a.stepOrder - b.stepOrder).map((op) => (
                      <TableRow key={op.id} className="hover:bg-muted/40 transition-colors w-full align-top">
                        <TableCell className="pt-4">{op.stepOrder}</TableCell>
                        <TableCell className="font-medium">
                          <div className="pt-1">{op.operationName}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {op.materialsUsed?.map((usage) => (
                              <Badge key={usage.id} variant="outline" className="text-[10px] h-4 bg-muted">
                                {usage.material.name}: {Number(usage.qtyUsed).toFixed(2)} {usage.material.unit}
                              </Badge>
                            ))}
                          </div>
                          {/* Inline QC Log viewer */}
                          <QcLogViewer op={op} />
                        </TableCell>
                        <TableCell className="pt-4">{op.machine?.name || "—"}</TableCell>
                        <TableCell className="pt-4">
                          <Badge variant={opStatusVariants[op.status]}>
                            {op.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs pt-4">
                          {op.startedAt && <div>S: {formatDate(op.startedAt)}</div>}
                          {op.completedAt && <div>E: {formatDate(op.completedAt)}</div>}
                        </TableCell>
                        <TableCell className="text-right space-x-2 pt-3">
                          {op.status === "WAITING" && (() => {
                            const prevOps = list.operations.filter(o => o.stepOrder < op.stepOrder);
                            const isBlocked = prevOps.some(o => o.status !== "COMPLETED");
                            return isBlocked ? (
                              <span className="flex items-center gap-1 text-xs text-muted-foreground justify-end" title="Complete previous operations first">
                                <Lock className="h-3.5 w-3.5" /> Locked
                              </span>
                            ) : (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    <Play className="h-3.5 w-3.5 mr-1" /> Start
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Start Operation: {op.operationName}</DialogTitle>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                      <Label htmlFor="machine">Select Machine (Optional)</Label>
                                      <Select onValueChange={setSelectedMachineId} value={selectedMachineId || ""}>
                                        <SelectTrigger id="machine">
                                          <SelectValue placeholder="Select a machine" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          {machines.map((m) => (
                                            <SelectItem key={m.id} value={m.id}>
                                              {m.name} ({m.machineType})
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button onClick={() => handleStart(op.id)} disabled={startOpMutation.isPending}>
                                      {startOpMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                      Start Operation
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            );
                          })()}

                          {op.status === "IN_PROGRESS" && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="default">
                                  <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Complete
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Complete Operation: {op.operationName}</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="notes">Notes / Observations</Label>
                                    <Textarea
                                      id="notes"
                                      placeholder="Any issues or comments..."
                                      value={notes ?? ""}
                                      onChange={(e) => setNotes(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button onClick={() => handleComplete(op.id)} disabled={completeOpMutation.isPending}>
                                    {completeOpMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Confirm Completion
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          )}

                          {op.status === "COMPLETED" && !op.qcLog && isAdminOrExecutive && (
                            <QcFormDialog
                              op={op}
                              onSubmit={(payload) => handleSubmitQc(op.id, payload)}
                              isLoading={submitQcMutation.isPending}
                            />
                          )}

                          {op.status === "COMPLETED" && op.qcLog && (
                            <Badge
                              variant={
                                op.qcLog.result === "PASS" ? "secondary"
                                  : op.qcLog.result === "REPAIR" ? "outline"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {op.qcLog.result === "PASS" ? <CheckCheck className="h-3 w-3 mr-1 inline" />
                                : op.qcLog.result === "REPAIR" ? <Wrench className="h-3 w-3 mr-1 inline" />
                                  : <XCircle className="h-3 w-3 mr-1 inline" />}
                              QC: {op.qcLog.result}
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
