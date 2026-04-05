
import api from "@/lib/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export type Channel = {
    id: string
    name: string | null
    isDM: boolean | null
    createdAt: string
    members: { user: {id: string; name: string; email: string}}[]
    messages: { id: string; content: string; createdAt: string}[]
}

export type CreateChannelDto = {
    name?: string
    isDM: boolean
    memberIds: string[]
}

//fetch all channels for the user
export function useChannels() {
    return useQuery({
        queryKey: ['channels'],
        queryFn: async () => {
            const res = await api.get<Channel[]>('/channels')
            return res.data
        }
    })
}
//fetch single channel
export function useChannel(id: string) {
  return useQuery({
    queryKey: ['channels', id],
    queryFn: async () => {
      const res = await api.get<Channel>(`/channels/${id}`)
      return res.data
    },
    enabled: !!id,
  })
}


export function useCreateChannel() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (dto: CreateChannelDto) => {
            const res = await api.post<Channel>('/channels', dto)
            return res.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['channels']})
        }
    })
}