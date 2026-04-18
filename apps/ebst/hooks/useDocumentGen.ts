import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { toast } from "sonner";

// ─── Types ────────────────────────────────────────────────────────

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
  customerId: string;
  poNo: string;
  date: string;
  items: InvoiceItemData[];
}

export type InvoiceStatus = "UNPAID" | "PAID" | "PARTIAL" | "CANCELLED";

export interface InvoiceResult {
  id: string;
  invoiceNo: string;
  date: string;
  poNo: string | null;
  status: InvoiceStatus;
  dppHargaJual: number;
  dppNilaiLain: number;
  ppn: number;
  total: number;
  createdAt: string;
  updatedAt: string;
  customer: {
    id: string;
    name: string;
    email: string;
  };
  items: Array<{
    id: string;
    no: number;
    partNo: string | null;
    description: string;
    unitPrice: number;
    qty: number;
    qtyUnit: string;
    amount: number;
  }>;
  document: {
    id: string;
    key: string;
    fileName: string;
  } | null;
  createdBy: {
    id: string;
    name: string;
    role: string;
  };
}

// ─── Hooks ────────────────────────────────────────────────────────

/** Fetch the full invoice list from DB. */
export function useInvoices() {
  return useQuery<InvoiceResult[]>({
    queryKey: ["invoices"],
    queryFn: async () => {
      const res = await api.get("/document-gen/invoice");
      return res.data;
    },
  });
}

/** Generate a new invoice PDF + save to DB. */
export function useDocumentGen() {
  const queryClient = useQueryClient();

  const generateInvoice = useMutation({
    mutationFn: async (data: GenerateInvoiceData) => {
      const res = await api.post("/document-gen/invoice", data);
      return res.data as { invoice: InvoiceResult; url: string };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      toast.success("Invoice generated successfully");

      // Auto open the PDF snapshot
      if (data.url) {
        window.open(data.url, "_blank");
      }
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to generate invoice");
    },
  });

  return { generateInvoice };
}

/** Update the payment status of an invoice. */
export function useUpdateInvoiceStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: InvoiceStatus }) => {
      const res = await api.patch(`/document-gen/invoice/${id}/status`, { status });
      return res.data as InvoiceResult;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      toast.success("Invoice status updated");
    },
    onError: () => {
      toast.error("Failed to update invoice status");
    },
  });
}
