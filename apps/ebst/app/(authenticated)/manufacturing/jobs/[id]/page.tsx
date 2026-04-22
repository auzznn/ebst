"use client";

import { useParams, useRouter } from "next/navigation";
import {
  useJobCardDetail,
  useStartOperation,
  useCompleteOperation,
  useSubmitQc,
  useAddJobMaterial,
  useRemoveJobMaterial,
  Operation,
  OperationStatus,
  QcResult,
  QcFindingInput,
  FindingCategory,
  Material,
} from "@/hooks/useJobs";
import { useDocuments } from "@/hooks/useDocuments";
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
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Loader2, Play, CheckCircle2, ShieldCheck, ArrowLeft, Clock, Package,
  Plus, Trash2, Lock, AlertTriangle, FileText, Info, ChevronDown, ChevronUp,
  XCircle, CheckCheck, Wrench, Upload
} from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import { useState, useCallback } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────────

const FINDING_CATEGORIES: { value: FindingCategory; label: string }[] = [
  { value: "DIMENSION", label: "Dimension" },
  { value: "SURFACE", label: "Surface Finish" },
  { value: "CHEMICAL", label: "Chemical / Material" },
  { value: "VISUAL", label: "Visual Defect" },
  { value: "FUNCTIONAL", label: "Functional / Performance" },
  { value: "OTHER", label: "Other" },
];

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

// ─── Severity helpers ──────────────────────────────────────────────────────────

function severityColor(score: number) {
  if (score === 0) return "text-emerald-500";
  if (score <= 3) return "text-yellow-500";
  if (score <= 6) return "text-orange-500";
  return "text-red-500";
}

function severityLabel(score: number) {
  if (score === 0) return "OK";
  if (score <= 3) return "Minor";
  if (score <= 6) return "Moderate";
  if (score <= 8) return "Major";
  return "Critical";
}

function totalScoreColor(total: number) {
  if (total === 0) return "text-emerald-500";
  if (total <= 10) return "text-yellow-500";
  if (total <= 25) return "text-orange-500";
  return "text-red-500";
}

function actionIcon(total: number) {
  if (total === 0) return <CheckCheck className="h-4 w-4 text-emerald-500" />;
  if (total <= 10) return <Info className="h-4 w-4 text-yellow-500" />;
  if (total <= 25) return <AlertTriangle className="h-4 w-4 text-orange-500" />;
  return <XCircle className="h-4 w-4 text-red-500" />;
}

// ─── Empty finding factory ─────────────────────────────────────────────────────

function emptyFinding(): QcFindingInput & { _id: string } {
  return {
    _id: Math.random().toString(36).slice(2),
    category: "DIMENSION",
    parameter: "",
    specification: "",
    measuredValue: "",
    unit: "",
    description: "",
    severity: 0,
    isConforming: true,
  };
}

// ─── QC Log Viewer ─────────────────────────────────────────────────────────────

