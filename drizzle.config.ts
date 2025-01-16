import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./src/lib/db/schema.ts", // Path to schema
  out: "./drizzle", // Path for generated files
  driver: "postgresql", // Corrected driver name for PostgreSQL
  dialect: "postgresql", // Added dialect for clarity
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // Database connection URL from .env file
  },
} as Config;
