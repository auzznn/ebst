"use client";

import { useState } from "react";
import {
  FileText,
  Upload,
  Plus,
  Search,
  Trash2,
  Download,
  Eye,
  FileSpreadsheet,
  File as FileIcon,
  MoreVertical,
  Filter,
  Loader2,
  Component
} from "lucide-react";
import { useDocuments } from "@/hooks/useDocuments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatDate";
import { toast } from "sonner";

export default function DocumentsPage() {
  const {
    documents,
    isLoading,
    uploadFileDirect,
    registerDocument,
    getDownloadUrl,
    deleteDocument
  } = useDocuments();

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState<string>("INVOICE");

  const filteredDocs = documents?.filter((doc) => {
    const matchesSearch = doc.fileName.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterType === "all" || doc.documentType === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      // 1. Upload directly to backend (which streams to R2)
      const { key } = await uploadFileDirect.mutateAsync(formData);

      // 2. Register metadata with backend
      await registerDocument.mutateAsync({
        key,
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        size: selectedFile.size,
        documentType: documentType as any,
        metadata: {},
      });

      setIsUploadOpen(false);
      setSelectedFile(null);
      toast.success("Document uploaded successfully");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload document");
    } finally {
      setUploading(false);
    }
  };

  const handleView = async (key: string) => {
    try {
      const url = await getDownloadUrl.mutateAsync(key);
      window.open(url, "_blank");
    } catch (error) {
      toast.error("Failed to get view link");
    }
  };

  const handleDownload = async (key: string) => {
    try {
      const url = await getDownloadUrl.mutateAsync(key);
      const link = document.createElement("a");
      link.href = url;
      link.download = key.split("/").pop() || "document";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error("Failed to download file");
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "INVOICE":
        return <FileText className="h-4 w-4 text-blue-500" />;
      case "PURCHASE_ORDER":
        return <FileSpreadsheet className="h-4 w-4 text-emerald-500" />;
      case "DELIVERY_NOTE":
        return <FileIcon className="h-4 w-4 text-amber-500" />;
      case "DRAWING":
        return <Component className="h-4 w-4 text-purple-500" />;
      default:
        return <FileIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Files Management</h1>
          <p className="text-muted-foreground">Manage your invoices, POs, drawings, and delivery notes.</p>
        </div>

        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md">
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Document</DialogTitle>
              <DialogDescription>
                Select a file and categorize it for your records.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Document Type</label>
                <Select value={documentType} onValueChange={setDocumentType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INVOICE">Invoice</SelectItem>
                    <SelectItem value="PURCHASE_ORDER">Purchase Order</SelectItem>
                    <SelectItem value="DELIVERY_NOTE">Delivery Note</SelectItem>
                    <SelectItem value="DRAWING">Part Drawing</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">File</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${selectedFile ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'
                    }`}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  />
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  {selectedFile ? (
                    <p className="text-sm font-medium text-primary">{selectedFile.name}</p>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Click to select or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PDF, PNG, JPG (max 10MB)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsUploadOpen(false)}
                disabled={uploading}
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className="min-w-[100px]"
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  "Upload"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-linear-to-br from-blue-500/5 to-transparent border-blue-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-600">Total Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents?.filter(d => d.documentType === 'INVOICE').length || 0}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-linear-to-br from-emerald-500/5 to-transparent border-emerald-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-emerald-600">Purchase Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents?.filter(d => d.documentType === 'PURCHASE_ORDER').length || 0}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-linear-to-br from-purple-500/5 to-transparent border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-600">Part Drawings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents?.filter(d => d.documentType === 'DRAWING').length || 0}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-linear-to-br from-amber-500/5 to-transparent border-amber-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-600">Delivery Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents?.filter(d => d.documentType === 'DELIVERY_NOTE').length || 0}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card className="border-none shadow-sm bg-background/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Document List</CardTitle>
              <CardDescription>Recent business documents and attachments.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search files..."
                  className="pl-9 w-[200px] md:w-[300px] bg-background"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <FilterTypeSelect value={filterType} onValueChange={setFilterType} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[30%]">File Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Uploaded By</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell colSpan={6}>
                        <div className="h-10 bg-muted animate-pulse rounded" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : filteredDocs?.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-64 text-center">
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <FileIcon className="h-12 w-12 mb-4 opacity-20" />
                        <p className="text-lg font-medium">No documents found</p>
                        <p className="text-sm">Try adjusting your filters or upload a new document.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredDocs?.map((doc) => (
                    <TableRow key={doc.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-background border shadow-sm`}>
                            {getIcon(doc.documentType)}
                          </div>
                          <span className="truncate max-w-[200px] md:max-w-none">{doc.fileName}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="font-normal capitalize">
                          {doc.documentType.replace('_', ' ').toLowerCase()}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{doc.user?.name || "Me"}</span>
                          {doc.user?.role && (
                            <span className="text-[10px] text-muted-foreground uppercase">{doc.user.role}</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(doc.createdAt)}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {(doc.size / 1024 / 1024).toFixed(2)} MB
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem onClick={() => handleView(doc.key)}>
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDownload(doc.key)}>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => deleteDocument.mutate(doc.key)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FilterTypeSelect({ value, onValueChange }: { value: string, onValueChange: (v: string) => void }) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[150px] bg-background">
        <Filter className="h-4 w-4 mr-2" />
        <SelectValue placeholder="All Types" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Types</SelectItem>
        <SelectItem value="INVOICE">Invoices</SelectItem>
        <SelectItem value="PURCHASE_ORDER">Purchase Orders</SelectItem>
        <SelectItem value="DRAWING">Part Drawings</SelectItem>
        <SelectItem value="DELIVERY_NOTE">Delivery Notes</SelectItem>
        <SelectItem value="OTHER">Others</SelectItem>
      </SelectContent>
    </Select>
  );
}
