import { ReactNode } from 'react'
import ChannelsPage from '@/components/ChannelPage'

export default function ChannelsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full overflow-hidden">

      {/* Left — channel list, fixed width, scrollable */}
      <aside className="w-72 md:w-80 shrink-0 border-r flex flex-col overflow-hidden">
        <ChannelsPage />
      </aside>

      {/* Right — chat panel fills remaining space */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>

    </div>
  )
}