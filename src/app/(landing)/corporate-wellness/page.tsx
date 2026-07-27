"use client"

import React from "react"
import { SectionReveal } from "@/components/SectionReveal"
import Link from "next/link"
import { Building2, BriefcaseMedical } from "lucide-react"

export default function CorporateWellness(): JSX.Element {
  return (
    <div className="flex flex-col pt-20">
      <section className="bg-[#1f2937] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal className="max-w-4xl text-center mx-auto">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-6">
              <Building2 size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Workplace Wellness & Ergonomics
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed text-balance">
              Healthy workplaces support healthy employees. I provide physiotherapy-based workplace wellness services designed to help organizations understand movement, posture, ergonomics and physical health in the workplace.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
                <BriefcaseMedical className="text-primary" /> Corporate Services
              </h2>
              <div className="space-y-4">
                {[
                  "Workplace ergonomic assessments",
                  "Workstation assessment and modification",
                  "Ergonomics training",
                  "Employee wellness education",
                  "Workplace injury prevention",
                  "On-site physiotherapy consultations",
                  "Gym ergonomics and exercise assessments",
                  "Policy and programme development",
                  "Professional report writing",
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="font-semibold text-lg text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <SectionReveal className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
            Better workplace movement. <br />
            Healthier employees. <br />
            More productive organizations.
          </h2>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-accent hover:text-secondary transition-all">
            Discuss Your Corporate Needs
          </Link>
        </SectionReveal>
      </section>
    </div>
  )
}
