import * as z from "zod"

export const hourSchema = z
  .string({
    required_error: "Enter opening hour",
    invalid_type_error: "Invalid data type",
  })
  .length(5)
  .regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
    message: "Invalid time format. Correct format is HH:MM",
  })

export const businessHoursIdSchema = z
  .string({
    required_error: "ID is required",
    invalid_type_error: "Input must be text",
  })
  .min(1, {
    message: "ID must have at least 1 character",
  })
  .max(128, {
    message: "ID can have a maximum of 32 characters",
  })

export const dayStatusSchema = z.object({
  status: z.enum(["open", "closed"]).default("open"),
  opening: hourSchema.default("08:00"),
  closing: hourSchema.default("17:00"),
})

export const singleDaySchema = dayStatusSchema

export const businessHoursSchema = z.object({
  mondayStatus: z.enum(["open", "closed"]).default("open"),
  mondayOpening: hourSchema.default("08:00"),
  mondayClosing: hourSchema.default("17:00"),
  tuesdayStatus: z.enum(["open", "closed"]).default("open"),
  tuesdayOpening: hourSchema.default("08:00"),
  tuesdayClosing: hourSchema.default("17:00"),
  wednesdayStatus: z.enum(["open", "closed"]).default("open"),
  wednesdayOpening: hourSchema.default("08:00"),
  wednesdayClosing: hourSchema.default("17:00"),
  thursdayStatus: z.enum(["open", "closed"]).default("open"),
  thursdayOpening: hourSchema.default("08:00"),
  thursdayClosing: hourSchema.default("17:00"),
  fridayStatus: z.enum(["open", "closed"]).default("open"),
  fridayOpening: hourSchema.default("08:00"),
  fridayClosing: hourSchema.default("17:00"),
  saturdayStatus: z.enum(["open", "closed"]).default("open"),
  saturdayOpening: hourSchema.default("08:00"),
  saturdayClosing: hourSchema.default("13:00"),
  sundayStatus: z.enum(["open", "closed"]).default("closed"),
  sundayOpening: hourSchema.default("08:00"),
  sundayClosing: hourSchema.default("13:00"),
})

export const dayPeriodsSchema = z.array(
  z.object({
    opening: hourSchema,
    closing: hourSchema,
  })
)

export const addBusinessHoursSchema = businessHoursSchema

export const updateBusinessHoursSchema = businessHoursSchema.extend({
  id: businessHoursIdSchema,
})

export type AddBusinessHoursInput = z.infer<typeof addBusinessHoursSchema>

export type UpdateBusinessHoursInput = z.infer<typeof updateBusinessHoursSchema>