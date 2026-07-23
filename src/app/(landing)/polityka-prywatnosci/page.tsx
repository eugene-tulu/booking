import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Privacy Policy",
  description: "Privacy policy for Brian Oduor Physiotherapy",
}

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-6 lg:px-7">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>

      <p className="mt-6 text-lg">
        Brian Oduor Physiotherapy is committed to protecting your personal data.
        This privacy policy explains how we collect, use, and safeguard your information.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Information We Collect</h2>
      <ul className="mt-4 list-inside list-disc space-y-2">
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Appointment details and preferences</li>
        <li>Health-related information you provide when booking</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">How We Use Your Information</h2>
      <ul className="mt-4 list-inside list-disc space-y-2">
        <li>To schedule and manage your appointments</li>
        <li>To communicate appointment confirmations and updates</li>
        <li>To provide physiotherapy services</li>
        <li>To improve our services</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Data Protection</h2>
      <p className="mt-4">
        We implement appropriate security measures to protect your personal data
        from unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Contact Us</h2>
      <p className="mt-4">
        If you have any questions about this privacy policy, please contact us at:
        <br />
        📍 Dahlia Wellness Centre, Westlands, Nairobi, Kenya
        <br />
        📞 +254 726 017 063
        <br />
        📞 +254 117 889 911
      </p>
    </div>
  )
}
