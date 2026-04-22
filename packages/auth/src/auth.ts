import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@ebst/db";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { username } from "better-auth/plugins";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [username()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 8,
  },
  session: {
    expiresIn: 60 * 60 * 24
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "FINANCE",
        input: false
      }
    }
  }
});
