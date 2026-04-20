"use client";

import { SectionHeading } from "@/components/section-heading";
import { gallery, galleryFilters } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useMemo, useState } from "react";

export function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(null);

  const filteredItems = useMemo(() => {
    if (filter === "All") return gallery;
    return gallery.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="gallery" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="A visual library of engineering environments, project execution, and technical installations."
            description="The gallery is data-driven, making it straightforward to add photos, replace placeholders, or introduce new project categories later."
          />

          <div className="flex flex-wrap gap-3">
            {galleryFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  filter === item
                    ? "border-ember bg-ember text-white"
                    : "border-slate-200 bg-white text-slate hover:border-slate-300"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 columns-1 gap-6 md:columns-2 xl:columns-3">
          {filteredItems.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelected(item)}
              className="group relative mb-6 block w-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white text-left shadow-soft"
            >
              <div className="relative h-[360px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/60">{item.category}</p>
                  <h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 18, scale: 0.98 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-graphite"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/10 p-3 text-white"
                aria-label="Close gallery item"
              >
                <X size={18} />
              </button>
              <div className="relative h-[70vh] min-h-[420px]">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/65">{selected.category}</p>
                  <h3 className="mt-3 font-display text-4xl">{selected.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
