"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp, MessageSquareMore } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function FloatingUI() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 720);
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-medium text-white shadow-glass transition hover:translate-y-[-2px]"
      >
        <MessageSquareMore size={16} />
        Start an Inquiry
      </Link>

      {showTop ? (
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          href="#top"
          className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-graphite shadow-soft"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.a>
      ) : null}
    </div>
  );
}
