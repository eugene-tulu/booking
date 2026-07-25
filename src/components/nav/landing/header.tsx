import Link from "next/link"

import { siteConfig } from "@/config/site"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import { Navigation } from "@/components/nav/landing/navigation"
import { NavigationMobile } from "@/components/nav/landing/navigation-mobile"

export function Header(): JSX.Element {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between bg-transparent px-5 py-6 text-navbarText transition-all duration-500 ease-in-out md:px-6 md:py-8 lg:py-9 w-1496:px-0">
      <Link href="/" className="flex items-center" aria-label="Brian Oduor Physiotherapy home">
        <span className="z-[2] text-[22px] font-bold font-[BalooTamma] text-navbarText">
          Brian Oduor
          <span className="block text-[14px] font-normal opacity-80">
            Physiotherapy
          </span>
        </span>
      </Link>
      <div className="flex flex-1 items-center justify-end whitespace-nowrap">
        <Navigation navItems={siteConfig.mainNavItems} />

        <Link
          href="/booking"
          className={cn(
            buttonVariants({ variant: "landingAppointment", size: "action" }),
            "group"
          )}
        >
            <span
              className="absolute size-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-full"
              aria-hidden="true"
            />
          <span aria-label="Book an Appointment" className="relative">
            Book an Appointment
          </span>
        </Link>

        <NavigationMobile navItems={siteConfig.mainNavItems} />
      </div>
    </header>
  )
}
