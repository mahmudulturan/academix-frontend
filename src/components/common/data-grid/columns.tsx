"use client";
import { ColumnDef } from "@tanstack/react-table";
import { LucideSettings2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/constant";
import DataGridSortingDropdown from "./sorting-dropdown";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="px-6">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="px-6">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent"
        >
            <DataGridSortingDropdown column={column} title="Name" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent"
        >
            <DataGridSortingDropdown column={column} title="Email" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={status === "active" ? "default" : status === "inactive" ? "secondary" : "outline"}
          className={
            status === "active"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : status === "inactive"
                ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as string
      return (
        <Badge variant="outline" className="capitalize">
          {role}
        </Badge>
      )
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent"
        >
            <DataGridSortingDropdown column={column} title="Name" />
        </Button>
      )
    },
  },
  {
    accessorKey: "joinDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent"
        >
            <DataGridSortingDropdown column={column} title="Name" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("joinDate"))
      return <div>{date.toLocaleDateString()}</div>
    },
  },
  {
    id: "actions",
    header: () => {
      return (
        <div className="flex items-center justify-end px-6">
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <LucideSettings2 />
          </Button>
        </div>
      );
    },
    cell: () => {
      return (
        <div className="flex items-center justify-end px-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">
                View
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer text-red-500"
                disabled
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
