import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Part {
  id: string;
  partNo: string;
  description: string;
  castingType: "INVESTMENT" | "SAND";
  material: string;
  drawingRef: string | null;
}

export interface PoLineItem {
  id: string;
  purchaseOrderId: string;
  partId: string;
  quantity: number;
  unitPrice: number;
  part: Part;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  customerId: string;
  dueDate: string;
  notes: string | null;
  createdAt: string;
  customer: Customer;
  lineItems: PoLineItem[];
}

export interface CreatePoDto {
  poNumber: string;
  customerId: string;
  dueDate: Date;
  notes?: string;
  lineItems: {
    partId: string;
    quantity: number;
    unitPrice: number;
  }[];
}

export function usePurchaseOrders() {
  const query = useQuery({
    queryKey: ["purchase-orders"],
    queryFn: async () => {
      const res = await api.get("/purchase-orders");
      return res.data as PurchaseOrder[];
    },
  });

  return {
    purchaseOrders: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function usePurchaseOrder(id: string) {
  const query = useQuery({
    queryKey: ["purchase-orders", id],
    queryFn: async () => {
      const res = await api.get(`/purchase-orders/${id}`);
      return res.data as PurchaseOrder;
    },
    enabled: !!id,
  });

  return {
    purchaseOrder: query.data ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useCreatePurchaseOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePoDto) => {
      const res = await api.post("/purchase-orders", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["purchase-orders"] });
    },
  });
}
