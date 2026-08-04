"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { MapPin, Phone, Send } from "lucide-react"
import { useForm } from "react-hook-form"

import { contactFormSchema, type ContactFormInput } from "@/validations/email"

import { submitContactForm } from "@/actions/email"
import { useToast } from "@/hooks/use-toast"

import { SectionReveal } from "@/components/SectionReveal"

export default function Contact(): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()
  const [isSuccess, setIsSuccess] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = (data: ContactFormInput) => {
    startTransition(async () => {
      try {
        const result = await submitContactForm(data)
        switch (result) {
          case "success":
            setIsSuccess(true)
            reset()
            break
          case "invalid-input":
            toast({
              title: "Please check your details",
              description: "Some fields are missing or invalid.",
              variant: "destructive",
            })
            break
          default:
            toast({
              title: "Something went wrong",
              description: "Please try again later.",
              variant: "destructive",
            })
        }
      } catch (error) {
        console.error(error)
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <div className="flex flex-col pt-20 min-h-screen bg-muted">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Have a question or want to learn more? Send us a message and we
              will get back to you. Ready to schedule?{" "}
              <Link href="/booking" className="underline font-semibold">
                Book an appointment
              </Link>
              .
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <SectionReveal>
              <div className="flex flex-col gap-8">
                <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Clinic Address</h3>
                        <p className="text-muted-foreground">
                          Dahlia Wellness Centre, Clarence House,<br />
                          8 School Lane, Westlands,<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                        <div className="flex flex-col gap-1">
                          <a href="tel:+254726017063" className="text-muted-foreground hover:text-primary transition-colors">+254 726 017 063</a>
                          <a href="tel:+254117889911" className="text-muted-foreground hover:text-primary transition-colors">+254 117 889 911</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                        <a
                          href="https://wa.me/254726017063"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden h-64 flex flex-col">
                  <iframe
                    title="Clinic location map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=Clarence+House,+8+School+Lane,+Westlands,+Nairobi,+Kenya&output=embed"
                  />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-lg relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-3xl"></div>
                <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you.</p>

                {isSuccess ? (
                  <div className="bg-accent/50 border border-primary/20 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                      <Send size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                        <input
                          {...register("firstName")}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-xs text-destructive">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                        <input
                          {...register("lastName")}
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-destructive">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                        <input
                          {...register("phone")}
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                          placeholder="+254 XXX XXX XXX"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Looking to schedule?{" "}
                      <Link href="/booking" className="font-semibold text-primary underline">
                        Book an appointment
                      </Link>{" "}
                      instead.
                    </p>
                  </form>
                )}
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>
    </div>
  )
}
