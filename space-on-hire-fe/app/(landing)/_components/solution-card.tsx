import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Lightbulb, PackageOpen } from "lucide-react";

type Props = {};

const SolutionCard = ({ }: Props) => {
    return (
        <div className=" px-40 grid grid-cols-3 gap-5 items-center py-20">
            <Card className=" rounded-lg shadow-lg">
                <CardContent className="pt-6">
                    <PackageOpen className=" size-14 text-[#1e283f] " />
                </CardContent>
                <CardHeader className=" gap-2 pt-2">
                    <CardTitle>Products</CardTitle>
                    <CardDescription>
                        The AdQuick Platform is the most advanced solution suite for modern OOH advertising, powered by robust datasets and proprietary, purpose-built technologies.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="p-2">
                    <Button variant="link">Learn More</Button>
                </CardFooter>
            </Card>
            <Card className=" rounded-lg shadow-lg">
                <CardContent className="pt-6">
                    <Lightbulb className=" size-14 text-[#1e283f] " />
                </CardContent>
                <CardHeader className=" gap-2 pt-2">
                    <CardTitle>Solutions</CardTitle>
                    <CardDescription>
                        The AdQuick Platform is the most advanced solution suite for modern OOH advertising, powered by robust datasets and proprietary, purpose-built technologies.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="p-2">
                    <Button variant="link">Learn More</Button>
                </CardFooter>
            </Card>
            <Card className=" rounded-lg shadow-lg">
                <CardContent className="pt-6">
                    <Calculator className=" size-14 text-[#1e283f] " />
                </CardContent>
                <CardHeader className=" gap-2 pt-2">
                    <CardTitle>Billboard Cost Calculator</CardTitle>
                    <CardDescription>
                        The AdQuick Platform is the most advanced solution suite for modern OOH advertising, powered by robust datasets and proprietary, purpose-built technologies.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="p-2">
                    <Button variant="link">Learn More</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SolutionCard;