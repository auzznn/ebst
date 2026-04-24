"use client";

import { useState, useCallback } from "react";
import {
  Operation,
  QcResult,
  QcFindingInput,
  FindingCategory,
} from "@/hooks/useJobs";
import { useDocuments } from "@/hooks/useDocuments";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import {
  Loader2, ShieldCheck, CheckCheck, XCircle, Wrench, ChevronUp, ChevronDown, Info, FileText, Plus, Trash2, Upload
} from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// ─── Constants ────────────────────────────────────────────────────────────────

const FINDING_CATEGORIES: { value: FindingCategory; label: string }[] = [
  { value: "DIMENSION", label: "Dimension" },
  { value: "SURFACE", label: "Surface Finish" },
  { value: "CHEMICAL", label: "Chemical / Material" },
  { value: "VISUAL", label: "Visual Defect" },
  { value: "FUNCTIONAL", label: "Functional / Performance" },
  { value: "OTHER", label: "Other" },
];

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
    isConforming: true,
  };
}

// ─── QC Log Viewer ─────────────────────────────────────────────────────────────

export function QcLogViewer({ op }: { op: Operation }) {
  const qcLog = op.qcLog;
  const [open, setOpen] = useState(false);
  const { getDownloadUrl } = useDocuments();

  const handleDownload = async (key: string) => {
    try {
      const url = await getDownloadUrl.mutateAsync(key);
      const link = document.createElement("a");
      link.href = url;
      link.download = key.split("/").pop() || key;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error: any) {
      toast.error("Failed to download document", { description: error.message });
    }
  };

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
                        <td className="px-3 py-2">
                          {f.document
                            ? <button
                              onClick={() => handleDownload(f.document!.key)}
                              className="flex items-center gap-1 text-blue-600 hover:underline"
                            >
                              <FileText className="h-3 w-3"> </FileText> {f.document.fileName}
                            </button>
                            : <span className="text-muted-foreground">—</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── File Upload Field Component ──────────────────────────────────────────────────

export function FileUploadField({ value, onChange }: { value: string; onChange: (key: string) => void }) {
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
        documentType: "CHECK_SHEET",
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

// ─── QC Form Dialog ────────────────────────────────────────────────────────────

export function QcFormDialog({
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
            Add detailed quality findings for each parameter inspected.
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
                  Record each parameter inspected.
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
