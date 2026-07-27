"use client"

import React from "react"
import { SectionReveal } from "@/components/SectionReveal"
import Link from "next/link"
import { Home as HomeIcon, CheckCircle2 } from "lucide-react"

export default function HomePhysiotherapy(): JSX.Element {
  return (
    <div className="flex flex-col pt-20">
      <section className="bg-muted py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border text-primary font-medium text-sm mb-6 shadow-sm">
              <HomeIcon size={16} /> Care brought to you
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Physiotherapy at Home
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Some patients find it difficult or unsafe to travel to a clinic for treatment. Home physiotherapy allows treatment and rehabilitation to take place within your own environment.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-8 text-center">Who is this suitable for?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Bedridden patients", desc: "Gentle mobilization to prevent stiffness and complications." },
                  { title: "Elderly patients", desc: "Fall prevention, strength training, and mobility support." },
                  { title: "Post-surgical recovery", desc: "Early rehabilitation when travel is medically unadvised." },
                  { title: "Mobility limitations", desc: "For those who use mobility aids or have transport challenges." },
                  { title: "Long-term rehabilitation", desc: "Ongoing care for chronic or neurological conditions." },
                  { title: "Movement and function assistance", desc: "Adapting to daily tasks in your actual living space." },
                ].map((item, i) => (
                  <div key={i} className="bg-muted p-6 rounded-2xl border border-border">
                    <h3 className="font-bold text-xl mb-2 text-foreground flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground pl-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} className="mt-16 text-center bg-accent/30 p-10 rounded-3xl border border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Need physiotherapy at home?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We bring the expertise, equipment, and care directly to your doorstep.
              </p>
              <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Book a Home Assessment Today
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
