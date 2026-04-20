"use client";

import { SectionHeading } from "@/components/section-heading";
import { about } from "@/data/site";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate/20 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About EFES"
          title="Built on engineering judgment, site discipline, and long-term client trust."
          description={about.intro}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ember">Mission</p>
              <p className="mt-4 text-lg leading-8 text-slate">{about.mission}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ember">Vision</p>
              <p className="mt-4 text-lg leading-8 text-slate">{about.vision}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ember">Core Values</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {about.values.map((value) => (
                  <div key={value} className="rounded-2xl border border-slate-200 bg-mist p-4 text-sm leading-7 text-slate">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {about.differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-steel/30 p-7 shadow-soft"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/15 bg-ember/10 text-lg font-semibold text-ember">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl text-graphite">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
