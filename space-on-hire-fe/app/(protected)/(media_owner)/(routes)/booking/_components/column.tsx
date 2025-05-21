"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Button } from "@/components/ui/button";
import { Booking } from "@/type/index.type";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const Columns = (): ColumnDef<Booking>[] => {
    const columns: ColumnDef<Booking>[] = [
        {
            accessorKey: "id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Sr No." />
            ),
            cell: ({ row }) => <div className="w-[20px] text-center">{row.index + 1}</div>,
        },
        {
            accessorKey: "customer",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Customer" />
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <Button className=" h-8 text-xs rounded-sm" variant="outline" asChild>
                    <Link href={`/booking/${row.original.id}`}>
                        View Booking
                    </Link>
                </Button>
            ),
        },
    ];

    return columns;
};