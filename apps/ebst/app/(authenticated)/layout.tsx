import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ModeToggle } from "@/components/ModeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden">
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <div className="flex flex-1 items-center justify-between">
            <p>eBST</p>
            <ModeToggle></ModeToggle>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto min-h-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
