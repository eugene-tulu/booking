"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { NavigationMobile } from "@/components/nav/landing/navigation-mobile"
import { Icons } from "@/components/icons"

export function SubPageHeader(): JSX.Element {
  const pathname = usePathname()

  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between bg-transparent px-5 py-4 text-navbarText md:px-6 lg:px-7">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild className="gap-2">
          <Link href="/">
            <Icons.arrowLeft className="size-4" aria-hidden="true" />
            Back
          </Link>
        </Button>
        <Link
          href="/"
          className="text-lg font-bold font-[BalooTamma] md:text-xl"
        >
          {siteConfig.nameShort}
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        {siteConfig.mainNavItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-navbarHover",
              pathname === item.href ? "text-navbarHover" : "text-navbarText"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <NavigationMobile navItems={siteConfig.mainNavItems} />
    </header>
  )
}
