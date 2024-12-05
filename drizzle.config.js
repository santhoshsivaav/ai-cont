
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials:{
    url:'postgresql://aigen_owner:FT7bPpn2QUrZ@ep-snowy-shape-a5wyp2vk.us-east-2.aws.neon.tech/aigen?sslmode=require'
  }
});