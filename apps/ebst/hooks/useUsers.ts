import api from "@/lib/api"
import { useQuery } from "@tanstack/react-query"

export type UserResult = {
    id: string,
    name: string,
    email: string,
    displayUsername: string,
    image: string | null
}

export function useUserSearch(query: string) {
    return useQuery({
        queryKey: ['users', 'search', query],
        queryFn: async () => {
            const res = await api.get<UserResult[]>('/users/search', {
                params: {q: query},
            })
            return res.data
        },
        enabled: query.length > 1,
        staleTime: 1000 * 30
    })
}