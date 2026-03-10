"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, type Variants } from "framer-motion";

const FEATURES = [
  {
    title: "Personal Goal Tracking",
    desc: "Set clear personal targets, stay consistent, and monitor your progress over time.",
    pill: "Stay consistent",
    image: "/images/iphone2.png",
  },
  {
    title: "Group Commitment Circles",
    desc: "Create shared circles with people you trust and stay aligned on collective goals.",
    pill: "Grow together",
    image: "/images/iphone2.png",
  },
  {
    title: "Progress Monitoring",
    desc: "Track milestones, follow your journey, and stay motivated with visible progress.",
    pill: "See progress",
    image: "/images/iphone2.png",
  },
  {
    title: "Centralized Dashboard",
    desc: "Manage your activities, track updates, and keep everything organized in one place.",
    pill: "One clear view",
    image: "/images/iphone2.png",
  },
  {
    title: "Organized Contributions",
    desc: "Coordinate group commitments with a clear structure that keeps everyone on track.",
    pill: "Stay organized",
    image: "/images/iphone2.png",
  },
  {
    title: "Monthly Planning",
    desc: "Prepare ahead for important recurring commitments with better structure and timing.",
    pill: "Plan ahead",
    image: "/images/iphone2.png",
  },
];

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export default function Features() {
  return (
    <section id="features" className="bg-[#FFDF4C]/10 py-12 md:py-18">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-black tracking-tight text-[#660033] md:text-6xl">
            Everything you need to stay on track
          </h2>
          <p className="mt-3 text-base text-[#660033]/70 md:text-lg">
            From personal discipline to shared commitments, Mypeep helps you
            stay organized, consistent, and focused on growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => (
            <motion.article
              key={f.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className={[
                "group relative overflow-hidden rounded-3xl",
                "border border-[#660033]/10 bg-white",
                "shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
                "hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]",
              ].join(" ")}
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFDF4C]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#660033]" />
                  </div>

                  <span className="rounded-full bg-[#660033]/5 px-3 py-1 text-xs font-semibold text-[#660033]">
                    {f.pill}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#660033] md:text-2xl">
                  {f.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#660033]/70">
                  {f.desc}
                </p>

                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#660033] opacity-90 transition group-hover:opacity-100"
                >
                  Learn more <span aria-hidden>›</span>
                </Link>
              </div>

              <div className="px-6 pb-6">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#FFDF4C]/15 md:h-52">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>

              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#FFDF4C]/30 blur-2xl" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
