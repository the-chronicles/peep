"use client";

import React, { useMemo, useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(0);

  const items = useMemo(() => FAQS, []);

  return (
    <section id="faq" className="w-full bg-[#FFDF4C]/20 py-14 md:py-18">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-[#660033] uppercase md:text-6xl">
            Have any question <br className="hidden sm:block" /> in mind?
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, i) => {
            const isOpen = i === openIndex;

            return (
              <div
                key={item.q}
                className={[
                  "rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
                  "border border-[#660033]/10",
                ].join(" ")}
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

                  {/* Icon (plus/minus) */}
                  <span
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-full",
                      "border border-[#660033]/15",
                      isOpen
                        ? "bg-[#FFDF4C] text-[#660033]"
                        : "bg-white text-[#660033]",
                      "transition",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <span className="text-xl leading-none">
                      {isOpen ? "×" : "+"}
                    </span>
                  </span>
                </button>

                <div
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm leading-relaxed text-[#660033]/70 md:text-base">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
