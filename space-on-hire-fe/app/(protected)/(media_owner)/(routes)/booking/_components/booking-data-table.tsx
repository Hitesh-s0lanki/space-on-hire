"use client";

import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Columns } from "./column";
import { Booking } from "@/type/index.type";
import { DataTableToolbar } from "./data-table-toolbar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
    data: Booking[]
};

const BookingDataTable = ({
    data
}: Props) => {

    const columns = Columns()

    const [tab, setTab] = useState("all")
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    );
    const [columnVisibility, setColumnVisibility] =
        useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="p-5 h-screen w-full flex flex-col gap-5">
            <DataTableToolbar
                table={table}
            />
            <div className="inline-flex h-10 items-center justify-start rounded-md border-2 border-muted p-1 text-muted-foreground bg-white">
                <div className={cn("px-3 py-1.5 text-sm font-medium  cursor-pointer", tab === "all" && "font-bold    text-[#16418F]  border-b-2 border-[#16418F] shadow-none rounded-none")}
                    onClick={() => {
                        table.resetColumnFilters()
                    }}
                >
                    All
                </div>
                <Separator orientation="vertical" />
                <div className={cn("px-3 py-1.5 text-sm font-medium  cursor-pointer", tab === "26ideas" && "font-bold    text-[#16418F]  border-b-2 border-[#16418F] shadow-none rounded-none")}
                    onClick={() => {
                        table.getColumn("studio")?.setFilterValue("NORMAL");
                    }}>
                    Upcoming
                </div>
                <Separator orientation="vertical" />
                <div className={cn("px-3 py-1.5 text-sm font-medium  cursor-pointer", tab === "retail" && "font-bold    text-[#16418F]  border-b-2 border-[#16418F] shadow-none rounded-none")}
                    onClick={() => {
                        table.getColumn("studio")?.setFilterValue("RETAIL");
                        setTab("retail")
                    }}>
                    Previous
                </div>
            </div>
        </div>
    );
};

export default BookingDataTable;