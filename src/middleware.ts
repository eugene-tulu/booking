import {
  DEFAULT_SIGNIN_REDIRECT,
  DEFAULT_UNAUTHENTICATED_REDIRECT,
} from "@/config/defaults"

import { auth } from "@/auth"

export const authRoutes = ["/login", "/register", "/error"]
export const publicRoutes = [
  "/",
  "/privacy-policy",
  "/booking",
  "/register/confirm-email",
  "/register/resend-email-confirmation",
  "/login/password-reset",
  "/login/password-update",
]

export default auth((req) => {
  const authenticated = !!req.auth
  const isApiAuthRoute = req.nextUrl.pathname.startsWith("/api/auth")
  const isAuthRoute = authRoutes.includes(req.nextUrl.pathname)
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname)

  if (isApiAuthRoute) return undefined

  if (isAuthRoute) {
    if (authenticated) {
      return Response.redirect(new URL(DEFAULT_SIGNIN_REDIRECT, req.nextUrl))
    }
    return undefined
  }

  if (!authenticated && !isPublicRoute) {
    return Response.redirect(
      new URL(DEFAULT_UNAUTHENTICATED_REDIRECT, req.nextUrl)
    )
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!authenticated || req.auth?.user?.role !== "administrator") {
      return Response.redirect(new URL("/", req.nextUrl))
    }
  }

  return undefined
})

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|api|trpc).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
}
