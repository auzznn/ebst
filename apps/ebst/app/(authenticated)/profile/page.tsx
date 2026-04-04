"use client"

import { useState, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Check, Camera, User, Mail, Lock } from "lucide-react"
import { toast } from "sonner"

import { authClient } from "@/lib/auth-client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

// ── Validation schemas ────────────────────────────────────────────────
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().max(160, "Bio must be 160 characters or less").optional(),
})

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword !== data.currentPassword, {
    message: "New password must be different from current password",
    path: ["newPassword"],
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type ProfileFormData = z.infer<typeof profileSchema>
type PasswordFormData = z.infer<typeof passwordSchema>

// ── Section label helper ──────────────────────────────────────────────
function SectionLabel({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────
export default function ProfilePage() {
  const router = useRouter()
  const { data: session, isPending, refetch } = authClient.useSession()

  // Redirect if not authenticated
  if (!isPending && !session) {
    router.push("/sign-in")
    return null
  }

  if (isPending || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading profile…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:gap-8">
          {/* ── Sidebar ──────────────────────────────── */}
          <aside className="md:sticky md:top-8 md:self-start">
            <Card className="overflow-hidden">
              <CardContent className="flex flex-col items-center px-6 pt-8 text-center">
                <ProfileAvatar
                  currentImage={session.user.image ?? undefined}
                  onImageChange={async (file) => {
                    const reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = async () => {
                      const image = reader.result as string
                      const { error } = await authClient.updateUser({
                        image,
                      })
                      if (error) {
                        toast.error(error.message)
                      } else {
                        toast.success("Avatar updated")
                        refetch()
                      }
                    }
                  }}
                />
                <h2 className="mt-4 text-lg font-semibold">
                  {session.user.name ?? "Anonymous"}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {session.user.email}
                </p>
                {session.user.username && (
                  <Badge variant="secondary" className="mt-2">
                    @{session.user.username}
                  </Badge>
                )}
                <p className="mt-3 text-xs text-muted-foreground">
                  Joined{" "}
                  {new Date(session.user.createdAt).toLocaleDateString(
                    undefined,
                    { month: "long", day: "numeric", year: "numeric" }
                  )}
                </p>
              </CardContent>
            </Card>

            {/* Nav anchors */}
            <nav className="mt-4 hidden space-y-1 md:block">
              {[
                { href: "#profile", icon: User, label: "Profile Info" },
                { href: "#email", icon: Mail, label: "Email" },
                { href: "#password", icon: Lock, label: "Password" },
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
            <ProfileInfoSection
              session={session}
              refetch={refetch}
            />
            <EmailSection email={session.user.email} />
            <PasswordSection />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Avatar Component with Upload ──────────────────────────────────────
function ProfileAvatar({
  currentImage,
  onImageChange,
}: {
  currentImage?: string
  onImageChange: (file: File) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="group relative">
      <Avatar className="h-20 w-20 border-2 border-border">
        <AvatarImage src={currentImage} />
        <AvatarFallback className="text-lg font-semibold">
          {currentImage ? "" : "?"}
        </AvatarFallback>
      </Avatar>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Change avatar"
      >
        <Camera className="h-5 w-5 text-white" />
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) onImageChange(file)
        }}
      />
    </div>
  )
}

// ── Profile Info Section ──────────────────────────────────────────────
function ProfileInfoSection({
  session,
  refetch,
}: {
  session: { user: { name?: string | null; email?: string | null } }
  refetch: () => void
}) {
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: session.user.name ?? "",
      bio: "",
    },
  })

  const onSubmit = useCallback(
    async (data: ProfileFormData) => {
      setIsSaving(true)
      setSaved(false)
      const { error } = await authClient.updateUser({
        name: data.name,
      })
      if (error) {
        toast.error("Profile update failed", { description: error.message })
      } else {
        toast.success("Profile updated", { description: "Your changes have been saved." })
        setSaved(true)
        refetch()
        setTimeout(() => setSaved(false), 1500)
      }
      setIsSaving(false)
    },
    [refetch]
  )

  const bio = register("bio")

  return (
    <Card id="profile">
      <CardHeader>
        <CardTitle>Profile Info</CardTitle>
        <CardDescription>
          Update your personal information and display name.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="profile-name">Name</Label>
            <Input
              id="profile-name"
              disabled={isSaving}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile-email">Email</Label>
            <Input
              id="profile-email"
              value={session.user.email ?? ""}
              disabled
              className="bg-muted/50"
            />
            <p className="text-xs text-muted-foreground">
              Email is managed through your authentication provider.
            </p>
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="profile-bio">Bio</Label>
            <BioField maxLength={160} disabled={isSaving} />
            {errors.bio && (
              <p className="text-sm text-destructive">{errors.bio.message}</p>
            )}
          </div> */}

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {saved && (
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="h-4 w-4" /> Saved
                </span>
              )}
            </p>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving…
                </>
              ) : saved ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Saved
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

// ── Bio textarea with live character counter ──────────────────────────
// function BioField({
//   maxLength,
//   disabled,
// }: {
//   maxLength: number
//   disabled: boolean
// }) {
//   const [value, setValue] = useState("")

//   return (
//     <div className="space-y-1">
//       <Textarea
//         id="profile-bio"
//         placeholder="Tell us about yourself…"
//         maxLength={maxLength}
//         disabled={disabled}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <div className="flex justify-between text-xs text-muted-foreground">
//         <span>Short bio, max {maxLength} characters.</span>
//         <span className={value.length > maxLength * 0.9 ? "text-amber-600" : ""}>
//           {value.length}/{maxLength}
//         </span>
//       </div>
//     </div>
//   )
// }

// ── Email Section ─────────────────────────────────────────────────────
function EmailSection({ email }: { email: string | null }) {
  return (
    <Card id="email">
      <CardHeader>
        <CardTitle>Email</CardTitle>
        <CardDescription>
          Your primary email address for this account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 rounded-md border bg-muted/30 px-4 py-3">
          <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
          <div>
            <p className="font-medium">{email ?? "No email set"}</p>
            <p className="text-xs text-muted-foreground">
              Verified &middot; Primary
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          To change your email, please contact support. Email changes affect
          your login credentials.
        </p>
      </CardContent>
    </Card>
  )
}

// ── Password Section ──────────────────────────────────────────────────
function PasswordSection() {
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  })

  const onSubmit = useCallback(async (data: PasswordFormData) => {
    setIsSaving(true)
    setSaved(false)
    const { error } = await authClient.changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    })
    if (error) {
      toast.error("Password change failed", { description: error.message })
    } else {
      toast.success("Password updated", {
        description: "Your password has been changed successfully.",
      })
      setSaved(true)
      reset()
      setTimeout(() => setSaved(false), 1500)
    }
    setIsSaving(false)
  }, [reset])

  return (
    <Card id="password">
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Change your password to keep your account secure.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              id="current-password"
              type="password"
              disabled={isSaving}
              {...register("currentPassword")}
            />
            {errors.currentPassword && (
              <p className="text-sm text-destructive">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              disabled={isSaving}
              {...register("newPassword")}
            />
            {errors.newPassword && (
              <p className="text-sm text-destructive">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              disabled={isSaving}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {saved && (
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="h-4 w-4" /> Saved
                </span>
              )}
            </p>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating…
                </>
              ) : saved ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Updated
                </>
              ) : (
                "Change Password"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
