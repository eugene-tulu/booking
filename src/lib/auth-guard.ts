import { redirect } from "next/navigation"

import { auth } from "@/auth"

export async function requireAdmin(): Promise<void> {
  const session = await auth()

  if (!session?.user || session.user.role !== "administrator") {
    redirect("/")
  }
}
