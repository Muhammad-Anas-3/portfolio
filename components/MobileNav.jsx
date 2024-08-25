"use client";

// shadcn ui components
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// hooks and Link
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// icons
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
              className={`${link.path === pathname &&
                "text-green-500 border-b-2 border-green-500"
                }
          capitalize hover:text-green-500 font-medium transition-all
          `}
              onClick={handleLinkClick}
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
