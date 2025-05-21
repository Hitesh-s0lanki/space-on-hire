import { Button } from "@/components/ui/button";
import { Asset } from "@/type/index.type";
import Image from "next/image";

type Props = {
    asset: Asset
};

const AssetCard = ({ asset }: Props) => {
    return (
        <div className=" w-full rounded-sm border bg-card shadow-sm p-2 flex gap-2 relative">
            <Image
                src="/sample.jpeg"
                alt="sample"
                height={50}
                width={120}
                className=" rounded-lg"
            />
            <div className=" w-full flex flex-col gap-1">
                <h1 className=" text-sm font-semibold">{asset.location}</h1>
                <div className=" text-xs text-muted-foreground flex flex-col justify-start">
                    <p>size: {`${asset.height} X ${asset.width}`}</p>
                    <p>Media Type: {asset.media_type}</p>
                    <p>Zone: {asset.zone}</p>
                    <p>Area: {asset.area}</p>
                </div>
            </div>
            <div className=" absolute right-3 bottom-2">
                <Button className=" text-xs rounded-full h-6">
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default AssetCard;