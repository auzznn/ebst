"use client";

import { useParts, useCreatePart, useUpdatePart, Part, PartMaterialInput, PartSpecificationInput } from "@/hooks/useParts";
import { useRoutingForPart, useUpsertRouting } from "@/hooks/useRouting";
import { useMachines, Machine } from "@/hooks/useMachines";
import { Material } from "@/hooks/useJobs";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Badge } from "@/components/ui/badge";
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
import { Plus, Loader2, ArrowLeft, Save, Trash2, Edit, List, Component, Upload, ChevronLeft, ChevronRight, X, Search, Filter } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Separator } from "@/components/ui/separator";
import { useDebounce } from "@/hooks/useDebounce";

// Helper to sanitize decimal input
const sanitizeDecimal = (value: string): string => {
  return value
    .replace(/[^0-9.]/g, '')     // Allow only digits and dot
    .replace(/^0+(?=\d)/, '')    // Strip leading zeros
    .replace(/(\..*)\./g, '$1'); // Prevent multiple dots
};

// Helper to sanitize integer input
const sanitizeInteger = (value: string): string => {
  return value
    .replace(/[^\d]/g, '')       // Allow only digits
    .replace(/^0+(?=\d)/, '');    // Strip leading zeros
};

export default function PartsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [castingTypeFilter, setCastingTypeFilter] = useState("ALL");
  const debouncedSearch = useDebounce(search, 500);

  const { parts, loading, totalPages, refetch: refetchParts } = useParts(page, 10, debouncedSearch, castingTypeFilter);
  const createPartMutation = useCreatePart();
  const { data: session } = authClient.useSession();
  const isAdminOrExecutive = session?.user?.role === "ADMIN" || session?.user?.role === "EXECUTIVE";

  const { data: materials } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await api.get("/inventory/materials", { params: { limit: 1000 } });
      return res.data.data as Material[];
    }
  });

  const [activeTab, setActiveTab] = useState("list");
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [formData, setFormData] = useState({
    partNo: "",
    description: "",
    castingType: "SAND" as "SAND" | "INVESTMENT",
    materials: [] as { materialId: string; ratio: string }[],
    specifications: {
      length: "0",
      width: "0",
      height: "0",
      weight: "0",
      unit: "mm",
      tolerance: "",
      surfaceFinish: "",
    },
    drawingRef: "",
  });
  const [drawingFile, setDrawingFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setDrawingFile(file);
    setFormData(prev => ({ ...prev, drawingRef: file.name }));
    toast.success("Drawing selected for upload");
  };

  const handleAddMaterial = () => {
    setFormData(prev => ({
      ...prev,
      materials: [...prev.materials, { materialId: "", ratio: "0" }]
    }));
  };

  const handleRemoveMaterial = (index: number) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.filter((_, i) => i !== index)
    }));
  };

  const handleMaterialChange = (index: number, field: "materialId" | "ratio", value: string) => {
    const newMaterials = [...formData.materials];
    const val = field === "ratio" ? sanitizeDecimal(value) : value;
    newMaterials[index] = { ...newMaterials[index], [field]: val };
    setFormData(prev => ({ ...prev, materials: newMaterials }));
  };

  const handleCreate = async () => {
    try {
      if (!formData.partNo.trim()) {
        toast.error("Part Number is required");
        return;
      }
      if (!formData.description.trim()) {
        toast.error("Description is required");
        return;
      }

      if (formData.materials.length > 0) {
        if (formData.materials.some(m => !m.materialId)) {
          toast.error("Please select a material for all composition rows");
          return;
        }
        const totalRatio = formData.materials.reduce((sum, m) => sum + Number(m.ratio), 0);
        if (Math.abs(totalRatio - 100) > 0.01) {
          toast.error(`Total composition ratio must be 100% (currently ${totalRatio}%)`);
          return;
        }
      }

      const payload: any = {
        ...formData,
        materials: formData.materials.map(m => ({ ...m, ratio: Number(m.ratio) })),
        specifications: {
          ...formData.specifications,
          length: Number(formData.specifications.length),
          width: Number(formData.specifications.width),
          height: Number(formData.specifications.height),
          weight: Number(formData.specifications.weight),
        }
      };

      if (drawingFile) {
        payload.file = drawingFile;
      }
      await createPartMutation.mutateAsync(payload);
      toast.success("Part created successfully");
      setFormData({
        partNo: "",
        description: "",
        castingType: "SAND",
        materials: [],
        specifications: {
          length: "0",
          width: "0",
          height: "0",
          weight: "0",
          unit: "mm",
          tolerance: "",
          surfaceFinish: "",
        },
        drawingRef: ""
      });
      setDrawingFile(null);
      setActiveTab("list");
    } catch (error) {
      toast.error("Failed to create part");
    }
  };

  if (selectedPart) {
    return (
      <PartDetailView
        part={selectedPart}
        onBack={() => { setSelectedPart(null); refetchParts(); }}
        isAdminOrExecutive={isAdminOrExecutive}
        materialsList={materials || []}
      />
    );
  }

  return (
    <div className="w-full p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 pb-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary/5 text-primary rounded-xl border border-primary/10 shadow-sm">
            <Component className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Parts Catalog</h1>
        </div>
        <p className="text-muted-foreground text-lg ml-13">Manage master data for parts and components.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px] h-12 p-1 bg-muted/40 rounded-xl border border-border/50">
          <TabsTrigger value="list" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
            <List className="h-4 w-4" /> Parts List
          </TabsTrigger>
          <TabsTrigger value="create" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all" disabled={!isAdminOrExecutive}>
            <Plus className="h-4 w-4" /> Add Part
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="glass-effect">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl">All Parts</CardTitle>
                  <CardDescription>Master list of all manufactured components.</CardDescription>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="relative w-full md:w-[300px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search parts..."
                      className="pl-9 h-9 bg-background/50 border-border/50 focus:ring-primary/20 transition-all text-sm"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <Select value={castingTypeFilter} onValueChange={setCastingTypeFilter}>
                    <SelectTrigger className="h-9 w-full md:w-[180px] bg-background/50 border-border/50 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Filter className="h-3.5 w-3.5" />
                        <SelectValue placeholder="Type" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ALL">All Types</SelectItem>
                      <SelectItem value="SAND">Sand</SelectItem>
                      <SelectItem value="INVESTMENT">Investment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <>
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Part No</TableHead>
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Description</TableHead>
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Casting Type</TableHead>
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Materials</TableHead>
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Drawing Ref</TableHead>
                        <TableHead className="w-12 font-semibold text-muted-foreground uppercase text-xs tracking-wider"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {parts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                            No parts found matching your filters.
                          </TableCell>
                        </TableRow>
                      ) : (
                        parts.map((part) => (
                          <TableRow
                            key={part.id}
                            className="cursor-pointer hover:bg-muted/40 transition-colors"
                            onClick={() => setSelectedPart(part)}
                          >
                            <TableCell className="font-medium">{part.partNo}</TableCell>
                            <TableCell>{part.description}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{part.castingType}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {part.materials?.length > 0 ? (
                                  part.materials.map((m, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-[10px] px-1.5 py-0">
                                      {m.material?.name}: {Number(m.ratio)}%
                                    </Badge>
                                  ))
                                ) : "-"}
                              </div>
                            </TableCell>
                            <TableCell>
                              {part.drawingRef ? (
                                <a href={part.drawingRef} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" onClick={(e) => e.stopPropagation()}>
                                  View
                                </a>
                              ) : (
                                "-"
                              )}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>

                  <div className="flex items-center justify-between px-4 py-4 border-t border-border/50 bg-muted/10">
                    <div className="text-sm text-muted-foreground">
                      Showing page {page} of {totalPages}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page <= 1}>
                        <ChevronLeft className="h-4 w-4 mr-1" /> Prev
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>
                        Next <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="max-w-4xl glass-effect">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
              <CardTitle className="text-xl">Add New Part</CardTitle>
              <CardDescription>Enter details and technical specifications to create a new part.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Basic Information</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="partNo">Part Number <span className="text-red-500">*</span></Label>
                    <Input
                      id="partNo"
                      value={formData.partNo}
                      onChange={(e) => setFormData({ ...formData, partNo: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
                    <Input
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="castingType">Casting Type <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.castingType}
                      onValueChange={(v) => setFormData({ ...formData, castingType: v as any })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SAND">Sand Casting</SelectItem>
                        <SelectItem value="INVESTMENT">Investment Casting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Drawing Ref / Image URL</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Upload a drawing file"
                        value={formData.drawingRef}
                        disabled
                        className="flex-1"
                      />
                      <div className="relative">
                        <Input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleFileSelect}
                        />
                        <Button variant="outline" type="button">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Material Composition</h3>
                  <div className="space-y-3">
                    {formData.materials.map((m, idx) => (
                      <div key={idx} className="flex gap-2 items-end bg-muted/30 p-2 rounded-lg relative group">
                        <div className="flex-1 grid gap-1.5">
                          <Label className="text-[10px] text-muted-foreground">Material</Label>
                          <Select
                            value={m.materialId}
                            onValueChange={(val) => handleMaterialChange(idx, "materialId", val)}
                          >
                            <SelectTrigger className="h-8">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {materials?.map((mat) => (
                                <SelectItem key={mat.id} value={mat.id}>{mat.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="w-20 grid gap-1.5">
                          <Label className="text-[10px] text-muted-foreground">Ratio %</Label>
                          <Input
                            type="text"
                            inputMode="decimal"
                            className="h-8"
                            value={m.ratio}
                            onChange={(e) => handleMaterialChange(idx, "ratio", e.target.value)}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleRemoveMaterial(idx)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={handleAddMaterial} className="w-full border-dashed h-8">
                      <Plus className="h-3 w-3 mr-1" /> Add Material
                    </Button>
                    {formData.materials.length > 0 && (
                      <p className="text-[10px] text-right text-muted-foreground">
                        Total: {formData.materials.reduce((sum, m) => sum + Number(m.ratio), 0)}%
                      </p>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-1.5">
                      <Label className="text-xs">Length ({formData.specifications.unit})</Label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        className="h-8"
                        value={formData.specifications.length}
                        onChange={(e) => setFormData(prev => ({ ...prev, specifications: { ...prev.specifications, length: sanitizeDecimal(e.target.value) } }))}
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs">Width ({formData.specifications.unit})</Label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        className="h-8"
                        value={formData.specifications.width}
                        onChange={(e) => setFormData(prev => ({ ...prev, specifications: { ...prev.specifications, width: sanitizeDecimal(e.target.value) } }))}
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs">Height ({formData.specifications.unit})</Label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        className="h-8"
                        value={formData.specifications.height}
                        onChange={(e) => setFormData(prev => ({ ...prev, specifications: { ...prev.specifications, height: sanitizeDecimal(e.target.value) } }))}
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs">Weight (kg)</Label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        className="h-8"
                        value={formData.specifications.weight}
                        onChange={(e) => setFormData(prev => ({ ...prev, specifications: { ...prev.specifications, weight: sanitizeDecimal(e.target.value) } }))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button onClick={handleCreate} disabled={createPartMutation.isPending} className="w-full md:w-auto px-8">
                  {createPartMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  <Save className="mr-2 h-4 w-4" /> Create Part
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PartDetailView({
  part,
  onBack,
  isAdminOrExecutive,
  materialsList
}: {
  part: Part,
  onBack: () => void,
  isAdminOrExecutive: boolean,
  materialsList: Material[]
}) {
  const updatePartMutation = useUpdatePart(part.id);
  const [drawingFile, setDrawingFile] = useState<File | null>(null);

  const [partData, setPartData] = useState({
    partNo: part.partNo,
    description: part.description,
    castingType: part.castingType,
    materials: part.materials?.map(m => ({ materialId: m.materialId, ratio: String(Number(m.ratio)) })) || [],
    specifications: {
      length: part.specifications?.length !== null ? String(Number(part.specifications?.length)) : "0",
      width: part.specifications?.width !== null ? String(Number(part.specifications?.width)) : "0",
      height: part.specifications?.height !== null ? String(Number(part.specifications?.height)) : "0",
      weight: part.specifications?.weight !== null ? String(Number(part.specifications?.weight)) : "0",
      unit: part.specifications?.unit || "mm",
      tolerance: part.specifications?.tolerance || "",
      surfaceFinish: part.specifications?.surfaceFinish || "",
    },
    drawingRef: part.drawingRef || "",
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDrawingFile(file);
      setPartData(prev => ({ ...prev, drawingRef: file.name }));
      toast.success("Drawing selected for update");
    }
  };

  const handleAddMaterial = () => {
    setPartData(prev => ({
      ...prev,
      materials: [...prev.materials, { materialId: "", ratio: "0" }]
    }));
  };

  const handleRemoveMaterial = (index: number) => {
    setPartData(prev => ({
      ...prev,
      materials: prev.materials.filter((_, i) => i !== index)
    }));
  };

  const handleMaterialChange = (index: number, field: "materialId" | "ratio", value: string) => {
    const newMaterials = [...partData.materials];
    const val = field === "ratio" ? sanitizeDecimal(value) : value;
    newMaterials[index] = { ...newMaterials[index], [field]: val };
    setPartData(prev => ({ ...prev, materials: newMaterials }));
  };

  const handleUpdatePart = async () => {
    try {
      if (!partData.partNo.trim()) {
        toast.error("Part Number is required");
        return;
      }
      if (!partData.description.trim()) {
        toast.error("Description is required");
        return;
      }

      const totalRatio = partData.materials.reduce((sum, m) => sum + Number(m.ratio), 0);
      if (partData.materials.length > 0 && Math.abs(totalRatio - 100) > 0.01) {
        toast.error(`Total composition ratio must be 100% (currently ${totalRatio}%)`);
        return;
      }

      const payload: any = {
        ...partData,
        materials: partData.materials.map(m => ({ ...m, ratio: Number(m.ratio) })),
        specifications: {
          ...partData.specifications,
          length: Number(partData.specifications.length),
          width: Number(partData.specifications.width),
          height: Number(partData.specifications.height),
          weight: Number(partData.specifications.weight),
        }
      };

      if (drawingFile) {
        payload.file = drawingFile;
      }
      await updatePartMutation.mutateAsync(payload);
      toast.success("Part updated successfully");
      setDrawingFile(null);
    } catch (error) {
      toast.error("Failed to update part");
    }
  };

  return (
    <div className="w-full p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 pb-6 border-b border-border/50">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={onBack} className="rounded-xl">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-primary">Part Details: {part.partNo}</h1>
            <p className="text-muted-foreground text-sm">Manage part info, specifications and routing.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2 glass-effect h-fit">
          <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
            <CardTitle className="text-xl">Part Information</CardTitle>
            <CardDescription>General information and specifications.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="partNo">Part Number<span className="text-red-500">*</span></Label>
                  <Input
                    id="partNo"
                    value={partData.partNo}
                    onChange={(e) => setPartData({ ...partData, partNo: e.target.value })}
                    disabled={!isAdminOrExecutive}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description<span className="text-red-500">*</span></Label>
                  <Input
                    id="description"
                    value={partData.description}
                    onChange={(e) => setPartData({ ...partData, description: e.target.value })}
                    disabled={!isAdminOrExecutive}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="castingType">Casting Type<span className="text-red-500">*</span></Label>
                  <Select
                    value={partData.castingType}
                    onValueChange={(v) => setPartData({ ...partData, castingType: v as any })}
                    disabled={!isAdminOrExecutive}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SAND">Sand Casting</SelectItem>
                      <SelectItem value="INVESTMENT">Investment Casting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Drawing / Technical Ref</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Upload file"
                      value={partData.drawingRef}
                      disabled
                      className="flex-1"
                    />
                    {isAdminOrExecutive && (
                      <div className="relative">
                        <Input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleFileSelect}
                        />
                        <Button variant="outline" type="button">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  {partData.drawingRef && !drawingFile && (
                    <a href={partData.drawingRef} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 inline-flex items-center gap-1">
                      View Current Drawing
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label className="text-xs">Weight (kg)</Label>
                    <Input
                      type="text"
                      inputMode="decimal"
                      value={partData.specifications.weight}
                      onChange={(e) => setPartData(prev => ({ ...prev, specifications: { ...prev.specifications, weight: sanitizeDecimal(e.target.value) } }))}
                      disabled={!isAdminOrExecutive}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label className="text-xs">Surface Finish</Label>
                    <Input
                      value={partData.specifications.surfaceFinish}
                      onChange={(e) => setPartData(prev => ({ ...prev, specifications: { ...prev.specifications, surfaceFinish: e.target.value } }))}
                      disabled={!isAdminOrExecutive}
                      placeholder="e.g. Ra 3.2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Dimensions & Tolerances</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-1.5">
                  <Label className="text-xs">Length ({partData.specifications.unit})</Label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={partData.specifications.length}
                    onChange={(e) => setPartData(prev => ({ ...prev, specifications: { ...prev.specifications, length: sanitizeDecimal(e.target.value) } }))}
                    disabled={!isAdminOrExecutive}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label className="text-xs">Width ({partData.specifications.unit})</Label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={partData.specifications.width}
                    onChange={(e) => setPartData(prev => ({ ...prev, specifications: { ...prev.specifications, width: sanitizeDecimal(e.target.value) } }))}
                    disabled={!isAdminOrExecutive}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label className="text-xs">Height ({partData.specifications.unit})</Label>
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={partData.specifications.height}
                    onChange={(e) => setPartData(prev => ({ ...prev, specifications: { ...prev.specifications, height: sanitizeDecimal(e.target.value) } }))}
                    disabled={!isAdminOrExecutive}
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label className="text-xs">Tolerance</Label>
                  <Input
                    value={partData.specifications.tolerance}
                    onChange={(e) => setPartData(prev => ({ ...prev, specifications: { ...prev.specifications, tolerance: e.target.value } }))}
                    disabled={!isAdminOrExecutive}
                    placeholder="e.g. +/- 0.5mm"
                  />
                </div>
              </div>
            </div>

            {isAdminOrExecutive && (
              <div className="flex justify-end pt-4">
                <Button onClick={handleUpdatePart} disabled={updatePartMutation.isPending} className="px-8">
                  {updatePartMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  <Save className="h-4 w-4 mr-2" /> Save Information
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="glass-effect h-fit">
          <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
            <CardTitle className="text-xl">Material Composition</CardTitle>
            <CardDescription>Composition of alloys/materials.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              {partData.materials.map((m, idx) => (
                <div key={idx} className="flex gap-2 items-end bg-muted/30 p-2 rounded-lg relative group">
                  <div className="flex-1 grid gap-1.5">
                    <Label className="text-[10px] text-muted-foreground">Material</Label>
                    <Select
                      value={m.materialId}
                      onValueChange={(val) => handleMaterialChange(idx, "materialId", val)}
                      disabled={!isAdminOrExecutive}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {materialsList?.map((mat) => (
                          <SelectItem key={mat.id} value={mat.id}>{mat.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-20 grid gap-1.5">
                    <Label className="text-[10px] text-muted-foreground">Ratio %</Label>
                    <Input
                      type="text"
                      inputMode="decimal"
                      className="h-8"
                      value={m.ratio}
                      onChange={(e) => handleMaterialChange(idx, "ratio", e.target.value)}
                      disabled={!isAdminOrExecutive}
                    />
                  </div>
                  {isAdminOrExecutive && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemoveMaterial(idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {isAdminOrExecutive && (
                <Button variant="outline" size="sm" onClick={handleAddMaterial} className="w-full border-dashed h-8">
                  <Plus className="h-3 w-3 mr-1" /> Add Material
                </Button>
              )}
              {partData.materials.length > 0 && (
                <div className="flex justify-between items-center text-xs font-medium px-2">
                  <span>Total Composition</span>
                  <span className={Math.abs(partData.materials.reduce((sum, m) => sum + Number(m.ratio), 0) - 100) > 0.01 ? "text-destructive" : "text-primary"}>
                    {partData.materials.reduce((sum, m) => sum + Number(m.ratio), 0)}%
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <RoutingSection partId={part.id} isAdminOrExecutive={isAdminOrExecutive} />
    </div>
  );
}

function RoutingSection({ partId, isAdminOrExecutive }: { partId: string, isAdminOrExecutive: boolean }) {
  const { routing, loading: routingLoading, refetch } = useRoutingForPart(partId);
  const upsertRoutingMutation = useUpsertRouting(partId);
  const { machines } = useMachines(1, 100);

  const [steps, setSteps] = useState<{
    stepOrder: number;
    operationName: string;
    defaultMachineType?: string;
    defaultMachineId?: string;
    estimatedMinutes: string;
  }[]>([]);

  useEffect(() => {
    if (routing) {
      setSteps(routing.steps.map(s => ({
        stepOrder: s.stepOrder,
        operationName: s.operationName,
        defaultMachineType: s.defaultMachineType || "",
        defaultMachineId: s.defaultMachineId || "",
        estimatedMinutes: String(s.estimatedMinutes || 0)
      })));
    } else {
      setSteps([]);
    }
  }, [routing]);

  const handleAddStep = () => {
    setSteps([...steps, { stepOrder: steps.length + 1, operationName: "", defaultMachineType: "", defaultMachineId: "", estimatedMinutes: "0" }]);
  };

  const handleRemoveStep = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index).map((s, i) => ({ ...s, stepOrder: i + 1 }));
    setSteps(newSteps);
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    const newSteps = [...steps];
    const val = field === "estimatedMinutes" ? sanitizeInteger(value) : value;
    (newSteps[index] as any)[field] = val;

    // If machine is selected, automatically set the type if possible
    if (field === "defaultMachineId" && value !== "manual") {
      const selectedMachine = machines.find(m => m.id === value);
      if (selectedMachine) {
        newSteps[index].defaultMachineType = selectedMachine.machineType;
      }
    } else if (field === "defaultMachineId" && value === "manual") {
      newSteps[index].defaultMachineType = "Manual";
    }

    setSteps(newSteps);
  };

  const handleSave = async () => {
    if (steps.length === 0) {
      toast.error("Routing template must have at least one step");
      return;
    }

    // Validation
    for (const step of steps) {
      if (!step.operationName.trim()) {
        toast.error(`Step ${step.stepOrder}: Operation Name is required`);
        return;
      }
      if (!step.defaultMachineId || step.defaultMachineId === "none") {
        toast.error(`Step ${step.stepOrder}: Please select a specific machine or "Manual Operation"`);
        return;
      }
      const mins = Number(step.estimatedMinutes);
      if (isNaN(mins) || mins <= 0) {
        toast.error(`Step ${step.stepOrder}: Estimated Minutes must be a positive number`);
        return;
      }
    }

    try {
      await upsertRoutingMutation.mutateAsync({
        steps: steps.map(s => ({
          ...s,
          estimatedMinutes: Number(s.estimatedMinutes),
          defaultMachineId: s.defaultMachineId === "manual" ? undefined : s.defaultMachineId
        }))
      });
      toast.success("Routing template updated");
      refetch();
    } catch (error) {
      toast.error("Failed to update routing template");
    }
  };

  const loadTemplate = (type: "SAND" | "INVESTMENT") => {
    const sandTemplate = [
      { stepOrder: 1, operationName: "Moulding", defaultMachineType: "Moulding Machine", defaultMachineId: "", estimatedMinutes: "60" },
      { stepOrder: 2, operationName: "Core Setting", defaultMachineType: "Manual", defaultMachineId: "manual", estimatedMinutes: "30" },
      { stepOrder: 3, operationName: "Pouring", defaultMachineType: "Furnace", defaultMachineId: "", estimatedMinutes: "15" },
      { stepOrder: 4, operationName: "Knockout", defaultMachineType: "Knockout Machine", defaultMachineId: "", estimatedMinutes: "20" },
      { stepOrder: 5, operationName: "Shot Blasting", defaultMachineType: "Shot Blast", defaultMachineId: "", estimatedMinutes: "15" },
      { stepOrder: 6, operationName: "Fettling", defaultMachineType: "Grinder", defaultMachineId: "", estimatedMinutes: "45" },
    ];
    const investmentTemplate = [
      { stepOrder: 1, operationName: "Wax Injection", defaultMachineType: "Wax Injector", defaultMachineId: "", estimatedMinutes: "10" },
      { stepOrder: 2, operationName: "Tree Assembly", defaultMachineType: "Manual", defaultMachineId: "manual", estimatedMinutes: "20" },
      { stepOrder: 3, operationName: "Shelling", defaultMachineType: "Dipping Tank", defaultMachineId: "", estimatedMinutes: "120" },
      { stepOrder: 4, operationName: "Dewaxing", defaultMachineType: "Autoclave", defaultMachineId: "", estimatedMinutes: "60" },
      { stepOrder: 5, operationName: "Pouring", defaultMachineType: "Furnace", defaultMachineId: "", estimatedMinutes: "15" },
      { stepOrder: 6, operationName: "Shell Removal", defaultMachineType: "Vibrator", defaultMachineId: "", estimatedMinutes: "30" },
    ];
    setSteps(type === "SAND" ? sandTemplate : investmentTemplate);
  };

  return (
    <Card className="glass-effect">
      <CardHeader className="bg-muted/20 border-b border-border/50 pb-4 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">Routing Template</CardTitle>
          <CardDescription>Sequence of manufacturing operations for this part.</CardDescription>
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => loadTemplate("SAND")} disabled={!isAdminOrExecutive}>Load Sand Template</Button>
          <Button variant="outline" size="sm" onClick={() => loadTemplate("INVESTMENT")} disabled={!isAdminOrExecutive}>Load Investment Template</Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {routingLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Order</TableHead>
                    <TableHead>Operation Name <span className="text-red-500">*</span></TableHead>
                    <TableHead>Default Machine <span className="text-red-500">*</span></TableHead>
                    <TableHead>Est. Minutes <span className="text-red-500">*</span></TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {steps.map((step, index) => (
                    <TableRow key={index}>
                      <TableCell>{step.stepOrder}</TableCell>
                      <TableCell>
                        <Input
                          value={step.operationName}
                          onChange={(e) => handleStepChange(index, "operationName", e.target.value)}
                          placeholder="e.g. Moulding"
                          disabled={!isAdminOrExecutive}
                          required
                        />
                      </TableCell>
                      <TableCell>
                        <Select
                          value={step.defaultMachineId || "none"}
                          onValueChange={(val) => handleStepChange(index, "defaultMachineId", val)}
                          disabled={!isAdminOrExecutive}
                        >
                          <SelectTrigger className="w-full min-w-[200px]">
                            <SelectValue placeholder="Select machine" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manual">Manual Operation</SelectItem>
                            {machines.map(m => (
                              <SelectItem key={m.id} value={m.id}>
                                {m.name} ({m.machineType})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {step.defaultMachineType && !step.defaultMachineId && (
                          <p className="text-[10px] text-muted-foreground mt-1 ml-1">
                            Type Hint: {step.defaultMachineType}
                          </p>
                        )}
                      </TableCell>
                      <TableCell>
                        <Input
                          type="text"
                          inputMode="numeric"
                          value={step.estimatedMinutes}
                          onChange={(e) => handleStepChange(index, "estimatedMinutes", e.target.value)}
                          disabled={!isAdminOrExecutive}
                          required
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive"
                          onClick={() => handleRemoveStep(index)}
                          disabled={!isAdminOrExecutive}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" size="sm" onClick={handleAddStep} disabled={!isAdminOrExecutive}>
                <Plus className="h-4 w-4 mr-2" /> Add Step
              </Button>
              {isAdminOrExecutive && (
                <Button onClick={handleSave} disabled={upsertRoutingMutation.isPending}>
                  {upsertRoutingMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  <Save className="h-4 w-4 mr-2" /> Save Routing Template
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
