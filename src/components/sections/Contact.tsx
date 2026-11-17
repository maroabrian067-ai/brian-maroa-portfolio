"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  Check,
  Code2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { PROFILE, getWhatsAppUrl } from "@/data/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("Business Website");
  const [message, setMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hi Brian, I'm ${name || "a prospective client"}. Project type: ${projectType}. Details: ${message || "Let's discuss!"}`;
    window.open(getWhatsAppUrl(formatted), "_blank", "noopener,noreferrer");
  };

  const contactRows = [
    {
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      icon: <Mail className="h-4 w-4 text-[var(--accent)]" />,
    },
    {
      label: "LinkedIn",
      value: "Brian Maroa",
      href: PROFILE.socials.linkedin,
      icon: <Briefcase className="h-4 w-4 text-sky-400" />,
    },
    {
      label: "Telegram Bot",
      value: "@Maroa_assistant_bot",
      href: PROFILE.socials.telegram,
      icon: <Bot className="h-4 w-4 text-emerald-400" />,
    },
    {
      label: "GitHub",
      value: "maroabrian067-ai",
      href: PROFILE.socials.github,
      icon: <Code2 className="h-4 w-4 text-[var(--text-primary)]" />,
    },
  ];

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-10 lg:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Side: Headline + Action Buttons */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Contact
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl sm:leading-[1.08]">
              Let&apos;s build something together.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Have a website, Python bot, or n8n automation in mind? Message me
              directly on WhatsApp, copy my email, or send a quick project brief.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <MagneticButton>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp me</span>
                </a>
              </MagneticButton>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-primary)] px-4 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span>Email copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[var(--text-secondary)]" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowForm((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-2 py-2 font-mono text-xs text-[var(--accent)] hover:underline"
              >
                <span>{showForm ? "Hide brief form" : "Send quick brief →"}</span>
              </button>
            </div>

            <div className="mt-7 flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Based in {PROFILE.location}</span>
            </div>
          </div>

          {/* Right Side: Stacked Social/Contact Link Cards */}
          <div className="space-y-3 lg:col-span-6">
            {contactRows.map((row) => (
              <a
                key={row.label}
                href={row.href}
                target={row.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  row.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-5 py-4 transition-colors hover:border-[var(--accent)]/60"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                    {row.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                      {row.label}
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                      {row.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
              </a>
            ))}
          </div>
        </div>

        {/* Optional Quick Project Brief Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-8 border-t border-[var(--border-subtle)] pt-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-type"
                  className="block font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]"
                >
                  What do you need?
                </label>
                <select
                  id="contact-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Business Website">Business Website</option>
                  <option value="Python / Telegram Bot">
                    Python / Telegram Bot
                  </option>
                  <option value="n8n / Calendar Automation">
                    n8n / Calendar Automation
                  </option>
                  <option value="Airbnb / Booking Optimization">
                    Airbnb / Booking Optimization
                  </option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]"
              >
                Project Brief
              </label>
              <textarea
                id="contact-message"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your business or what you want to automate..."
                className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              <Send className="h-4 w-4" />
              <span>Send via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
