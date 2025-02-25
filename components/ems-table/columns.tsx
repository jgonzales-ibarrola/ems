"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RecordColumns = {
  employeeId: string
    employeeName: string
    department: string
    agency: string
    remarks: string
    date_n_time: string
}

export const columns: ColumnDef<RecordColumns>[] = [
  {
    accessorKey: "employeeId",
    header: "Employee ID",
  },
  {
    accessorKey: "employeeName",
    header: "Employee Name",
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       Employee Name
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </Button>
    //   ) 
    // },
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "agency",
    header: "Agency",
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
  {
    accessorKey: "date_n_time",
    header: "Date & Time",
  },
]
