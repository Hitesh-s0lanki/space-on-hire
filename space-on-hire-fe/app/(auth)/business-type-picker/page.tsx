import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

type Props = {};

const font = Raleway({ subsets: ["latin"], weight: "600" });

const BusinessTypePicker = ({ }: Props) => {
    return (
        <div className="h-full w-full">
            <div className=" h-full w-full flex justify-center items-center flex-col gap-10">
                <Link href="/" className="flex items-center" >
                    <div className="relative h-16 w-16">
                        <Image
                            fill
                            alt="logo"
                            src="/logo-color.svg"
                        />
                    </div>
                    <h1 className={cn("text-4xl font-bold text-[#16418F] ", font.className)}>
                        Space On Hire
                    </h1>
                </Link>
                <div className=" grid grid-cols-3 gap-5">
                    <Card className=" shadow-md p-3">
                        <CardContent className=" flex justify-center items-center pt-6">
                            <Image
                                src="/icons/media_owner.svg"
                                alt="media owner"
                                height={80}
                                width={80}
                            />
                        </CardContent>
                        <CardHeader className=" pt-2">
                            <CardTitle className=" text-center">Are you an Media Owner?</CardTitle>
                        </CardHeader>
                        <CardFooter className=" flex justify-center">
                            <Button className=" rounded-full" asChild>
                                <Link href="/media-owner">
                                    Continue
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className=" shadow-md p-3">
                        <CardContent className=" flex justify-center items-center pt-6">
                            <Image
                                src="/icons/advertiser.svg"
                                alt="media owner"
                                height={80}
                                width={80}
                            />
                        </CardContent>
                        <CardHeader className=" pt-2">
                            <CardTitle className=" text-center">Are you an advertiser?</CardTitle>
                        </CardHeader>
                        <CardFooter className=" flex justify-center">
                            <Button className=" rounded-full">
                                Continue
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className=" shadow-md p-3">
                        <CardContent className=" flex justify-center items-center pt-6">
                            <Image
                                src="/icons/agent.svg"
                                alt="media owner"
                                height={80}
                                width={80}
                            />
                        </CardContent>
                        <CardHeader className=" pt-2">
                            <CardTitle className=" text-center">Are you an agency?</CardTitle>
                        </CardHeader>
                        <CardFooter className=" flex justify-center">
                            <Button className=" rounded-full">
                                Continue
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Button
                        variant="link"
                        asChild>
                        <Link href="/">
                            <MoveLeft className=" size-4 mr-2" />
                            back
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BusinessTypePicker;