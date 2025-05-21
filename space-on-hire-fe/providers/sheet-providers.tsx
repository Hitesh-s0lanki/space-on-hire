"use client";

import CreateCustomerSheet from "@/components/sheets/create-customer-sheet";
import { useEffect, useState } from "react";

const SheetProviders = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <CreateCustomerSheet />
        </>
    );
};

export default SheetProviders;