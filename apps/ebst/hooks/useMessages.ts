import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'

export type Message = {
  id: string
  content: string
  type: string
  fileUrl: string | null
  createdAt: string
  sender: { id: string; name: string; email: string; image?: string | null }
}

// Fetch message history for a channel
export function useMessages(channelId: string) {
  return useQuery({
    queryKey: ['messages', channelId],
    queryFn: async () => {
      const res = await api.get<Message[]>(`/messages/${channelId}`)
      return res.data
    },
    enabled: !!channelId,
  })
}

// Delete a message
export function useDeleteMessage(channelId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (messageId: string) => {
      await api.delete(`/messages/${messageId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages', channelId] })
    },
  })
}