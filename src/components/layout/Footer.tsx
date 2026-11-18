import { ArrowUpRight, Bot, Briefcase, Code2, MessageCircle } from "lucide-react";
import { PROFILE, getWhatsAppUrl } from "@/data/projects";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-[var(--text-muted)] sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} {PROFILE.name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        {/* Minimal Social Icons Row matching 00:23 video frame */}
        <div className="flex items-center gap-5">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-1.5 transition-colors hover:text-[var(--text-primary)]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={PROFILE.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram Bot"
            className="flex items-center gap-1.5 transition-colors hover:text-[var(--text-primary)]"
          >
            <Bot className="h-4 w-4" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1.5 transition-colors hover:text-[var(--text-primary)]"
          >
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-1.5 transition-colors hover:text-[var(--text-primary)]"
          >
            <Code2 className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
