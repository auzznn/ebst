'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useChannels, useCreateChannel } from '@/hooks/useChannels'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Plus, Users } from 'lucide-react'

export default function ChannelsPage() {
  const router = useRouter()
  const { data: channels, isLoading, error } = useChannels()
  const createChannel = useCreateChannel()

  const [open, setOpen] = useState(false)
  const [channelName, setChannelName] = useState('')
  const [memberIds, setMemberIds] = useState('')   // comma-separated user IDs for testing

  function handleCreate() {
    createChannel.mutate(
      {
        name: channelName,
        isDM: false,
        memberIds: memberIds.split(',').map((id) => id.trim()).filter(Boolean),
      },
      {
        onSuccess: () => {
          setOpen(false)
          setChannelName('')
          setMemberIds('')
        },
      },
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground text-sm">Loading channels...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-destructive text-sm">Failed to load channels.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Channels</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New channel
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a channel</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-sm font-medium">Channel name</label>
                <Input
                  placeholder="e.g. general"
                  value={channelName}
                  onChange={(e) => setChannelName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Member IDs</label>
                <Input
                  placeholder="uuid1, uuid2, ..."
                  value={memberIds}
                  onChange={(e) => setMemberIds(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated user IDs to add to this channel
                </p>
              </div>
              <Button
                className="w-full"
                onClick={handleCreate}
                disabled={createChannel.isPending || !channelName}
              >
                {createChannel.isPending ? 'Creating...' : 'Create channel'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {channels?.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <MessageSquare className="w-10 h-10 text-muted-foreground mb-3" />
            <p className="font-medium">No channels yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Create one to start collaborating
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-2">
        {channels?.map((channel) => (
          <Card
            key={channel.id}
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() => router.push(`/communication/channel/${channel.id}`)}
          >
            <CardHeader className="py-4 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <CardTitle className="text-base font-medium">
                    {channel.isDM ? 'Direct Message' : `# ${channel.name}`}
                  </CardTitle>
                  {channel.isDM && (
                    <Badge variant="secondary" className="text-xs">DM</Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  {channel.members.length}
                </div>
              </div>
              {channel.messages[0] && (
                <p className="text-sm text-muted-foreground truncate pl-7">
                  {channel.messages[0].content}
                </p>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}