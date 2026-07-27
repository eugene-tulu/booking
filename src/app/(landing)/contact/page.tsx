"use client"

import React from "react"
import { SectionReveal } from "@/components/SectionReveal"
import {
  MapPin,
  Phone,
  Send,
} from "lucide-react"
import { useForm } from "react-hook-form"

export default function Contact(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm()

  const onSubmit = async (data: unknown) => {
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col pt-20 min-h-screen bg-muted">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Book an Appointment
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Take the first step towards recovery. Reach out to schedule a consultation or home visit.
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
                <h2 className="text-2xl font-bold mb-2">Request an Appointment</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we will contact you to confirm your booking.</p>

                {isSubmitSuccessful ? (
                  <div className="bg-accent/50 border border-primary/20 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                      <Send size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Request Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours to confirm your appointment details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                        <input
                          {...register("phone", { required: true })}
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                          placeholder="+254 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Preferred Date</label>
                        <input
                          {...register("date")}
                          type="date"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Preferred Time</label>
                        <select
                          {...register("time")}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50 appearance-none"
                        >
                          <option value="">Select a time...</option>
                          <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                          <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                          <option value="Evening (4pm - 6pm)">Evening (4pm - 6pm)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Service Required</label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50 appearance-none"
                      >
                        <option value="Physiotherapy consultation">Physiotherapy consultation</option>
                        <option value="Home physiotherapy">Home physiotherapy</option>
                        <option value="Hydrotherapy">Hydrotherapy</option>
                        <option value="Post-operative rehabilitation">Post-operative rehabilitation</option>
                        <option value="Back or neck pain">Back or neck pain</option>
                        <option value="Sports injury rehabilitation">Sports injury rehabilitation</option>
                        <option value="Neurological rehabilitation">Neurological rehabilitation</option>
                        <option value="Geriatric physiotherapy">Geriatric physiotherapy</option>
                        <option value="Corporate wellness">Corporate wellness</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Additional Details</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-muted/50 resize-none"
                        placeholder="Briefly describe what you would like help with."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? "Sending Request..." : "Request an Appointment"}
                    </button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      We&apos;ll get back to you within 24 hours to confirm your appointment.
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
