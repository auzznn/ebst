"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const client_1 = require("../../../packages/db/prisma-generated/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const plugins_1 = require("better-auth/plugins");
const prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(prisma, {
        provider: "postgresql",
    }),
    plugins: [(0, plugins_1.username)()],
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        minPasswordLength: 8
    },
});
//# sourceMappingURL=auth.js.map