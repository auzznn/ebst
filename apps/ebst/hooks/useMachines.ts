import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export interface Machine {
  id: string;
  name: string;
  machineType: string;
  isActive: boolean;
}

export interface CreateMachineDto {
  name: string;
  machineType: string;
  isActive?: boolean;
}

export function useMachines(page: number = 1, limit: number = 10) {
  const query = useQuery({
    queryKey: ["machines", page, limit],
    queryFn: async () => {
      const res = await api.get("/machines", { params: { page, limit } });
      return res.data as { data: Machine[], meta: { totalPages: number, page: number, total: number } };
    },
  });

  return {
    machines: query.data?.data ?? [],
    totalPages: query.data?.meta?.totalPages ?? 1,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useCreateMachine() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateMachineDto) => {
      const res = await api.post("/machines", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["machines"] });
    },
  });
}
