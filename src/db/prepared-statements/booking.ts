import { eq, sql } from "drizzle-orm"

import { db } from "@/config/db"
import { bookings } from "@/db/schema"

export const psGetAllBookings = db
  .select()
  .from(bookings)
  .prepare("psGetAllBookings")

export const psDeleteBookingById = db
  .delete(bookings)
  .where(eq(bookings.id, sql.placeholder("id")))
  .prepare("psDeleteBookingById")

export const psCheckIfBookingExists = db.query.bookings
  .findFirst({
    columns: {
      id: true,
    },
    where: eq(bookings.id, sql.placeholder("id")),
  })
  .prepare("psCheckIfBookingExists")
