"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const addUserSchema = z.object({
  username: z.string().min(5),
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "FINANCE", "EXECUTIVE"]),
});

const editUserSchema = z.object({
  id: z.string(),
  username: z.string().min(5),
  name: z.string().min(2),
  email: z.email(),
  role: z.enum(["ADMIN", "FINANCE", "EXECUTIVE"]),
});

export async function adminAddUser(data: z.infer<typeof addUserSchema>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "ADMIN") {
    return { error: "Unauthorized: Only ADMIN can add users." };
  }

  const parsed = addUserSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Invalid data provided." };
  }

  try {
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

    await prisma.user.update({
      where: { id: res.user.id },
      data: { role: parsed.data.role },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (err: any) {
    return { error: err.message || "An error occurred while creating the user." };
  }
}

export async function getUsers() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      role: true,
      createdAt: true,
      image: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
}

export async function adminEditUser(data: z.infer<typeof editUserSchema>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "ADMIN") {
    return { error: "Unauthorized: Only ADMIN can edit users." };
  }

  const parsed = editUserSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Invalid data provided." };
  }

  try {
    // 1. Update standard fields via Better Auth's backend
    // Optional depending on if better-auth requires it. It's safer to update prisma directly
    // since we do not have an API to update another user seamlessly in Better-Auth's plugin map 
    // unless building one. Prisma gives direct access to our properties:
    
    await prisma.user.update({
      where: { id: parsed.data.id },
      data: {
        name: parsed.data.name,
        username: parsed.data.username,
        email: parsed.data.email,
        role: parsed.data.role,
      },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (err: any) {
    if (err.code === "P2002") {
      return { error: "Email or username is already taken." };
    }
    return { error: "Failed to update user." };
  }
}
