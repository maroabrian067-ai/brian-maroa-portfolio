"use client";

import { ArrowRight, CheckCircle2, Clock, XCircle, Zap } from "lucide-react";
import type { BeforeAfterItem } from "@/data/projects";

export function BeforeAfterVisual({ data }: { data: BeforeAfterItem }) {
  return (
    <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
            Workflow Transformation
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-[var(--text-primary)]">
            Before vs. After Automation
          </h3>
        </div>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-500">
          <Zap className="h-3.5 w-3.5" />
          Measurable Time Saved
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        {/* BEFORE */}
        <div className="flex flex-col justify-between rounded-xl border border-rose-500/20 bg-rose-500/[0.04] p-5">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-display text-base font-bold text-rose-500 dark:text-rose-400">
                <XCircle className="h-4 w-4" />
                {data.beforeTitle}
              </span>
              <span className="rounded-md bg-rose-500/10 px-2 py-0.5 font-mono text-[11px] uppercase text-rose-500 dark:text-rose-400">
                Before
              </span>
            </div>
            <ul className="space-y-3">
              {data.beforeSteps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15 font-mono text-[11px] font-semibold text-rose-500 dark:text-rose-400">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-rose-500/15 pt-3 font-mono text-xs text-rose-500 dark:text-rose-400">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>{data.beforeMetric}</span>
          </div>
        </div>

        {/* CONNECTOR */}
        <div className="flex items-center justify-center">
          <div className="flex h-10 w-10 rotate-90 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--accent)] md:rotate-0">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* AFTER */}
        <div className="flex flex-col justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] p-5">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-display text-base font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                {data.afterTitle}
              </span>
              <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[11px] uppercase text-emerald-600 dark:text-emerald-400">
                After
              </span>
            </div>
            <ul className="space-y-3">
              {data.afterSteps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-primary)]"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-emerald-500/20 pt-3 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <Zap className="h-3.5 w-3.5 shrink-0" />
            <span>{data.afterMetric}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
