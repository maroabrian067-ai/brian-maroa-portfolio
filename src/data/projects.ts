export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface BeforeAfterItem {
  beforeTitle: string;
  beforeSteps: string[];
  beforeMetric: string;
  afterTitle: string;
  afterSteps: string[];
  afterMetric: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Web" | "Bot" | "Automation" | "Growth & Ops";
  tagline: string;
  summary: string;
  year: string;
  client: string;
  featuredSpan: "wide" | "normal";
  liveUrl?: string;
  demoLabel?: string;
  coverImage: string;
  coverAlt: string;
  accentColor: "emerald" | "amber" | "sky" | "violet";
  problem: string;
  role: string;
  solution: string[];
  techStack: string[];
  results: ProjectMetric[];
  beforeAfter?: BeforeAfterItem;
}

export interface SkillGroup {
  category: "Web" | "Bots" | "Automation" | "Tools";
  description: string;
  items: { name: string; tag?: string }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverable: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  startingFrom: string;
  timeline: string;
  highlights: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  projectTag: string;
  isPlaceholder?: boolean;
}

// ============================================================================
// EDIT YOUR PERSONAL DETAILS HERE
// ============================================================================
export const PROFILE = {
  name: "Brian Maroa",
  role: "Web, Bot & Automation Developer",
  headline:
    "I build websites, bots and automations that save businesses time and win them customers.",
  subline:
    "Based in Nairobi, Kenya. BBIT graduate building fast web apps, Telegram assistants, and n8n workflows for tourism, hospitality, and service businesses.",
  location: "Nairobi, Kenya",
  availability: "Available for Q4/Q1 projects",
  whatsappNumber: "254791338643",
  whatsappPrefill:
    "Hi Brian, I saw your portfolio and would like to discuss a project.",
  email: "maroabrian067@gmail.com",
  cvPath: "/cv/brian-maroa-cv.pdf",
  socials: {
    github: "https://github.com/maroabrian067-ai",
    linkedin: "https://www.linkedin.com/in/brian-maroa-0519292ba",
    telegram: "https://t.me/Maroa_assistant_bot",
  },
  heroStats: [
    { label: "Hours Saved / Month", value: "120+" },
    { label: "Avg. Response Time", value: "< 5s" },
    { label: "Core Web Vitals", value: "98/100" },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || PROFILE.whatsappPrefill);
  return `https://wa.me/${PROFILE.whatsappNumber}?text=${text}`;
}

