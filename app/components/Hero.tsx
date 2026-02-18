import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="bg-[#660033]">
        {/* <Navbar /> */}
        <section className="container mx-auto max-w-7xl px-4 py-12 md:py-18">
          <div className="flex flex-col items-center space-y-10 text-center">
            <div>
              <div className="font-semibold text-lg mb-1 tracking-wider text-[#FFDF4C]">
                Your No. 1 Financial Platform
              </div>
              <h1 className="max-w-7xl text-5xl leading-17.5 font-black tracking-tighter text-white uppercase md:text-7xl">
                Smart payment for <br /> every business
              </h1>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/">
                <span className="rounded-lg bg-[#FFDF4C] px-6 py-3 font-medium text-[#660033] transition hover:opacity-90">
                  Get the App ↗
                </span>
              </Link>

              <Link href="/">
                <span className="rounded-lg bg-[#9d577a] px-6 py-3 font-medium text-white transition">
                  View a demo
                </span>
              </Link>
            </div>

            <div className="mt-12 flex w-full max-w-7xl justify-center">
              <Image
                src="/images/hero3.png"
                alt="App preview"
                width={1200}
                height={700}
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
