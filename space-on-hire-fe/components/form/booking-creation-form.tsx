"use client";

import AssetCard from "@/app/(protected)/(media_owner)/(routes)/booking/_components/asset-card";
import { Input } from "@/components/ui/input";
import { customers, data } from "@/lib/data";
import { Plus, Search } from "lucide-react";
import { CommandItem } from "@/components/ui/command";
import ComboBox from "@/components/common/combo-box";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCustomerCreate } from "@/hooks/use-customer-create-sheet";

const BookingCreationForm = () => {
  const { onOpen } = useCustomerCreate();
  const [customer, setCustomer] = useState("");

  return (
    <div className=" w-full p-5 px-3 flex gap-5">
      <div className=" w-full grid grid-cols-3 gap-5">
        <div className=" col-span-2 flex flex-col gap-5">
          <div className=" w-full space-y-4">
            <div className=" space-y-2 w-full">
              <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                Customer Information
              </h1>
            </div>
            <div className=" w-full px-1">
              <ComboBox
                name={"customer"}
                value={customer}
                onSelect={setCustomer}
                options={customers.map((customer) => ({
                  label: customer.name,
                  value: customer.id,
                }))}>
                <CommandItem onSelect={() => onOpen()}>
                  <Plus className={"mr-2 h-4 w-4"} />
                  <Button
                    variant="ghost"
                    className="py-0 h-6 px-0 w-full flex justify-start">
                    Add Customer
                  </Button>
                </CommandItem>
              </ComboBox>
            </div>
          </div>
          <div className=" w-full space-y-4">
            <div className=" space-y-2 w-full">
              <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                Media Information
              </h1>
            </div>
          </div>
          <div className=" w-full space-y-4">
            <div className=" space-y-2 w-full">
              <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                Asset Selected
              </h1>
            </div>
            <div className=" grid grid-cols-3 gap-2 px-1"></div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className=" w-full space-y-2">
            <div className=" space-y-2 w-full">
              <h1 className=" text-md font-semibold bg-[#F0FAFF] py-2 px-2 ">
                Assets
              </h1>
            </div>
            <div className=" flex gap-1 items-center h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <Input
                className="w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search"
              />
              <Search className=" size-5" />
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            {data.map((asset) => (
              <AssetCard asset={asset} key={asset.id} />
            ))}
          </div>
          <div className=" w-full mt-3 flex justify-end">
            <Button className=" w-1/3">Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCreationForm;
