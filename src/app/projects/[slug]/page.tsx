import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { PROJECTS, getWhatsAppUrl } from "@/data/projects";
import { BeforeAfterVisual } from "@/components/ui/BeforeAfterVisual";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = PROJECTS[index];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      {/* Back Link */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to all projects</span>
      </Link>

      {/* Header */}
      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-600 dark:text-emerald-400">
            {project.category}
          </span>
          <span className="text-[var(--text-muted)]">{project.year}</span>
          <span className="text-[var(--text-muted)]">•</span>
          <span className="text-[var(--text-secondary)]">{project.client}</span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
          {project.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              <span>{project.demoLabel || "Visit Live Site"}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <a
            href={getWhatsAppUrl(
              `Hi Brian, I saw your "${project.title}" case study and want something similar.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
          >
            <MessageCircle className="h-4 w-4 text-[var(--accent)]" />
            <span>Build something similar</span>
          </a>
        </div>
      </header>

      {/* Cover Visual */}
      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-slate-950">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover"
        />
      </div>

      {/* Results Strip */}
      <section aria-label="Project Results" className="mt-10 grid gap-4 sm:grid-cols-3">
        {project.results.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              {metric.label}
            </div>
            <div className="mt-2 font-display text-3xl font-bold text-[var(--accent)]">
              {metric.value}
            </div>
            {metric.detail && (
              <p className="mt-1.5 text-xs text-[var(--text-secondary)]">
                {metric.detail}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Before vs After (for Automation / Bot Projects) */}
      {project.beforeAfter && (
        <section className="mt-12">
          <BeforeAfterVisual data={project.beforeAfter} />
        </section>
      )}

      {/* Case Study Narrative */}
      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8">
          <section>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              01 // The Problem
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              02 // My Role
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {project.role}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              03 // The Solution
            </h2>
            <ul className="mt-4 space-y-3.5">
              {project.solution.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 text-sm leading-relaxed text-[var(--text-primary)] sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar: Tech Stack */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Tech Stack Used
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 font-mono text-xs text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--border-subtle)] pt-6">
              <p className="text-sm font-medium text-[var(--text-primary)]">
                Want this system in your business?
              </p>
              <a
                href={getWhatsAppUrl(
                  `Hi Brian, let's talk about building a ${project.category} solution like ${project.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Next Project Footer */}
      <div className="mt-16 border-t border-[var(--border-subtle)] pt-10">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--accent)]"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Next Case Study
            </span>
            <h3 className="mt-1 font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] sm:text-2xl">
              {nextProject.title}
            </h3>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] transition-transform group-hover:translate-x-1 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </div>
    </article>
  );
}
