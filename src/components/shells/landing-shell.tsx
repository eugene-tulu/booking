"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

interface LandingShellProps extends React.PropsWithChildren {
  showBackButton?: boolean
}

export function LandingShell({
  children,
  showBackButton = true,
}: LandingShellProps): JSX.Element {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between bg-transparent px-5 py-4 md:px-6 lg:px-7">
        {showBackButton ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="gap-2"
          >
            <Icons.chevronLeft className="size-4" aria-hidden="true" />
            Back
          </Button>
        ) : (
          <div />
        )}
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}
