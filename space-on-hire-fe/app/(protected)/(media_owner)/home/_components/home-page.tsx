"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";
import Image from "next/image";
import QuestionCard from "./questions";

const font = Raleway({
  weight: "600",
  subsets: ["latin"],
});

const HomePage = () => {
  const placeholders = ["Ask me anything?"];

  const words =
    "Use AI-powered tools to deliver quick and personalized responses to customer inquiries.";

  const links = [
    {
      title: "Dashboard",
      icon: (
        <Image
          src="/icons/dashboard.svg"
          width={150}
          height={150}
          className=" text-white"
          alt="Dashboard Logo"
        />
      ),
      href: "/dashboard",
    },
    {
      title: "Assets",
      icon: (
        <Image
          src="/icons/asset.svg"
          width={150}
          height={150}
          className=" text-white"
          alt="Asset Logo"
        />
      ),
      href: "/asset",
    },
    {
      title: "Customers",
      icon: (
        <Image
          src="/icons/customer.svg"
          width={150}
          height={150}
          className=" text-white"
          alt="Customer Logo"
        />
      ),
      href: "/customer",
    },
    {
      title: "Bookings",
      icon: (
        <Image
          src="/icons/booking.svg"
          width={150}
          height={150}
          className=" text-white"
          alt="Booking Logo"
        />
      ),
      href: "/booking",
    },
    {
      title: "Settings",
      icon: (
        <Image
          src="/icons/setting.svg"
          width={150}
          height={150}
          className=" text-white"
          alt="Setting Logo"
        />
      ),
      href: "/setting",
    },
  ];

  return (
    <div className=" h-full w-full flex flex-col justify-center items-center gap-8 relative rounded-lg overflow-auto">
      <div className=" w-1/2 flex flex-col justify-center items-center flex-wrap gap-1 ">
        <div className="flex items-center">
          <div className="relative h-16 w-16">
            <Image fill alt="logo" src="/logo-color.svg" />
          </div>
          <h1
            className={cn("text-5xl font-bold relative z-20", font.className)}>
            Space On Hire
          </h1>
        </div>
        <TextGenerateEffect className=" font-normal text-xs" words={words} />
      </div>

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={() => {}}
        onSubmit={() => {}}
      />

      <div className=" w-1/2">{/* <QuestionCard /> */}</div>

      {/* <Image
                src="/loading.gif"
                alt="loading"
                height={100}
                width={100}
            /> */}

      <div className="flex items-center justify-center w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
};

export default HomePage;
