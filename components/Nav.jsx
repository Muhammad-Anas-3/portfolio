"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
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
    <nav className="flex gap-8">
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
  );
};

export default Nav;
