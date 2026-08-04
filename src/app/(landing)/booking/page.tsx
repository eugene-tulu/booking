import Link from "next/link"
import {
  getBusinessHours,
  getDatesUnavailableAsAnArrayOfDates,
} from "@/actions/availability"
import { getAllBookings } from "@/actions/booking"
import { getClinic } from "@/actions/clinic"
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react"
import Balancer from "react-wrap-balancer"

import type { BusinessHours } from "@/db/schema"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { BookingAddForm } from "@/components/forms/booking/booking-add-form"

export const dynamic = "force-dynamic"

type DayRow = {
  label: string
  status?: string
  open?: string
  close?: string
}

function getWeek(businessHours: BusinessHours | null): DayRow[] {
  const bh = businessHours
  return [
    {
      label: "Monday",
      status: bh?.mondayStatus ?? "open",
      open: bh?.mondayOpening ?? "08:00",
      close: bh?.mondayClosing ?? "17:00",
    },
    {
      label: "Tuesday",
      status: bh?.tuesdayStatus ?? "open",
      open: bh?.tuesdayOpening ?? "08:00",
      close: bh?.tuesdayClosing ?? "17:00",
    },
    {
      label: "Wednesday",
      status: bh?.wednesdayStatus ?? "open",
      open: bh?.wednesdayOpening ?? "08:00",
      close: bh?.wednesdayClosing ?? "17:00",
    },
    {
      label: "Thursday",
      status: bh?.thursdayStatus ?? "open",
      open: bh?.thursdayOpening ?? "08:00",
      close: bh?.thursdayClosing ?? "17:00",
    },
    {
      label: "Friday",
      status: bh?.fridayStatus ?? "open",
      open: bh?.fridayOpening ?? "08:00",
      close: bh?.fridayClosing ?? "17:00",
    },
    {
      label: "Saturday",
      status: bh?.saturdayStatus ?? "open",
      open: bh?.saturdayOpening ?? "08:00",
      close: bh?.saturdayClosing ?? "13:00",
    },
    {
      label: "Sunday",
      status: bh?.sundayStatus ?? "closed",
      open: bh?.sundayOpening ?? "08:00",
      close: bh?.sundayClosing ?? "13:00",
    },
  ]
}

const reassurances = [
  "No payment required to request an appointment",
  "We confirm every booking personally by phone",
  "Flexible clinic, home and hydrotherapy sessions",
]

export default async function AddBookingPage(): Promise<JSX.Element> {
  const clinic = await getClinic()
  const businessHours = await getBusinessHours()
  const datesUnavailable = await getDatesUnavailableAsAnArrayOfDates()
  const existingBookings = await getAllBookings()

  const week = getWeek(businessHours)
  const phone = clinic?.phone_1 ?? "+254 726 017 063"
  const email = clinic?.email ?? "hello@brianoduorphysiotherapy.com"
  const address =
    clinic?.address ??
    "Dahlia Wellness Centre, Clarence House, 8 School Lane, Westlands, Nairobi"

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/60 to-white">
      {/* Soft decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 size-80 rounded-full bg-emerald-300/25 blur-3xl"
      />

      <div className="container relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Page intro */}
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <CalendarCheck className="size-4" />
            Online booking
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <Balancer>Book your appointment</Balancer>
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            <Balancer>
              Tell us what you need and pick a time that works for you. We&apos;ll
              be in touch shortly to confirm the details.
            </Balancer>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
          {/* Info / reassurance panel */}
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primaryEmerald to-deepEmerald text-white shadow-lg ring-1 ring-black/5">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold">
                  What to expect
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {reassurances.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-softSage" />
                      <span className="text-sm leading-relaxed text-white/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px bg-white/15" />

                {/* Business hours */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-softSage">
                    <Clock className="size-4" />
                    Opening hours
                  </h3>
                  <dl className="mt-3 space-y-1.5">
                    {week.map((day) => (
                      <div
                        key={day.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <dt className="text-white/80">{day.label}</dt>
                        <dd className="font-medium text-white">
                          {day.status === "closed"
                            ? "Closed"
                            : `${day.open} – ${day.close}`}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="my-6 h-px bg-white/15" />

                {/* Contact */}
                <div className="space-y-3 text-sm">
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                  >
                    <Phone className="size-4 shrink-0 text-softSage" />
                    {phone}
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 break-all text-white/90 transition-colors hover:text-white"
                  >
                    <Mail className="size-4 shrink-0 text-softSage" />
                    {email}
                  </a>
                  <p className="flex items-start gap-3 text-white/90">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-softSage" />
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Booking form */}
          <Card className="border-border/70 bg-card shadow-xl shadow-primary/5">
            <CardHeader className="space-y-1 border-b border-border/60 pb-6">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Appointment details
              </h2>
              <p className="text-sm text-muted-foreground">
                Fields marked as required must be completed before submitting.
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <BookingAddForm
                businessHours={businessHours}
                datesUnavailable={datesUnavailable}
                existingBookings={existingBookings}
              />
            </CardContent>
            <CardFooter className="border-t border-border/60 pt-6">
              <p className="flex items-start gap-2 text-xs leading-[160%] text-muted-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary/70" />
                <Balancer>
                  By submitting this form, you consent to the processing of your
                  personal data for service fulfillment, in accordance with our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-foreground underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </Balancer>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
