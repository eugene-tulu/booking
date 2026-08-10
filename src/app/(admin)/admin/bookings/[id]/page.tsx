import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { eq } from "drizzle-orm"

import { DEFAULT_UNAUTHENTICATED_REDIRECT } from "@/config/defaults"

import auth from "@/lib/auth"
import { db } from "@/config/db"
import { bookings } from "@/db/schema"
import { getBusinessHours } from "@/actions/availability"

import { BookingUpdateForm } from "@/components/forms/booking/booking-update-form"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

interface AdminEditBookingPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Edit booking",
  description: "Edit an appointment booking",
}

export default async function AdminEditBookingPage({
  params,
}: Readonly<AdminEditBookingPageProps>): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect(DEFAULT_UNAUTHENTICATED_REDIRECT)

  const booking = await db.query.bookings.findFirst({
    where: eq(bookings.id, params.id),
  })

  if (!booking) notFound()

  const businessHours = await getBusinessHours()

  return (
    <Shell variant="sidebar">
      <PageHeader className="my-8">
        <PageHeaderHeading size="sm">Edit booking</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Update appointment details and status
        </PageHeaderDescription>
      </PageHeader>
      <div className="w-full overflow-hidden">
        <BookingUpdateForm booking={booking} businessHours={businessHours} />
      </div>
    </Shell>
  )
}
