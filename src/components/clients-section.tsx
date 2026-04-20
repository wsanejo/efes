"use client";

import { SectionHeading } from "@/components/section-heading";
import { clients } from "@/data/site";
import { motion } from "framer-motion";

export function ClientsSection() {
  return (
    <section id="clients" className="bg-mist px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Clients and Trust"
          title="Trusted by owners and operators who expect disciplined delivery and project transparency."
          description="We design the experience around confidence: documented progress, accountable site leadership, and practical solutions that hold up beyond turnover."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ember">Selected Client Partners</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {clients.logos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[1.4rem] border border-slate-200 bg-mist p-5 text-center"
                >
                  <span className="font-display text-xl text-graphite">{logo}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {clients.trustBadges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <div key={badge.label} className="rounded-[1.4rem] border border-slate-200 p-5">
                    <Icon className="text-ember" />
                    <p className="mt-4 text-sm font-medium text-slate">{badge.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6">
            {clients.testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-steel/40 p-8 shadow-soft"
              >
                <p className="text-xl leading-9 text-graphite">“{testimonial.quote}”</p>
                <footer className="mt-8">
                  <div className="font-display text-2xl text-graphite">{testimonial.name}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.24em] text-slate">{testimonial.role}</div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
