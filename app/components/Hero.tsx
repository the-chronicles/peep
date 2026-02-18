"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-[#660033]">
      <section
        id="hero"
        className="container mx-auto max-w-7xl px-4 py-12 md:py-20"
      >
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-2 text-sm font-semibold tracking-wider text-[#FFDF4C] sm:text-base"
          >
            Your No. 1 Financial Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="max-w-4xl text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-7xl md:leading-[1.05]"
          >
            Smart payment for <br className="hidden sm:block" /> every business
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            className="mt-7 flex w-full max-w-md justify-center gap-3"
          >
            <Link href="/">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#FFDF4C] px-6 py-3 text-sm font-semibold text-[#660033] transition sm:w-auto"
              >
                Get the App <span className="ml-2">↗</span>
              </motion.span>
            </Link>

            <Link href="/">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#9d577a] px-6 py-3 text-sm font-semibold text-white transition sm:w-auto"
              >
                View a demo
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
            className="mt-10 w-full"
          >
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl">
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

              <Image
                src="/images/hero3.png"
                alt="App preview"
                width={1400}
                height={820}
                className="h-auto w-full object-cover"
                priority
                loading="eager"
              />
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
