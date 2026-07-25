"use client"

import * as React from "react"
import Link from "next/link"
import { deleteBooking } from "@/actions/booking"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { type ColumnDef } from "@tanstack/react-table"

import { bookings, type Booking } from "@/db/schema"

import { useToast } from "@/hooks/use-toast"
import { formatDate } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/data-table/data-table"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

interface BookingsTableShellProps {
  data: Booking[]
  pageCount: number
  _clinicId?: number
  onStatusChange?: (
    input: { id: string; status: Booking["status"] }
  ) => Promise<"invalid-input" | "not-found" | "error" | "success">
}

export function BookingsTableShell({
  data,
  pageCount,
  _clinicId,
  onStatusChange,
}: BookingsTableShellProps): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const columns = React.useMemo<ColumnDef<Booking, unknown>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value)
            }}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              row.toggleSelected(!!value)
            }}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "type",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ cell }) => {
          const types = Object.values(bookings.type.enumValues)
          const type = cell.getValue() as Booking["type"]

          if (!types.includes(type)) return null

          return (
            <Badge variant="outline" className="capitalize">
              {type}
            </Badge>
          )
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ cell }) => {
          const statuses = Object.values(bookings.status.enumValues)
          const status = cell.getValue() as Booking["status"]

          if (!statuses.includes(status)) return null

          return (
            <Badge variant="outline" className="capitalize">
              {status}
            </Badge>
          )
        },
      },
      {
        id: "appointment",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Appointment" />
        ),
        cell: ({ row }) => {
          const date = row.original.date
          const time = row.original.time
          return (
            <span>
              {formatDate(date)} {time}
            </span>
          )
        },
      },
      {
        accessorKey: "firstName",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="First name" />
        ),
      },
      {
        accessorKey: "lastName",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Last name" />
        ),
      },
      {
        accessorKey: "phone",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Phone" />
        ),
      },
      {
        accessorKey: "email",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Email" />
        ),
      },
      {
        accessorKey: "message",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Message" />
        ),
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Created" />
        ),
        cell: ({ cell }) => formatDate(cell.getValue() as Date),
        enableColumnFilter: false,
      },
      {
        accessorKey: "updatedAt",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Updated" />
        ),
        cell: ({ cell }) => formatDate(cell.getValue() as Date),
        enableColumnFilter: false,
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontalIcon className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem asChild>
                <Link href={`/admin/clinic/bookings/${row.original.id}`}>
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/booking/${row.original.id}`}>View</Link>
              </DropdownMenuItem>
              {onStatusChange && row.original.status === "unconfirmed" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      startTransition(async () => {
                        const result = await onStatusChange({
                          id: row.original.id,
                          status: "confirmed",
                        })
                        if (result === "success") {
                          toast({ title: "Booking confirmed" })
                        } else {
                          toast({
                            title: "Could not update booking",
                            variant: "destructive",
                          })
                        }
                      })
                    }}
                  >
                    Confirm
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      startTransition(async () => {
                        const result = await onStatusChange({
                          id: row.original.id,
                          status: "cancelled",
                        })
                        if (result === "success") {
                          toast({ title: "Booking cancelled" })
                        } else {
                          toast({
                            title: "Could not update booking",
                            variant: "destructive",
                          })
                        }
                      })
                    }}
                  >
                    Reject
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  startTransition(async () => {
                    row.toggleSelected(false)
                    await deleteBooking({ id: row.original.id })
                    toast({
                      title: "Booking deleted",
                    })
                  })
                }}
                disabled={isPending}
              >
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    [isPending, toast, onStatusChange]
  )

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={pageCount}
      filterableColumns={[
        {
          id: "type",
          title: "Type",
          options: bookings.type.enumValues.map((type) => ({
            label: `${type.charAt(0).toUpperCase()}${type.slice(1)}`,
            value: type,
          })),
        },
      ]}
      newRowLink={`/admin/bookings/add`}
    />
  )
}
