import { Shield, Users } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { AddUserDialog } from "./_components/AddUserDialog"
import { UserTable } from "./_components/UserTable"
import { getUsers } from "./actions"

export default async function AdminSettingsPage() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-8">
          {/* ── Sidebar ──────────────────────────────── */}
          <aside className="md:sticky md:top-8 md:self-start">
            <Card className="overflow-hidden">
              <CardContent className="flex flex-col items-center px-6 pt-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mt-4 text-lg font-semibold">Admin Panel</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  System Settings
                </p>
              </CardContent>
            </Card>

            {/* Nav anchors */}
            <nav className="mt-4 hidden space-y-1 md:block">
              {[
                { href: "#users", icon: Users, label: "Manage Users" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* ── Main content ─────────────────────────── */}
          <div className="space-y-6">
            <Card id="users">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Manage Users</CardTitle>
                  <CardDescription>
                    Create and manage system user accounts.
                  </CardDescription>
                </div>
                {/* Users dropdown / dialog extracted to Client Component */}
                <AddUserDialog />
              </CardHeader>
              <CardContent>
                <UserTable users={users} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
