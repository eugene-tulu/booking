import { type MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || siteConfig.url

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/login", "/register", "/api"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
