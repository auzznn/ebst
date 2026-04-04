import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../../../packages/db/prisma-generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { username } from "better-auth/plugins";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [username()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 8
  },
  //   session: {
  //     expiresIn: 60 * 30,
  //     updateAge: 60 * 5,
  //     cookieCache: {
  //       enabled: true,
  //       maxAge: 60 * 5,
  //       strategy: 'compact' // Keep this for the session_data cache cookie only
  //     },
  //   },
  //   advanced: {
  //     defaultCookieAttributes: {
  //       secure: true,
  //       httpOnly: true,
  //       sameSite: "lax",
  //       // ❌ Remove maxAge from here — it bleeds into session_data
  //     },
  //     cookies: {
  //       session_token: {
  //         attributes: {
  //           maxAge: 60 * 60 * 24 * 7, // ✅ Set 7-day maxAge only on the session token
  //         },
  //       },
  //     },
  //   },
});
