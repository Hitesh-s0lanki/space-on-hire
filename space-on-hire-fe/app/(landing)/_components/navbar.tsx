"use client";

import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const font = Raleway({ subsets: ["latin"] });

const Navbar = ({}: Props) => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "w-full py-4 px-28 flex justify-between items-center fixed z-50 bg-black/40",
        scrolled && ""
      )}>
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8">
          <Image fill alt="logo" src="/logo.svg" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Space On Hire
        </h1>
      </Link>
      <div className="flex gap-1">
        <Button
          variant="ghost"
          className=" text-white hover:bg-background/20 hover:text-white text-lg">
          Products
        </Button>
        <Button
          variant="ghost"
          className=" text-white hover:bg-background/20 hover:text-white text-lg">
          Solutions
        </Button>
        <Button
          variant="ghost"
          className=" text-white hover:bg-background/20 hover:text-white text-lg">
          Company
        </Button>
        <Button
          variant="ghost"
          className=" text-white hover:bg-background/20 hover:text-white text-lg">
          Resources
        </Button>
      </div>
      <div className="flex items-center gap-x-2">
        <Button variant="ghost" className="rounded-full text-white" size="sm">
          Log in
        </Button>
        <Link href="">
          <Button variant="premium" size={"sm"} className="rounded-full">
            <Search className="mr-2 h-4 w-4" />
            Find billboards near me
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
