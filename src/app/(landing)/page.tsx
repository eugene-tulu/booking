"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Activity,
  HeartPulse,
  Stethoscope,
  Droplet,
  Home as HomeIcon,
  Building2,
  Move,
} from "lucide-react"
import { SectionReveal } from "@/components/SectionReveal"

const services = [
  {
    title: "Musculoskeletal Physiotherapy",
    description:
      "Expert care for muscles, joints, bones, and movement systems to manage pain and restore function.",
    icon: Activity,
    link: "/services",
  },
  {
    title: "Post-Operative Rehabilitation",
    description:
      "Structured recovery protocols following orthopedic, spinal, and general surgeries.",
    icon: Stethoscope,
    link: "/services",
  },
  {
    title: "Neurological Rehabilitation",
    description: "Targeted therapy to improve balance, coordination, strength, and mobility.",
    icon: HeartPulse,
    link: "/services",
  },
  {
    title: "Hydrotherapy & Aquatic Rehab",
    description:
      "Water-based exercises providing supportive, low-impact environments for recovery.",
    icon: Droplet,
    link: "/hydrotherapy",
  },
  {
    title: "Home Physiotherapy",
    description:
      "Professional treatment and rehabilitation from the comfort and safety of your home.",
    icon: HomeIcon,
    link: "/home-physiotherapy",
  },
  {
    title: "Corporate Wellness",
    description:
      "Workplace ergonomic assessments and wellness programs for healthier teams.",
    icon: Building2,
    link: "/corporate-wellness",
  },
]

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-muted pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Premium Healthcare in Westlands, Nairobi
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight text-balance">
                Restoring Movement. <br className="hidden md:block" />
                <span className="text-primary">Rebuilding Strength.</span> <br className="hidden md:block" />
                Enhancing Life.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl text-balance leading-relaxed">
                Personalized physiotherapy, rehabilitation and hydrotherapy services designed to help you manage pain, restore movement, regain strength and return to the activities that matter most.
              </p>
              <p className="text-base font-medium text-foreground mb-10">
                By Oduor Brian Wamanya, BSc. Physiotherapy
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20 hover:bg-secondary hover:shadow-xl transition-all duration-300 text-center"
                >
                  Book an Appointment
                </Link>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href="tel:+254726017063"
                    className="flex-1 sm:flex-none px-6 py-4 bg-white text-foreground border border-border rounded-xl font-medium shadow-sm hover:bg-muted hover:border-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} /> Call
                  </a>
                  <a
                    href="https://wa.me/254726017063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-6 py-4 bg-white text-foreground border border-border rounded-xl font-medium shadow-sm hover:bg-muted hover:border-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-muted flex items-center justify-center p-8">
                <img
                  src="/wellness-illustration.png"
                  alt="Abstract medical wellness illustration"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Personalized Care for Your Recovery
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Every person experiences pain, injury and recovery differently. My approach is centered on understanding your condition, identifying the factors affecting your movement and creating a personalized treatment plan to help you achieve meaningful results.
                  </p>
                  <p>
                    Whether you are recovering from surgery, managing chronic pain, rehabilitating after an injury or seeking to improve your movement and physical function, physiotherapy can help you move towards a stronger and more independent life.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group"
                  >
                    Meet Your Physiotherapist <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">Comprehensive Clinical Services</h2>
            <p className="text-lg text-muted-foreground">
              Evidence-based treatments tailored to your specific needs, focusing on long-term recovery and functional independence.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <Link href={service.link} className="block h-full group">
                  <div className="h-full p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-accent text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { title: "Evidence-Informed Care", desc: "Treatments based on the latest clinical science." },
              { title: "Personalized Treatment", desc: "No generic protocols. Care tailored to you." },
              { title: "Convenient Location", desc: "Based in Westlands, Nairobi." },
              { title: "Comprehensive Services", desc: "From clinic to pool to home." },
            ].map((pillar, index) => (
              <SectionReveal key={index} delay={index * 0.1} className="flex flex-col items-center text-center">
                <CheckCircle2 className="text-primary mb-4" size={32} />
                <h4 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Ready to start your recovery? <br />
              Book your appointment today.
            </h2>
            <Link href="/contact" className="px-8 py-4 bg-white text-secondary rounded-xl font-bold shadow-lg hover:bg-accent hover:text-primary hover:-translate-y-1 transition-all duration-300 text-lg">
              Request an Appointment
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
