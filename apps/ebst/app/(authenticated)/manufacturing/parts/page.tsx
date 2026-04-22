"use client";

import { useParts, useCreatePart, useUpdatePart, Part } from "@/hooks/useParts";
import { useRoutingForPart, useUpsertRouting } from "@/hooks/useRouting";
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
import { Plus, Loader2, ArrowLeft, Save, Trash2, Edit, List, Component, Upload } from "lucide-react";
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

export default function PartsPage() {
  const { parts, loading, refetch: refetchParts } = useParts();
  const createPartMutation = useCreatePart();
  const { data: session } = authClient.useSession();
  const isAdminOrExecutive = session?.user?.role === "ADMIN" || session?.user?.role === "EXECUTIVE";

  const { data: materials } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await api.get("/inventory/materials");
      return res.data as Material[];
    }
  });

  const [activeTab, setActiveTab] = useState("list");
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [formData, setFormData] = useState({
    partNo: "",
    description: "",
    castingType: "SAND" as "SAND" | "INVESTMENT",
    materialId: "",
    drawingRef: "",
  });
  const [drawingFile, setDrawingFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setDrawingFile(file);
    toast.success("Drawing selected for upload");
  };

  const handleCreate = async () => {
    try {
      const payload: any = { ...formData };
      if (drawingFile) {
        payload.file = drawingFile;
      }
      await createPartMutation.mutateAsync(payload);
      toast.success("Part created successfully");
      setFormData({ partNo: "", description: "", castingType: "SAND", materialId: "", drawingRef: "" });
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
        materials={materials || []}
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
        <p className="text-muted-foreground text-lg ml-[3.25rem]">Manage master data for parts and components.</p>
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
              <CardTitle className="text-xl">All Parts</CardTitle>
              <CardDescription>Master list of all manufactured components.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Part No</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Description</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Casting Type</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Material</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Drawing Ref</TableHead>
                      <TableHead className="w-12 font-semibold text-muted-foreground uppercase text-xs tracking-wider"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {parts.map((part) => (
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
                        <TableCell>{part.material?.name || "-"}</TableCell>
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
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="max-w-2xl glass-effect">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
              <CardTitle className="text-xl">Add New Part</CardTitle>
              <CardDescription>Enter details to create a new part in the catalog.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="partNo">Part Number</Label>
                <Input
                  id="partNo"
                  value={formData.partNo}
                  onChange={(e) => setFormData({ ...formData, partNo: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="castingType">Casting Type</Label>
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
                <Label htmlFor="material">Material</Label>
                <Select
                  value={formData.materialId}
                  onValueChange={(value) => setFormData({ ...formData, materialId: value })}
                >
                  <SelectTrigger id="material">
                    <SelectValue placeholder="Select Material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials?.map((mat) => (
                      <SelectItem key={mat.id} value={mat.id}>{mat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Drawing Ref / Image URL</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="https://example.com/drawing.pdf"
                    value={formData.drawingRef}
                    onChange={(e) => setFormData({ ...formData, drawingRef: e.target.value })}
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
              <div className="pt-4 flex justify-end">
                <Button onClick={handleCreate} disabled={createPartMutation.isPending} className="w-full md:w-auto">
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
  materials
}: {
  part: Part,
  onBack: () => void,
  isAdminOrExecutive: boolean,
  materials: Material[]
}) {
  const updatePartMutation = useUpdatePart(part.id);
  const [drawingFile, setDrawingFile] = useState<File | null>(null);

  const [partData, setPartData] = useState({
    partNo: part.partNo,
    description: part.description,
    castingType: part.castingType,
    materialId: part.materialId || "",
    drawingRef: part.drawingRef || "",
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDrawingFile(file);
      toast.success("Drawing selected for update");
    }
  };

  const handleUpdatePart = async () => {
    try {
      const payload: any = { ...partData };
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
            <p className="text-muted-foreground text-sm">Manage part info and routing.</p>
          </div>
        </div>
      </div>

      <Card className="glass-effect">
        <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
          <CardTitle className="text-xl">Part Information</CardTitle>
          <CardDescription>Master data for this component.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="partNo">Part Number</Label>
              <Input
                id="partNo"
                value={partData.partNo}
                onChange={(e) => setPartData({ ...partData, partNo: e.target.value })}
                disabled={!isAdminOrExecutive}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={partData.description}
                onChange={(e) => setPartData({ ...partData, description: e.target.value })}
                disabled={!isAdminOrExecutive}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="castingType">Casting Type</Label>
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
            <div className="grid gap-2">
              <Label htmlFor="material">Material</Label>
              <Select
                value={partData.materialId}
                onValueChange={(value) => setPartData({ ...partData, materialId: value })}
                disabled={!isAdminOrExecutive}
              >
                <SelectTrigger id="material">
                  <SelectValue placeholder="Select Material" />
                </SelectTrigger>
                <SelectContent>
                  {materials?.map((mat) => (
                    <SelectItem key={mat.id} value={mat.id}>{mat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Drawing Ref / Image URL</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com/drawing.pdf"
                  value={partData.drawingRef}
                  onChange={(e) => setPartData({ ...partData, drawingRef: e.target.value })}
                  disabled={!isAdminOrExecutive}
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
              {drawingFile && (
                <p className="text-sm text-green-500 mt-1">New drawing selected: {drawingFile.name}</p>
              )}
              {partData.drawingRef && !drawingFile && (
                <a href={partData.drawingRef} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline mt-1">
                  View Current Drawing
                </a>
              )}
            </div>
          </div>
          {isAdminOrExecutive && (
            <div className="flex justify-end mt-4">
              <Button onClick={handleUpdatePart} disabled={updatePartMutation.isPending}>
                {updatePartMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <Save className="h-4 w-4 mr-2" /> Save Changes
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <RoutingSection partId={part.id} isAdminOrExecutive={isAdminOrExecutive} />
    </div>
  );
}

function RoutingSection({ partId, isAdminOrExecutive }: { partId: string, isAdminOrExecutive: boolean }) {
  const { routing, loading: routingLoading, refetch } = useRoutingForPart(partId);
  const upsertRoutingMutation = useUpsertRouting(partId);

  const [steps, setSteps] = useState<{
    stepOrder: number;
    operationName: string;
    defaultMachineType?: string;
    estimatedMinutes?: number;
  }[]>([]);

  useEffect(() => {
    if (routing) {
      setSteps(routing.steps.map(s => ({
        stepOrder: s.stepOrder,
        operationName: s.operationName,
        defaultMachineType: s.defaultMachineType || "",
        estimatedMinutes: s.estimatedMinutes || 0
      })));
    } else {
      setSteps([]);
    }
  }, [routing]);

  const handleAddStep = () => {
    setSteps([...steps, { stepOrder: steps.length + 1, operationName: "", defaultMachineType: "", estimatedMinutes: 0 }]);
  };

  const handleRemoveStep = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index).map((s, i) => ({ ...s, stepOrder: i + 1 }));
    setSteps(newSteps);
  };

  const handleStepChange = (index: number, field: string, value: any) => {
    const newSteps = [...steps];
    (newSteps[index] as any)[field] = value;
    setSteps(newSteps);
  };

  const handleSave = async () => {
    try {
      await upsertRoutingMutation.mutateAsync({ steps });
      toast.success("Routing template updated");
      refetch();
    } catch (error) {
      toast.error("Failed to update routing template");
    }
  };

  const loadTemplate = (type: "SAND" | "INVESTMENT") => {
    const sandTemplate = [
      { stepOrder: 1, operationName: "Moulding", defaultMachineType: "Moulding Machine", estimatedMinutes: 60 },
      { stepOrder: 2, operationName: "Core Setting", defaultMachineType: "Manual", estimatedMinutes: 30 },
      { stepOrder: 3, operationName: "Pouring", defaultMachineType: "Furnace", estimatedMinutes: 15 },
      { stepOrder: 4, operationName: "Knockout", defaultMachineType: "Knockout Machine", estimatedMinutes: 20 },
      { stepOrder: 5, operationName: "Shot Blasting", defaultMachineType: "Shot Blast", estimatedMinutes: 15 },
      { stepOrder: 6, operationName: "Fettling", defaultMachineType: "Grinder", estimatedMinutes: 45 },
    ];
    const investmentTemplate = [
      { stepOrder: 1, operationName: "Wax Injection", defaultMachineType: "Wax Injector", estimatedMinutes: 10 },
      { stepOrder: 2, operationName: "Tree Assembly", defaultMachineType: "Manual", estimatedMinutes: 20 },
      { stepOrder: 3, operationName: "Shelling", defaultMachineType: "Dipping Tank", estimatedMinutes: 120 },
      { stepOrder: 4, operationName: "Dewaxing", defaultMachineType: "Autoclave", estimatedMinutes: 60 },
      { stepOrder: 5, operationName: "Pouring", defaultMachineType: "Furnace", estimatedMinutes: 15 },
      { stepOrder: 6, operationName: "Shell Removal", defaultMachineType: "Vibrator", estimatedMinutes: 30 },
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Order</TableHead>
                  <TableHead>Operation Name</TableHead>
                  <TableHead>Default Machine Type</TableHead>
                  <TableHead>Est. Minutes</TableHead>
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
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={step.defaultMachineType}
                        onChange={(e) => handleStepChange(index, "defaultMachineType", e.target.value)}
                        placeholder="e.g. Furnace"
                        disabled={!isAdminOrExecutive}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={step.estimatedMinutes}
                        onChange={(e) => handleStepChange(index, "estimatedMinutes", Number(e.target.value))}
                        disabled={!isAdminOrExecutive}
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
