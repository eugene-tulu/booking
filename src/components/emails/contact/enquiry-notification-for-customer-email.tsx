import { Body, Head, Html, Preview, Section, Tailwind, Text } from "@react-email/components"

interface EnquiryNotificationForCustomerEmailProps {
  firstName: string
  email: string
  phone: string
  message?: string
}

export function EnquiryNotificationForCustomerEmail({
  firstName,
  email,
  phone,
  message,
}: Readonly<EnquiryNotificationForCustomerEmailProps>): JSX.Element {
  const previewText = `Thank you for contacting ARKA Veterinary Clinic`
  return (
    <Html lang="en">
      <Head>
        <title>We received your enquiry</title>
        <Preview>{previewText}</Preview>
      </Head>
      <Tailwind>
        <Body>
          <Section>
            <Text className="text-xl">Hello {firstName},</Text>
            <Text className="text-base">
              Thank you for reaching out. We have received your enquiry and will get back to you shortly.
            </Text>
            <Text className="text-base">
              For your records, here is what you submitted:
            </Text>
            <ul className="list-disc pl-6">
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              {message && <li>Message: {message}</li>}
            </ul>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
