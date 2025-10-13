# Workshop Guide: Frontend Web Optimizations

Welcome! This README is your step-by-step guide through the workshop, it explains what to do and why it matters.

---

## Prerequisites
Make sure you have the following set up:

- [ ] **GitHub account** (for forking the repo)
- [ ] **Node.js** v16+ (with npm or pnpm)
- [ ] **Google Chrome** (for DevTools + Lighthouse)
- [ ] **Vercel account** (optional, for deployment)
- [ ] **Terminal** (Command Prompt, PowerShell, or any CLI)

---

## Fork & Run the Repo

1. Fork the workshop repo on GitHub (click **Fork** in the top right).
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
3. Install dependencies and run the dev server:
   ```bash
   npm install
   npm run dev
   ```
4. Open the app at **http://localhost:3000**

If you get an error, feel free to ask for help.

---

## Run an Initial Lighthouse Audit

1. Open your site in Chrome.
2. Open DevTools → **Lighthouse** tab.
3. Select categories (Performance, Accessibility, Best Practices, SEO).
4. Choose **Mobile** or **Desktop**, then click **Generate report**.

---

## Core Web Vitals Overview

| Metric | Meaning | Goal |
|--------|----------|------|
| **LCP** | Largest Contentful Paint (how quickly main content loads) | ≤ 2.5s |
| **FID** | First Input Delay (responsiveness of first interaction) | < 100ms |
| **CLS** | Cumulative Layout Shift (visual stability) | < 0.1 |
| **TTI** | Time To Interactive (when the page is usable) | lower is better |

---

## Review the Lighthouse Report

Check the **Opportunities** and **Diagnostics** sections. Focus on:
- Serve images in next-gen formats
- Preload LCP image
- Minimize main-thread work
- Reduce unused JS/CSS
- Improve SEO titles & metadata

---

## Optimize Step-by-Step

### Convert Images to `.avif` or `.webp`

Smaller images = faster loads = better LCP.

---

### Prioritize the LCP Element

Usually your hero image or main headline.

**Next.js example:**
```jsx
import Image from 'next/image';

<Image
  src="/images/hero.avif"
  alt="Hero section"
  width={1200}
  height={600}
  priority
/>
```

---

### Lazy Load Non-Critical Images

Only load what’s visible.

**React dynamic import:**
```js
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('../components/Heavy'), { ssr: false });
```

---

### Prefetch Routes and Preload Resources

Use Next.js <Link> instead of <a> for automatic prefetching.

#### Links (Next.js)
```jsx
import Link from 'next/link';
<Link href="/about">About</Link>
```

---

### Reduce Render-Blocking JS & CSS

- Remove unused JS and imports
- Remove unused CSS

---

### Fix Layout Shifts (CLS)

Give elements stable dimensions and ensure animations are stable.

```html
<img src="/images/hero.webp" width="1200" height="600" style="aspect-ratio: 1200/600;">
```

Avoid inserting content above the fold after load.

---

## Find Bottlenecks Using DevTools

1. Open **Network** tab → reload page.
2. Sort by **Size** or **Time**.
3. Look for the **largest** resource (often the LCP image).
4. Right-click → **Inspect element** → confirm if it’s your LCP target.
5. Use **Performance** tab to record and identify long tasks.

---

## Re-run Lighthouse After Optimizing

Run Lighthouse again and compare the results.

- Open both before/after reports.
- Check if:
  - LCP improved
  - CLS decreased
  - TTI improved
  - Total transfer size is smaller

---

## Deploy to Vercel

1. Push your changes:
   ```bash
   git add .
   git commit -m "perf: optimize images and LCP"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com)
3. Click **New Project → Import GitHub Repo**
4. Select your repo → deploy
5. Run Lighthouse again on the production URL

---

## Common Issues & Fixes

| Issue | Likely Cause | Fix |
|--------|---------------|-----|
| LCP still slow | Hero image not preloaded | Add `<link rel="preload">` or `priority` |
| CLS high | Missing width/height | Add aspect-ratio or fixed dimensions |
| FID high | Too much JS | Defer scripts, split bundles |
| Score didn’t change | Cached assets | Hard reload or disable cache |

---

## Quick Reference: Problems → Fixes

| Problem | Fix |
|----------|-----|
| Slow LCP | Preload image, use AVIF/WebP, `priority` |
| Poor FID | Defer scripts, reduce JS bundle size |
| High CLS | Set image dimensions, reserve layout space |
| Long TTI | Code-split, remove blocking JS |
| Large transfer | Compress images, cache assets |
