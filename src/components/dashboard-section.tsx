"use client";

import { SectionHeading } from "@/components/section-heading";
import { dashboardFeatures } from "@/data/site";
import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";

export function DashboardSection() {
  return (
    <section id="dashboard" className="bg-graphite px-6 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Client Dashboard"
            title="A professional client access layer designed around project transparency."
            description="This preview section positions the dashboard as an operational extension of delivery, giving clients a controlled view of updates, documents, billing references, and field communications."
            invert
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-glass"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/55">Secure Project Portal</p>
                <h3 className="mt-3 font-display text-3xl">Client Login Preview</h3>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ember text-white">
                <LockKeyhole />
              </div>
            </div>
            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              Suitable for future protected access with account-level visibility, document permissions, and client-specific project dashboards.
            </p>
            <button
              type="button"
              className="mt-8 rounded-full border border-ember/60 bg-ember px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-graphite"
            >
              Client Login
            </button>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {dashboardFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-ember">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-2xl">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
