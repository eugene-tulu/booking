"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { NavItem } from "@/types"

import { siteConfig } from "@/config/site"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

interface NavigationMobileProps {
  navItems: NavItem[]
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isActive: boolean
}

export function MobileLink({
  children,
  href,
  setIsOpen,
  isActive,
}: MobileLinkProps): JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground transition-colors",
        isActive
          ? "font-semibold text-primary"
          : "hover:text-primary/60",
        "text-lg"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}

export function NavigationMobile({
  navItems,
}: NavigationMobileProps): JSX.Element {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const isLinkActive = (href: string): boolean => {
    if (href === "/") return pathname === "/"
    if (pathname === href) return true
    if (pathname === "/" && href.startsWith("/#")) return true
    return false
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          aria-label="Open menu"
        >
          <Icons.menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-primary-foreground pl-1 pr-0">
        <div className="px-7">
          <Link
            aria-label="Home"
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-bold font-[BalooTamma]">
              {siteConfig.nameShort}
            </span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-2 pl-1 pr-7 text-lg capitalize">
            {navItems.map((item) => (
              <MobileLink
                key={item.title}
                href={String(item.href)}
                setIsOpen={setIsOpen}
                isActive={isLinkActive(item.href)}
              >
                {item.title}
              </MobileLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
