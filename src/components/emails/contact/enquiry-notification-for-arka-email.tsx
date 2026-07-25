import { Body, Head, Html, Preview, Tailwind } from "@react-email/components"

interface EnquiryNotificationForArkaEmailProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  message?: string
}

export function EnquiryNotificationForArkaEmail({
  firstName,
  lastName,
  email,
  phone,
  message,
}: Readonly<EnquiryNotificationForArkaEmailProps>): JSX.Element {
  const previewText = `${firstName} ${lastName} sent an enquiry from the contact form`
  return (
    <Html lang="en">
      <Head>
        <title>New contact form enquiry</title>
        <Preview>{previewText}</Preview>
      </Head>
      <Tailwind>
        <Body>
          <p>New enquiry from the contact form on Brian Oduor Physiotherapy website.</p>
          <ul>
            <li>Name: {firstName} {lastName}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            {message && <li>Message: {message}</li>}
          </ul>
        </Body>
      </Tailwind>
    </Html>
  )
}
