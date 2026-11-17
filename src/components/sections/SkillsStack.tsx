"use client";

import { m, useReducedMotion } from "framer-motion";
import { Bot, Globe, Workflow, Wrench } from "lucide-react";
import { SKILL_GROUPS, type SkillGroup } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CATEGORY_ICONS: Record<SkillGroup["category"], React.ReactNode> = {
  Web: <Globe className="h-5 w-5 text-emerald-500" />,
  Bots: <Bot className="h-5 w-5 text-sky-400" />,
  Automation: <Workflow className="h-5 w-5 text-amber-400" />,
  Tools: <Wrench className="h-5 w-5 text-violet-400" />,
};

export function SkillsStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          index="02"
          label="Skills & Stack"
          title="Practical tools chosen for speed & reliability"
          description="No bloated tech for the sake of it, just battle-tested frameworks, bot APIs, and automation pipelines that keep running."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => (
            <m.div
              key={group.category}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                  {CATEGORY_ICONS[group.category]}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)]"
                  >
                    <span>{item.name}</span>
                    {item.tag && (
                      <span className="font-mono text-[10px] text-[var(--accent)]">
                        • {item.tag}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
