import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface BookingNotificationForCustomerEmailProps {
  firstName: string
  type: string
  date: string
  time: string
}

export function BookingNotificationForCustomerEmail({
  firstName,
  type,
  date,
  time,
}: Readonly<BookingNotificationForCustomerEmailProps>): JSX.Element {
  const previewText = `We received your appointment request`
  return (
    <Html lang="en">
      <Head>
        <title>Your appointment request was received</title>
        <Preview>{previewText}</Preview>
      </Head>
      <Tailwind>
        <Body>
          <Section>
            <Text className="text-xl">Hello {firstName},</Text>
            <Text className="text-base">
              Thank you for requesting an appointment with Brian Oduor
              Physiotherapy. We have received your request and will contact you
              shortly to confirm the details.
            </Text>
            <Text className="text-base">Your request:</Text>
            <ul className="list-disc pl-6">
              <li>Service: {type}</li>
              <li>Date: {date}</li>
              <li>Time: {time}</li>
            </ul>
            <Text className="text-base">
              Please note this appointment is not yet confirmed. We will reach
              out to you soon.
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
