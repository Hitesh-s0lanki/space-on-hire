import Tags from "@/components/common/tags";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Asset } from "@/type/index.type";
import { IdCard, MapPin } from "lucide-react";
import Image from "next/image";

type Props = {
    is_active?: boolean
    asset: Asset
    setActive: (value: Asset) => void;
};

const AssetDataCard = ({ is_active, asset, setActive }: Props) => {
    return (
        <div
            onClick={() => setActive(asset)}
            className={cn(" py-4 px-2 border-b-2 flex gap-4 bg-white", is_active && "bg-[#F6FCFF] border border-r-0 border-[#16418F] rounded-l-sm")}>
            <Image
                src="/sample.jpeg"
                alt="sample"
                height={50}
                width={170}
                className=" rounded-lg"
            />
            <div className="w-full flex flex-col justify-start py-2">
                <div className=" flex gap-3 items-center">
                    <h1 className=" font-semibold text-lg" >{asset.location}</h1>
                    <Tags text={"Vacant"} />
                </div>
                <div className=" text-sm text-muted-foreground flex flex-col justify-start px-1">
                    <p>size: {`${asset.height} X ${asset.width}`}</p>
                    <p>Media Type: {asset.media_type}</p>
                    <p>Zone: {asset.zone}</p>
                </div>
                <div className=" flex gap-2 text-muted-foreground text-sm pt-2">
                    <p className="flex gap-1 items-center ">
                        <MapPin className=" text-muted-foreground size-4" />
                        {asset.area}
                    </p>
                    <Separator orientation="vertical" />
                    <p className="flex gap-1 items-center ">
                        <IdCard className=" text-muted-foreground size-4" />
                        {asset.code}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AssetDataCard;