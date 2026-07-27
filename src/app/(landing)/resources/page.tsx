"use client"

import React from "react"
import { SectionReveal } from "@/components/SectionReveal"
import { Calendar, ArrowRight } from "lucide-react"

const blogs = [
  {
    title: "Understanding Back Pain: Causes and Prevention",
    excerpt: "Back pain is one of the most common conditions seen in physiotherapy practice. Understanding its causes...",
    category: "Pain Management",
  },
  {
    title: "Post-Surgery Rehabilitation: What to Expect",
    excerpt: "Rehabilitation after surgery is a critical phase of recovery. Knowing what to expect...",
    category: "Rehabilitation",
  },
  {
    title: "Hydrotherapy: Benefits of Water-Based Exercise",
    excerpt: "Water-based exercise offers unique benefits for rehabilitation. The properties of water...",
    category: "Hydrotherapy",
  },
  {
    title: "Ergonomics for the Modern Workplace",
    excerpt: "Poor workstation setup is a leading contributor to musculoskeletal discomfort. Ergonomic assessment...",
    category: "Corporate Wellness",
  },
  {
    title: "Neurological Rehabilitation: A Guide for Patients",
    excerpt: "Neurological conditions affecting movement can be challenging. Physiotherapy provides structured...",
    category: "Neurology",
  },
  {
    title: "Staying Active as You Age: Geriatric Physiotherapy",
    excerpt: "Physical activity is essential at every stage of life. Geriatric physiotherapy...",
    category: "Geriatrics",
  },
]

export default function Resources(): JSX.Element {
  return (
    <div className="flex flex-col pt-20 min-h-screen bg-muted">
      <section className="bg-white py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Educational articles on physiotherapy, movement, and recovery.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <article className="bg-white rounded-2xl border border-border overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-48 bg-accent/50 flex items-center justify-center p-6 text-center border-b border-border/50">
                    <span className="text-primary font-bold text-lg opacity-50">Illustration Placeholder</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                        {blog.category}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} /> Coming soon
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">
                      {blog.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 flex-1 text-sm">
                      {blog.excerpt}
                    </p>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group"
                    >
                      Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.4} className="mt-16 text-center">
            <div className="inline-block py-2 px-6 rounded-full bg-border text-muted-foreground text-sm font-medium">
              More articles coming soon
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
