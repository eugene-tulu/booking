import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

import { siteConfig } from "@/config/site"

interface EmailVerificationEmailProps {
  email: string
  emailVerificationToken: string
}

export function EmailVerificationEmail({
  email,
  emailVerificationToken,
}: Readonly<EmailVerificationEmailProps>): JSX.Element {
  const previewText = `Verify your email for ${siteConfig.nameShort}`
  return (
    <Html lang="en">
      <Head>
        <title>{previewText}</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Text className="text-xl">Hej,</Text>
              <Text className="text-base">
                Someone just tried to use {email} to create an administrator
                account at{" "}
                <span className="font-semibold tracking-wide">
                  {siteConfig.nameShort}
                </span>
                .
              </Text>
              <Text className="text-base">
                If that was you, click the button below to confirm your email
                and finish setting up your account.
              </Text>
              <Button
                href={`${process.env.NEXT_PUBLIC_APP_URL}/register/confirm-email?token=${emailVerificationToken}`}
              >
                Confirm my email
              </Button>
            </Section>

            <Section>
              <Text className="text-xs">
                If you did not try to register, you can safely ignore this
                email.
              </Text>
              <Text className="text-base font-medium">Have a great day!</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
