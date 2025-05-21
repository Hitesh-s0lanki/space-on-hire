import { Button } from "@/components/ui/button";
import { Asset } from "@/type/index.type";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  active: Asset;
};

const AssetPreview = ({ active }: Props) => {
  return (
    <div className=" h-full w-full flex flex-col justify-between gap-1 bg-[#F6FCFF] items-start py-8 border border-l-0 border-[#16418F] ">
      {/* Asset More details */}
      <div className=" flex flex-col gap-3">
        <div className=" flex gap-1 px-4 items-center">
          <div className=" flex flex-col gap-1">
            <Image
              src="/sample.jpeg"
              alt="sample"
              height={80}
              width={160}
              className=" rounded-lg"
            />
            <Image
              src="/sample.jpeg"
              alt="sample"
              height={80}
              width={160}
              className=" rounded-lg"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <Image
              src="/sample.jpeg"
              alt="sample"
              height={80}
              width={160}
              className=" rounded-lg"
            />
            <Image
              src="/sample.jpeg"
              alt="sample"
              height={80}
              width={160}
              className=" rounded-lg"
            />
          </div>
          <div className=" text-sm text-muted-foreground flex flex-col justify-start px-1">
            <div className=" flex gap-3 items-center">
              <h1 className=" font-semibold text-lg">{active?.location}</h1>
            </div>
            <p>size: {`${active?.height} X ${active?.width}`}</p>
            <p>Media Type: {active?.media_type}</p>
            <p>Zone: {active?.zone}</p>
            <p>Facing: {active?.facing}</p>
            <p>Screen type: {active?.screen_type}</p>
            <p>Area: {active?.area}</p>
            <p>ZipCode: {active?.zipcode}</p>
            <p>TotalArea: {active?.total_area}</p>
            <p>Unit: {active?.unit}</p>
          </div>
        </div>
        <Tabs defaultValue="All" className="w-full px-4">
          <TabsList className="  w-full justify-start">
            <TabsTrigger value="All" className="  ">
              Schedule
            </TabsTrigger>
            <TabsTrigger value="Occupied">Map</TabsTrigger>
            <TabsTrigger value="Vacant">Audience</TabsTrigger>
            <TabsTrigger value="Maintenance">Bookings</TabsTrigger>
          </TabsList>
          <TabsContent value="All"></TabsContent>
          <TabsContent value="Occupied"></TabsContent>
          <TabsContent value="Vacant"></TabsContent>
          <TabsContent value="Maintenance">Maintenance</TabsContent>
        </Tabs>
      </div>

      {/* Calendar View */}
      {/* <div className=" grid grid-cols-2 gap-1">
                    <Calendar
                        mode="single"
                        className="rounded-md w-full"
                        selected={date}
                        onSelect={setDate}
                    />
                    <div className=" py-2">
                        Events
                    </div>
                </div> */}

      {/* Footer */}
      <div className=" w-full grid grid-cols-2 gap-2 px-8">
        <Button variant="outline" asChild>
          <Link href={`/asset/${active?.id}`}>View Asset</Link>
        </Button>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default AssetPreview;