// ============================================================================
// PROJECTS & CASE STUDIES (Homepage Bento Grid + /projects/[slug])
// ============================================================================
export const PROJECTS: Project[] = [
  {
    slug: "madi-safari-excursions",
    title: "Madi Safari Excursions",
    shortTitle: "Madi Safari",
    category: "Web",
    tagline:
      "High-converting safari & coastal excursion booking platform for Watamu, Malindi, and Tsavo.",
    summary:
      "A fast, mobile-first booking website built for Kenyan coastal tourism, turning casual searchers into direct WhatsApp & form bookings.",
    year: "2026",
    client: "Madi Safari Excursions",
    featuredSpan: "wide",
    liveUrl: "https://madisafarikenya.com",
    demoLabel: "Visit Live Site",
    coverImage: "/images/projects/madi-safari.svg",
    coverAlt:
      "Madi Safari Excursions booking interface preview showing Watamu, Malindi and Tsavo packages",
    accentColor: "emerald",
    problem:
      "Tourists searching for Watamu marine park trips, Malindi day tours, and Tsavo East safaris were bouncing from slow, generic brochure pages or struggling to get quick pricing, forcing the team to answer repetitive questions manually all day.",
    role: "End-to-end Product Designer & Full-Stack Developer: designed the Supabase schema (safaris & enquiries tables), built the React 18 + Tailwind UI, WhatsApp quote handoff, and JSON-LD SEO.",
    solution: [
      "Built a filterable safari grid and detailed itinerary modal for Watamu, Malindi, and Tsavo packages.",
      "Engineered a multi-destination quote modal that saves enquiries directly into Supabase (PostgreSQL) and hands off a structured brief to WhatsApp.",
      "Designed normalized Supabase tables (safaris and enquiries) with secure access controls and wired the React client to it.",
      "Added an FAQ section, coastal travel guide articles, and technical SEO with JSON-LD structured data.",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Supabase (PostgreSQL)",
      "WhatsApp Deep Links",
      "JSON-LD SEO",
    ],
    results: [
      {
        label: "Mobile PageSpeed",
        value: "96/100",
        detail: "Fast load even on 3G coastal networks",
      },
      {
        label: "Booking Inquiry Rate",
        value: "+64%",
        detail: "More visitors completing tour inquiries",
      },
      {
        label: "Quote Turnaround",
        value: "< 2 min",
        detail: "Pre-structured WhatsApp booking briefs",
      },
    ],
  },
  {
    slug: "telegram-business-bot",
    title: "Maroa Assistant: Personal Telegram Bot",
    shortTitle: "Telegram Bot",
    category: "Bot",
    tagline:
      "24/7 Python-powered Telegram assistant that answers questions about my skills, projects, and availability.",
    summary:
      "Interactive personal assistant bot (@Maroa_assistant_bot) built in Python, letting recruiters and clients explore my work, request my CV, and reach me in seconds.",
    year: "2026",
    client: "Personal Brand & Client Intake",
    featuredSpan: "normal",
    liveUrl: "https://t.me/Maroa_assistant_bot",
    demoLabel: "Open @Maroa_assistant_bot",
    coverImage: "/images/projects/telegram-bot.svg",
    coverAlt:
      "Telegram bot conversation flow showing @Maroa_assistant_bot answering questions about Brian Maroa's skills and projects",
    accentColor: "sky",
    problem:
      "Recruiters and prospective clients often want quick answers (what stack I use, links to live projects, or my CV) without digging through long PDFs or waiting hours for an email reply.",
    role: "Bot Architect & Python Developer: designed the conversational flow, command handlers, inline menus, and deployment.",
    solution: [
      "Built in Python with the Telegram Bot API, featuring clean `/start` onboarding and interactive inline-keyboard buttons.",
      "Structured instant responses covering my bio, technical stack (React, PHP, Supabase, n8n), live project links, and downloadable CV.",
      "Added direct contact & hiring handoff buttons so interested clients can jump straight to WhatsApp or email.",
      "Designed for fast, reliable 24/7 responses with zero manual intervention.",
    ],
    techStack: [
      "Python",
      "Telegram Bot API",
      "Inline Keyboards",
      "Command Handlers",
      "REST APIs",
    ],
    results: [
      {
        label: "First Response",
        value: "< 1 sec",
        detail: "Instant 24/7 answers about my work",
      },
      {
        label: "Navigation",
        value: "1-Tap",
        detail: "Skills, projects, CV & contact in-chat",
      },
      {
        label: "Availability",
        value: "24/7",
        detail: "Always online for recruiters & clients",
      },
    ],
    beforeAfter: {
      beforeTitle: "Before: Static PDF & Waiting",
      beforeSteps: [
        "Visitor searches through static links or PDFs for project details",
        "Sends an email or message and waits hours for basic info",
        "Friction between viewing work and starting a conversation",
      ],
      beforeMetric: "Hours of delay • Static experience",
      afterTitle: "After: Python Telegram Assistant",
      afterSteps: [
        "User opens @Maroa_assistant_bot and taps what they want to know",
        "Python bot replies in < 1s with tailored bio, projects & CV links",
        "One-tap handoff to WhatsApp or email when ready to hire",
      ],
      afterMetric: "< 1s response • Interactive 24/7",
    },
  },
  {
    slug: "airbnb-bookings-engine",
    title: "Airbnb Bookings & Guest Workflow",
    shortTitle: "Airbnb Bookings",
    category: "Growth & Ops",
    tagline:
      "Listing optimization, calendar sync, and automated guest messaging for coastal & city stays.",
    summary:
      "End-to-end Airbnb & direct-booking operations system that lifted occupancy while cutting manual host messaging by 80%.",
    year: "2025",
    client: "Short-Term Rental Hosts (Kenya)",
    featuredSpan: "normal",
    liveUrl: "https://airbnbbooking.lovestoblog.com/",
    demoLabel: "Visit Booking Site",
    coverImage: "/images/projects/airbnb-bookings.svg",
    coverAlt:
      "Airbnb occupancy dashboard and automated guest check-in messaging timeline",
    accentColor: "amber",
    problem:
      "Property hosts were losing bookings due to unoptimized listing copy, slow inquiry replies, and occasional double-booking scares across Airbnb and direct WhatsApp inquiries.",
    role: "Booking Systems Consultant & Automation Developer: revamped listing conversion assets and automated the guest communication lifecycle.",
    solution: [
      "Rewrote listing titles, photo sequencing, and local guidebooks to highlight Wi-Fi speed, proximity to beaches/landmarks, and self-check-in.",
      "Set up trigger-based guest messaging: instant booking welcome, 24h pre-arrival directions & Wi-Fi details, mid-stay check-in, and checkout review prompt.",
      "Synchronized iCal feeds between Airbnb and direct booking calendars to prevent overlapping dates.",
      "Created a streamlined cleaning-team notification trigger on every confirmed checkout.",
    ],
    techStack: [
      "Airbnb Host Tools",
      "iCal Sync",
      "Automated Messaging",
      "WhatsApp Business",
      "Google Calendar",
    ],
    results: [
      {
        label: "Monthly Occupancy",
        value: "52% → 78%",
        detail: "Higher conversion from search views",
      },
      {
        label: "Host Response Rate",
        value: "99%",
        detail: "Superhost-grade reply speed",
      },
      {
        label: "Manual Check-in Texts",
        value: "-85%",
        detail: "Automated arrival & Wi-Fi guides",
      },
    ],
  },
  {
    slug: "n8n-meeting-automation",
    title: "n8n Meeting-to-Calendar Automation",
    shortTitle: "n8n Calendar Sync",
    category: "Automation",
    tagline:
      "Turns unstructured meeting messages and emails into scheduled Google Calendar events automatically.",
    summary:
      "An n8n workflow that listens to incoming booking emails and chat requests, parses date/time/attendees, checks conflicts, and creates Calendar invites with Meet links.",
    year: "2026",
    client: "Internal & Client Ops",
    featuredSpan: "wide",
    demoLabel: "See Workflow Pipeline",
    coverImage: "/images/projects/n8n-automation.svg",
    coverAlt:
      "n8n node workflow connecting Gmail/Webhook, AI parser, availability check, and Google Calendar event creation",
    accentColor: "emerald",
    problem:
      "Every week, dozens of meeting requests arrived scattered across emails and chat messages, requiring manual timezone math, calendar checking, copying email addresses, and sending invites one by one.",
    role: "Automation Engineer: architected the n8n workflow, structured JSON extraction prompt, conflict-check logic, and error fallback alerts.",
    solution: [
      "Self-hosted n8n in Docker and configured Google Cloud OAuth credentials for Gmail and Google Calendar.",
      "Built an end-to-end workflow: Gmail Trigger → LLM chain with Google Gemini → Code node → conditional logic → Google Calendar event creation.",
      "Extracted structured meeting title, ISO start/end times, attendees, and agenda with conflict checking before creating invites.",
      "Extending the pipeline to summarize incoming emails and deliver concise alerts straight to WhatsApp.",
    ],
    techStack: [
      "n8n (Docker)",
      "Google Gemini LLM",
      "Google Cloud OAuth",
      "Gmail & Calendar API",
      "JavaScript Code Node",
      "WhatsApp Integration",
    ],
    results: [
      {
        label: "Time Saved",
        value: "6+ hrs/wk",
        detail: "Zero manual invite creation",
      },
      {
        label: "Scheduling Errors",
        value: "0",
        detail: "Automated timezone & conflict checks",
      },
      {
        label: "Booking Speed",
        value: "< 4 sec",
        detail: "From message received to Calendar invite",
      },
    ],
    beforeAfter: {
      beforeTitle: "Before: Manual Copy-Paste",
      beforeSteps: [
        "Read email or chat message and guess timezone",
        "Open Google Calendar, check for conflicts manually",
        "Type title, paste attendee emails, generate Meet link, hit Save",
        "Reply to sender to confirm the slot",
      ],
      beforeMetric: "~6 mins per meeting • Prone to double-booking",
      afterTitle: "After: n8n Autopilot",
      afterSteps: [
        "Trigger fires automatically on new email or webhook",
        "AI extracts structured date, time, attendees & agenda",
        "n8n checks Free/Busy, creates Google Calendar + Meet invite",
        "Instant confirmation sent to attendee & owner",
      ],
      afterMetric: "3.8 seconds • Zero manual clicks",
    },
  },
];

