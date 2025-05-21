import { act, useState } from "react";
import AssetDataCard from "./asset-data-card";
import { data } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { Asset } from "@/type/index.type";
import Link from "next/link";
import AssetPreview from "./asset-preview";

type Props = {};

const AssetDataTable = ({ }: Props) => {
    const [active, setActive] = useState<Asset | null>(data[0])

    return (
        <div className=" w-full grid grid-cols-2">
            <div className=" flex flex-col">
                {data.map((asset) => (
                    <AssetDataCard key={asset.id} asset={asset} is_active={asset.id === active?.id} setActive={setActive} />
                ))}
            </div>
            {active && <AssetPreview active={active} />}
        </div>
    );
};

export default AssetDataTable;