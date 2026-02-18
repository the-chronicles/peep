"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Learn", href: "#learn" },
  { label: "FAQs", href: "#faq" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#660033] backdrop-blur-3xl">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={96}
            height={96}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:block">
          <div className="rounded-lg bg-[#FFDF4C] p-1">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "block rounded-lg px-5 py-2 text-sm font-medium transition",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#660033]/40",
                        isActive
                          ? "bg-[#660033] text-[#FFDF4C]"
                          : "text-[#660033] hover:bg-[#660033]/20",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center ">

          <Link
            href="/login"
            className="inline-flex rounded-lg bg-[#FFDF4C] px-5 py-2 text-sm font-semibold text-[#660033] transition hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
