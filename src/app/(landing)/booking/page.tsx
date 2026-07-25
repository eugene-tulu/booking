import Link from "next/link"
import {
  getBusinessHours,
  getDatesUnavailableAsAnArrayOfDates,
} from "@/actions/availability"
import { getAllBookings } from "@/actions/booking"
import { getClinic } from "@/actions/clinic"
import Balancer from "react-wrap-balancer"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { BookingAddForm } from "@/components/forms/booking/booking-add-form"
import { Footer } from "@/components/nav/landing/footer"
import { SubPageHeader } from "@/components/nav/landing/sub-page-header"

export const dynamic = "force-dynamic"

export default async function AddBookingPage(): Promise<JSX.Element> {
  const clinic = await getClinic()
  const businessHours = await getBusinessHours()
  const datesUnavailable = await getDatesUnavailableAsAnArrayOfDates()
  const existingBookings = await getAllBookings()

  return (
    <main className="mx-auto h-auto w-full max-w-[2560px] overflow-x-hidden">
      <SubPageHeader />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emeraldGradientFrom to-emeraldGradientTo">
        <Card className="w-full bg-primary-foreground px-2 pb-2 pt-8 sm:w-[70vw] md:w-[480px]">
          <CardHeader className="text-center text-2xl font-bold">
            Book an Appointment
          </CardHeader>
          <CardContent>
            <BookingAddForm
              businessHours={businessHours}
              datesUnavailable={datesUnavailable}
              existingBookings={existingBookings}
            />
          </CardContent>
          <CardFooter>
            <p className="text-xs leading-[160%] text-muted-foreground">
              <Balancer>
                By submitting this form, you consent to the processing of your
                personal data for service fulfillment, in accordance with our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-foreground"
                >
                  Privacy Policy
                </Link>
                .
              </Balancer>
            </p>
          </CardFooter>
        </Card>
      </div>
      <Footer
        address={clinic?.address || "Dahlia Wellness Centre, 8 School Lane, Westlands, Nairobi, Kenya"}
        phone_1={clinic?.phone_1 || "+254 726 017 063"}
        phone_2={clinic?.phone_2 || "+254 117 889 911"}
      />
    </main>
  )
}
