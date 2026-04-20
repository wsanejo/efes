"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { hero } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, HardHat, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBack = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen overflow-hidden bg-graphite px-6 pb-20 pt-32 text-white"
    >
      <motion.div style={{ y: yBack, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,109,37,0.25),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(115,127,145,0.28),transparent_28%),linear-gradient(180deg,#0f1319_0%,#111720_48%,#090b0f_100%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:64px_64px] opacity-20" />
      </motion.div>

      <motion.div
        style={{ y: yFront }}
        className="pointer-events-none absolute left-[6%] top-32 hidden h-72 w-72 rounded-full border border-white/10 bg-white/5 blur-3xl lg:block"
      />
      <motion.div
        style={{ y: yFront }}
        className="pointer-events-none absolute bottom-16 right-[8%] h-80 w-80 rounded-full bg-ember/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.34em] text-white/72"
          >
            <span className="h-2 w-2 rounded-full bg-ember" />
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72"
          >
            {hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-graphite"
            >
              {hero.primaryCta.label}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-6 py-4 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[2rem] border border-white/12 bg-white/7 p-6 shadow-glass backdrop-blur-xl"
        >
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulseline" />
          <div className="grid gap-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.28em] text-white/50">Delivery Overview</span>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/15 px-3 py-1 text-xs text-emerald-200">
                  Active Oversight
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {hero.stats.map((stat) => (
                  <AnimatedCounter key={stat.label} {...stat} />
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                <HardHat className="mb-4 text-ember" />
                <h3 className="font-display text-xl">Field-led execution</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Experienced site teams coordinating workfaces, trade interfaces, and quality controls in real time.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                <ShieldCheck className="mb-4 text-ember" />
                <h3 className="font-display text-xl">Safety and compliance</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Documentation, inspections, testing, and execution methods aligned with critical project requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
