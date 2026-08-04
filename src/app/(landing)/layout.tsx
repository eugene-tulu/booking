"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { Footer } from "@/components/nav/landing/footer"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/services", label: "Services" },
  { href: "/hydrotherapy", label: "Hydrotherapy" },
  { href: "/home-physiotherapy", label: "Home Physiotherapy" },
  { href: "/corporate-wellness", label: "Corporate Wellness" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  additionalType: "https://schema.org/Physiotherapy",
  name: siteConfig.nameLong,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: ["+254726017063", "+254117889911"],
  medicalSpecialty: "Physiotherapy",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dahlia Wellness Centre, Clarence House, 8 School Lane, Westlands",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: "Nairobi, Kenya",
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-13:00"],
  sameAs: [] as string[],
}


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans text-foreground bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80",
          scrolled ? "shadow-sm border-border" : ""
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex flex-col group">
              <span className="text-xl md:text-2xl font-bold text-primary tracking-tight transition-colors">
                Brian Oduor
              </span>
              <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary/80 transition-colors">
                Physiotherapy
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-accent hover:text-primary",
                    pathname === link.href
                      ? "bg-primary text-white hover:bg-primary hover:text-white"
                      : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-20 bg-white border-b border-border shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-[80vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent text-primary"
                    : "hover:bg-accent/50 text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <a href="tel:+254726017063" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium justify-center">
                <Phone size={18} />
                Call +254 726 017 063
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
