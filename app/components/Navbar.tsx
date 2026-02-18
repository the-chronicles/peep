"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Learn", href: "#learn" },
  { label: "FAQs", href: "#faq" },
];

function Navbar() {
  const links = useMemo(() => NAV_LINKS, []);
  const [activeHash, setActiveHash] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...links.map((l) => l.href.replace("#", ""))];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    if (window.location.hash) setActiveHash(window.location.hash);

    const observer = new IntersectionObserver(
      (entries) => {
        const heroEntry = entries.find((e) => (e.target as HTMLElement).id === "hero");

        if (heroEntry?.isIntersecting) {
          setActiveHash("");
          return;
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .filter((e) => (e.target as HTMLElement).id !== "hero")
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActiveHash(`#${(visible.target as HTMLElement).id}`);
        }
      },
      {
        threshold: [0.25, 0.35, 0.5, 0.65],
        rootMargin: "-10% 0px -65% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#660033]">
      <div className="container mx-auto max-w-7xl px-4 py-5 md:py-7">
        <div className="flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo3.png"
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
                {links.map((item) => {
                  const isActive = activeHash === item.href;

                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={[
                          "block rounded-lg px-5 py-2 text-sm font-medium transition",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                          isActive
                            ? "bg-[#660033] text-[#FFDF4C]"
                            : "text-[#660033] hover:bg-[#660033]/15",
                        ].join(" ")}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-flex rounded-lg bg-[#FFDF4C] px-5 py-2 text-sm font-semibold text-[#660033] transition hover:opacity-90"
            >
              Get Started
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        <div
          className={[
            "md:hidden overflow-hidden transition-all duration-300",
            open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0",
          ].join(" ")}
        >
          <div className="rounded-xl bg-[#FFDF4C] p-2">
            <div className="flex flex-col gap-1">
              {links.map((item) => {
                const isActive = activeHash === item.href;

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={[
                      "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition",
                      isActive
                        ? "bg-[#660033] text-[#FFDF4C]"
                        : "text-[#660033] hover:bg-[#660033]/15",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}

              <Link
                href="/login"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#660033] px-4 py-3 text-sm font-semibold text-[#FFDF4C] transition hover:opacity-90"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
