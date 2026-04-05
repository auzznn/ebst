'use client'

import { useEffect, useRef, useState } from 'react'
import { getSocket } from '@/lib/socket'
import { Message } from './useMessages'
import { useQueryClient } from '@tanstack/react-query'

export function useSocket(channelId: string) {
  const socket = getSocket()
  const queryClient = useQueryClient()
  const [isConnected, setIsConnected] = useState(false)
  const [typingUsers, setTypingUsers] = useState<string[]>([])
  const typingTimeout = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    // Connect and join room
    socket.connect()

    socket.on('connect', () => {
      setIsConnected(true)
      socket.emit('join_room', channelId)
    })

    socket.on('disconnect', () => setIsConnected(false))

    // Incoming message — append to TanStack Query cache directly
    socket.on('new_message', (message: Message) => {
      queryClient.setQueryData<Message[]>(
        ['messages', channelId],
        (old) => [message, ...(old ?? [])],
      )
    })

    // Typing indicators
    socket.on('user_typing', ({ userId }: { userId: string }) => {
      setTypingUsers((prev) =>
        prev.includes(userId) ? prev : [...prev, userId],
      )
      clearTimeout(typingTimeout.current)
      typingTimeout.current = setTimeout(() => {
        setTypingUsers((prev) => prev.filter((id) => id !== userId))
      }, 2000)
    })

    return () => {
      socket.emit('leave_room', channelId)
      socket.off('connect')
      socket.off('disconnect')
      socket.off('new_message')
      socket.off('user_typing')
      socket.disconnect()
    }
  }, [channelId])

  function sendMessage(content: string) {
    socket.emit('send_message', {
      channelId,
      content,
      type: 'text',
    })
  }

  function sendTyping(userId: string) {
    socket.emit('typing', { channelId, userId })
  }

  return { isConnected, typingUsers, sendMessage, sendTyping }
}