import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { DEFAULT_UNAUTHENTICATED_REDIRECT } from "@/config/defaults"

import auth from "@/lib/auth"

import { UserUpdateForm } from "@/components/forms/auth/user-update-form"
import { ImageCarousel } from "@/components/image-carousel"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

const profileImages = [
  { src: "/images/profile/IMG_0235.jpg", alt: "Profile picture 1" },
  { src: "/images/profile/IMG_0236.jpg", alt: "Profile picture 2" },
  { src: "/images/profile/IMG_0237.jpg", alt: "Profile picture 3" },
  { src: "/images/profile/IMG_0238.jpg", alt: "Profile picture 4" },
  { src: "/images/profile/IMG_0239.jpg", alt: "Profile picture 5" },
  { src: "/images/profile/IMG_0240.jpg", alt: "Profile picture 6" },
  { src: "/images/profile/IMG_0241.jpg", alt: "Profile picture 7" },
]

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Profile",
  description: "Manage administrator data",
}

export default async function ProfilePage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect(DEFAULT_UNAUTHENTICATED_REDIRECT)

  return (
    <Shell variant="sidebar">
      <PageHeader className="my-8">
        <PageHeaderHeading size="sm">Profile</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Manage administrator data
        </PageHeaderDescription>
      </PageHeader>
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <ImageCarousel
          images={profileImages}
          aspectRatio={3 / 4}
          autoPlay
          interval={4000}
          className="mx-auto w-full max-w-[280px]"
        />
        <UserUpdateForm />
      </div>
    </Shell>
  )
}
