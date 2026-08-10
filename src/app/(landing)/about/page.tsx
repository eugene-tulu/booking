"use client"

import React from "react"
import { SectionReveal } from "@/components/SectionReveal"
import { Award, BookOpen, UserCircle2 } from "lucide-react"
import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"

const profileImages = [
  { src: "/images/profile/IMG_0235.jpg", alt: "Oduor Brian Wamanya" },
  { src: "/images/profile/IMG_0236.jpg", alt: "Oduor Brian Wamanya" },
  { src: "/images/profile/IMG_0237.jpg", alt: "Oduor Brian Wamanya" },
  { src: "/images/profile/IMG_0238.jpg", alt: "Oduor Brian Wamanya" },
  { src: "/images/profile/IMG_0239.jpg", alt: "Oduor Brian Wamanya" },
  { src: "/images/profile/IMG_0240.jpg", alt: "Oduor Brian Wamanya" },
  { src: "/images/profile/IMG_0241.jpg", alt: "Oduor Brian Wamanya" },
]

export default function About(): JSX.Element {
  return (
    <div className="flex flex-col pt-20">
      <section className="bg-muted py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
                Meet Your Physiotherapist
              </h1>
              <p className="text-xl text-muted-foreground">
                Dedicated to evidence-informed care and personalized recovery.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            <div className="lg:col-span-4 flex flex-col gap-8">
              <SectionReveal>
                <ImageCarousel
                  images={profileImages}
                  aspectRatio={3 / 4}
                  autoPlay
                  interval={4000}
                  className="w-full max-w-sm mx-auto lg:mx-0 rounded-2xl border-4 border-white shadow-xl"
                />
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="bg-muted p-8 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-primary" size={24} />
                    <h3 className="text-xl font-bold">Qualifications</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Name</p>
                      <p className="font-medium text-foreground">Oduor Brian Wamanya</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold mb-1">Degree</p>
                      <p className="font-medium text-foreground">Bachelor of Science in Physiotherapy</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-12">
              <SectionReveal delay={0.1}>
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Oduor Brian Wamanya, BSc. Physiotherapy</h2>
                  <p>
                    I am a qualified physiotherapist with a Bachelor&apos;s Degree in Physiotherapy, passionate about helping individuals restore movement, manage pain and regain independence. My clinical approach combines evidence-informed physiotherapy, functional rehabilitation, patient education and personalized exercise programs.
                  </p>
                  <p>
                    I believe that effective rehabilitation should not only focus on treating symptoms but also on understanding the factors that affect how a person moves, works and lives. My areas of interest include physiotherapy rehabilitation, hydrotherapy, musculoskeletal conditions, post-operative rehabilitation, neurological rehabilitation, chest physiotherapy, geriatric care and functional movement.
                  </p>
                  <p className="text-foreground font-medium text-xl leading-relaxed mt-8 border-l-4 border-primary pl-6 py-2">
                    &quot;My goal is simple: to help you understand your body, improve your movement and return to the life you want to live.&quot;
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="text-primary" /> Professional Focus
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Physiotherapy rehabilitation",
                    "Hydrotherapy and aquatic rehabilitation",
                    "Musculoskeletal physiotherapy",
                    "Post-operative rehabilitation",
                    "Neurological rehabilitation",
                    "Chest physiotherapy",
                    "Geriatric physiotherapy",
                    "Home-based physiotherapy",
                    "Workplace ergonomics and wellness",
                  ].map((focus, index) => (
                    <div key={index} className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl border border-border/50">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
                      <span className="font-medium text-foreground">{focus}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
