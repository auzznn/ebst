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
  supplierId?: string;
  supplier?: {
    id: string;
    name: string;
  };
  unitCost?: number;
  createdAt: string;
}

export const useInventory = () => {
  const queryClient = useQueryClient();

  const materialsQuery = useQuery({
    queryKey: ['materials'],
    queryFn: async () => {
      const { data } = await api.get<Material[]>('/inventory/materials');
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
    materials: materialsQuery.data || [],
    isLoading: materialsQuery.isLoading,
    isError: materialsQuery.isError,
    createMaterial: createMaterialMutation.mutateAsync,
    adjustStock: adjustStockMutation.mutateAsync,
    allocateMaterial: allocateMaterialMutation.mutateAsync,
  };
};
