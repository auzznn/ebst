import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';

export interface Supplier {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  createdAt: string;
}

export const useSuppliers = () => {
  const queryClient = useQueryClient();

  const suppliersQuery = useQuery({
    queryKey: ['suppliers'],
    queryFn: async () => {
      const { data } = await api.get<Supplier[]>('/suppliers');
      return data;
    },
  });

  const createSupplierMutation = useMutation({
    mutationFn: async (newSupplier: Partial<Supplier>) => {
      const { data } = await api.post('/suppliers', newSupplier);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
    },
  });

  const updateSupplierMutation = useMutation({
    mutationFn: async ({ id, ...data }: Partial<Supplier> & { id: string }) => {
      const resp = await api.patch(`/suppliers/${id}`, data);
      return resp.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
    },
  });

  return {
    suppliers: suppliersQuery.data || [],
    isLoading: suppliersQuery.isLoading,
    isError: suppliersQuery.isError,
    createSupplier: createSupplierMutation.mutateAsync,
    updateSupplier: updateSupplierMutation.mutateAsync,
  };
};