import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { toast } from "sonner";
import { BusinessDocument } from "./useDocuments";

export interface InvoiceItemData {
  no: number;
  partNo: string;
  description: string;
  unitPrice: number;
  qty: number;
  qtyUnit: string;
}

export interface GenerateInvoiceData {
  invoiceNo: string;
  to: string;
  poNo: string;
  date: string;
  items: InvoiceItemData[];
}

export function useDocumentGen() {
  const queryClient = useQueryClient();

  const generateInvoice = useMutation({
    mutationFn: async (data: GenerateInvoiceData) => {
      const res = await api.post("/document-gen/invoice", data);
      return res.data as { document: BusinessDocument; url: string };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      toast.success("Invoice generated successfully");

      // Auto open the generated document
      if (data.url) {
        window.open(data.url, "_blank");
      }
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to generate invoice");
    },
  });

  return {
    generateInvoice,
  };
}
