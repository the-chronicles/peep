"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DeleteAccount() {
  const mailtoLink =
    "mailto:peep@mypeepapp.com?subject=Peep%20Account%20Deletion%20Request";

  return (
    <section className="w-full bg-[#FFDF4C]/20 py-14 md:py-20">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#660033] px-4 py-1 text-xs font-semibold text-[#FFDF4C]">
            <span>Peep Support</span>
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#660033] uppercase sm:text-4xl md:text-5xl">
            Peep Account Deletion
          </h1>

          <p className="mx-auto mt-2 text-sm font-medium text-[#660033]/80 md:text-base">
            Account and personal data requests
          </p>
        </motion.div>

        {/* Single Comprehensive Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-8 rounded-3xl border border-[#660033]/10 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-8 md:p-10"
        >
          <p className="text-sm leading-relaxed text-[#660033]/90 md:text-base">
            If you want to delete your Peep account and associated personal
            data, you can request deletion by contacting our support team.
          </p>

          {/* How to request deletion */}
          <div className="mt-8 border-t border-[#660033]/10 pt-8">
            <h2 className="text-lg font-bold text-[#660033] md:text-xl">
              How to request deletion
            </h2>

            <ol className="mt-4 space-y-3.5 text-sm text-[#660033]/90 md:text-base">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#660033] text-xs font-bold text-[#FFDF4C]">
                  1
                </span>
                <span className="leading-relaxed">
                  Send an email to{" "}
                  <a
                    href={mailtoLink}
                    target="_blank"
                    className="font-bold text-[#660033] underline hover:opacity-80"
                  >
                    peep@mypeepapp.com
                  </a>
                  .
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#660033] text-xs font-bold text-[#FFDF4C]">
                  2
                </span>
                <span className="leading-relaxed">
                  Use the subject line &ldquo;Peep Account Deletion
                  Request&rdquo;.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#660033] text-xs font-bold text-[#FFDF4C]">
                  3
                </span>
                <span className="leading-relaxed">
                  Include the email address or phone number associated with your
                  Peep account so the team can identify your account.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#660033] text-xs font-bold text-[#FFDF4C]">
                  4
                </span>
                <span className="leading-relaxed">
                  Our team will verify your request and process it in accordance
                  with our data deletion policy.
                </span>
              </li>
            </ol>
          </div>

          {/* What happens to your data? */}
          <div className="mt-8 border-t border-[#660033]/10 pt-8">
            <h2 className="text-lg font-bold text-[#660033] md:text-xl">
              What happens to your data?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#660033]/90 md:text-base">
              Account information and associated personal data will be deleted
              in accordance with our deletion policy. Any information retained
              for legitimate legal, security or compliance reasons, and the
              applicable retention period, must be explained here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
