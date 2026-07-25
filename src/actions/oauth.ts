import { unstable_noStore as noStore } from "next/cache"
import { eq } from "drizzle-orm"

import { db } from "@/config/db"
import { psLinkOAuthAccount } from "@/db/prepared-statements/auth"
import { users } from "@/db/schema"
import { linkOAuthAccountSchema, type LinkOAuthAccountInput } from "@/validations/auth"

export async function linkOAuthAccount(
  rawInput: LinkOAuthAccountInput
): Promise<void> {
  try {
    const validatedInput = linkOAuthAccountSchema.safeParse(rawInput)
    if (!validatedInput.success) return

    noStore()
    await psLinkOAuthAccount.execute({ userId: validatedInput.data.userId })
  } catch (error) {
    console.error(error)
    throw new Error("Error linking OAuth account")
  }
}
