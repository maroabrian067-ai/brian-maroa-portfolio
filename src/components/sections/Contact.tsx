"use client";

import { useState } from "react";
import { Check, Copy, Mail, MessageCircle, Send } from "lucide-react";
import { PROFILE, getWhatsAppUrl } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("Business Website");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
    window.open(getWhatsAppUrl(formatted), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left Info */}
        <div className="lg:col-span-5">
          <SectionHeading
            index="07"
            label="Contact"
            title="Let's build something that pays for itself"
            description="Prefer a quick chat? Message me directly on WhatsApp or send a brief using the form."
          />

          <div className="mt-8 space-y-4">
            <MagneticButton className="w-full sm:w-auto">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </MagneticButton>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent)]"
              >
                <Mail className="h-4 w-4 text-[var(--accent)]" />
                <span>{PROFILE.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 font-mono text-xs text-[var(--text-muted)]">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)]"
              >
                GitHub ↗
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)]"
              >
                LinkedIn ↗
              </a>
              <a
                href={PROFILE.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)]"
              >
                Telegram Bot ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
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
                  <option value="Telegram / WhatsApp Bot">
                    Telegram / WhatsApp Bot
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

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]"
              >
                Project Brief
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your business, what's taking up your time, or the website you want to launch..."
                className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                <Send className="h-4 w-4" />
                <span>Send via WhatsApp</span>
              </button>
              {submitted && (
                <span className="font-mono text-xs text-emerald-500">
                  Opening WhatsApp with your brief...
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
