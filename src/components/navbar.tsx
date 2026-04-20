"use client";

import { company, navigation } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "px-4 pt-4" : "px-0 pt-0"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between transition-all duration-300",
          scrolled
            ? "rounded-full border border-white/15 bg-graphite/80 px-6 py-3 shadow-glass backdrop-blur-xl"
            : "px-6 py-5"
        )}
      >
        <Link href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold text-white">
            {company.shortName}
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.32em] text-white/60">Engineering</div>
            <div className="font-display text-lg font-medium text-white">{company.name}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/78 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="rounded-full border border-ember/60 bg-ember px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-graphite"
          >
            Inquire Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-white/15 p-3 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="mx-4 mt-3 rounded-[2rem] border border-white/10 bg-graphite/95 p-6 shadow-glass backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/84 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-ember px-5 py-3 font-medium text-white"
            >
              Request a Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
