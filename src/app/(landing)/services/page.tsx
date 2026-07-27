"use client"

import React from "react"
import { SectionReveal } from "@/components/SectionReveal"
import {
  Activity,
  Stethoscope,
  HeartPulse,
  Wind,
  UserCheck,
  Home,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "musculoskeletal",
    title: "Musculoskeletal Physiotherapy",
    icon: Activity,
    description: "For conditions affecting muscles, joints, bones and movement system.",
    focus: [
      "Back pain",
      "Neck pain",
      "Shoulder pain",
      "Knee pain",
      "Arthritis",
      "Sports injuries",
      "Muscle strains",
      "Joint stiffness",
      "Postural problems",
    ],
  },
  {
    id: "post-operative",
    title: "Post-Operative Rehabilitation",
    icon: Stethoscope,
    description: "Structured rehabilitation after surgery to restore movement, strength, confidence and function.",
    focus: [
      "Orthopedic surgery",
      "Joint replacement",
      "Spinal surgery",
      "Fracture surgery",
      "Soft tissue procedures",
      "Other surgical interventions",
    ],
  },
  {
    id: "neurological",
    title: "Neurological Rehabilitation",
    icon: HeartPulse,
    description: "Specialized care for conditions affecting the nervous system, focusing on retraining movement patterns.",
    focus: [
      "Balance",
      "Coordination",
      "Strength",
      "Walking",
      "Functional independence",
      "Mobility training",
    ],
  },
  {
    id: "chest",
    title: "Chest Physiotherapy",
    icon: Wind,
    description: "Techniques for improving breathing, chest expansion and secretion clearance.",
    focus: [
      "Selected respiratory conditions",
      "Post-operative care",
      "Reduced mobility",
    ],
  },
  {
    id: "geriatric",
    title: "Geriatric Physiotherapy",
    icon: UserCheck,
    description: "Care focused on the unique movement and physical needs of older adults to maintain quality of life.",
    focus: [
      "Mobility",
      "Strength",
      "Balance",
      "Fall prevention",
      "Independence",
      "Functional movement",
    ],
  },
  {
    id: "home-based",
    title: "Home-Based Physiotherapy",
    icon: Home,
    description: "Professional physiotherapy services delivered in the comfort of your own home.",
    focus: [
      "Bedridden patients",
      "Older adults",
      "Post-operative patients",
      "Limited mobility",
      "Ongoing rehabilitation",
    ],
  },
]

export default function Services(): JSX.Element {
  return (
    <div className="flex flex-col pt-20">
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Physiotherapy & Rehabilitation Services
              </h1>
              <p className="text-xl text-primary-foreground/90 font-medium">
                Comprehensive, evidence-based care tailored to your specific condition and recovery goals.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <SectionReveal key={service.id} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm flex flex-col md:flex-row gap-8 lg:gap-16">

                  <div className="md:w-1/3 flex flex-col gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center mb-2">
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                  </div>

                  <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-12 lg:pl-16">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Conditions & Focus Areas</h3>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.focus.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                          <span className="font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.id === "home-based" && (
                      <div className="mt-8">
                        <Link href="/home-physiotherapy" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-xl hover:bg-primary transition-colors">
                          Learn more about Home Physio
                        </Link>
                      </div>
                    )}
                  </div>

                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-6">Not sure which service you need?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation and we will conduct a comprehensive assessment to determine the best treatment plan for your specific condition.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Book an Assessment
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
