"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Button } from "@/components/ui/button";
import { Customer } from "@/type/index.type";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const Columns = (): ColumnDef<Customer>[] => {
    const columns: ColumnDef<Customer>[] = [
        {
            accessorKey: "id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Sr No." />
            ),
            cell: ({ row }) => <div className="w-[20px] text-center">{row.index + 1}</div>,
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Name" />
            )
        },
        {
            accessorKey: "email",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Email" />
            )
        },
        {
            accessorKey: "company_name",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Company" />
            )
        },
        {
            accessorKey: "city",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="City" />
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <Button className=" h-8 text-xs rounded-sm" variant="outline" asChild>
                    <Link href={`/customer/${row.original.id}`}>
                        View Profile
                    </Link>
                </Button>
            ),
        },
    ];

    return columns;
};