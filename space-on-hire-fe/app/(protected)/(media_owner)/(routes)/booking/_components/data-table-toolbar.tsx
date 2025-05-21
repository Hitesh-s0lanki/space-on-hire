"use client";

import { Plus, Search, X } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCustomerCreate } from "@/hooks/use-customer-create-sheet";
import Link from "next/link";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {

  const { onOpen } = useCustomerCreate()

  const isFiltered = table.getState().columnFilters.length > 0;
  const [searchParams, setSearchParams] = useState("customer")

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className=" flex gap-1 items-center h-10 w-2/5 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <Input
            className="w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search"
            value={
              (table.getColumn(searchParams)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) => {

              table
                .getColumn(searchParams)
                ?.setFilterValue(event.target.value)
            }
            }
          />
          <Search className=" size-5" />
        </div>

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center">
          <p className=" text-xs font-semibold">Sort By</p>
          <Select
            value={searchParams}
            onValueChange={setSearchParams}
          >
            <SelectTrigger className="w-[150px]"
            >
              <SelectValue placeholder="Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer">Customer Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button asChild>
          <Link href="/booking/create">
            Add Booking
            <Plus className=" size-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
