"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { addBooking } from "@/actions/booking"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { useForm } from "react-hook-form"

import { bookings, type Booking, type BusinessHours } from "@/db/schema"
import { addBookingSchema, type AddBookingInput } from "@/validations/booking"
import { DAYS_OF_WEEK, TIME_INTERVAL } from "@/data/constants"

import { useToast } from "@/hooks/use-toast"
import { getDaysClosed, getTimeOptions } from "@/lib/booking"
import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  UncontrolledFormMessage,
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

interface BookingAddFormProps {
  existingBookings: Booking[] | null
  datesUnavailable: Date[]
  businessHours: BusinessHours | null
}

export function BookingAddForm({
  existingBookings,
  datesUnavailable,
  businessHours,
}: BookingAddFormProps): JSX.Element {
  const router = useRouter()
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const daysClosed = businessHours
    ? getDaysClosed(businessHours, DAYS_OF_WEEK)
    : []

  const form = useForm<AddBookingInput>({
    resolver: zodResolver(addBookingSchema),
    mode: "onChange",
    defaultValues: {
      type: "physiotherapy consultation",
      date: undefined,
      time: undefined,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(formData: AddBookingInput) {
    startTransition(async () => {
      try {
        const message = await addBooking({
          type: formData.type,
          date: formData.date,
          time: formData.time,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        })

        switch (message) {
          case "success":
            toast({
              title: "Thank you!",
              description:
                "We will contact you shortly to confirm your appointment",
            })
            router.push("/")
            break
          case "slot-taken":
            toast({
              title: "Time slot unavailable",
              description:
                "That date and time was just booked. Please choose another slot.",
              variant: "destructive",
            })
            break
          default:
            toast({
              title: "Something went wrong",
              description: "Please try booking again",
              variant: "destructive",
            })
        }
      } catch (error) {
        console.error(error)
        toast({
          title: "Something went wrong",
          description: "Please try booking again",
          variant: "destructive",
        })
      }
    })
  }

  const timeOptions = getTimeOptions(
    form.watch("date"),
    form.watch("type"),
    existingBookings || [],
    businessHours || ({} as BusinessHours),
    TIME_INTERVAL
  )

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-8"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        {/* Section: Service & schedule */}
        <fieldset className="grid gap-4">
          <legend className="mb-1 flex items-center gap-2 text-sm font-semibold text-primary">
            <Icons.calendar className="size-4" aria-hidden="true" />
            Service &amp; schedule
          </legend>

          {/* Service */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Service</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value: typeof field.value) =>
                      field.onChange(value)
                    }
                  >
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Object.values(bookings.type.enumValues).map(
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
                <UncontrolledFormMessage
                  message={form.formState.errors.type?.message}
                />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Date */}
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
                          className={cn(
                            "w-full text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
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
                        required
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={[
                          { before: new Date() },
                          { dayOfWeek: daysClosed },
                          ...datesUnavailable,
                        ]}
                      />
                    </PopoverContent>
                  </Popover>
                  <UncontrolledFormMessage
                    message={form.formState.errors.date?.message}
                  />
                </FormItem>
              )}
            />

            {/* Time */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value: typeof field.value) =>
                        field.onChange(value)
                      }
                      disabled={
                        !form.watch("date") ||
                        (timeOptions && timeOptions.length === 0)
                      }
                    >
                      <SelectTrigger className="capitalize">
                        <SelectValue
                          placeholder={
                            !form.watch("date")
                              ? "Select a date first"
                              : timeOptions && timeOptions.length === 0
                                ? "No times available"
                                : field.value || "Select time"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent className="max-h-[220px] overflow-y-auto">
                        <SelectGroup>
                          {timeOptions &&
                            timeOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className="capitalize"
                              >
                                {option}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <UncontrolledFormMessage>
                    {form.formState.errors.time?.message}
                  </UncontrolledFormMessage>
                </FormItem>
              )}
            />
          </div>
        </fieldset>

        {/* Section: Your details */}
        <fieldset className="grid gap-4">
          <legend className="mb-1 flex items-center gap-2 text-sm font-semibold text-primary">
            <Icons.user className="size-4" aria-hidden="true" />
            Your details
          </legend>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <UncontrolledFormMessage
                    message={form.formState.errors.firstName?.message}
                  />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <UncontrolledFormMessage
                    message={form.formState.errors.lastName?.message}
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <UncontrolledFormMessage
                    message={form.formState.errors.email?.message}
                  />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="254726017063" {...field} />
                  </FormControl>
                  <UncontrolledFormMessage
                    message={form.formState.errors.phone?.message}
                  />
                </FormItem>
              )}
            />
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief description of your concern</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe what you would like help with"
                    {...field}
                    className="min-h-[96px] resize-none"
                  />
                </FormControl>
                <UncontrolledFormMessage
                  message={form.formState.errors.message?.message}
                />
              </FormItem>
            )}
          />
        </fieldset>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto sm:min-w-[120px]"
            )}
          >
            Cancel
          </Link>
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
                <span>Booking...</span>
              </>
            ) : (
              <span>Request Appointment</span>
            )}
            <span className="sr-only">Request Appointment</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}
