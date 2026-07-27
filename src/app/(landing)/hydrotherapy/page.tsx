"use client"

import React from "react"
import { SectionReveal } from "@/components/SectionReveal"
import Link from "next/link"
import { Droplet, CheckCircle2 } from "lucide-react"

export default function Hydrotherapy(): JSX.Element {
  return (
    <div className="flex flex-col pt-20">
      <section className="bg-accent/30 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <SectionReveal>
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6">
              <Droplet size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Hydrotherapy & Aquatic Rehabilitation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Water can provide a supportive environment for movement and rehabilitation. Hydrotherapy may help individuals exercise with reduced impact on the joints while taking advantage of the properties of water to support movement and rehabilitation.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <SectionReveal>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                <img
                  src="/hydrotherapy-pool.jpg"
                  alt="Serene hydrotherapy pool"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </SectionReveal>

            <div className="flex flex-col gap-12">
              <SectionReveal delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Useful For</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Joint pain",
                    "Arthritis",
                    "Post-operative rehabilitation",
                    "Musculoskeletal rehabilitation",
                    "Reduced mobility",
                    "Strength and conditioning",
                    "Movement retraining",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-muted p-4 rounded-xl">
                      <CheckCircle2 className="text-primary shrink-0" size={20} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Services Offered</h2>
                <ul className="space-y-4">
                  {[
                    "Therapeutic aquatic exercises",
                    "Water-based rehabilitation",
                    "Water massage",
                    "Contrast therapy",
                    "Ice bath recovery",
                    "Functional aquatic exercises",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="font-bold text-sm">{i + 1}</span>
                      </div>
                      <span className="text-lg text-foreground font-medium pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <SectionReveal className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
            &quot;Move with less impact. <br className="hidden md:block" />Build strength with confidence. <br className="hidden md:block" />Recover through movement.&quot;
          </h2>
          <div>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg hover:bg-accent hover:text-primary transition-all">
              Book a Session
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
