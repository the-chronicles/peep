import Image from "next/image";
import Link from "next/link";
import React from "react";

const FOOTER_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Learn", href: "#learn" },
  { label: "FAQs", href: "#faq" },
];

function Footer() {
  return (
    <footer className="bg-[#FFDF4C]/15">
      <div className="container mx-auto max-w-7xl px-4 py-14 md:py-18">
        <div className="overflow-hidden rounded-[28px] bg-[#FFDF4C] p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-4xl leading-tight font-black text-[#660033] uppercase md:text-6xl">
                Earn more with <br />
                frictionless <br />
                payments
              </h3>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#660033]/70 md:text-base">
                Simplify how you manage money and convert more with your payment
                experience.
              </p>

              <div className="mt-7 flex flex-wrap">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#660033] px-6 py-3 text-sm font-semibold text-[#FFDF4C] transition hover:opacity-90"
                >
                  Get Started <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-65 w-full overflow-hidden rounded-3xl md:h-80">
                <Image
                  src="/images/hero3.png"
                  alt="Preview"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 shadow-sm">
                <p className="text-xs font-semibold text-[#660033]">
                  Payment done ✅
                </p>
                <p className="text-[11px] text-[#660033]/60">
                  Fast. Secure. Reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo2.png"
                alt="Logo"
                width={96}
                height={96}
                className="h-9 w-auto"
              />
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#660033]/70">
              Manage payments, get insights, and streamline your business
              operations — all in one place.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-sm font-bold text-[#660033]">Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#660033]/70">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:text-[#660033]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 h-px w-full bg-[#660033]/10" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-[#660033]/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} Peep Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#660033]">
              𝕏
            </Link>
            <Link href="#" className="hover:text-[#660033]">
              Instagram
            </Link>
            <Link href="#" className="hover:text-[#660033]">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
