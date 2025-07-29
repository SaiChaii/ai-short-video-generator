import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_kyYm81DXqhNz@ep-hidden-bread-a13g8qu7.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  },
});
