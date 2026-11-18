"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";

const MONOGRAMS: Record<string, string> = {
  "madi-safari-excursions": "MS",
  "telegram-business-bot": "MA",
  "airbnb-bookings-engine": "AB",
  "n8n-meeting-automation": "N8",
};

const ACCENT_STYLES: Record<Project["accentColor"], string> = {
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  sky: "border-sky-500/30 bg-sky-500/10 text-sky-400",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-400",
};

export function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Projects
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Selected work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            A few things I&apos;ve built for businesses and clients, from booking websites
            to Python bots and calendar automations.
          </p>
        </div>

        {/* 2x2 Grid of Cards (Exact to 00:18 video frame) */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, idx) => {
            const monogram = MONOGRAMS[project.slug] || "PR";
            const topMetric = project.results[0];

            return (
              <m.article
                key={project.slug}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-7 transition-all hover:border-[var(--accent)]/50"
              >
                <div>
                  {/* Top Bar: Monogram Logo + Category Tag */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-display text-base font-bold ${ACCENT_STYLES[project.accentColor]}`}
                    >
                      {monogram}
                    </div>

                    <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-5">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                      {project.client} • {project.year}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[var(--accent)] focus:outline-none"
                      >
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Strip: Tech Tags + Links */}
                <div className="mt-8 border-t border-[var(--border-subtle)] pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    {topMetric ? (
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        <strong className="text-emerald-500 dark:text-emerald-400">
                          {topMetric.value}
                        </strong>{" "}
                        {topMetric.label}
                      </span>
                    ) : (
                      <span />
                    )}

                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        >
                          <span>Live</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[var(--accent)] hover:underline"
                      >
                        <span>Case study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
