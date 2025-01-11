import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default {
  driver: "pg", // PostgreSQL driver
  dialect: "postgresql", // PostgreSQL dialect
  schema: "./src/lib/db/schema.ts", // Path to schema
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Database connection URL from .env file
  },
} as Config;
