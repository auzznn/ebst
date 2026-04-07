import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@ebst/db";
import { auth as authInstance } from "@ebst/auth";

// Re-export the shared auth instance for use across the app
export const auth = authInstance;
