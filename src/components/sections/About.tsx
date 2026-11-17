"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { Download, Terminal } from "lucide-react";
import { PROFILE } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Portrait Frame */}
          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-2 shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/brian-maroa.jpg"
                  alt="Brian Maroa, Web, Bot & Automation Developer"
                  fill
                  sizes="(max-width: 1024px) 384px, 400px"
                  className="object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-5 pt-16">
                  <p className="font-display text-lg font-bold text-white">
                    {PROFILE.name}
                  </p>
                  <p className="font-mono text-xs text-emerald-300">
                    {PROFILE.location} • BBIT Graduate
                  </p>
                </div>
              </div>
            </div>
          </m.div>

          {/* Story & CV */}
          <div className="lg:col-span-7">
            <SectionHeading
              index="06"
              label="About Me"
              title="Builder focused on practical business leverage"
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                I&apos;m Brian Maroa, a Business Information Technology (BBIT) graduate
                from Mount Kenya University based in Nairobi, Kenya. Previously, I
                worked as a Project Developer and Stakeholder Coordinator with the
                Migori County Government, translating real operational needs into
                reliable web and database systems.
              </p>
              <p>
                Most businesses don&apos;t need bloated enterprise software. They need a
                fast website that converts visitors on mobile, and smart bots or n8n
                automations that handle repetitive inquiries 24/7. Across JavaScript,
                React, PHP, Supabase/MySQL, and self-hosted Docker workflows, I care
                about one metric:
                <span className="font-semibold text-[var(--text-primary)]">
                  {" "}
                  does it save you time or win you customers?
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={PROFILE.cvPath}
                download="Brian-Maroa-CV.pdf"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                <span>Download CV (PDF)</span>
              </a>

              <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3 font-mono text-xs text-[var(--text-secondary)]">
                <Terminal className="h-4 w-4 text-[var(--accent)]" />
                <span>Open to freelance &amp; retainer work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
