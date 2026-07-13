import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to PostgreSQL");
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL");
    console.error(error);
    process.exit(1);
  }
}