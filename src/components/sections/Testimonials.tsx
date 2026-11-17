"use client";

import { m, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionHeading
        index="05"
        label="Client Proof"
        title="Trusted by teams who needed results fast"
        description="Placeholder cards ready for your verified client quotes in src/data/projects.ts."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item, idx) => (
          <m.blockquote
            key={item.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-[var(--accent)] opacity-80" />
                <span className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                  {item.projectTag}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-primary)] sm:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <footer className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
              <div>
                <div className="font-display text-sm font-bold text-[var(--text-primary)]">
                  {item.name}
                </div>
                <div className="text-xs text-[var(--text-secondary)]">
                  {item.role} • {item.company}
                </div>
              </div>
            </footer>
          </m.blockquote>
        ))}
      </div>
    </section>
  );
}
