"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";

import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-green-500 text-[32px]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col text-white">
        {/* logo */}
        <div className="mt-20 mb-40 text-center">
          <Link href="/">
            <h1 className="font-semibold text-3xl">
              <span className="text-green-500">&lt;</span>anas
              <span className="text-green-500">/&gt;</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex gap-8 flex-col items-center">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={`${
                link.path === pathname &&
                "text-green-500 border-b-2 border-green-500"
              }
          capitalize hover:text-green-500 font-medium transition-all
          `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
