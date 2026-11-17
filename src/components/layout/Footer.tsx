import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, PROJECTS, getWhatsAppUrl } from "@/data/projects";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Summary */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-display text-lg font-bold text-[var(--text-primary)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 font-mono text-xs font-bold text-slate-950">
                BM
              </span>
              <span>{PROFILE.name}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              Websites, bots, and n8n automations built in Kenya for businesses that value speed and measurable results.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {PROFILE.availability}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              <li>
                <Link href="/#work" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  Skills &amp; Stack
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  How I Work
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  About &amp; CV
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies & Socials */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Case Studies
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PROJECTS.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center">
          <p>
            © {year} {PROFILE.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)]"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-[var(--text-primary)]"
            >
              Email
            </a>
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)]"
            >
              GitHub
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
