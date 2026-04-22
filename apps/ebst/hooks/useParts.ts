import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Material } from "./useJobs";

export interface Part {
  id: string;
  partNo: string;
  description: string;
  castingType: "INVESTMENT" | "SAND";
  materialId: string | null;
  material: Material | null;
  drawingRef: string | null;
  createdAt: string;
}

export interface CreatePartDto {
  partNo: string;
  description: string;
  castingType: "INVESTMENT" | "SAND";
  materialId?: string;
  drawingRef?: string;
  file?: File;
}

export interface UpdatePartDto extends Partial<CreatePartDto> {}

export function useParts() {
  const query = useQuery({
    queryKey: ["parts"],
    queryFn: async () => {
      const res = await api.get("/parts");
      return res.data as Part[];
    },
  });

  return {
    parts: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useCreatePart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePartDto) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value instanceof File ? value : String(value));
        }
      });
      const res = await api.post("/parts", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parts"] });
    },
  });
}

export function useUpdatePart(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdatePartDto) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value instanceof File ? value : String(value));
        }
      });
      const res = await api.patch(`/parts/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parts"] });
      queryClient.invalidateQueries({ queryKey: ["part", id] });
    },
  });
}

