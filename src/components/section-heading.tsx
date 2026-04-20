"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, description, invert = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-ember">{eyebrow}</p>
      <h2
        className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
          invert ? "text-white" : "text-graphite"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${invert ? "text-white/68" : "text-slate"}`}>{description}</p>
    </motion.div>
  );
}
