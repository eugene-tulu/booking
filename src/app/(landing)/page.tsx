import { getClinic } from "@/actions/clinic"

import { Footer } from "@/components/nav/landing/footer"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TeamSection } from "@/components/sections/team-section"

export default async function Home(): Promise<JSX.Element> {
  const clinic = await getClinic()

  return (
    <main className="mx-auto h-auto w-full max-w-[2560px] overflow-x-hidden">
      <HeroSection address={clinic?.address || ""} />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer
        address={clinic?.address || "Dahlia Wellness Centre, 8 School Lane, Westlands, Nairobi, Kenya"}
        phone_1={clinic?.phone_1 || "+254 726 017 063"}
        phone_2={clinic?.phone_2 || "+254 117 889 911"}
      />
    </main>
  )
}
