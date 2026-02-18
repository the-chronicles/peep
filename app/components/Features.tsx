"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Automated Payments",
    desc: "Collect payments faster on your terms — automatically or manually.",
    icon: "/images/icons/auto.svg", 
    cardBg: "bg-white",
    pill: "Set & forget",
    image: "/images/iphone2.png", 
  },
  {
    title: "Fixed Payments",
    desc: "Lock in payments for a fixed duration without hassle until maturity.",
    icon: "/images/icons/lock.svg",
    cardBg: "bg-white",
    pill: "Secure & steady",
    image: "/images/iphone2.png",
  },
  {
    title: "Goal-oriented Payments",
    desc: "Take payments for multiple goals — solo or with a team.",
    icon: "/images/icons/target.svg",
    cardBg: "bg-white",
    pill: "Reach targets",
    image: "/images/iphone2.png",
  },
  {
    title: "Emergency Fund",
    desc: "Save, manage, organize, and withdraw whenever you need to.",
    icon: "/images/icons/bolt.svg",
    cardBg: "bg-white",
    pill: "Always ready",
    image: "/images/iphone2.png",
  },
  {
    title: "Multi-currency",
    desc: "Accept and hold funds across currencies with simple conversion.",
    icon: "/images/icons/globe.svg",
    cardBg: "bg-white",
    pill: "Global ready",
    image: "/images/iphone2.png",
  },
  {
    title: "Rent & Bills",
    desc: "Plan for rent and household expenses with scheduled collections.",
    icon: "/images/icons/home.svg",
    cardBg: "bg-white",
    pill: "Plan ahead",
    image: "/images/iphone2.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Features() {
  return (
    <section
      id="features"
      className="bg-[#FFDF4C]/10 py-12 md:py-18"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-black tracking-tight text-[#660033] md:text-6xl">
            Many ways to power your payments
          </h2>
          <p className="mt-3 text-base text-[#660033]/70 md:text-lg">
            Offer customers flexible options — quick checkout, recurring billing,
            and secure collections built for every business type.
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
              className={[
                "group relative overflow-hidden rounded-3xl",
                "border border-[#660033]/10 bg-white",
                "shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
                "transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]",
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

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FFDF4C]/30 blur-2xl" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
