import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';

export interface Material {
  id: string;
  name: string;
  code: string;
  description?: string;
  unit: string;
  stockQty: number;
  reorderThreshold: number;
  reorderQty: number;
  supplierId?: string | null;
  supplier?: {
    id: string;
    name: string;
  };
  unitCost?: number;
  createdAt: string;
}

export const useInventory = (page: number = 1, limit: number = 10) => {
  const queryClient = useQueryClient();

  const materialsQuery = useQuery({
    queryKey: ['materials', page, limit],
    queryFn: async () => {
      const { data } = await api.get<{ data: Material[], meta: { totalPages: number, page: number, total: number } }>('/inventory/materials', { params: { page, limit } });
      return data;
    },
  });

  const createMaterialMutation = useMutation({
    mutationFn: async (newMaterial: Partial<Material>) => {
      const { data } = await api.post('/inventory/materials', newMaterial);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['materials'] });
    },
  });

  const updateMaterialMutation = useMutation({
    mutationFn: async ({ id, ...data }: Partial<Material> & { id: string }) => {
      const { data: response } = await api.patch(`/inventory/materials/${id}`, data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['materials'] });
    },
  });

  const adjustStockMutation = useMutation({
    mutationFn: async ({ id, qty, reason }: { id: string; qty: number; reason: string }) => {
      const { data } = await api.post(`/inventory/materials/${id}/adjust`, { qty, reason });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['materials'] });
    },
  });

  const allocateMaterialMutation = useMutation({
    mutationFn: async (allocation: { jobListId: string; materialId: string; qty: number; operationId?: string }) => {
      const { data } = await api.post('/inventory/job-allocation', allocation);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['materials'] });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });

  return {
    materials: materialsQuery.data?.data || [],
    totalPages: materialsQuery.data?.meta?.totalPages ?? 1,
    isLoading: materialsQuery.isLoading,
    isError: materialsQuery.isError,
    createMaterial: createMaterialMutation.mutateAsync,
    updateMaterial: updateMaterialMutation.mutateAsync,
    adjustStock: adjustStockMutation.mutateAsync,
    allocateMaterial: allocateMaterialMutation.mutateAsync,
  };
};

export interface StockLedgerEntry {
  id: string;
  materialId: string;
  transactionType: 'RECEIPT' | 'ADJUSTMENT' | 'USAGE' | 'RETURN';
  qtyChange: number;
  balanceAfter: number;
  reason?: string;
  referenceId?: string;
  userId?: string;
  user?: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export const useMaterialDetails = (id: string) => {
  return useQuery({
    queryKey: ['material', id],
    queryFn: async () => {
      const { data } = await api.get<Material>(`/inventory/materials/${id}`);
      return data;
    },
    enabled: !!id,
  });
};

export const useMaterialLedger = (id: string, page: number = 1, limit: number = 20) => {
  return useQuery({
    queryKey: ['material-ledger', id, page, limit],
    queryFn: async () => {
      const { data } = await api.get<{ data: StockLedgerEntry[], meta: { totalPages: number, page: number, total: number } }>(`/inventory/materials/${id}/ledger`, { params: { page, limit } });
      return data;
    },
    enabled: !!id,
  });
};