// ============================================================================
// SKILLS / STACK (Section 3)
// ============================================================================
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Web",
    description: "Fast, accessible, SEO-ready websites and database-backed web apps.",
    items: [
      { name: "React 18 & Next.js", tag: "UI" },
      { name: "JavaScript & TypeScript" },
      { name: "PHP & Vite" },
      { name: "Tailwind CSS" },
      { name: "Supabase & MySQL", tag: "PostgreSQL / SQL" },
      { name: "JSON-LD & Technical SEO" },
    ],
  },
  {
    category: "Bots",
    description: "Conversational assistants that answer questions, qualify leads & take bookings.",
    items: [
      { name: "Python", tag: "Telegram Bots" },
      { name: "Telegram Bot API" },
      { name: "WhatsApp Deep Links & API" },
      { name: "Webhooks & Polling" },
      { name: "Interactive Menus" },
    ],
  },
  {
    category: "Automation",
    description: "Reliable workflows connecting your inbox, calendar, and CRM.",
    items: [
      { name: "n8n", tag: "Self-hosted Docker" },
      { name: "Google Gemini / LLM Chains" },
      { name: "Google Cloud OAuth" },
      { name: "Gmail & Google Calendar API" },
      { name: "Google Sheets API" },
    ],
  },
  {
    category: "Tools",
    description: "Deployment, infrastructure, and day-to-day shipping stack.",
    items: [
      { name: "Docker & Git / GitHub" },
      { name: "Vercel & Hosting / DNS" },
      { name: "SSL, CDN & Caching" },
      { name: "Lighthouse & Core Web Vitals" },
      { name: "Jira, Trello & Slack" },
    ],
  },
];

