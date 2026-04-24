import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export type JobCardStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "ON_HOLD" | "CANCELLED";
export type OperationStatus = "WAITING" | "QUEUED" | "IN_PROGRESS" | "COMPLETED" | "REJECTED";
export type QcResult = "PASS" | "REPAIR" | "REJECT";
export type FindingCategory = "DIMENSION" | "SURFACE" | "CHEMICAL" | "VISUAL" | "FUNCTIONAL" | "OTHER";

export interface QcFinding {
  id: string;
  category: FindingCategory;
  parameter: string;
  specification?: string | null;
  measuredValue?: string | null;
  unit?: string | null;
  description?: string | null;
  isConforming: boolean;
  document?: { id: string; fileName: string; key: string } | null;
}

export interface QcLog {
  result: QcResult;
  reason: string | null;
  loggedAt: string;
  inspector: { name: string };
  findings: QcFinding[];
}

export interface QcFindingInput {
  category: FindingCategory;
  parameter: string;
  specification?: string;
  measuredValue?: string;
  unit?: string;
  description?: string;
  isConforming: boolean;
  documentId?: string;
}

export interface Operation {
  id: string;
  jobListId: string;
  routingStepId: string;
  stepOrder: number;
  operationName: string;
  machineId: string | null;
  operatorId: string | null;
  status: OperationStatus;
  startedAt: string | null;
  completedAt: string | null;
  notes: string | null;
  machine?: { name: string; machineType: string };
  operator?: { name: string };
  qcLog?: QcLog;
  materialsUsed?: {
    id: string;
    qtyUsed: number;
    material: { name: string; unit: string; code: string };
  }[];
}

export interface Material {
  id: string;
  name: string;
  code: string;
  unit: string;
  stockQty: number;
}

export interface JobMaterial {
  id: string;
  materialId: string;
  quantity: number;
  material: Material;
}

export interface PartMaterial {
  id: string;
  partId: string;
  materialId: string;
  ratio: number;
  material: Material;
}

export interface PartSpecification {
  id: string;
  partId: string;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  weight?: number | null;
  unit: string;
  tolerance?: string | null;
  surfaceFinish?: string | null;
  otherSpecs?: any;
}

export interface Part {
  id: string;
  partNo: string;
  description: string;
  drawingRef?: string | null;
  material?: Material | null;
  materials?: PartMaterial[];
  specifications?: PartSpecification | null;
}

export interface JobList {
  id: string;
  jobCardId: string;
  partId: string | null;
  lineItemId: string | null;
  quantity: number;
  status: JobCardStatus;
  operations: Operation[];
  jobMaterials: JobMaterial[];
  part?: Part;
  lineItem?: {
    part: Part;
  };
}

export interface JobCard {
  id: string;
  jobNo: string;
  purchaseOrderId: string | null;
  status: JobCardStatus;
  createdAt: string;
  completedAt: string | null;
  createdBy: { name: string };
  jobLists: JobList[];
  purchaseOrder?: { poNumber: string; customer: { name: string } };
}

export interface CreateJobDto {
  purchaseOrderId?: string;
  jobNo?: string;
  items?: { partId: string; quantity: number }[];
  materials?: { materialId: string; quantity: number }[];
}

export function useJobCards(
  page: number = 1,
  limit: number = 10,
  startDate?: string,
  endDate?: string,
  status?: JobCardStatus,
  search?: string
) {
  const query = useQuery({
    queryKey: ["jobs", page, limit, startDate, endDate, status, search],
    queryFn: async () => {
      const res = await api.get("/jobs", { params: { page, limit, startDate, endDate, status, search } });
      return res.data as { data: JobCard[], meta: { totalPages: number, page: number, total: number } };
    },
  });

  return {
    jobs: query.data?.data ?? [],
    totalPages: query.data?.meta?.totalPages ?? 1,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useJobCardDetail(id: string) {
  const query = useQuery({
    queryKey: ["jobs", id],
    queryFn: async () => {
      const res = await api.get(`/jobs/${id}`);
      return res.data as JobCard;
    },
    enabled: !!id,
  });

  return {
    job: query.data ?? null,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}

export function useCreateJobCard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateJobDto) => {
      const res = await api.post("/jobs", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
}

export function useUpdateJobStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: JobCardStatus }) => {
      const res = await api.patch(`/jobs/${id}/status`, { status });
      return res.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["jobs", variables.id] });
    },
  });
}

export function useStartOperation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ operationId, machineId }: { operationId: string; machineId?: string }) => {
      const res = await api.patch(`/jobs/operations/${operationId}/start`, { machineId });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
}

export function useCompleteOperation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ operationId, notes }: { operationId: string; notes?: string }) => {
      const res = await api.patch(`/jobs/operations/${operationId}/complete`, { notes });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
}

export function useSubmitQc() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      operationId,
      result,
      reason,
      findings,
    }: {
      operationId: string;
      result: QcResult;
      reason?: string;
      findings?: QcFindingInput[];
    }) => {
      const res = await api.post(`/jobs/operations/${operationId}/qc`, { result, reason, findings });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
}

export function useAddJobMaterial() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ jobListId, materialId, quantity }: { jobListId: string, materialId: string, quantity: number }) => {
      const res = await api.post(`/jobs/items/${jobListId}/materials`, { materialId, quantity });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
}

export function useRemoveJobMaterial() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/jobs/materials/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
}

