import "dotenv/config";
import { auth } from "@ebst/auth";
import { PrismaClient } from "@ebst/db";
import { PrismaPg } from "@prisma/adapter-pg";

async function main() {
    console.log("Seeding admin user using better-auth...");

    try {
        const res = await auth.api.signUpEmail({
            body: {
                email: "admin@gmail.com",
                password: "admin123",
                name: "Admin",
                username: "admin",
            },
        });

        if (!res) {
            throw new Error("Failed to create user");
        }

        console.log("Admin user seeded successfully:", res.user.email);

        // Update role to ADMIN
        const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
        const prisma = new PrismaClient({ adapter });
        await prisma.user.update({
            where: { id: res.user.id },
            data: { role: "ADMIN" },
        });
        console.log("Role updated to ADMIN.");
        await prisma.$disconnect();
    } catch (error: any) {
        if (error.code === "USER_ALREADY_EXISTS") {
            console.log("Admin user already exists.");
        } else {
            console.error("Error seeding admin:", error);
        }
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