function QcLogViewer({ op }: { op: Operation }) {
  const qcLog = op.qcLog;
  const [open, setOpen] = useState(false);

  if (!qcLog) return null;

  const resultVariant =
    qcLog.result === "PASS" ? "secondary"
      : qcLog.result === "REPAIR" ? "outline"
        : "destructive";

  const resultIcon =
    qcLog.result === "PASS" ? <CheckCheck className="h-3 w-3" />
      : qcLog.result === "REPAIR" ? <Wrench className="h-3 w-3" />
        : <XCircle className="h-3 w-3" />;

  return (
    <div className="mt-1">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <Badge variant={resultVariant} className="text-[10px] h-4 gap-1 flex items-center">
          {resultIcon} QC: {qcLog.result}
        </Badge>
        {qcLog.totalScore != null && (
          <span className={cn("font-mono font-semibold", totalScoreColor(qcLog.totalScore))}>
            Score: {qcLog.totalScore}
          </span>
        )}
        {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
      </button>

      {open && (
        <div className="mt-2 rounded-lg border border-border/60 bg-muted/10 p-3 space-y-3 text-xs">
          {/* Header info */}
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <span>Inspector: <strong className="text-foreground">{qcLog.inspector?.name ?? "—"}</strong></span>
            <span>Date: <strong className="text-foreground">{formatDate(qcLog.loggedAt)}</strong></span>
            {qcLog.reason && <span>Reason: <strong className="text-foreground">{qcLog.reason}</strong></span>}
          </div>

          {/* Action recommendation */}
          {qcLog.actionRequired && (
            <div className={cn(
              "flex items-start gap-2 rounded-md px-3 py-2 border",
              (qcLog.totalScore ?? 0) === 0 ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800"
                : (qcLog.totalScore ?? 0) <= 10 ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800"
                  : (qcLog.totalScore ?? 0) <= 25 ? "bg-orange-50 border-orange-200 dark:bg-orange-950/30 dark:border-orange-800"
                    : "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800"
            )}>
              {actionIcon(qcLog.totalScore ?? 0)}
              <p className="leading-relaxed">{qcLog.actionRequired}</p>
            </div>
          )}

          {/* Findings table */}
          {qcLog.findings && qcLog.findings.length > 0 && (
            <div>
              <p className="font-semibold text-foreground mb-1.5">Detailed Findings ({qcLog.findings.length})</p>
              <div className="overflow-x-auto rounded-md border border-border/50">
                <table className="w-full text-xs">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left px-3 py-2 font-semibold text-muted-foreground">Category</th>
                      <th className="text-left px-3 py-2 font-semibold text-muted-foreground">Parameter</th>
                      <th className="text-left px-3 py-2 font-semibold text-muted-foreground">Specification</th>
                      <th className="text-left px-3 py-2 font-semibold text-muted-foreground">Measured</th>
                      <th className="text-left px-3 py-2 font-semibold text-muted-foreground">Description</th>
                      <th className="text-center px-3 py-2 font-semibold text-muted-foreground">Status</th>
                      <th className="text-center px-3 py-2 font-semibold text-muted-foreground">Severity</th>
                      <th className="text-left px-3 py-2 font-semibold text-muted-foreground">Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qcLog.findings.map((f, i) => (
                      <tr key={f.id} className={cn("border-t border-border/40", i % 2 === 0 ? "bg-background" : "bg-muted/10")}>
                        <td className="px-3 py-2">
                          <Badge variant="outline" className="text-[10px] h-4">{f.category}</Badge>
                        </td>
                        <td className="px-3 py-2 font-medium text-foreground">{f.parameter}</td>
                        <td className="px-3 py-2 text-muted-foreground">{f.specification ?? "—"}</td>
                        <td className="px-3 py-2 font-mono">
                          {f.measuredValue ?? "—"}{f.unit ? ` ${f.unit}` : ""}
                        </td>
                        <td className="px-3 py-2 text-muted-foreground max-w-[160px] truncate" title={f.description ?? ""}>
                          {f.description || "—"}
                        </td>
                        <td className="px-3 py-2 text-center">
                          {f.isConforming
                            ? <span className="text-emerald-500 font-semibold">✓ OK</span>
                            : <span className="text-red-500 font-semibold">✗ NG</span>
                          }
                        </td>
                        <td className="px-3 py-2 text-center">
                          <span className={cn("font-bold font-mono", severityColor(f.severity))}>
                            {f.severity} <span className="font-normal text-muted-foreground">({severityLabel(f.severity)})</span>
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          {f.document
                            ? <a href={`/api/documents/${f.document.key}`} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-600 hover:underline">
                              <FileText className="h-3 w-3" /> {f.document.fileName}
                            </a>
                            : <span className="text-muted-foreground">—</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {qcLog.totalScore != null && (
                    <tfoot className="border-t-2 border-border bg-muted/20">
                      <tr>
                        <td colSpan={6} className="px-3 py-2 font-semibold text-right text-foreground">Total Severity Score:</td>
                        <td className="px-3 py-2 text-center">
                          <span className={cn("text-sm font-bold font-mono", totalScoreColor(qcLog.totalScore))}>
                            {qcLog.totalScore}
                          </span>
                        </td>
                        <td />
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── QC Form Dialog ────────────────────────────────────────────────────────────

function QcFormDialog({
  op,
  onSubmit,
  isLoading,
}: {
  op: Operation;
  onSubmit: (payload: { result: QcResult; reason: string; findings: QcFindingInput[] }) => void;
  isLoading: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<QcResult>("PASS");
  const [reason, setReason] = useState("");
  const [findings, setFindings] = useState<(QcFindingInput & { _id: string })[]>([]);

  const totalScore = findings.reduce((sum, f) => sum + f.severity, 0);

  const addFinding = useCallback(() => {
    setFindings((prev) => [...prev, emptyFinding()]);
  }, []);

  const removeFinding = useCallback((idx: number) => {
    setFindings((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const updateFinding = useCallback((idx: number, patch: Partial<QcFindingInput>) => {
    setFindings((prev) => prev.map((f, i) => i === idx ? { ...f, ...patch } : f));
  }, []);

  const handleSubmit = () => {
    onSubmit({ result, reason, findings });
    // Reset
    setOpen(false);
    setResult("PASS");
    setReason("");
    setFindings([]);
  };

  const deriveActionText = () => {
    if (findings.length === 0) return null;
    if (totalScore === 0) return { text: "No action required — all parameters within specification.", color: "text-emerald-600" };
    if (totalScore <= 10) return { text: "Minor non-conformances noted. Monitor and re-inspect at next interval.", color: "text-yellow-600" };
    if (totalScore <= 25) return { text: "Moderate issues detected. Schedule corrective maintenance.", color: "text-orange-600" };
    if (totalScore <= 40) return { text: "Significant defects found. Part must be repaired or reworked.", color: "text-red-600" };
    return { text: "Critical failures detected. Part must be scrapped or escalated immediately.", color: "text-red-700 font-semibold" };
  };

  const action = deriveActionText();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950/30">
          <ShieldCheck className="h-3.5 w-3.5 mr-1" /> QC Inspection
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[80vw] w-[1400px] sm:max-w-[80vw] max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
            Quality Inspection: <span className="text-primary">{op.operationName}</span>
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Add detailed quality findings for each parameter inspected. The total severity score determines the recommended action.
          </p>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* Overall Result & Reason */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-semibold">Overall Inspection Result</Label>
              <Select value={result} onValueChange={(v) => setResult(v as QcResult)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PASS">
                    <span className="flex items-center gap-2"><CheckCheck className="h-4 w-4 text-emerald-500" /> Pass</span>
                  </SelectItem>
                  <SelectItem value="REPAIR">
                    <span className="flex items-center gap-2"><Wrench className="h-4 w-4 text-yellow-500" /> Needs Repair</span>
                  </SelectItem>
                  <SelectItem value="REJECT">
                    <span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-500" /> Reject</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold">Overall Notes / Reason</Label>
              <Textarea
                placeholder={result !== "PASS" ? "Required: explain reason for repair/rejection..." : "Optional: add general notes..."}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="resize-none h-[72px]"
              />
            </div>
          </div>

          <Separator />

          {/* Findings Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base">Quality Findings</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Record each parameter inspected. Assign severity 0–10 per finding.
                </p>
              </div>
              <Button size="sm" variant="outline" onClick={addFinding}>
                <Plus className="h-3.5 w-3.5 mr-1" /> Add Finding
              </Button>
            </div>

            {findings.length === 0 && (
              <div className="rounded-lg border border-dashed border-border/60 p-8 text-center text-sm text-muted-foreground">
                <ShieldCheck className="h-8 w-8 mx-auto mb-2 opacity-30" />
                No findings added yet. Click <strong>Add Finding</strong> to record a quality parameter.
                <br />
                <span className="text-xs mt-1 block">You can still submit with just an overall result.</span>
              </div>
            )}

            {findings.map((f, idx) => (
              <div
                key={f._id}
                className="rounded-xl border border-border/60 bg-muted/5 p-6 space-y-5 relative hover:border-border transition-colors"
              >
                {/* Finding header */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">Finding #{idx + 1}</span>
                  <div className="flex items-center gap-2">
                    <span className={cn("text-xs font-bold font-mono", severityColor(f.severity))}>
                      Severity: {f.severity} / 10 — {severityLabel(f.severity)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-destructive hover:bg-destructive/10"
                      onClick={() => removeFinding(idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Row 1: Category, Parameter, Unit */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Category</Label>
                    <Select
                      value={f.category}
                      onValueChange={(v) => updateFinding(idx, { category: v as FindingCategory })}
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {FINDING_CATEGORIES.map((c) => (
                          <SelectItem key={c.value} value={c.value} className="text-xs">{c.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Parameter Name *</Label>
                    <Input
                      className="h-8 text-xs"
                      placeholder="e.g. Outer Diameter, Roughness Ra"
                      value={f.parameter}
                      onChange={(e) => updateFinding(idx, { parameter: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Unit</Label>
                    <Input
                      className="h-8 text-xs"
                      placeholder="mm, µm, %, Rc..."
                      value={f.unit ?? ""}
                      onChange={(e) => updateFinding(idx, { unit: e.target.value })}
                    />
                  </div>
                </div>

                {/* Row 2: Specification, Measured Value, Conforming */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Specification / Tolerance</Label>
                    <Input
                      className="h-8 text-xs"
                      placeholder="e.g. 50.0 ± 0.1"
                      value={f.specification ?? ""}
                      onChange={(e) => updateFinding(idx, { specification: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Measured Value</Label>
                    <Input
                      className="h-8 text-xs"
                      placeholder="e.g. 50.23"
                      value={f.measuredValue ?? ""}
                      onChange={(e) => updateFinding(idx, { measuredValue: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Conforming?</Label>
                    <Select
                      value={f.isConforming ? "yes" : "no"}
                      onValueChange={(v) => updateFinding(idx, { isConforming: v === "yes" })}
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes" className="text-xs">
                          <span className="flex items-center gap-1.5 text-emerald-600"><CheckCheck className="h-3 w-3" /> Conforming</span>
                        </SelectItem>
                        <SelectItem value="no" className="text-xs">
                          <span className="flex items-center gap-1.5 text-red-600"><XCircle className="h-3 w-3" /> Non-conforming</span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 3: Description */}
                <div className="space-y-1.5">
                  <Label className="text-xs">Finding Description</Label>
                  <Textarea
                    className="resize-none text-xs h-16"
                    placeholder="Describe the observation in detail (e.g. surface pitting observed at location A, visible crack at weld seam)..."
                    value={f.description ?? ""}
                    onChange={(e) => updateFinding(idx, { description: e.target.value })}
                  />
                </div>

                {/* Row 4: Severity Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs">Severity Score</Label>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">0 = No issue · 5 = Moderate · 10 = Critical</span>
                      <span className={cn("font-bold font-mono text-sm min-w-[24px] text-right", severityColor(f.severity))}>
                        {f.severity}
                      </span>
                    </div>
                  </div>
                  <div className="px-1">
                    <Slider
                      min={0}
                      max={10}
                      step={1}
                      value={[f.severity]}
                      onValueChange={([v]) => {
                        updateFinding(idx, {
                          severity: v,
                          // Auto-update conforming when severity > 0
                          isConforming: v === 0 ? true : f.isConforming,
                        });
                      }}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-0.5">
                      <span className="text-emerald-500">OK</span>
                      <span className="text-yellow-500">Minor</span>
                      <span className="text-orange-500">Moderate</span>
                      <span className="text-red-500">Critical</span>
                    </div>
                  </div>
                </div>

                {/* Row 5: Document Upload */}
                <div className="space-y-1.5">
                  <Label className="text-xs flex items-center gap-1.5">
                    <FileText className="h-3 w-3" /> Supporting Document
                    <span className="text-muted-foreground font-normal">(optional — attach a report/scan from the machine)</span>
                  </Label>
                  <FileUploadField
                    value={f.documentId ?? ""}
                    onChange={(docId) => updateFinding(idx, { documentId: docId })}
                  />
                </div>
              </div>
            ))}

            {/* Score summary */}
            {findings.length > 0 && (
              <div className={cn(
                "rounded-lg border p-4 space-y-2",
                totalScore === 0 ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800"
                  : totalScore <= 10 ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800"
                    : totalScore <= 25 ? "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800"
                      : "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800"
              )}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm flex items-center gap-2">
                    {actionIcon(totalScore)}
                    Total Severity Score:
                    <span className={cn("text-xl font-bold font-mono", totalScoreColor(totalScore))}>{totalScore}</span>
                    <span className="text-xs text-muted-foreground">/ {findings.length * 10} max</span>
                  </span>
                </div>
                {action && (
                  <p className={cn("text-sm leading-relaxed", action.color)}>
                    {action.text}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            disabled={isLoading || (result !== "PASS" && !reason.trim())}
            className="gap-2"
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            <ShieldCheck className="h-4 w-4" />
            Submit QC Inspection
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─── File Upload Field Component ──────────────────────────────────────────────────

function FileUploadField({ value, onChange }: { value: string; onChange: (key: string) => void }) {
  const { uploadFileDirect, registerDocument } = useDocuments();
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const data = new FormData();
      data.append("file", file);

      // Upload file directly to S3/R2
      const { key } = await uploadFileDirect.mutateAsync(data);

      // Register document in database
      const doc = await registerDocument.mutateAsync({
        key,
        fileName: file.name,
        fileType: file.type || "application/octet-stream",
        size: file.size,
        documentType: "OTHER",
        metadata: { source: "qc_finding" }
      });

      onChange(doc.id);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  if (value) {
    return (
      <div className="flex items-center gap-2 mt-1">
        <Badge variant="secondary" className="flex items-center gap-1 text-xs">
          <CheckCheck className="h-3 w-3 text-emerald-500" /> Document Attached
        </Badge>
        <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => onChange("")}>
          Remove
        </Button>
      </div>
    );
  }

  return (
    <div className="relative mt-1">
      <Input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-8 z-10"
        onChange={handleFileUpload}
        disabled={uploading}
      />
      <Button variant="outline" type="button" disabled={uploading} className="w-full h-8 text-xs flex gap-2">
        {uploading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Upload className="h-3 w-3 " />}
        {uploading ? "Uploading..." : "Click to Upload File..."}
      </Button>
    </div>
  );
}

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
      const res = await api.get("/inventory/materials");
      return res.data as Material[];
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
                    {partInfo?.material && (
                      <>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-foreground">
                          Material: {partInfo.material.name} ({partInfo.material.code}) - Unit: {partInfo.material.unit}
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
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" /> Materials Required
                    </h3>
                    {list.status === "PENDING" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" className="h-8">
                            <Plus className="h-3.5 w-3.5 mr-1" /> Add Material
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add Material to {partInfo?.partNo}</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label>Select Material</Label>
                              <Select onValueChange={setNewMaterialId} value={newMaterialId}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a material" />
                                </SelectTrigger>
                                <SelectContent>
                                  {allMaterials?.map((m) => (
                                    <SelectItem key={m.id} value={m.id}>
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
                                value={newMaterialQty}
                                onChange={(e) => setNewMaterialQty(e.target.value)}
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
                            <Button onClick={() => handleAddMaterial(list.id)} disabled={addMaterialMutation.isPending}>
                              {addMaterialMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              Add Material
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    )}
                    {list.status !== "PENDING" && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="h-3 w-3" /> Job started — materials locked
                      </span>
                    )}
                  </div>

                  {list.jobMaterials && list.jobMaterials.length > 0 ? (
                    <div className="space-y-2">
                      {list.jobMaterials.map((jm) => (
                        <div key={jm.id} className="flex items-center justify-between p-2 rounded-lg bg-background border border-border/50 text-sm">
                          <div className="flex items-center gap-4">
                            <span className="font-medium">{jm.material.name}</span>
                            <span className="text-muted-foreground">{jm.material.code}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold">{Number(jm.quantity).toFixed(2)} {jm.material.unit}</span>
                            {list.status === "PENDING" && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-destructive"
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
                    <p className="text-sm text-muted-foreground italic">No materials added yet.</p>
                  )}
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
                                      <Select onValueChange={setSelectedMachineId} value={selectedMachineId}>
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
                                      value={notes}
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
