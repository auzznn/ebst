"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, User, Settings, MessageSquare, Shield, Calculator, FileText, Folder } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import SignOutBtn from "../SignOutBtn";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Files", url: "/files", icon: Folder },
  { title: "Communication", url: "/communication/channel", icon: MessageSquare },
];

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
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
              {(session?.user.role === "ADMIN" || session?.user.role === "FINANCE") && (
                <SidebarMenuItem key="Accounting">
                  <SidebarMenuButton asChild>
                    <Link href="/accounting">
                      <Calculator />
                      <span>Accounting</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
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
