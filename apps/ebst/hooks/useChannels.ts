
import api from "@/lib/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { authClient } from "@/lib/auth-client"

export type Channel = {
    id: string
    name: string | null
    isDM: boolean | null
    createdAt: string
    members: { user: {id: string; name: string; email: string; image: string | null}}[]
    messages: { id: string; content: string; createdAt: string}[]
}

export type CreateChannelDto = {
    name?: string
    isDM: boolean
    memberIds: string[]
}

//fetch all channels for the user
export function useChannels() {
    const { data: session } = authClient.useSession()

    return useQuery({
        queryKey: ['channels', session?.user?.id],
        queryFn: async () => {
            const res = await api.get<Channel[]>('/channels')
            return res.data
        },
        enabled: !!session?.user?.id
    })
}
//fetch single channel
export function useChannel(id: string) {
  const { data: session } = authClient.useSession()

  return useQuery({
    queryKey: ['channels', id, session?.user?.id],
    queryFn: async () => {
      const res = await api.get<Channel>(`/channels/${id}`)
      return res.data
    },
    enabled: !!id && !!session?.user?.id,
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