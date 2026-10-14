"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DeleteAccount() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("peep@mypeepapp.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

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
            If you want to delete your Peep account and associated personal data,
            you can request deletion by contacting our support team.
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
                    href="mailto:peep@mypeepapp.com?subject=Peep%20Account%20Deletion%20Request"
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
                  Use the subject line &ldquo;Peep Account Deletion Request&rdquo;.
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
              Account information and associated personal data will be deleted in
              accordance with our deletion policy. Any information retained for
              legitimate legal, security or compliance reasons, and the
              applicable retention period, must be explained here.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#660033]/10 pt-6">
            <a
              href="mailto:peep@mypeepapp.com?subject=Peep%20Account%20Deletion%20Request"
              className="inline-flex items-center gap-2 rounded-xl bg-[#660033] px-5 py-2.5 text-xs font-bold text-[#FFDF4C] shadow-sm transition hover:bg-[#660033]/90 md:text-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Compose Deletion Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-[#660033]/20 bg-[#660033]/5 px-4 py-2.5 text-xs font-semibold text-[#660033] transition hover:bg-[#660033]/10 md:text-sm"
            >
              {copied ? (
                <>
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Copied Email</span>
                </>
              ) : (
                <>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy Support Email</span>
                </>
              )}
            </button>

            <Link
              href="/"
              className="ml-auto inline-flex items-center rounded-xl px-4 py-2.5 text-xs font-semibold text-[#660033] transition hover:bg-[#660033]/5 md:text-sm"
            >
              Back to Home &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
