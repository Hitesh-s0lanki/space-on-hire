import AssetCreationForm from "@/components/form/asset-creation-form";
import Image from "next/image";

type Props = {};

const AssetCreation = ({ }: Props) => {
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
                    Add Asset
                </h1>
            </div>
            <AssetCreationForm />
        </div>
    );
};

export default AssetCreation;