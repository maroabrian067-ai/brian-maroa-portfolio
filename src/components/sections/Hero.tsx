"use client";

import Image from "next/image";
import { ArrowDownRight, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { PROFILE, getWhatsAppUrl } from "@/data/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] overflow-hidden border-b border-[var(--border-subtle)]"
    >
      {/* Subtle Portrait & Radial Vignette Background (desktop editorial feel) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-mesh absolute inset-0" />
        <div className="absolute inset-y-0 left-1/2 hidden w-[42rem] -translate-x-1/2 opacity-20 dark:opacity-25 lg:block">
          <Image
            src="/images/brian-maroa.jpg"
            alt=""
            fill
            priority
            sizes="672px"
            className="object-cover object-top grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-[var(--bg-primary)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-between px-4 pb-10 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        {/* Top Meta Pills */}
        <div className="flex flex-wrap items-center gap-3">
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

        {/* Editorial Split Hero (inspired by modern dark developer portfolios) */}
        <div className="my-auto grid items-center gap-10 py-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Bold Title & Accent Bar */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {PROFILE.name}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]">
              Websites, Bots &amp;{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Automations
              </span>
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-emerald-500" />
          </div>

          {/* Right: Introduction & Dual CTAs */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Introduction
            </p>
            <p className="mt-3 font-display text-xl font-medium leading-snug text-[var(--text-primary)] sm:text-2xl">
              {PROFILE.headline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
              {PROFILE.subline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 sm:text-base"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Let&apos;s work together</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.14}>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] sm:text-base"
                >
                  <span>View my work</span>
                  <ArrowDownRight className="h-4 w-4 text-[var(--accent)]" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Metrics + Scroll Cue */}
        <div className="flex flex-col justify-between gap-6 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center">
          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            {PROFILE.heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="hidden items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] sm:inline-flex"
          >
            <span>Scroll</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
