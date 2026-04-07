'use client'

import { useEffect, useRef, useState } from 'react'
import { getSocket } from '@/lib/socket'
import { Message } from './useMessages'
import { Channel } from './useChannels'
import { useQueryClient } from '@tanstack/react-query'

export function useSocket(channelId: string) {
  const socket = getSocket()
  const queryClient = useQueryClient()
  const [isConnected, setIsConnected] = useState(false)
  const [typingUsers, setTypingUsers] = useState<string[]>([])
  const typingTimeout = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    socket.connect()

    socket.on('connect', () => {
      setIsConnected(true)
      socket.emit('join_room', channelId)
    })

    socket.on('disconnect', () => setIsConnected(false))

    socket.on('new_message', (message: Message) => {
      // 1. Append to the messages list for the open chat — same as before
      queryClient.setQueryData<Message[]>(
        ['messages', channelId],
        (old) => [message, ...(old ?? [])],
      )

      // 2. Also update messages[0] in the channels list cache so preview updates instantly
      queryClient.setQueryData<Channel[]>(
        ['channels'],
        (old) =>
          old?.map((ch) =>
            ch.id === channelId
              ? {
                  ...ch,
                  messages: [
                    {
                      id: message.id,
                      content: message.content,
                      createdAt: message.createdAt,
                    },
                  ],
                }
              : ch,
          ) ?? [],
      )
    })

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