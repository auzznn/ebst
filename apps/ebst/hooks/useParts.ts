import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Material } from "./useJobs";

export interface PartMaterial {
  id: string;
  materialId: string;
  ratio: number;
  material: Material;
}

export interface PartSpecification {
  id: string;
  partId: string;
  length: number | null;
  width: number | null;
  height: number | null;
  weight: number | null;
  unit: string;
  tolerance: string | null;
  surfaceFinish: string | null;
  otherSpecs: any;
}

export interface Part {
  id: string;
  partNo: string;
  description: string;
  castingType: "INVESTMENT" | "SAND";
  drawingRef: string | null;
  createdAt: string;
  materials: PartMaterial[];
  specifications: PartSpecification | null;
}

export interface PartMaterialInput {
  materialId: string;
  ratio: number | string;
}

export interface PartSpecificationInput {
  length?: number | string;
  width?: number | string;
  height?: number | string;
  weight?: number | string;
  unit?: string;
  tolerance?: string;
  surfaceFinish?: string;
  otherSpecs?: any;
}

export interface CreatePartDto {
  partNo: string;
  description: string;
  castingType: "INVESTMENT" | "SAND";
  materials?: PartMaterialInput[];
  specifications?: PartSpecificationInput;
  file?: File;
}

export interface UpdatePartDto extends Partial<Omit<CreatePartDto, 'file'>> {
  file?: File;
}

function appendToFormData(formData: FormData, key: string, value: any) {
  if (value === undefined || value === null) return;

  if (value instanceof File) {
    formData.append(key, value);
  } else if (typeof value === 'object' || Array.isArray(value)) {
    formData.append(key, JSON.stringify(value));
  } else {
    formData.append(key, String(value));
  }
}

export function useParts(page: number = 1, limit: number = 10, search?: string, castingType?: string) {
  const query = useQuery({
    queryKey: ["parts", page, limit, search, castingType],
    queryFn: async () => {
      const res = await api.get("/parts", { params: { page, limit, search, castingType } });
      return res.data as { data: Part[], meta: { totalPages: number, page: number, total: number } };
    },
  });

  return {
    parts: query.data?.data ?? [],
    totalPages: query.data?.meta?.totalPages ?? 1,
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
        appendToFormData(formData, key, value);
      });
      const res = await api.post("/parts", formData);
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
        appendToFormData(formData, key, value);
      });
      const res = await api.patch(`/parts/${id}`, formData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parts"] });
      queryClient.invalidateQueries({ queryKey: ["part", id] });
    },
  });
}
