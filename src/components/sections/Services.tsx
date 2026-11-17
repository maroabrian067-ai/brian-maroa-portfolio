"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES, getWhatsAppUrl } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          index="04"
          label="Services"
          title="Ways we can work together"
          description="Transparent starting scopes. Every project includes mobile testing, clean handover, and post-launch support."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <m.div
              key={service.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-7 transition-colors hover:border-[var(--accent)]/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {service.startingFrom}
                  </span>
                  <span className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
                    {service.timeline}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.subtitle}
                </p>

                <ul className="mt-6 space-y-3 border-t border-[var(--border-subtle)] pt-5">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-primary)]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(
                  `Hi Brian, I'm interested in your ${service.title} service (${service.startingFrom}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-primary)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-emerald-500 hover:bg-emerald-500 hover:text-slate-950"
              >
                <span>{service.ctaText}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
