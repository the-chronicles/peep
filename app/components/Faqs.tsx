"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  {
    q: "What’s Peep?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum natus quia delectus, nemo quis odit ut, odio suscipit sapiente quae, quam esse dicta labore officiis corporis perferendis quod sit!",
  },
  {
    q: "Who are we?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum natus quia delectus, nemo quis odit ut, odio suscipit sapiente quae, quam esse dicta labore officiis corporis perferendis quod sit!",
  },
  {
    q: "Why should I use Peep",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum natus quia delectus, nemo quis odit ut, odio suscipit sapiente quae, quam esse dicta labore officiis corporis perferendis quod sit!",
  },
  {
    q: "How do i get started?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum natus quia delectus, nemo quis odit ut, odio suscipit sapiente quae, quam esse dicta labore officiis corporis perferendis quod sit!",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const items = useMemo(() => FAQS, []);

  return (
    <section id="faq" className="w-full bg-[#FFDF4C]/20 py-14 md:py-18">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-black tracking-tight text-[#660033] uppercase md:text-6xl">
            Have any question <br className="hidden sm:block" /> in mind?
          </h2>
        </motion.div>

        <div className="mt-10 space-y-4">
          {items.map((item, i) => {
            const isOpen = i === openIndex;

            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.04 }}
                className="rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-[#660033]/10"
                layout
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#660033] md:text-lg">
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-full",
                      "border border-[#660033]/15",
                      isOpen
                        ? "bg-[#FFDF4C] text-[#660033]"
                        : "bg-white text-[#660033]",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <span className="text-xl leading-none">
                      {isOpen ? "×" : "+"}
                    </span>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        exit={{ y: -6 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="px-6 pb-6 text-sm leading-relaxed text-[#660033]/70 md:text-base"
                      >
                        {item.a}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
