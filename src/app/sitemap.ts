import { type MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || siteConfig.url

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/hydrotherapy",
    "/home-physiotherapy",
    "/corporate-wellness",
    "/resources",
    "/contact",
    "/booking",
    "/privacy-policy",
  ]

  const now = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
