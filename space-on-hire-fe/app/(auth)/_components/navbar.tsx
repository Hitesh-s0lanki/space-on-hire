import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const font = Raleway({ subsets: ["latin"] });

const Navbar = ({}: Props) => {
  return (
    <div
      className={
        "w-full py-4 px-20 flex justify-between items-center fixed z-50 border-b-2 bg-black"
      }>
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-12">
          <Image fill alt="logo" src="/logo-color.svg" />
        </div>
        <h1
          className={cn("text-3xl font-bold text-[#16418F] ", font.className)}>
          Space On Hire
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
