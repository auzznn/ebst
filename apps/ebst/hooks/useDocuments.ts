import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { toast } from "sonner";

export interface BusinessDocument {
  id: string;
  key: string;
  fileName: string;
  fileType: string;
  size: number;
  documentType: "INVOICE" | "PURCHASE_ORDER" | "DELIVERY_NOTE" | "OTHER";
  createdAt: string;
  updatedAt: string;
  metadata: any;
  user?: {
    name: string;
    role: string;
  };
}

export function useDocuments() {
  const queryClient = useQueryClient();

  const { data: documents, isLoading } = useQuery<BusinessDocument[]>({
    queryKey: ["documents"],
    queryFn: async () => {
      const res = await api.get("/files");
      return res.data;
    },
  });

  const uploadFileDirect = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await api.post("/files/upload-direct", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data as { key: string };
    },
  });

  const getSignedUrlDirect = useMutation({
    mutationFn: async (key: string) => {
      const res = await api.get(`/files/asset/${encodeURIComponent(key)}`);
      return res.data.url as string;
    },
  });

  const registerDocument = useMutation({
    mutationFn: async (data: Omit<BusinessDocument, "id" | "createdAt" | "updatedAt" | "userId">) => {
      const res = await api.post("/files/register", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      toast.success("Document uploaded successfully");
    },
    onError: () => {
      toast.error("Failed to register document");
    },
  });

  const getDownloadUrl = useMutation({
    mutationFn: async (key: string) => {
      const res = await api.get(`/files/${encodeURIComponent(key)}/download`);
      return res.data.url as string;
    },
  });

  const deleteDocument = useMutation({
    mutationFn: async (key: string) => {
      await api.delete(`/files/${encodeURIComponent(key)}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      toast.success("Document deleted");
    },
    onError: () => {
      toast.error("Failed to delete document");
    },
  });

  return {
    documents,
    isLoading,
    uploadFileDirect,
    registerDocument,
    getDownloadUrl,
    getSignedUrlDirect,
    deleteDocument,
  };
}
