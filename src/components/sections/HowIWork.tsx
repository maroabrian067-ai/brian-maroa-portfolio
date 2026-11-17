"use client";

import { m, useReducedMotion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowIWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        index="03"
        label="How I Work"
        title="From messy bottleneck to live system in 4 steps"
        description="Clear communication, fast iterations, and zero technical jargon."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((item, idx) => (
          <m.div
            key={item.step}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[var(--accent)]">
                  {item.step}
                </span>
                <span className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
                  {item.duration}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>

            <div className="mt-6 border-t border-[var(--border-subtle)] pt-3.5 font-mono text-[11px] text-[var(--text-muted)]">
              <span className="text-[var(--accent)]">Output:</span> {item.deliverable}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
