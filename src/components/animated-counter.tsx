"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1]
    });

    return () => controls.stop();
  }, [count, inView, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <div
      ref={ref}
      className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md"
    >
      <motion.div className="font-display text-4xl font-semibold text-white">
        {displayValue}
        {suffix}
      </motion.div>
      <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/60">{label}</p>
    </div>
  );
}
