import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { DEFAULT_UNAUTHENTICATED_REDIRECT } from "@/config/defaults"

import auth from "@/lib/auth"
import { getBusinessHours, getDatesUnavailableAsAnArrayOfDates } from "@/actions/availability"
import { getAllBookings } from "@/actions/booking"

import { BookingAddForm } from "@/components/forms/booking/booking-add-form"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Add booking",
  description: "Create a new appointment booking",
}

export default async function AdminAddBookingPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect(DEFAULT_UNAUTHENTICATED_REDIRECT)

  const businessHours = await getBusinessHours()
  const datesUnavailable = await getDatesUnavailableAsAnArrayOfDates()
  const existingBookings = await getAllBookings()

  return (
    <Shell variant="sidebar">
      <PageHeader className="my-8">
        <PageHeaderHeading size="sm">Add booking</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Create a new appointment booking
        </PageHeaderDescription>
      </PageHeader>
      <div className="w-full overflow-hidden">
        <BookingAddForm
          businessHours={businessHours}
          datesUnavailable={datesUnavailable}
          existingBookings={existingBookings}
          redirectTo="/admin/bookings"
        />
      </div>
    </Shell>
  )
}
