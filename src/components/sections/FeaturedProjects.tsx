"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        index="01"
        label="Featured Work"
        title="Systems built to win customers & save hours"
        description="Click any project to read the full case study, including the problem, architecture, measurable results, and before-vs-after workflows."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-6">
        {PROJECTS.map((project, idx) => {
          const isWide = project.featuredSpan === "wide";
          const topMetric = project.results[0];

          return (
            <m.article
              key={project.slug}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] transition-colors hover:border-[var(--accent)]/60 ${
                isWide ? "md:col-span-4" : "md:col-span-2"
              }`}
            >
              {/* Card Top Meta Bar (above image so mockup stays 100% unobstructed) */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-5 py-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {project.category}
                </span>
                {topMetric && (
                  <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                    <span className="text-[var(--accent)]">{topMetric.value}</span>{" "}
                    <span className="text-[var(--text-secondary)]">{topMetric.label}</span>
                  </span>
                )}
              </div>

              {/* Preview Image */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-[var(--border-subtle)] bg-slate-950"
              >
                <Image
                  src={project.coverImage}
                  alt={project.coverAlt}
                  fill
                  sizes={
                    isWide
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Link>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[var(--accent)] focus:outline-none"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live website`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack + Case Study Link */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, isWide ? 4 : 2).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-transform group-hover:translate-x-0.5"
                  >
                    <span>Read case study</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </m.article>
          );
        })}
      </div>
    </section>
  );
}
