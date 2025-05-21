"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const font = Raleway({
  weight: "600",
  subsets: ["latin"],
});

export function MainSidebar() {
  const pathname = usePathname();

  const links = [
    {
      label: "Dashboard",
      icon: (
        <Image
          src="/icons-black/dashboard.png"
          width={20}
          height={20}
          alt="Dashboard Logo"
        />
      ),
      active_icon: (
        <Image
          src="/icons/dashboard.svg"
          width={20}
          height={20}
          alt="Dashboard Logo"
        />
      ),
      href: "/dashboard",
    },
    {
      label: "Assets",
      icon: (
        <Image
          src="/icons-black/asset.png"
          width={20}
          height={20}
          alt="Asset Logo"
        />
      ),
      active_icon: (
        <Image src="/icons/asset.svg" width={20} height={20} alt="Asset Logo" />
      ),
      href: "/asset",
    },
    {
      label: "Customers",
      icon: (
        <Image
          src="/icons-black/customer.png"
          width={20}
          height={20}
          alt="Customer Logo"
        />
      ),
      active_icon: (
        <Image
          src="/icons/customer.svg"
          width={20}
          height={20}
          alt="Customer Logo"
        />
      ),
      href: "/customer",
    },
    {
      label: "Bookings",
      icon: (
        <Image
          src="/icons-black/booking.png"
          width={20}
          height={20}
          alt="Booking Logo"
        />
      ),
      active_icon: (
        <Image
          src="/icons/booking.svg"
          width={20}
          height={20}
          alt="Booking Logo"
        />
      ),
      href: "/booking",
    },
    {
      label: "Team",
      icon: (
        <Image
          src="/icons-black/team.svg"
          width={20}
          height={20}
          alt="Team Logo"
        />
      ),
      active_icon: (
        <Image src="/icons/team.svg" width={20} height={20} alt="Team Logo" />
      ),
      href: "/team",
    },
    {
      label: "Settings",
      icon: (
        <Image
          src="/icons-black/setting.svg"
          width={20}
          height={20}
          alt="Setting Logo"
        />
      ),
      active_icon: (
        <Image
          src="/icons/setting.svg"
          width={20}
          height={20}
          alt="Setting Logo"
        />
      ),
      href: "/setting",
    },
  ];

  return (
    <div className="hidden py-4 w-72 md:flex md:flex-col lg:flex lg:flex-col h-full  text-black border-r-2">
      <Link href="/home" className="flex  justify-start mb-10 px-5">
        <div className="flex items-center">
          <div className="relative h-10 w-10">
            <Image fill alt="logo" src="/logo-color.svg" />
          </div>
          <h1 className={cn("text-lg font-bold relative z-20", font.className)}>
            Space On Hire
          </h1>
        </div>
      </Link>

      <div className="flex flex-col">
        {links.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              pathname.startsWith(route.href)
                ? "text-black bg-[#F0FAFF] border-r-2 border-[#16418F] text-md"
                : "text-zinc-400"
            )}>
            <p
              className={cn(
                "flex flex-row items-center gap-2 text-[#383838] px-6 py-4"
              )}>
              {pathname === route.href ? route.active_icon : route.icon}
              {route.label}
            </p>
          </Link>
        ))}
        <div className={"text-black "}>
          <div
            className="flex items-center flex-1 gap-2"
            // onClick={async () => await logout()}
          >
            <p
              className={cn(
                "flex flex-row items-center gap-2 text-[#383838] px-6 py-4"
              )}>
              <Image
                src="/icons-black/logout.svg"
                width={20}
                height={20}
                alt="logout Logo"
              />
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
