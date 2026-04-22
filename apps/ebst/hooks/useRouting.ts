import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export interface RoutingStep {
  id: string;
  routingTemplateId: string;
  stepOrder: number;
  operationName: string;
  defaultMachineType: string | null;
  estimatedMinutes: number | null;
}

export interface RoutingTemplate {
  id: string;
  partId: string;
  steps: RoutingStep[];
}

export interface UpsertRoutingDto {
  steps: {
    stepOrder: number;
    operationName: string;
    defaultMachineType?: string;
    estimatedMinutes?: number;
  }[];
}

export function useRoutingForPart(partId: string) {
  const query = useQuery({
    queryKey: ["routing", partId],
    queryFn: async () => {
      const res = await api.get(`/routing/${partId}`);
      return res.data as RoutingTemplate;
    },
    enabled: !!partId,
  });

  return {
    routing: query.data ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useUpsertRouting(partId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpsertRoutingDto) => {
      const res = await api.put(`/routing/${partId}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["routing", partId] });
    },
  });
}
