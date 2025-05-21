import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = ({ }: Props) => {
    return (
        <div className=" py-48 w-full bg-gradient-to-b  from-[#1e283f] via-[#2d3b5e] to-[#3e4a70] flex justify-center items-center px-20">
            <div className=" h-full grid grid-cols-2 gap-4 px-14 items-center">
                <div className="text-5xl text-white font-semibold space-y-5">
                    <h1>AI-Based Solution for Outdoor Advertising Made Easy & Measurable </h1>
                    <div className=" text-lg bg-clip-text text-slate-300 font-normal">
                        Say goodbye to the challenges of managing and booking spaces. Only AI-SpaceHire combines cutting-edge AI technology, space management expertise, and data to enable efficient, seamless space rental and optimization across the globe.
                    </div>
                    <div className=" flex gap-3 justify-start items-center pt-5">
                        <Input className="h-10 w-[350px]"
                            placeholder="Enter business email"
                        />
                        <Button
                            className="rounded-full"
                            variant="premium"
                            asChild
                        >
                            <Link href="/business-type-picker">
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className=" w-full flex justify-center items-center">
                    <Image
                        src="/back.webp"
                        alt="background"
                        height={440}
                        width={440}
                        className=" rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;