"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(5),
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "FINANCE", "EXECUTIVE"]),
});

export async function adminAddUser(data: z.infer<typeof schema>) {
  // 1. Verify admin
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "ADMIN") {
    return { error: "Unauthorized: Only ADMIN can add users." };
  }

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return { error: "Invalid data provided." };
  }

  try {
    // 2. Create the user using Better Auth server API
    // Passing new Headers() to avoid injecting current session cookies
    // This prevents the admin's session from being overridden by the newly signed up user
    const res = await auth.api.signUpEmail({
      body: {
        email: parsed.data.email,
        password: parsed.data.password,
        name: parsed.data.name,
        username: parsed.data.username,
      },
      headers: new Headers(),
    });

    if (!res?.user) {
      return { error: "Failed to create user in authentication system." };
    }

    // 3. Update the required role using Prisma
    await prisma.user.update({
      where: { id: res.user.id },
      data: { role: parsed.data.role },
    });

    return { success: true };
  } catch (err: any) {
    return { error: err.message || "An error occurred while creating the user." };
  }
}
