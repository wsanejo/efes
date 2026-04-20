"use client";

import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MapPin, X } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured works spanning industrial upgrades, technical systems, and integrated delivery."
          description="Project content is driven by structured data, so new entries, ongoing statuses, and future case studies can be maintained from one source."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-soft"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-ember">{project.category}</p>
                <h3 className="mt-3 font-display text-2xl text-graphite">{project.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate">
                  <MapPin size={16} />
                  {project.location}
                </div>
                <p className="mt-4 leading-8 text-slate">{project.summary}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-glass"
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-black/30 p-3 text-white"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
              <div className="relative h-[320px]">
                <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/60">{activeProject.category}</p>
                  <h3 className="mt-3 font-display text-4xl">{activeProject.title}</h3>
                </div>
              </div>
              <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-slate">
                    <MapPin size={16} />
                    {activeProject.location}
                  </div>
                  <p className="mt-6 text-lg leading-8 text-slate">{activeProject.summary}</p>
                </div>
                <div className="rounded-[1.6rem] border border-slate-200 bg-mist p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ember">Scope Highlights</p>
                  <div className="mt-5 grid gap-3">
                    {activeProject.scope.map((scope) => (
                      <div key={scope} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate">
                        {scope}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
