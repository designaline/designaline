"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="relative overflow-hidden bg-[#f5f1e8] pb-16 pt-28 text-[#17271e] lg:min-h-screen lg:pb-10 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div {...entrance} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 lg:pb-10">
            <p className="mb-7 max-w-md text-sm font-semibold uppercase tracking-[0.18em] text-[#477058]">Building a sustainable future</p>
            <h1 className="font-display text-[clamp(3.35rem,7vw,7.2rem)] leading-[0.9] tracking-[-0.055em]">
              Spaces that<br />belong to the<br /><em className="font-normal text-[#356747]">way you live.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#526158] sm:text-xl">We shape climate-responsive architecture and interiors as one continuous experience—from understanding the site to guiding its construction.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className="inline-flex min-h-13 items-center justify-between gap-8 rounded-full bg-[#173b2a] px-7 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5">Begin your project <ArrowUpRight size={19} /></Link>
              <Link href="/#process" className="inline-flex min-h-13 items-center justify-between gap-8 rounded-full border border-[#173b2a]/30 px-7 py-4 font-semibold text-[#173b2a] transition-colors hover:bg-white/60">Explore our process <ArrowDownRight size={19} /></Link>
            </div>
          </motion.div>

          <motion.div initial={reduceMotion ? undefined : { opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[8rem] rounded-b-2xl bg-[#d8d8cf] sm:aspect-[5/5] lg:aspect-[4/5]">
              <Image src="/projects/luxury_villas_1.png" alt="Contemporary residential villa designed by Design A'Line" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2418]/35 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-8">
                <div><p className="text-xs uppercase tracking-[0.18em] text-white/75">Selected work</p><p className="mt-1 text-xl font-semibold">Luxury Villa · Vizag</p></div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-black/10 backdrop-blur"><ArrowUpRight size={20} /></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
