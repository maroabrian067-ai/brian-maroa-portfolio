"use client";

import { m, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div
        className={`mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1 font-mono text-xs tracking-wider text-[var(--accent)] uppercase ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span>{index}</span>
        <span className="text-[var(--text-muted)]">//</span>
        <span>{label}</span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </m.div>
  );
}
