import 'server-only'
import { neon } from "@neondatabase/serverless";
const dbUrl: string = process.env.NEON_DB || ""
if (!dbUrl) {
    throw new Error("Missing database URL");
}

export const db = neon(dbUrl);