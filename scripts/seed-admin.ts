import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { customAlphabet } from "nanoid"
import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"

import * as schema from "../src/db/schema/index"

const generateId = (length = 128) =>
  customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    length
  )()

async function main(): Promise<void> {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set")
  }

  const email = (process.env.ADMIN_EMAIL ?? "admin@brianoduorphysiotherapy.com")
    .toLowerCase()
    .trim()
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    throw new Error("ADMIN_PASSWORD is not set")
  }

  const db = drizzle(neon(databaseUrl), { schema })
  const passwordHash = await bcrypt.hash(password, 10)

  const existing = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .limit(1)

  if (existing.length > 0) {
    const user = existing[0]!
    await db
      .update(schema.users)
      .set({
        role: "administrator",
        passwordHash,
        emailVerified: new Date(),
      })
      .where(eq(schema.users.id, user.id))
    console.log(`Promoted existing user ${email} to administrator`)
    return
  }

  await db.insert(schema.users).values({
    id: generateId(),
    email,
    passwordHash,
    role: "administrator",
    emailVerified: new Date(),
  })
  console.log(`Created administrator account for ${email}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
