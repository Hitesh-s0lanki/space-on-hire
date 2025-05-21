import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {};

const Intro = ({ }: Props) => {
    return (
        <div className=" bg-[#F6FCFF] w-full">

            <div className=" grid grid-cols-2 gap-2 items-center px-32 py-20">
                <div>
                    <Image
                        src="/icons/billboards.avif"
                        alt="Billboard"
                        height={450}
                        width={450}
                    />
                </div>
                <div className=" flex flex-col gap-5">
                    <h1 className=" text-4xl font-bold">Billboards and Beyond</h1>
                    <div className=" flex flex-col gap-4 text-muted-foreground text-md">
                        <p>AdQuick seamlessly connects advertisers to out-of-home (OOH) media owners anywhere in the U.S. and abroad, and makes it easier than ever to plan, buy, and measure every kind of outdoor advertising –– from static billboards to hand-painted murals.</p>
                        <p>With AdQuick, advertisers gain immediate access to over 1,600 premium OOH media owners, can execute OOH buys 10x faster, launch OOH campaigns in as little as 48 hours, and unlock unprecedented measurability.</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-5">
                    <h1 className=" text-4xl font-bold">Browse a birds-eye view of the entire OOH market</h1>
                    <div className=" flex flex-col gap-4 text-muted-foreground text-md">
                        <p>AdQuick Browse offers a birds-eye view of the entire OOH market, providing you with a comprehensive understanding of available advertising opportunities. Whether you are a media planner or an advertiser seeking to seize new opportunities, this tool will revolutionize how you interface with the world of out of home advertising.</p>
                    </div>
                    <div>

                        <Button
                            variant="premium"
                            size="sm"
                            className="rounded-full "
                        >
                            Explore Browse
                        </Button>
                    </div>
                </div>
                <div>
                    <Image
                        src="/icons/browse_home.avif"
                        alt="Billboard"
                        height={550}
                        width={550}
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;