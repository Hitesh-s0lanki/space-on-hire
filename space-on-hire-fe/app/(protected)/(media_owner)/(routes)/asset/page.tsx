import Image from "next/image";
import AssetView from "./_components/assets-view";

type Props = {};

const AssetPage = ({ }: Props) => {
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
                    Assets
                </h1>
            </div>
            <AssetView />
        </div>
    );
};

export default AssetPage;