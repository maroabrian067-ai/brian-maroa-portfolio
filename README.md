# Brian Maroa — Portfolio Website

A fast, mobile-first developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 1. Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. How to Edit Content

All portfolio copy, personal details, services, testimonials, and projects live in a **single file**:
[`src/data/projects.ts`](src/data/projects.ts)

### Update Your WhatsApp Number, Email & Bio
Edit the `PROFILE` object at the top of `src/data/projects.ts`:
- `whatsappNumber`: Use international format with **no `+` or spaces** (e.g. `"254712345678"`).
- `subline`: Your one-line positioning statement.
- `email` & `socials`: Your real contact email and GitHub / LinkedIn / X URLs.

### Replace Your Portrait & CV
- **CV PDF:** Replace `public/cv/brian-maroa-cv.pdf` with your actual CV (keep the same filename, or update `PROFILE.cvPath`).
- **Portrait Photo:** Drop your photo into `public/images/brian-portrait.jpg` and swap the placeholder block in `src/components/sections/About.tsx` with a `<Image src="/images/brian-portrait.jpg" ... />`.

### Update Testimonials
Edit the `TESTIMONIALS` array in `src/data/projects.ts` to replace the placeholder quotes with real client feedback.

---

## 3. How to Add a New Project / Case Study

1. Add a preview image (`.webp`, `.png`, or `.svg`) to `public/images/projects/`.
2. Append a new object to the `PROJECTS` array in `src/data/projects.ts` following the `Project` interface:
   - `slug`: URL path (e.g., `"whatsapp-order-bot"` creates `/projects/whatsapp-order-bot`).
   - `featuredSpan`: `"wide"` (takes 2/3 width on desktop) or `"normal"` (takes 1/3 width).
   - `beforeAfter` *(optional)*: Include this object for automation/bot projects to automatically render the **Before vs. After** comparison component on the case study page.
3. Run `npm run build`—Next.js automatically pre-renders the new case study page and includes it in `/sitemap.xml`.

---

## 4. Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import your repository, and click **Deploy** (zero extra configuration needed).
3. Update `SITE_URL` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `public/robots.txt` to match your custom domain (e.g., `https://brianmaroa.dev`).

### Optional: Pure Static Export
If you want to host on Cloudflare Pages, Netlify static, or cPanel:
1. Add `output: "export"` to `next.config.ts`.
2. Run `npm run build` — static HTML/CSS/JS will be generated in the `out/` folder.
