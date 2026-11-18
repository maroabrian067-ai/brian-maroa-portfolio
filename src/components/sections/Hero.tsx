"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { PROFILE, getWhatsAppUrl } from "@/data/projects";

const ROLES = [
  "Web & Bot Developer",
  "Automation Engineer",
  "Full-Stack Developer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[480px] w-[480px] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between px-4 py-12 sm:px-6 lg:px-8">
        {/* Main 3-Column / Editorial Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-4">
          {/* Left Column: Cycling Role Title */}
          <div className="order-2 lg:order-1 lg:col-span-4 lg:pr-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Brian Maroa
            </span>
            <div className="relative mt-2 h-[4.5rem] sm:h-[5.5rem] lg:h-[7rem]">
              <AnimatePresence mode="wait">
                <m.h1
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="font-display text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                >
                  {ROLES[roleIndex]}
                </m.h1>
              </AnimatePresence>
            </div>
            <p className="mt-3 font-mono text-xs text-emerald-500 dark:text-emerald-400">
              ● {PROFILE.availability}
            </p>
          </div>

          {/* Center Column: Prominent Portrait (Video center-stage aesthetic) */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-4">
            <div className="relative aspect-[3/4] w-64 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-2xl sm:w-72 lg:w-80">
              <Image
                src="/images/brian-maroa.jpg"
                alt="Brian Maroa"
                fill
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-top filter contrast-[1.08]"
              />
              {/* Subtle vignette fade at edges matching video */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: — INTRODUCTION */}
          <div className="order-3 lg:order-3 lg:col-span-4 lg:pl-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              <span>—</span>
              <span>Introduction</span>
            </div>
            <p className="mt-3 font-display text-lg font-semibold leading-snug text-[var(--text-primary)] sm:text-xl">
              I build websites, bots and automations that save businesses time and
              win them customers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              From database-driven React &amp; Supabase sites to Python Telegram
              assistants and self-hosted n8n workflows connecting email and calendar.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Let&apos;s talk</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
              >
                <span>View projects</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Center: SCROLL Indicator (Exact to video inspo) */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <span>Scroll</span>
            <m.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4" />
            </m.div>
          </a>
        </div>
      </div>
    </section>
  );
}
