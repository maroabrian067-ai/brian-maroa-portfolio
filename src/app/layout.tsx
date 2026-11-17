import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/data/projects";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://brianmaroa.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} | ${PROFILE.role}`,
    template: `%s | ${PROFILE.name}`,
  },
  description:
    "Brian Maroa builds high-converting websites, Telegram & WhatsApp bots, and n8n automations that save businesses time and win them customers.",
  keywords: [
    "Brian Maroa",
    "Web Developer Kenya",
    "Next.js Developer",
    "Telegram Bot Developer",
    "n8n Automation",
    "Safari Booking Website",
    "Business Automation Kenya",
  ],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${PROFILE.name} Portfolio`,
    title: `${PROFILE.name} | Websites, Bots & Automations`,
    description: PROFILE.headline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | Websites, Bots & Automations`,
    description: PROFILE.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  url: SITE_URL,
  email: `mailto:${PROFILE.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressRegion: "Nairobi & Coast",
  },
  sameAs: [
    PROFILE.socials.github,
    PROFILE.socials.linkedin,
    PROFILE.socials.telegram,
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Telegram Bot API",
    "n8n Automation",
    "Google Calendar API",
    "Conversion Web Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
        <ThemeProvider>
          <MotionProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
