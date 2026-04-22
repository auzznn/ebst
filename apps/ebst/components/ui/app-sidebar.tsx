"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Home, User, ShelvingUnit, MessageSquare, Shield, Calculator, FileText, Folder, ChevronDown, Hammer, Cpu, Layers, ListChecks, ShoppingCart, Package } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import SignOutBtn from "../SignOutBtn";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Communication", url: "/communication/channel", icon: MessageSquare },
  { title: "Files", url: "/files", icon: Folder },
];

const ManufacturingItems = ({ session }: { session: any }) => {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip="Manufacturing">
            <Hammer />
            <span>Manufacturing</span>
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem key="Jobs">
              <SidebarMenuSubButton asChild>
                <Link href="/manufacturing/jobs">
                  <ListChecks />
                  <span>Job Cards</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem key="Parts">
              <SidebarMenuSubButton asChild>
                <Link href="/manufacturing/parts">
                  <Cpu />
                  <span>Parts Catalog</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem key="Machines">
              <SidebarMenuSubButton asChild>
                <Link href="/manufacturing/machines">
                  <ShelvingUnit />
                  <span>Machines</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
            <SidebarMenuSubItem key="Inventory">
              <SidebarMenuSubButton asChild>
                <Link href="/manufacturing/inventory">
                  <Package />
                  <span>Inventory</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

const AdministrativeItems = ({ session }: { session: any }) => {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip="Administrative">
            <ShelvingUnit />
            <span>Administrative</span>
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {menuItems.map((item) => (
              <SidebarMenuSubItem key={item.title}>
                <SidebarMenuSubButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
            {(session?.user.role === "EXECUTIVE" || session?.user.role === "FINANCE") && (
              <SidebarMenuSubItem key="Accounting">
                <SidebarMenuSubButton asChild>
                  <Link href="/accounting">
                    <Calculator />
                    <span>Accounting</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            )}
            <SidebarMenuSubItem key="Documents">
              <SidebarMenuSubButton asChild>
                <Link href="/documents">
                  <FileText />
                  <span>Documents</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export function AppSidebar() {
  const { data: session } = authClient.useSession();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const footerItem = {
    title: mounted ? session?.user.name : "Loading...",
    url: "/profile",
    icon: User,
    avatar: mounted && session?.user.image ? session?.user.image : null,
  };

  if (!mounted) return null;
  return (
    <Sidebar variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            <ManufacturingItems session={session} />
            {session?.user.role !== "OPERATOR" && (
              <AdministrativeItems session={session} />
            )}
            {session?.user.role === "ADMIN" && (
              <SidebarMenuItem key="Admin">
                <SidebarMenuButton asChild>
                  <Link href="/admin">
                    <Shield />
                    <span>Admin Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem className="flex flex-row items-center gap-2">
            <SidebarMenuButton asChild>
              <Link href={footerItem.url}>
                {footerItem.avatar ? (
                  <img
                    src={footerItem.avatar}
                    alt={footerItem.title}
                    className="h-8 w-8 rounded-full"
                  />
                ) : (
                  <footerItem.icon />
                )}
                <span>{footerItem.title}</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <SignOutBtn></SignOutBtn>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
