"use client";

import { m, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/data/projects";

const EXPERIENCES = [
  {
    company: "Freelance & Client Systems",
    role: "Web & Automation Developer",
    period: "2025 — Present",
    bullets: [
      "Building production booking websites (Madi Safari Excursions) using React 18, Vite, Tailwind CSS, and Supabase.",
      "Developed Maroa Assistant (@Maroa_assistant_bot) in Python with inline menus for 24/7 lead intake and CV sharing.",
      "Engineered an automated email-to-calendar workflow with Docker, self-hosted n8n, Google Cloud OAuth, and Google Gemini.",
    ],
    tags: ["React 18", "Next.js", "Python", "Supabase", "n8n", "Docker", "Tailwind CSS"],
  },
  {
    company: "Migori County Government",
    role: "Project Developer & Stakeholder Coordinator (Volunteer)",
    period: "05/2025 — 08/2025",
    bullets: [
      "Translated stakeholder requirements into technical specifications for a localized public management platform.",
      "Maintained records and operational metrics in relational databases, keeping data accurate and handoffs clean.",
      "Monitored database health, query performance, and platform uptime.",
      "Used generative AI tools to summarize meetings and draft documentation, cutting turnaround by 35%.",
    ],
    tags: ["MySQL", "Database Administration", "Technical Specs", "AI Workflows"],
  },
  {
    company: "Mount Kenya University",
    role: "Bachelor of Business Information Technology (BBIT)",
    period: "09/2022 — 12/2025",
    bullets: [
      "Graduated with comprehensive coursework in Software Engineering, Database Administration, and Business Systems Analysis.",
      "Hands-on project work in relational schema design, Enterprise Systems (ERP), and Business Process Modeling.",
    ],
    tags: ["BBIT Degree", "Software Engineering", "Relational Databases", "Systems Analysis"],
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="border-b border-[var(--border-subtle)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky Left Column (Exact match to 00:14 video frame) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Experience
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Where I&apos;ve been
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                From public management database systems to booking websites, Python bots, and self-hosted n8n automations.
              </p>

              <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Currently: {PROFILE.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Cards Stack */}
          <div className="space-y-6 lg:col-span-8">
            {EXPERIENCES.map((exp, idx) => (
              <m.div
                key={exp.role}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-7 transition-colors hover:border-[var(--accent)]/50"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                      {exp.company}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1 font-mono text-xs text-[var(--text-secondary)]">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
