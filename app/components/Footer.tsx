"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const FOOTER_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Learn", href: "#learn" },
  { label: "FAQs", href: "#faq" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Footer() {
  return (
    <footer className="bg-[#FFDF4C]/15">
      <div className="container mx-auto max-w-7xl px-4 py-14 md:py-18">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-[28px] bg-[#FFDF4C] p-6 md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={fadeUp}
                className="text-4xl leading-tight font-black text-[#660033] uppercase md:text-6xl"
              >
                Earn more with <br />
                frictionless <br />
                payments
              </motion.h3>

              <motion.p
                variants={fadeUp}
                className="mt-3 max-w-md text-sm leading-relaxed text-[#660033]/70 md:text-base"
              >
                Simplify how you manage money and convert more with your payment
                experience.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap">
                <Link href="/">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#660033] px-6 py-3 text-sm font-semibold text-[#FFDF4C]"
                  >
                    Get Started →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-65 w-full overflow-hidden rounded-3xl md:h-80"
              >
                <Image
                  src="/images/hero3.png"
                  alt="Preview"
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 shadow-sm"
              >
                <p className="text-xs font-semibold text-[#660033]">
                  Payment done ✅
                </p>
                <p className="text-[11px] text-[#660033]/60">
                  Fast. Secure. Reliable.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-10 md:grid-cols-2 md:items-start"
        >
          <motion.div variants={fadeUp}>
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
          </motion.div>

          <motion.div variants={fadeUp} className="md:justify-self-end">
            <h4 className="text-sm font-bold text-[#660033]">Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#660033]/70">
              {FOOTER_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={l.href}
                    className="transition hover:text-[#660033]"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 h-px w-full origin-left bg-[#660033]/10"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-[#660033]/70 md:flex-row"
        >
          <p>
            © {new Date().getFullYear()} Peep Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {["𝕏", "Instagram", "Facebook"].map((s) => (
              <motion.span key={s} whileHover={{ y: -2, scale: 1.05 }}>
                <Link href="#" className="hover:text-[#660033]">
                  {s}
                </Link>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
