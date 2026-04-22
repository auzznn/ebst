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

export function useMachines() {
  const query = useQuery({
    queryKey: ["machines"],
    queryFn: async () => {
      const res = await api.get("/machines");
      return res.data as Machine[];
    },
  });

  return {
    machines: query.data ?? [],
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
