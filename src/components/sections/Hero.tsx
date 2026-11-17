"use client";

import { ArrowDownRight, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { PROFILE, getWhatsAppUrl } from "@/data/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-grid-pattern"
    >
      {/* Fast GPU-accelerated ambient gradient mesh */}
      <div
        aria-hidden="true"
        className="hero-mesh pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pt-28">
        {/* Status & Location Pill */}
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {PROFILE.availability}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3.5 py-1.5 font-mono text-xs text-[var(--text-secondary)]">
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
            {PROFILE.location}
          </span>
        </div>

        {/* Instant-LCP Headline (rendered immediately on SSR without JS delay) */}
        <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[4rem] lg:leading-[1.06]">
          I build{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            websites, bots and automations
          </span>{" "}
          that save businesses time and win them customers.
        </h1>

        {/* Subline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
          {PROFILE.subline}
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Let&apos;s work together</span>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.14}>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-6 py-3.5 text-base font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
            >
              <span>View my work</span>
              <ArrowDownRight className="h-4 w-4 text-[var(--accent)]" />
            </a>
          </MagneticButton>
        </div>

        {/* Metrics Bar */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-3 sm:gap-8">
          {PROFILE.heroStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3 sm:block">
              <div className="flex items-center gap-2 font-display text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                <Sparkles className="h-4 w-4 text-[var(--accent)] sm:hidden" />
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] sm:mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
