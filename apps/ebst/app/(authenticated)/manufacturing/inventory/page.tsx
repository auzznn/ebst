"use client";

import { useState } from "react";
import { useInventory, Material } from "@/hooks/useInventory";
import { useSuppliers, Supplier } from "@/hooks/useSuppliers";
import { useJobCards } from "@/hooks/useJobs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Plus, ArrowUpRight, Package, List, Save, Edit3, Phone, Mail, MapPin, Info, Tag, Hash, Scale, Building2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function InventoryPage() {
  const { materials, isLoading: isInventoryLoading, createMaterial, adjustStock, allocateMaterial } = useInventory();
  const { suppliers, isLoading: isSuppliersLoading, createSupplier, updateSupplier } = useSuppliers();
  const { jobs } = useJobCards();
  const [activeTab, setActiveTab] = useState("list");
  const [isAdjustDialogOpen, setIsAdjustDialogOpen] = useState(false);
  const [isAllocateDialogOpen, setIsAllocateDialogOpen] = useState(false);
  const [isCreateSupplierDialogOpen, setIsCreateSupplierDialogOpen] = useState(false);
  const [isEditSupplierDialogOpen, setIsEditSupplierDialogOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

  const [newMaterial, setNewMaterial] = useState({
    name: "",
    code: "",
    unit: "KG",
    reorderThreshold: 0,
    reorderQty: 0,
    description: "",
    supplierId: "none",
  });

  const [newSupplier, setNewSupplier] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [editSupplier, setEditSupplier] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [adjustment, setAdjustment] = useState({
    qty: 0,
    reason: "Stock receipt",
  });

  const [allocation, setAllocation] = useState({
    jobListId: "",
    qty: 0,
  });

  const handleAddMaterial = async () => {
    try {
      const payload: Record<string, string | number> = { ...newMaterial, unitCost: 0 };
      if (payload.supplierId === "none") {
        delete payload.supplierId;
      }
      await createMaterial(payload);
      toast.success("Material added successfully");
      setNewMaterial({ name: "", code: "", unit: "KG", reorderThreshold: 0, reorderQty: 0, description: "", supplierId: "none" });
      setActiveTab("list");
    } catch (error) {
      toast.error("Failed to add material");
    }
  };

  const handleCreateSupplier = async () => {
    try {
      const payload = {
        name: newSupplier.name,
        ...(newSupplier.phone ? { phone: newSupplier.phone } : {}),
        ...(newSupplier.email ? { email: newSupplier.email } : {}),
        ...(newSupplier.address ? { address: newSupplier.address } : {}),
      };
      const created = await createSupplier(payload);
      toast.success("Supplier added successfully");
      setNewSupplier({ name: "", phone: "", email: "", address: "" });
      setIsCreateSupplierDialogOpen(false);
      setNewMaterial(prev => ({ ...prev, supplierId: created.id }));
    } catch (error) {
      toast.error("Failed to add supplier");
    }
  };

  const handleUpdateSupplier = async () => {
    if (!selectedSupplier) return;
    try {
      await updateSupplier({
        id: selectedSupplier.id,
        ...(editSupplier.name ? { name: editSupplier.name } : {}),
        ...(editSupplier.phone ? { phone: editSupplier.phone } : {}),
        ...(editSupplier.email ? { email: editSupplier.email } : {}),
        ...(editSupplier.address ? { address: editSupplier.address } : {}),
      });
      toast.success("Supplier updated successfully");
      setIsEditSupplierDialogOpen(false);
    } catch (error) {
      toast.error(`Failed to update supplier ${error}`);
    }
  };

  const handleAdjustStock = async () => {
    if (!selectedMaterial) return;
    try {
      await adjustStock({ id: selectedMaterial.id, qty: adjustment.qty, reason: adjustment.reason });
      setIsAdjustDialogOpen(false);
      toast.success("Stock adjusted successfully");
    } catch (error) {
      toast.error("Failed to adjust stock");
    }
  };

  const handleAllocateMaterial = async () => {
    if (!selectedMaterial) return;
    try {
      await allocateMaterial({
        materialId: selectedMaterial.id,
        jobListId: allocation.jobListId,
        qty: allocation.qty,
      });
      setIsAllocateDialogOpen(false);
      toast.success("Material allocated to job");
    } catch (error) {
      toast.error("Failed to allocate material");
    }
  };

  const openEditSupplier = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setEditSupplier({
      name: supplier.name,
      phone: supplier.phone || "",
      email: supplier.email || "",
      address: supplier.address || "",
    });
    setIsEditSupplierDialogOpen(true);
  };

  if (isInventoryLoading || isSuppliersLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 pb-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary/5 text-primary rounded-xl border border-primary/10 shadow-sm">
            <Package className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Inventory Management</h1>
        </div>
        <p className="text-muted-foreground text-lg ml-13">Manage raw materials, adjust stock, and allocate to job cards in real-time.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px] h-12 p-1 bg-muted/40 rounded-xl border border-border/50">
          <TabsTrigger value="list" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
            <List className="h-4 w-4" /> Stock List
          </TabsTrigger>
          <TabsTrigger value="create" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
            <Plus className="h-4 w-4" /> Add Material
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="glass-effect">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <List className="h-5 w-5 text-primary" /> Material Stock
              </CardTitle>
              <CardDescription>Current stock levels and reorder status.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Code</TableHead>
                    <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Material Name</TableHead>
                    <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Stock Qty</TableHead>
                    <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Unit</TableHead>
                    <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Supplier</TableHead>
                    <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Status</TableHead>
                    <TableHead className="text-right font-semibold text-muted-foreground uppercase text-xs tracking-wider">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materials.map((m) => (
                    <TableRow key={m.id} className="hover:bg-muted/40 transition-colors">
                      <TableCell className="font-medium">{m.code}</TableCell>
                      <TableCell>{m.name}</TableCell>
                      <TableCell>{Number(m.stockQty).toFixed(2)}</TableCell>
                      <TableCell>{m.unit}</TableCell>
                      <TableCell>{m.supplier?.name || "-"}</TableCell>
                      <TableCell>
                        {Number(m.stockQty) <= Number(m.reorderThreshold) ? (
                          <Badge variant="destructive" className="rounded-md font-medium">Low Stock</Badge>
                        ) : (
                          <Badge variant="secondary" className="rounded-md font-medium bg-green-100 text-green-800 hover:bg-green-200 dark:bg-emerald-900/40 dark:text-emerald-400 dark:hover:bg-emerald-900/60 border border-green-200 dark:border-emerald-800/60">Healthy</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right space-x-2 p-3">
                        <Button variant="outline" size="sm" onClick={() => { setSelectedMaterial(m); setIsAdjustDialogOpen(true); }} className="hover:bg-primary/5 hover:text-primary transition-colors">
                          <ArrowUpRight className="h-4 w-4 mr-1" /> Adjust
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => { setSelectedMaterial(m); setIsAllocateDialogOpen(true); }} className="hover:bg-primary/5 hover:text-primary transition-colors">
                          <Package className="h-4 w-4 mr-1" /> Allocate
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 glass-effect flex flex-col border-primary/20">
              <CardHeader className=" border-b border-primary/10 pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary">
                  <Plus className="h-5 w-5" /> New Material Entry
                </CardTitle>
                <CardDescription>Register a new material to the global inventory database.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Row 1 - Identity */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                      Material Name
                    </Label>
                    <Input id="name" placeholder="e.g. Aluminum 6061-T6" value={newMaterial.name} onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })} className="h-11 bg-background/50 focus:bg-background transition-all" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-sm font-semibold flex items-center gap-2">
                      Product Code
                    </Label>
                    <Input id="code" placeholder="e.g. RM-ALU-001" value={newMaterial.code} onChange={(e) => setNewMaterial({ ...newMaterial, code: e.target.value })} className="h-11 bg-background/50 focus:bg-background transition-all" />
                  </div>

                  {/* Row 2 - Metrics */}
                  <div className="space-y-2">
                    <Label htmlFor="unit" className="text-sm font-semibold flex items-center gap-2">
                      Measurement Unit
                    </Label>
                    <Select value={newMaterial.unit} onValueChange={(v) => setNewMaterial({ ...newMaterial, unit: v })}>
                      <SelectTrigger className="h-11 bg-background/50 focus:bg-background transition-all">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="KG">Kilogram (KG)</SelectItem>
                        <SelectItem value="GRAM">Gram (GRAM)</SelectItem>
                        <SelectItem value="LITRE">Litre (LITRE)</SelectItem>
                        <SelectItem value="PIECE">Piece (PIECE)</SelectItem>
                        <SelectItem value="METRE">Metre (METRE)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="threshold" className="text-sm font-semibold flex items-center gap-2">
                      Reorder Threshold
                    </Label>
                    <Input id="threshold" type="number" placeholder="0.00" value={newMaterial.reorderThreshold} onChange={(e) => setNewMaterial({ ...newMaterial, reorderThreshold: Number(e.target.value) })} className="h-11 bg-background/50 focus:bg-background transition-all border-orange-500/20 focus:border-orange-500" />
                  </div>

                  {/* Row 3 - Procurement (Full Width) */}
                  <div className="md:col-span-2 space-y-2 pt-2 border-t border-border/50">
                    <Label htmlFor="supplier" className="text-sm font-semibold flex items-center gap-2">
                      Primary Supplier
                    </Label>
                    <Select value={newMaterial.supplierId} onValueChange={(v) => setNewMaterial({ ...newMaterial, supplierId: v })}>
                      <SelectTrigger className="h-11 bg-background/50 focus:bg-background transition-all">
                        <SelectValue placeholder="Select supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Supplier Assigned</SelectItem>
                        {suppliers.map(s => (
                          <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4" />
                    <span>All fields are required for accurate reporting.</span>
                  </div>
                  <Button onClick={handleAddMaterial} disabled={!newMaterial.name || !newMaterial.code} className="w-full md:w-[200px] h-12 text-base shadow-lg shadow-primary/20">
                    <Save className="mr-2 h-5 w-5" /> Save Material
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full glass-effect flex flex-col border-border/50 shadow-xl shadow-black/5">
              <CardHeader className="bg-muted/10 border-b border-border/50 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-muted-foreground" /> Suppliers
                    </CardTitle>
                    <CardDescription>Active procurement sources.</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setIsCreateSupplierDialogOpen(true)} className="h-8 rounded-full border-primary/20 hover:border-primary/50 text-primary">
                    <Plus className="mr-1 h-3.5 w-3.5" /> Add
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-auto">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="font-semibold text-muted-foreground uppercase text-[10px] tracking-widest pl-6">Vendor Name</TableHead>
                      <TableHead className="font-semibold text-muted-foreground uppercase text-[10px] tracking-widest text-right pr-6">Contact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {suppliers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={2} className="text-center text-muted-foreground h-32 italic">No suppliers in database.</TableCell>
                      </TableRow>
                    ) : (
                      suppliers.map((s) => (
                        <TableRow
                          key={s.id}
                          onClick={() => openEditSupplier(s)}
                          className="group cursor-pointer hover:bg-primary/5 transition-all"
                        >
                          <TableCell className="font-semibold pl-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                {s.name.substring(0, 2).toUpperCase()}
                              </div>
                              {s.name}
                            </div>
                          </TableCell>
                          <TableCell className="text-right pr-6 py-4">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <Edit3 className="h-4 w-4 text-primary" />
                              </Button>
                              <div className="flex flex-col text-[11px] text-muted-foreground justify-center group-hover:hidden">
                                {s.phone && <span>{s.phone}</span>}
                                {s.email && <span>{s.email}</span>}
                                {!s.email && !s.phone && <span>N/A</span>}
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Adjust Stock Dialog */}
      <Dialog open={isAdjustDialogOpen} onOpenChange={setIsAdjustDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adjust Stock: {selectedMaterial?.name}</DialogTitle>
            <DialogDescription>Add or remove stock manually from the central inventory.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="adj-qty" className="text-right">Quantity</Label>
              <Input id="adj-qty" type="number" value={adjustment.qty} onChange={(e) => setAdjustment({ ...adjustment, qty: Number(e.target.value) })} className="col-span-3" placeholder="Positive to add, negative to remove" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reason" className="text-right">Reason</Label>
              <Input id="reason" value={adjustment.reason} onChange={(e) => setAdjustment({ ...adjustment, reason: e.target.value })} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAdjustStock} className="w-full">Apply Adjustment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Allocate to Job Dialog */}
      <Dialog open={isAllocateDialogOpen} onOpenChange={setIsAllocateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Allocate to Job: {selectedMaterial?.name}</DialogTitle>
            <DialogDescription>Assign this material to an active job list for processing.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="job" className="text-right">Job Card</Label>
              <Select onValueChange={(v) => setAllocation({ ...allocation, jobListId: v })}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Job List" />
                </SelectTrigger>
                <SelectContent>
                  {jobs.filter(j => j.status !== 'COMPLETED' && j.status !== 'CANCELLED').flatMap(j =>
                    j.jobLists.map(jl => {
                      const partNo = jl.lineItem?.part?.partNo || jl.part?.partNo || "Unknown Part";
                      return (
                        <SelectItem key={jl.id} value={jl.id}>
                          {j.jobNo} - {partNo} (Qty: {jl.quantity})
                        </SelectItem>
                      );
                    })
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="alloc-qty" className="text-right">Quantity</Label>
              <Input id="alloc-qty" type="number" value={allocation.qty} onChange={(e) => setAllocation({ ...allocation, qty: Number(e.target.value) })} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAllocateMaterial} className="w-full">Allocate Material</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create Supplier Dialog */}
      <Dialog open={isCreateSupplierDialogOpen} onOpenChange={setIsCreateSupplierDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary font-bold">
              <Plus className="h-5 w-5" /> Create New Supplier
            </DialogTitle>
            <DialogDescription>Add a new vendor to your procurement database.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="supp-name" className="text-sm font-semibold">Vendor Name <span className="text-red-500">*</span></Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="supp-name" value={newSupplier.name} onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="e.g. Global Tech Solutions" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="supp-phone" className="text-sm font-semibold">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="supp-phone" value={newSupplier.phone} onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="+60 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="supp-email" className="text-sm font-semibold">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="supp-email" type="email" value={newSupplier.email} onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="contact@vendor.com" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="supp-addr" className="text-sm font-semibold">Office Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="supp-addr" value={newSupplier.address} onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="Street, City, State, ZIP" />
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2 pt-2 border-t mt-4">
            <Button variant="outline" onClick={() => setIsCreateSupplierDialogOpen(false)} className="flex-1">Cancel</Button>
            <Button onClick={handleCreateSupplier} disabled={!newSupplier.name} className="flex-1 shadow-lg shadow-primary/20">Create Supplier</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Supplier Dialog */}
      <Dialog open={isEditSupplierDialogOpen} onOpenChange={setIsEditSupplierDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary font-bold">
              <Edit3 className="h-5 w-5" /> Edit Supplier: {selectedSupplier?.name}
            </DialogTitle>
            <DialogDescription>Modify vendor contact information and address.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-supp-name" className="text-sm font-semibold">Vendor Name <span className="text-red-500">*</span></Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="edit-supp-name" value={editSupplier.name} onChange={(e) => setEditSupplier({ ...editSupplier, name: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="e.g. Global Tech Solutions" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-supp-phone" className="text-sm font-semibold">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="edit-supp-phone" value={editSupplier.phone} onChange={(e) => setEditSupplier({ ...editSupplier, phone: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="+60 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-supp-email" className="text-sm font-semibold">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="edit-supp-email" type="email" value={editSupplier.email} onChange={(e) => setEditSupplier({ ...editSupplier, email: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="contact@vendor.com" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-supp-addr" className="text-sm font-semibold">Office Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="edit-supp-addr" value={editSupplier.address} onChange={(e) => setEditSupplier({ ...editSupplier, address: e.target.value })} className="pl-9 h-10 bg-background/50 focus:bg-background transition-all" placeholder="Street, City, State, ZIP" />
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2 pt-2 border-t mt-4">
            <Button variant="outline" onClick={() => setIsEditSupplierDialogOpen(false)} className="flex-1">Cancel</Button>
            <Button onClick={handleUpdateSupplier} className="flex-1 shadow-lg shadow-primary/20">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
