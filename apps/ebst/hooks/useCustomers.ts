import api from "@/lib/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export type CustomersResult = {
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
}

export type CreateCustomerData = {
    name: string,
    email: string,
    phone: string,
    address: string,
}

export function useCustomerSearch(query: string) {
    return useQuery({
        queryKey: ['customers', query, 'search'],
        queryFn: async () => {
            const res = await api.get<CustomersResult[]>('/customers/search', {
                params: { q: query }
            });
            return res.data;
        },
        enabled: query.length > 1,
        staleTime: 1000 * 60 * 5
    })
}

export function useCreateCustomer() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreateCustomerData) => {
            const res = await api.post<CustomersResult>('/customers', data);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['customers'] });
        }
    })
}