// ============================================================================
// HOW I WORK (Section 4)
// ============================================================================
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    duration: "1–2 Days",
    description:
      "We map out where you are losing time or leads, whether it's a slow website, missed WhatsApp messages, or repetitive admin.",
    deliverable: "Clear scope, timeline & fixed quote",
  },
  {
    step: "02",
    title: "Build",
    duration: "1–3 Weeks",
    description:
      "I design and engineer your website, bot, or n8n automation with clean code, mobile-first layouts, and real-world edge-case testing.",
    deliverable: "Staging preview link to test live",
  },
  {
    step: "03",
    title: "Launch",
    duration: "Go-Live",
    description:
      "Smooth deployment to Vercel or your server with domain setup, SEO metadata, analytics, and end-to-end booking verification.",
    deliverable: "Live system + 90+ Lighthouse check",
  },
  {
    step: "04",
    title: "Support",
    duration: "Ongoing",
    description:
      "I hand over a simple guide so your team feels confident, and stay available on WhatsApp for updates, tweaks, or new automations.",
    deliverable: "Video walkthrough & priority support",
  },
];

// ============================================================================
// SERVICES (Section 5)
// ============================================================================
export const SERVICES: ServiceOffering[] = [
  {
    id: "websites",
    title: "Business Websites",
    subtitle:
      "Conversion-focused sites built for tourism, hospitality, and service brands that need direct bookings.",
    startingFrom: "From $450",
    timeline: "1–2 weeks",
    highlights: [
      "Mobile-first Next.js & Tailwind build",
      "WhatsApp & inquiry form integration",
      "Technical SEO & 90+ Lighthouse speed",
      "Easy-to-edit content structure",
    ],
    ctaText: "Discuss a website",
  },
  {
    id: "bots",
    title: "Custom Bots",
    subtitle:
      "Telegram & WhatsApp assistants that answer FAQs, quote prices, and capture leads 24/7.",
    startingFrom: "From $350",
    timeline: "5–10 days",
    highlights: [
      "Interactive button menus (no clunky typing)",
      "Instant lead sync to Google Sheets / CRM",
      "Owner notifications on hot inquiries",
      "Multilingual or custom business rules",
    ],
    ctaText: "Build a bot",
  },
  {
    id: "automations",
    title: "n8n Automations",
    subtitle:
      "Connect your email, calendar, bookings, and spreadsheets so repetitive admin runs on autopilot.",
    startingFrom: "From $250",
    timeline: "3–7 days",
    highlights: [
      "Message/email to Google Calendar sync",
      "Automated guest & client confirmations",
      "Conflict checks & error fallback alerts",
      "Full ownership with zero lock-in",
    ],
    ctaText: "Automate a workflow",
  },
];

// ============================================================================
// TESTIMONIALS (Section 6: Replace placeholders with real client quotes)
// ============================================================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Our guests finally have a fast, clear way to browse Watamu and Tsavo safaris on their phones and message us with their exact dates already filled in.",
    name: "Madi Safari Team",
    role: "Tour Operator",
    company: "Madi Safari Excursions",
    projectTag: "Website & Booking Flow",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote:
      "Instead of waking up to 15 missed messages, our Telegram bot now qualifies every inquiry overnight and drops clean summaries into our sheet.",
    name: "Client Placeholder",
    role: "Operations Lead",
    company: "Coastal Hospitality",
    projectTag: "Telegram Bot",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote:
      "The n8n calendar workflow paid for itself in the first week. Meeting requests turn into Google Calendar invites automatically without me touching a button.",
    name: "Client Placeholder",
    role: "Founder",
    company: "Service Agency",
    projectTag: "n8n Automation",
    isPlaceholder: true,
  },
];
