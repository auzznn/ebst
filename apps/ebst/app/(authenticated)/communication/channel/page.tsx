import { MessageSquare } from 'lucide-react'

export default function ChannelsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
      <MessageSquare className="w-10 h-10 text-muted-foreground" />
      <p className="font-medium">Select a channel</p>
      <p className="text-sm text-muted-foreground">
        Choose a channel from the list to start messaging
      </p>
    </div>
  )
}