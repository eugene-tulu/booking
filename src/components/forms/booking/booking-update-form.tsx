"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { updateBooking } from "@/actions/booking"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { useForm } from "react-hook-form"

import { bookings, type Booking, type BusinessHours } from "@/db/schema"
import {
  updateBookingSchema,
  type UpdateBookingInput,
} from "@/validations/booking"
import { TIME_INTERVAL } from "@/data/constants"

import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

interface BookingUpdateFormProps {
  booking: Booking
  businessHours: BusinessHours | null
}

function buildTimeOptions(
  selectedDate: Date,
  businessHours: BusinessHours | null
): string[] {
  const day = selectedDate
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase()
  const open =
    (businessHours?.[`${day}Opening` as keyof BusinessHours] as string | undefined) ??
    "08:00"
  const close =
    (businessHours?.[`${day}Closing` as keyof BusinessHours] as string | undefined) ??
    "17:00"

  const [oh, om] = open.split(":")
  const [ch, cm] = close.split(":")
  const start = Number(oh) * 60 + Number(om)
  const end = Number(ch) * 60 + Number(cm)

  const options: string[] = []
  for (let minutes = start; minutes + TIME_INTERVAL <= end; minutes += TIME_INTERVAL) {
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    options.push(
      `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
    )
  }
  return options
}

export function BookingUpdateForm({
  booking,
  businessHours,
}: BookingUpdateFormProps): JSX.Element {
  const router = useRouter()
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<UpdateBookingInput>({
    resolver: zodResolver(updateBookingSchema),
    mode: "onChange",
    defaultValues: {
      id: booking.id,
      type: booking.type,
      date: booking.date,
      time: booking.time,
      firstName: booking.firstName,
      lastName: booking.lastName,
      email: booking.email,
      phone: booking.phone,
      message: booking.message ?? "",
      status: booking.status,
    },
  })

  function onSubmit(formData: UpdateBookingInput) {
    startTransition(async () => {
      try {
        const message = await updateBooking({
          id: booking.id,
          type: formData.type,
          date: formData.date,
          time: formData.time,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          status: formData.status,
        })

        switch (message) {
          case "success":
            toast({
              title: "Booking updated",
              description: "The appointment has been saved",
            })
            router.refresh()
            router.push("/admin/bookings")
            break
          case "not-found":
            toast({
              title: "Booking not found",
              description: "This booking may have been deleted",
              variant: "destructive",
            })
            break
          default:
            toast({
              title: "Something went wrong",
              description: "Please try updating again",
              variant: "destructive",
            })
        }
      } catch (error) {
        console.error(error)
        toast({
          title: "Something went wrong",
          description: "Please try updating again",
          variant: "destructive",
        })
      }
    })
  }

  const timeOptions = React.useMemo(
    () =>
      form.watch("date")
        ? buildTimeOptions(form.watch("date"), businessHours)
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form.watch("date"), businessHours]
  )

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-8"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <fieldset className="grid gap-4">
          <legend className="mb-1 flex items-center gap-2 text-sm font-semibold text-primary">
            <Icons.calendar className="size-4" aria-hidden="true" />
            Service &amp; schedule
          </legend>

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Service</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value: Booking["type"]) =>
                      field.onChange(value)
                    }
                  >
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Object.values(bookings.type.enumValues).map((option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            className="capitalize"
                          >
                            {option.replace(/-/g, " ")}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          type="button"
                          variant={"outline"}
                          size={"datePicker"}
                          className="w-full text-left font-normal"
                          aria-label="Select appointment date"
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: enUS })
                          ) : (
                            <span>Select a date</span>
                          )}
                          <Icons.calendar className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        locale={enUS}
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                    onValueChange={(value: Booking["status"]) =>
                      field.onChange(value)
                    }
                      disabled={!form.watch("date") || timeOptions.length === 0}
                    >
                      <SelectTrigger className="capitalize">
                        <SelectValue
                          placeholder={
                            !form.watch("date")
                              ? "Select a date first"
                              : timeOptions.length === 0
                                ? "No times available"
                                : field.value || "Select time"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent className="max-h-[220px] overflow-y-auto">
                        <SelectGroup>
                          {timeOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value: Booking["status"]) =>
                      field.onChange(value)
                    }
                  >
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Object.values(bookings.status.enumValues).map(
                          (option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className="capitalize"
                            >
                              {option.replace(/-/g, " ")}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <fieldset className="grid gap-4">
          <legend className="mb-1 flex items-center gap-2 text-sm font-semibold text-primary">
            <Icons.user className="size-4" aria-hidden="true" />
            Client details
          </legend>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="254726017063" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief description of concern</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe what you would like help with"
                    {...field}
                    className="min-h-[96px] resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Button
            type="submit"
            disabled={isPending || !form.formState.isValid}
            className="w-full sm:w-auto sm:min-w-[200px]"
          >
            {isPending ? (
              <>
                <Icons.spinner
                  className="mr-2 size-4 animate-spin"
                  aria-hidden="true"
                />
                <span>Saving...</span>
              </>
            ) : (
              <span>Save changes</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
