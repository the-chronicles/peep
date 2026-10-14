"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Support() {
  const mailtoLink = "mailto:peep@mypeepapp.com";

  return (
    <section className="w-full bg-[#FFDF4C]/20 py-16 md:py-24">
      <div className="container mx-auto max-w-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border border-[#660033]/10 bg-white p-7 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-9"
        >
          <h1 className="text-xl font-bold tracking-tight text-[#660033] sm:text-2xl">
            Peep Support
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#660033]/90 sm:text-base">
            Need help with your Peep account? Contact our support team for
            assistance with account access, privacy questions or other issues.
          </p>

          <div className="mt-6">
            <a
              href={mailtoLink}
              className="block w-full rounded-full bg-[#660033] py-3.5 text-center text-sm font-bold text-[#FFDF4C] shadow-sm transition hover:bg-[#660033]/90 sm:text-base"
            >
              Contact Peep Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
