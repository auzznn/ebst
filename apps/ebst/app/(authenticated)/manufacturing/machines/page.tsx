"use client";

import { useMachines, useCreateMachine } from "@/hooks/useMachines";
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
import { Plus as PlusIcon, Loader2 as LoaderIcon, List, Save, Factory, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export default function MachinesPage() {
  const [page, setPage] = useState(1);
  const { machines, loading, totalPages } = useMachines(page);
  const createMachineMutation = useCreateMachine();
  const { data: session } = authClient.useSession();
  const isAdminOrExecutive = session?.user?.role === "ADMIN" || session?.user?.role === "EXECUTIVE";

  const [activeTab, setActiveTab] = useState("list");
  const [formData, setFormData] = useState({
    name: "",
    machineType: "",
    isActive: true,
  });

  const handleCreate = async () => {
    try {
      await createMachineMutation.mutateAsync(formData);
      toast.success("Machine created successfully");
      setFormData({ name: "", machineType: "", isActive: true });
      setActiveTab("list");
    } catch (error) {
      toast.error("Failed to create machine");
    }
  };

  return (
    <div className="w-full p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 pb-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary/5 text-primary rounded-xl border border-primary/10 shadow-sm">
            <Factory className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Machine Registry</h1>
        </div>
        <p className="text-muted-foreground text-lg ml-[3.25rem]">Monitor and manage factory floor equipment and status.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px] h-12 p-1 bg-muted/40 rounded-xl border border-border/50">
          <TabsTrigger value="list" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
            <List className="h-4 w-4" /> Machine List
          </TabsTrigger>
          <TabsTrigger value="create" className="flex items-center gap-2 h-full rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all" disabled={!isAdminOrExecutive}>
            <PlusIcon className="h-4 w-4" /> Add Machine
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="glass-effect">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
              <CardTitle className="text-xl">All Machines</CardTitle>
              <CardDescription>Registry of all manufacturing equipment.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex justify-center p-8">
                  <LoaderIcon className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <>
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Name</TableHead>
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Type</TableHead>
                        <TableHead className="font-semibold text-muted-foreground uppercase text-xs tracking-wider">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {machines.map((machine) => (
                        <TableRow key={machine.id} className="hover:bg-muted/40 transition-colors">
                          <TableCell className="font-medium">{machine.name}</TableCell>
                          <TableCell>{machine.machineType}</TableCell>
                          <TableCell>
                            <Badge variant={machine.isActive ? "secondary" : "destructive"} className={machine.isActive ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-emerald-900/40 dark:text-emerald-400 border border-green-200 dark:border-emerald-800/60" : "font-medium"}>
                              {machine.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
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
          <Card className="max-w-2xl glass-effect">
            <CardHeader className="bg-muted/20 border-b border-border/50 pb-4">
              <CardTitle className="text-xl">Add New Machine</CardTitle>
              <CardDescription>Register a new piece of equipment on the factory floor.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Machine Name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Furnace #1"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Machine Type</Label>
                <Input
                  id="type"
                  placeholder="e.g. Melting Furnace"
                  value={formData.machineType}
                  onChange={(e) => setFormData({ ...formData, machineType: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-2 py-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                />
                <Label htmlFor="isActive">Active / Operational</Label>
              </div>
              <div className="pt-4 flex justify-end">
                <Button onClick={handleCreate} disabled={createMachineMutation.isPending} className="w-full md:w-auto">
                  {createMachineMutation.isPending && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
                  <Save className="mr-2 h-4 w-4" /> Register Machine
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
