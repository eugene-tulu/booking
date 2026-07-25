import { type AdminNavItem, type NavItem } from "@/types"

const links = {
  facebook: "",
  github: "",
  openGraphImage: "https://brianoduorphysiotherapy.com/opengraph-image.png",
  manifestFile: "https://brianoduorphysiotherapy.com/site.webmanifest",
  authorsWebsite: "https://pjborowiecki.com",
}

export const siteConfig = {
  links,
  nameShort: "Brian Oduor Physiotherapy",
  nameLong: "Brian Oduor Physiotherapy",
  description:
    "Professional physiotherapy, rehabilitation and hydrotherapy services",
  url: "https://brianoduorphysiotherapy.com",
  ogImage: links.openGraphImage,
  author: "Oduor Brian Wamanya",
  hostingRegion: "fra1",
  keywords: [
    "Physiotherapy",
    "Rehabilitation",
    "Hydrotherapy",
    "Nairobi",
    "Kenya",
    "Brian Oduor Physiotherapy",
  ],
  mainNavItems: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Me",
      href: "/#about",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Hydrotherapy",
      href: "/hydrotherapy",
    },
    {
      title: "Home Physiotherapy",
      href: "/home-physiotherapy",
    },
    {
      title: "Corporate Wellness",
      href: "/corporate-wellness",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ] satisfies NavItem[],

  mobileNav: [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      title: "Bookings",
      href: "/admin/bookings",
    },
    {
      title: "Availability",
      href: "/admin/availability",
    },
    {
      title: "Profile",
      href: "/admin/profile",
    },
  ] satisfies AdminNavItem[],
}
