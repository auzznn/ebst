import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import api from '@/lib/api'

export type Message = {
  id: string
  content: string
  type: string
  fileUrl: string | null
  createdAt: string
  sender: { id: string; name: string; email: string; image?: string | null }
}

export type MessagesResponse = {
  messages: Message[]
  nextCursor: string | null
}

// Fetch message history for a channel
export function useMessages(channelId: string) {
  return useInfiniteQuery({
    queryKey: ['messages', channelId],
    queryFn: async ({ pageParam }) => {
      // Send the cursor to your Prisma backend
      const res = await api.get(`/messages/${channelId}`, {
        params: { 
          cursor: pageParam,
          take: 30 
        }
      })
      return res.data // Should return { messages: [...], nextCursor: string | null }
    },
    initialPageParam: null, // First load has no cursor
    getNextPageParam: (lastPage) => lastPage.nextCursor,
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