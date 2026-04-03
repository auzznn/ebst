"use client"

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession()

  const handleSignOut = async () => {
    await authClient.signOut()
    window.location.href = "/sign-in"
  }

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading session...</p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">No active session found.</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Dashboard</CardTitle>
          <CardDescription>
            Welcome back, {session.user.name || session.user.email}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border p-4 font-mono text-sm space-y-2">
            <div>
              <span className="text-muted-foreground">ID:</span>{" "}
              {session.user.id}
            </div>
            <div>
              <span className="text-muted-foreground">Name:</span>{" "}
              {session.user.name ?? "—"}
            </div>
            <div>
              <span className="text-muted-foreground">Email:</span>{" "}
              {session.user.email}
            </div>
            <div>
              <span className="text-muted-foreground">Email Verified:</span>{" "}
              {session.user.emailVerified ? "Yes" : "No"}
            </div>
            {session.user.username && (
              <div>
                <span className="text-muted-foreground">Username:</span>{" "}
                {session.user.username}
              </div>
            )}
            <div>
              <span className="text-muted-foreground">Created At:</span>{" "}
              {new Date(session.user.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="rounded-md border p-4 font-mono text-sm space-y-2">
            <div className="font-semibold text-foreground">Session</div>
            <div>
              <span className="text-muted-foreground">Session ID:</span>{" "}
              {session.session.id}
            </div>
            <div>
              <span className="text-muted-foreground">Expires At:</span>{" "}
              {new Date(session.session.expiresAt).toLocaleString()}
            </div>
          </div>

          <Button variant="destructive" className="w-full" onClick={handleSignOut}>
            Log Out
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
