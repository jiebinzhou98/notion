// import { defineConfig } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config({
//   path: ".env",
// });

// export default defineConfig({
//   schema: "./src/lib/db/schema.ts", // Path to schema
//   out: "./drizzle", // Path for generated files
//   dialect: "postgresql", // Added dialect for clarity
//   dbCredentials: {
//     url: process.env.DATABASE_URL!, // Database connection URL from .env file
//   },
// });


import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

console.log("Loaded Database URL:", process.env.DATABASE_URL);

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://notion_owner:Wtjo4lFEzM1x@ep-hidden-bush-a44alkem.us-east-1.aws.neon.tech/notion?sslmode=require",
  },
});
