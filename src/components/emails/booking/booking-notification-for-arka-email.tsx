import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface BookingNotificationForArkaEmailProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  type: string
  date: string
  time: string
  message?: string
}

export function BookingNotificationForArkaEmail({
  firstName,
  lastName,
  email,
  phone,
  type,
  date,
  time,
  message,
}: Readonly<BookingNotificationForArkaEmailProps>): JSX.Element {
  const previewText = `New appointment request from ${firstName} ${lastName}`
  return (
    <Html lang="en">
      <Head>
        <title>New appointment request</title>
        <Preview>{previewText}</Preview>
      </Head>
      <Tailwind>
        <Body>
          <Section>
            <Text className="text-xl">New appointment request</Text>
            <Text className="text-base">
              A new appointment has been requested on the Brian Oduor
              Physiotherapy website. It is currently unconfirmed.
            </Text>
            <ul className="list-disc pl-6">
              <li>
                Name: {firstName} {lastName}
              </li>
              <li>Service: {type}</li>
              <li>Date: {date}</li>
              <li>Time: {time}</li>
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              {message && <li>Message: {message}</li>}
            </ul>
            <Text className="text-base">
              Log in to the admin dashboard to confirm or reject this booking.
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
