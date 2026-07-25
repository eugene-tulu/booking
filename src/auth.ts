import { linkOAuthAccount } from "@/actions/oauth"
import { getUserById } from "@/actions/user"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"

import authConfig from "@/config/auth"
import { db } from "@/config/db"

const sessionConfig = {
  strategy: "jwt" as const,
  maxAge: 30 * 24 * 60 * 60,
  updateAge: 24 * 60 * 60,
}

const config: NextAuthConfig = {
  ...authConfig,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
  secret: process.env.AUTH_SECRET,
  session: sessionConfig,
  events: {
    async linkAccount({ user }) {
      if (user.id) await linkOAuthAccount({ userId: user.id })
    },
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role as "client" | "administrator"
      return session
    },
    async signIn({ user, account }) {
      if (!user.id) return false
      if (account?.provider !== "credentials") return true

      const existingUser = await getUserById({ id: user.id })

      return !existingUser?.emailVerified ? false : true
    },
  },
  adapter: DrizzleAdapter(db),
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config)
