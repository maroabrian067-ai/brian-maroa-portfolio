"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { PROFILE } from "@/data/projects";

const SKILL_CATEGORIES = [
  {
    title: "Front-end",
    skills: ["React 18", "Next.js", "Vite", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Back-end & Databases",
    skills: ["PHP", "Supabase (PostgreSQL)", "MySQL", "REST APIs", "Schema Design"],
  },
  {
    title: "Bots & AI",
    skills: ["Python", "Telegram Bot API", "Google Gemini LLM", "Prompt Engineering", "WhatsApp Handoff"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Docker", "n8n Automation", "Google Cloud OAuth", "Git & GitHub", "VS Code", "Uptime & Caching"],
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            About
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            A little about me
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left Column: Portrait Card + Info List (Matching 00:10 video frame) */}
          <m.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
              <div className="relative aspect-[4/4.5] w-full overflow-hidden">
                <Image
                  src="/images/brian-maroa.jpg"
                  alt="Brian Maroa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top filter contrast-[1.05]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent p-6 pt-16">
                  <p className="font-display text-xl font-bold text-white">
                    {PROFILE.name}
                  </p>
                  <p className="font-mono text-xs text-emerald-400">
                    {PROFILE.role}
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-[var(--border-subtle)] p-6 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-muted)]">Based in</span>
                  <span className="text-right font-medium text-[var(--text-primary)]">
                    {PROFILE.location}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-muted)]">Studied</span>
                  <span className="text-right font-medium text-[var(--text-primary)]">
                    BBIT, Mount Kenya University
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--text-muted)]">Languages</span>
                  <span className="text-right font-medium text-[var(--text-primary)]">
                    English (Fluent) • Swahili (Native)
                  </span>
                </div>

                <div className="pt-3">
                  <a
                    href={PROFILE.cvPath}
                    download="Brian-Maroa-CV.pdf"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--text-primary)] px-4 py-3 text-sm font-semibold text-[var(--bg-primary)] transition-opacity hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download CV (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </m.div>

          {/* Right Column: Bio + SKILLS & TOOLS Bento Grid */}
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              <p className="text-xl font-medium leading-snug text-[var(--text-primary)]">
                I&apos;m a Web &amp; Automation Developer from Nairobi, Kenya with
                hands-on experience building conversion-focused websites, Python
                Telegram bots, and automated workflows.
              </p>
              <p>
                Previously, I worked as a Project Developer and Stakeholder
                Coordinator with the Migori County Government, translating real
                operational needs into reliable web and database systems.
              </p>
              <p>
                Most businesses don&apos;t need bloated enterprise software. They need
                a fast website that converts visitors on mobile, and smart bots or n8n
                automations that handle repetitive inquiries 24/7. Across JavaScript,
                React, PHP, Supabase/MySQL, and self-hosted Docker workflows, I care
                about one metric:{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  does it save you time or win you customers?
                </span>
              </p>
            </div>

            {/* SKILLS & TOOLS Section (Bento Grid exact to 00:11 video frame) */}
            <div className="pt-4">
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Skills &amp; Tools
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {SKILL_CATEGORIES.map((cat) => (
                  <div
                    key={cat.title}
                    className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]/40"
                  >
                    <h4 className="font-display text-sm font-bold text-[var(--text-primary)]">
                      {cat.title}
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
