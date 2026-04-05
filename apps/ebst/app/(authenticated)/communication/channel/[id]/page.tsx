'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { useMessages, useDeleteMessage } from '@/hooks/useMessages'
import { useChannel } from '@/hooks/useChannels'
import { useSocket } from '@/hooks/useSocket'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Trash2, Send, Wifi, WifiOff } from 'lucide-react'
import { authClient } from '@/lib/auth-client'  // your better-auth client hook
import { cn } from '@/lib/utils'

export default function ChannelPage() {
  const { id } = useParams<{ id: string }>()
  const { data: session } = authClient.useSession()
  const { data: channel } = useChannel(id)
  const { data: messages, isLoading } = useMessages(id)
  const deleteMessage = useDeleteMessage(id)
  const { isConnected, typingUsers, sendMessage, sendTyping } = useSocket(id)

  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend() {
    if (!input.trim()) return
    sendMessage(input.trim())
    setInput('')
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    } else {
      sendTyping(session?.user.id ?? '')
    }
  }

  return (
    <div className="flex flex-col h-screen max-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-lg">
            {channel?.isDM ? 'Direct Message' : `# ${channel?.name}`}
          </h2>
          <Badge variant="outline" className="text-xs gap-1">
            {channel?.members.length} members
          </Badge>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          {isConnected
            ? <><Wifi className="w-3.5 h-3.5 text-green-500" /> connected</>
            : <><WifiOff className="w-3.5 h-3.5 text-destructive" /> disconnected</>
          }
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {isLoading && (
          <p className="text-center text-sm text-muted-foreground">
            Loading messages...
          </p>
        )}

        {/* Messages come back newest-first, reverse to show oldest at top */}
        {[...(messages ?? [])].reverse().map((message) => {
          const isOwn = message.sender.id === session?.user.id

          return (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3 group',
                isOwn && 'flex-row-reverse',
              )}
            >
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">
                {message.sender.name[0].toUpperCase()}
              </div>

              {/* Bubble */}
              <div className={cn('max-w-sm space-y-1', isOwn && 'items-end flex flex-col')}>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-medium">
                    {message.sender.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(message.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
                <div
                  className={cn(
                    'px-4 py-2 rounded-2xl text-sm',
                    isOwn
                      ? 'bg-primary text-primary-foreground rounded-tr-sm'
                      : 'bg-muted rounded-tl-sm',
                  )}
                >
                  {message.content}
                </div>
              </div>

              {/* Delete (own messages only) */}
              {isOwn && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 w-6 h-6 text-muted-foreground hover:text-destructive"
                  onClick={() => deleteMessage.mutate(message.id)}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
          )
        })}

        {/* Typing indicator */}
        {typingUsers.length > 0 && (
          <p className="text-xs text-muted-foreground italic">
            {typingUsers.length === 1
              ? 'Someone is typing...'
              : `${typingUsers.length} people are typing...`}
          </p>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder={`Message ${channel?.isDM ? '' : `#${channel?.name}`}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={!isConnected}
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!input.trim() || !isConnected}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}