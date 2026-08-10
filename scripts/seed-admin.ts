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

  const argEmails = process.argv.slice(2)
  const envEmails = (process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)

  const emails = Array.from(new Set([...argEmails, ...envEmails]))

  if (emails.length === 0) {
    throw new Error(
      "Provide admin email(s) via ADMIN_EMAIL/ADMIN_EMAILS or as CLI args, e.g. `npm run db:seed admin2@example.com`"
    )
  }

  const password = process.env.ADMIN_PASSWORD
  const db = drizzle(neon(databaseUrl), { schema })

  for (const email of emails) {
    const existing = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .limit(1)

    if (existing.length > 0) {
      const user = existing[0]!
      const set: Partial<typeof user> = {
        role: "administrator",
        emailVerified: new Date(),
      }
      if (password) set.passwordHash = await bcrypt.hash(password, 10)

      await db
        .update(schema.users)
        .set(set)
        .where(eq(schema.users.id, user.id))
      console.log(`Promoted existing user ${email} to administrator`)
      continue
    }

    if (!password) {
      throw new Error(
        `No existing user for ${email} and ADMIN_PASSWORD is not set, so it cannot be created`
      )
    }

    await db.insert(schema.users).values({
      id: generateId(),
      email,
      passwordHash: await bcrypt.hash(password, 10),
      role: "administrator",
      emailVerified: new Date(),
    })
    console.log(`Created administrator account for ${email}`)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
