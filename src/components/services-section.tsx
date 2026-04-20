"use client";

import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-graphite px-6 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Technical capability across engineering, construction, protection systems, and managed delivery."
          description="Our service architecture is designed to let clients engage us at the right depth: concept support, focused package execution, or end-to-end project responsibility."
          invert
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="grid gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "group rounded-[1.6rem] border p-5 text-left transition duration-300",
                    active === index
                      ? "border-ember bg-white/10 shadow-glass"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl transition",
                          active === index ? "bg-ember text-white" : "bg-white/10 text-ember"
                        )}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl">{service.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/62">{service.description}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className={cn("mt-1 transition", active === index ? "text-white" : "text-white/40 group-hover:text-white/70")}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-glass">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[active].title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-ember text-white">
                  {(() => {
                    const Icon = services[active].icon;
                    return <Icon size={28} />;
                  })()}
                </div>
                <h3 className="font-display text-4xl">{services[active].title}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{services[active].description}</p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {services[active].highlights.map((highlight) => (
                    <div key={highlight} className="rounded-[1.4rem] border border-white/10 bg-black/15 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/50">Capability</p>
                      <p className="mt-4 text-lg text-white">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-ember">How we engage</p>
                  <p className="mt-4 max-w-3xl leading-8 text-white/68">
                    We can enter at planning, package tender support, site mobilization, or full turnkey delivery depending on the project need and the level of internal client resources available.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
