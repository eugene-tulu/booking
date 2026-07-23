import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getClinic } from "@/actions/clinic"

import { DEFAULT_UNAUTHENTICATED_REDIRECT } from "@/config/defaults"

import auth from "@/lib/auth"

import { ClinicUpdateForm } from "@/components/forms/clinic/clinic-update-form"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Clinic",
  description: "Manage clinic data",
}

export default async function ClinicPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect(DEFAULT_UNAUTHENTICATED_REDIRECT)

  const clinic = await getClinic()

  return (
    <Shell variant="sidebar">
      <PageHeader className="my-8">
        <PageHeaderHeading size="sm">Clinic</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Manage clinic data
        </PageHeaderDescription>
      </PageHeader>
      <div className="w-full overflow-hidden">
        {clinic ? (
          <ClinicUpdateForm clinic={clinic} />
        ) : (
          <div>Loading clinic data...</div>
        )}
      </div>
    </Shell>
  )
}
