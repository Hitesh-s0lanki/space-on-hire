"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, SquareArrowOutDownLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import AssetDataTable from "./data-table";

type Props = {};

const AssetView = ({}: Props) => {
  return (
    <div className=" h-full w-full flex flex-col gap-5 p-5">
      {/* Search and Add Section */}
      <div className="flex justify-between gap-5">
        <div className=" flex gap-1 items-center h-10 w-1/3 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <Input
            className="w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search"
          />
          <Search className=" size-5" />
        </div>
        <div className=" flex gap-2 ">
          <div className="flex gap-2 items-center">
            <p className=" text-xs font-semibold">Sort By</p>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Asset Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Asset Name">Asset Name</SelectItem>
                <SelectItem value="Last Updated">Last Updated</SelectItem>
                <SelectItem value="Last Created">Last Created</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            Import
            <SquareArrowOutDownLeft className=" size-4 ml-2" />
          </Button>
          <Button asChild>
            <Link href="/asset/add">
              Add Asset
              <Plus className=" size-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Tab Section */}
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="  w-full justify-start border-2 bg-white">
          <TabsTrigger value="All">All</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="Occupied">Occupied</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="Vacant">Vacant</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="Maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="All">
          <AssetDataTable />
        </TabsContent>
        <TabsContent value="Occupied"></TabsContent>
        <TabsContent value="Vacant">
          <AssetDataTable />
        </TabsContent>
        <TabsContent value="Maintenance">Maintenance</TabsContent>
      </Tabs>
    </div>
  );
};

export default AssetView;
