"use server"

import { unstable_noStore as noStore, revalidatePath } from "next/cache"
import { desc, eq, like, or } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/config/db"
import {
  psCheckIfBookingExists,
  psDeleteBookingById,
  psGetAllBookings,
} from "@/db/prepared-statements/booking"
import { bookings, type Booking } from "@/db/schema"
import {
  addBookingSchema,
  checkIfBookingExistsSchema,
  deleteBookingSchema,
  filterBookingsSchema,
  updateBookingSchema,
  type AddBookingInput,
  type CheckIfBookingExistsInput,
  type DeleteBookingInput,
  type FilterBookingsInput,
  type UpdateBookingInput,
} from "@/validations/booking"

import { generateId } from "@/lib/utils"

const updateBookingStatusSchema = z.object({
  id: z.string().min(1, "ID is required"),
  status: z.enum(bookings.status.enumValues),
})

type UpdateBookingStatusInput = z.infer<typeof updateBookingStatusSchema>

export async function getAllBookings(): Promise<Booking[] | null> {
  try {
    noStore()
    const bookings = await psGetAllBookings.execute()
    return bookings ? bookings : null
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function addBooking(
  rawInput: AddBookingInput
): Promise<"invalid-input" | "error" | "success"> {
  try {
    const validatedInput = addBookingSchema.safeParse(rawInput)
    if (!validatedInput.success) return "invalid-input"

    // TODO: ADD A CHECK FOR DATE AND TIME ALREADY TAKEN

    const newBooking = await db
      .insert(bookings)
      .values({
        id: generateId(),
        type: validatedInput.data.type,
        date: validatedInput.data.date,
        time: validatedInput.data.time,
        firstName: validatedInput.data.firstName,
        lastName: validatedInput.data.lastName,
        email: validatedInput.data.email,
        phone: validatedInput.data.phone,
        message: validatedInput.data.message,
        status: "unconfirmed",
      })
      .returning()

    revalidatePath("/")
    revalidatePath(`/booking`)

    return newBooking ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error adding booking")
  }
}

export async function checkIfBookingExists(
  rawInput: CheckIfBookingExistsInput
): Promise<"invalid-input" | boolean> {
  try {
    const validatedInput = checkIfBookingExistsSchema.safeParse(rawInput)
    if (!validatedInput.success) return "invalid-input"

    noStore()
    const exists = await psCheckIfBookingExists.execute({
      id: validatedInput.data.id,
    })

    return exists ? true : false
  } catch (error) {
    console.error(error)
    throw new Error("Error checking booking existence")
  }
}

export async function updateBooking(
  rawInput: UpdateBookingInput
): Promise<"invalid-input" | "not-found" | "error" | "success"> {
  try {
    const validatedInput = updateBookingSchema.safeParse(rawInput)
    if (!validatedInput.success) return "invalid-input"

    const exists = await checkIfBookingExists({ id: validatedInput.data.id })
    if (!exists || exists === "invalid-input") return "not-found"

    noStore()
    const updatedBooking = await db
      .update(bookings)
      .set({
        type: validatedInput.data.type,
        date: validatedInput.data.date,
        time: validatedInput.data.time,
        firstName: validatedInput.data.firstName,
        lastName: validatedInput.data.lastName,
        email: validatedInput.data.email,
        phone: validatedInput.data.phone,
        message: validatedInput.data.message,
        ...(validatedInput.data.status
          ? { status: validatedInput.data.status }
          : {}),
      })
      .where(eq(bookings.id, validatedInput.data.id))
      .returning()

    // TODO: Update revalidation path
    revalidatePath("/")
    revalidatePath("/admin/bookings")
    return updatedBooking ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error updating booking")
  }
}

export async function deleteBooking(
  rawInput: DeleteBookingInput
): Promise<"invalid-input" | "error" | "success"> {
  try {
    const validatedInput = deleteBookingSchema.safeParse(rawInput)
    if (!validatedInput.success) return "invalid-input"

    const deleted = await psDeleteBookingById.execute({
      id: validatedInput.data.id,
    })

    // TODO: Update path to be revalidated
    // revalidatePath("")
    revalidatePath("/admin/bookings")
    return deleted ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error deleting booking")
  }
}

export async function updateBookingStatus(
  rawInput: UpdateBookingStatusInput
): Promise<"invalid-input" | "not-found" | "error" | "success"> {
  try {
    const validatedInput = updateBookingStatusSchema.safeParse(rawInput)
    if (!validatedInput.success) return "invalid-input"

    const exists = await checkIfBookingExists({ id: validatedInput.data.id })
    if (!exists || exists === "invalid-input") return "not-found"

    noStore()
    const updatedBooking = await db
      .update(bookings)
      .set({
        status: validatedInput.data.status,
      })
      .where(eq(bookings.id, validatedInput.data.id))
      .returning()

    revalidatePath("/")
    revalidatePath("/admin/bookings")

    return updatedBooking ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error updating booking status")
  }
}

export async function filterBookings(rawInput: FilterBookingsInput) {
  try {
    const validatedInput = filterBookingsSchema.safeParse(rawInput)
    if (!validatedInput.success) return null

    noStore()
    const filteredBookings = await db
      .select()
      .from(bookings)
      .where(
        or(
          like(bookings.firstName, `%${validatedInput.data.query}%`),
          like(bookings.lastName, `%${validatedInput.data.query}%`),
          like(bookings.email, `%${validatedInput.data.query}%`)
        )
      )
      .orderBy(desc(bookings.createdAt))
      .limit(10)

    const bookingsByType = Object.values(bookings.type.enumValues).map(
      (type) => ({
        type,
        bookings: filteredBookings.filter((booking) => booking.type === type),
      })
    )

    return bookingsByType
  } catch (error) {
    console.error(error)
    throw new Error("Error filtering bookings")
  }
}
