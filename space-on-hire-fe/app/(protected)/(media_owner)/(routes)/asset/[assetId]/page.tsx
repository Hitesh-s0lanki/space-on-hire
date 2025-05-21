import Image from "next/image";
import AssetSingleView from "../_components/asset-single-view";
import { data } from "@/lib/data";

type Props = {};

const AssetIdPage = ({ }: Props) => {
    return (
        <div className=" h-full w-full overflow-auto">
            <div className="bg-[#F6FAFD] p-5 px-8 flex gap-2 items-center">
                <Image
                    src="/icons/asset.svg"
                    width={22}
                    height={22}
                    alt="Asset Logo"
                />
                <h1 className=" font-semibold text-xl ">
                    Asset
                </h1>
            </div>
            <AssetSingleView data={data[0]} />
        </div>
    );
};

export default AssetIdPage;