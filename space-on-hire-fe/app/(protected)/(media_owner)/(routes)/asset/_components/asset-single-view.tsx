import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator";
import { Asset } from "@/type/index.type";
import AboutCard from "./about-card";

type Props = {
    data: Asset
};

const AssetSingleView = ({
    data
}: Props) => {
    return (
        <div className=" h-full w-full flex flex-col gap-5 p-5">
            <Tabs defaultValue="About" className="w-full">
                <TabsList className="  w-full justify-start border-2 bg-white">
                    <TabsTrigger value="About">About</TabsTrigger>
                    <Separator orientation="vertical" />
                    <TabsTrigger value="Audience">Audience</TabsTrigger>
                    <Separator orientation="vertical" />
                    <TabsTrigger value="Shedule">Shedule</TabsTrigger>
                    <Separator orientation="vertical" />
                    <TabsTrigger value="Booking">Booking</TabsTrigger>
                    <Separator orientation="vertical" />
                    <TabsTrigger value="Maintenance">Maintenance</TabsTrigger>
                </TabsList>
                <TabsContent value="About">
                    <AboutCard data={data} />

                </TabsContent>
                <TabsContent value="Audience"></TabsContent>
                <TabsContent value="Shedule">

                </TabsContent>
                <TabsContent value="Booking">

                </TabsContent>
                <TabsContent value="Maintenance">Maintenance</TabsContent>
            </Tabs>
        </div>
    );
};

export default AssetSingleView;