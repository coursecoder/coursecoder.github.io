# CLAUDE.md — AI Assistant Guide for coursecoder.github.io

This file provides guidance for AI assistants (Claude Code, Copilot, etc.) working in this repository.

---

## Project Overview

This is **Coleen Stanley's personal portfolio website** — a static single-page application (SPA) for a Staff Technical Content Architect. It is deployed to GitHub Pages at `coursecoder.com`.

- **Tech stack:** React 18 + TypeScript, Vite 5, Tailwind CSS 3, GSAP, Lenis
- **Deployment:** `gh-pages` branch → GitHub Pages
- **Custom domain:** `coursecoder.com` (configured via `public/CNAME`)

---

## Repository Structure

```
coursecoder.github.io/
├── public/                        # Static assets (copied verbatim to dist/)
│   ├── CNAME                      # Custom domain: coursecoder.com
│   ├── favicon.png
│   └── Playdough-AWS-Architecture.png
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── CustomCursor.tsx       # Animated cursor (hidden on touch)
│   │   └── Navigation.tsx         # Fixed nav with scroll-state styling
│   ├── sections/                  # Full-page section components (rendered once)
│   │   ├── LoadingScreen.tsx      # Initial loading overlay
│   │   ├── Hero.tsx               # Above-the-fold introduction
│   │   ├── About.tsx              # Bio + SVG blueprint diagram
│   │   ├── Experience.tsx         # Timeline of work history
│   │   ├── Toolkit.tsx            # Skills/tech stacked cards
│   │   ├── Projects.tsx           # Featured project showcase
│   │   ├── Contact.tsx            # Terminal-styled contact form (Formspree)
│   │   └── Footer.tsx             # Copyright + attribution
│   ├── App.tsx                    # Root component; wires sections + animations
│   ├── main.tsx                   # React DOM entry point
│   └── index.css                  # Global styles, custom animations, CSS vars
├── index.html                     # Vite HTML entry point
├── vite.config.ts                 # Vite config (base: '/')
├── tailwind.config.js             # Custom colors (rose, cream-100) + fonts
├── postcss.config.js              # Tailwind + autoprefixer
├── package.json
└── package-lock.json
```

---

## Development Workflow

### Start development server
```bash
npm run dev
```
Runs Vite's dev server with HMR. Visit `http://localhost:5173`.

### Production build
```bash
npm run build
```
Outputs to `dist/`. Uses Vite with `base: '/'`.

### Preview production build locally
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```
This runs `npm run build && gh-pages -d dist -r https://github.com/coursecoder/coursecoder.github.io.git`.

The `gh-pages` npm package pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves. **Do not manually push to the `gh-pages` branch.**

---

## Architecture & Key Conventions

### Component Organization

- **`src/components/`** — components used across multiple sections or globally (cursor, nav).
- **`src/sections/`** — single-use full-viewport sections. Each maps to a named anchor (`#about`, `#experience`, etc.).
- Section order in `App.tsx` defines page render order; maintain that order.

### Scroll Animations

`App.tsx` sets up a global `IntersectionObserver` that:
1. Watches all `.reveal-section` elements — adds `.visible` to trigger fade-in + slide-up.
2. Watches all `.stagger-cards` containers — adds `.visible` to trigger staggered card animations.

**Convention:** New sections that need scroll-reveal should add the `reveal-section` class to their outermost container. Cards within a section that should animate staggered should live inside a `.stagger-cards` container.

```tsx
// Good: section with scroll-reveal
<section id="my-section" className="reveal-section ...">
  ...
  <div className="stagger-cards grid">
    <div className="stagger-card">...</div>
    <div className="stagger-card">...</div>
  </div>
</section>
```

### Styling Conventions

- **Tailwind utility classes** are the primary styling mechanism.
- **Custom CSS** lives in `src/index.css` for animations and global rules that can't be expressed cleanly in Tailwind.
- **Custom Tailwind values** (defined in `tailwind.config.js`):
  - Colors: `rose` → `#c17b8e`, `cream-100` → `#f9f7f5`
  - Fonts: `font-sans` → Inter, `font-mono` → JetBrains Mono
- The design language is **technical/blueprint** — monospace headings, grid patterns, subtle glitch effects, and a cream + rose + slate palette.

### CSS Animation Classes (index.css)

| Class | Effect |
|-------|--------|
| `.reveal-section` | Starts hidden (opacity 0, translateY 20px); `.visible` triggers fade-in over 0.6s |
| `.stagger-card` | Starts hidden (opacity 0, translateY 15px); parent `.stagger-cards.visible` reveals with delays 0.1s / 0.2s / 0.3s |
| `.glitch-hover` | 0.3s pixel-shift glitch animation on hover |
| `.animate-bounce-subtle` | 4px vertical bounce loop every 2s |
| `.card-lift` | `translateY(-3px)` + `box-shadow 0 8px 24px rgba(0,0,0,0.08)` on hover |
| `.node-pulse` | Rose-tinted box-shadow ring on timeline nodes |
| `.grid-pattern` | 40px × 40px slate grid background (30px on mobile) |
| `.project-card` | Subtle rose gradient overlay appears on hover via `::before` pseudo-element |

### Accessibility

- Respect `prefers-reduced-motion` — `index.css` sets all animation/transition durations to `0.01ms` under this media query.
- Touch devices: `CustomCursor` detects touch and hides itself.
- Provide `aria-label` on icon-only buttons (e.g., copy buttons in `Contact.tsx`).
- Use semantic HTML elements (`<section>`, `<nav>`, `<footer>`, `<article>`).

### Forms

The contact form in `Contact.tsx` uses **Formspree** (form ID: `xnjbgovz`).
- Submit endpoint: `https://formspree.io/f/xnjbgovz`
- No backend code needed; Formspree handles delivery.
- Handle `sending` / `sent` state for loading/success feedback (see existing implementation).

---

## Brand & Style Guide

This section is the canonical reference for maintaining visual and tonal consistency. When writing new code or copy, match these patterns exactly rather than introducing new variants.

---

### Brand Voice & Copy

The site reads like a **technical specification written by a human** — precise, confident, and just warm enough. Key traits:

- **Headings:** all-caps, monospace, direct. No punctuation at the end of headings.
  - Good: `STAFF TECHNICAL CONTENT ARCHITECT`
  - Bad: `Staff Technical Content Architect.`
- **Section eyebrow labels** (the small rose text above h2s): all-caps, 2–4 words, always preceded and followed by a `w-8 h-px bg-rose` divider line.
  - Examples: `ABOUT ME`, `EXPERIENCE`, `THE TOOLKIT`, `CONTACT`
- **H2 titles:** mixed case with one rose-colored keyword. Pattern: `Noun <span className="text-rose">Keyword</span>`
  - Examples: `Career <span className="text-rose">Timeline</span>`, `Send a <span className="text-rose">Signal</span>`
- **Body copy:** sentence case, Inter font, conversational but technical. Weight 400–500. No jargon without context.
- **Button/CTA labels:** all-caps, monospace, action verbs.
  - Examples: `EXPLORE SYSTEM`, `TRANSMIT`, `VIEW GITHUB PROFILE`
- **Status/terminal copy:** uses `>` prefix, dot-notation for fields (`user.name`, `user.role`), ends with `> _` cursor.
- **Taglines:** short, punchy, often binary or parallel.
  - Examples: `Engineering the systems. Teaching the people. Scaling both.`

---

### Colors

Only use colors from this table. Do not introduce new Tailwind color values.

| Token | Value | Usage |
|-------|-------|-------|
| `text-rose` / `bg-rose` / `border-rose` | `#c17b8e` | Primary accent: links, highlights, active states, icons, section labels |
| `bg-cream-100` | `#f9f7f5` | Page and section background |
| `text-slate-950` | Tailwind default | Hero name (highest contrast) |
| `text-slate-900` | Tailwind default | H2 headings |
| `text-slate-800` | Tailwind default | Card titles, form headings, company names |
| `text-slate-700` | Tailwind default | Company names in experience cards |
| `text-slate-600` | Tailwind default | Body copy, section subtitles |
| `text-slate-500` | Tailwind default | Secondary/meta text, terminal lines |
| `text-slate-400` | Tailwind default | Placeholder text, timestamps, divider labels |
| `border-slate-200` | Tailwind default | Card and section borders (default state) |
| `bg-slate-100` | Tailwind default | Icon container backgrounds |
| `bg-slate-50` | Tailwind default | Terminal header bar, form input backgrounds |
| `text-blue-600` | Tailwind default | Engineering category icon only (Toolkit) |
| `text-amber-600` | Tailwind default | Instructional Authoring category icon only (Toolkit) |
| `text-emerald-600` | Tailwind default | Terminal success lines and sent-state button text |
| `text-emerald-400` | Tailwind default | Terminal macOS dot (decorative) |

**Opacity modifiers in use:** `rose/40`, `rose/50`, `rose/60`, `rose/70`, `rose/80`, `rose/90`, `rose/10`, `rose/5`. Use sparingly for borders, overlays, and decorative elements.

---

### Typography

**Fonts**
- `font-mono` → JetBrains Mono (imported from Google Fonts, weights 400–700)
- `font-sans` → Inter (imported from Google Fonts, weights 300–700)
- All `h1`–`h6` elements default to `font-mono` via `index.css`.

**Scale in use**

| Use case | Classes |
|----------|---------|
| Hero name (h1) | `font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight` |
| Hero subtitle | `font-mono text-sm sm:text-base md:text-lg text-rose tracking-widest` |
| Section h2 | `font-mono text-3xl md:text-4xl font-bold` |
| Card h3 | `font-mono text-lg font-semibold` |
| Card label / eyebrow | `font-mono text-xs text-rose tracking-wider` (or `text-slate-500`) |
| Skill pill / badge | `font-mono text-xs` |
| Body paragraph | `text-sm` or base size, `text-slate-600`, leading-relaxed |
| Meta / caption | `text-xs text-slate-400 font-mono` |
| Nav links | `font-mono text-xs tracking-wider uppercase` |
| Button labels | `font-mono text-xs tracking-wider` or `font-mono text-sm tracking-wider` |

---

### Spacing & Layout

**Section container (canonical — use exactly this):**
```tsx
<section id="name" className="relative py-24 md:py-32 bg-cream-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

**Section header block (canonical eyebrow + h2 + subtitle pattern):**
```tsx
<div className="text-center mb-16 reveal-section">
  <div className="flex items-center justify-center gap-4 mb-6">
    <div className="w-8 h-px bg-rose" />
    <span className="font-mono text-xs text-rose tracking-wider">SECTION LABEL</span>
    <div className="w-8 h-px bg-rose" />
  </div>
  <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-slate-900">
    Noun <span className="text-rose">Keyword</span>
  </h2>
  <p className="text-slate-600 max-w-2xl mx-auto">
    Short supporting sentence.
  </p>
</div>
```

**Left-aligned eyebrow (used in About section):**
```tsx
<div className="flex items-center gap-4 mb-6">
  <div className="w-8 h-px bg-rose" />
  <span className="font-mono text-xs text-rose tracking-wider">ABOUT ME</span>
</div>
```

**Grid patterns:**
- 2-column: `grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`
- 3-column cards: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`

---

### Component Recipes

Use these exact class strings. Do not invent new variants — if a new pattern is needed, document it here.

**Standard content card:**
```tsx
<div className="p-6 border border-slate-200 hover:border-rose/40 transition-all duration-300 bg-white shadow-sm rounded-lg group">
  ...
</div>
```

**Card with corner accent (Toolkit style):**
```tsx
<div className="stagger-card group relative p-6 border border-slate-200 hover:border-rose/40 transition-all duration-300 card-lift bg-white rounded-lg shadow-sm">
  {/* Corner accent */}
  <div className="absolute top-0 right-0 w-8 h-8">
    <div className="absolute top-0 right-0 w-4 h-px bg-slate-200 group-hover:bg-rose/50 transition-colors" />
    <div className="absolute top-0 right-0 w-px h-4 bg-slate-200 group-hover:bg-rose/50 transition-colors" />
  </div>
  ...
</div>
```

**Icon container (used in cards and contact links):**
```tsx
<div className="p-2 bg-slate-100 group-hover:bg-rose/10 transition-colors rounded">
  <Icon className="w-5 h-5 text-rose" />
</div>
```

**Skill/tech pill badge:**
```tsx
<span className="px-2 py-1 text-xs font-mono bg-slate-100 text-slate-600 border border-slate-200 rounded">
  Python
</span>
```

**Primary button (rose fill):**
```tsx
<button className="px-6 py-4 bg-rose text-white font-mono text-sm tracking-wider hover:bg-rose/90 transition-all duration-300 rounded-md">
  LABEL
</button>
```

**Ghost button (rose outline):**
```tsx
<button className="px-6 py-3 border border-rose/60 hover:border-rose text-xs font-mono tracking-wider transition-all duration-300 text-slate-800 hover:text-white hover:bg-rose">
  LABEL
</button>
```

**Link button (inline, rose text):**
```tsx
<a className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-rose hover:text-rose/80 transition-colors border border-rose/40 hover:border-rose px-4 py-2 rounded">
  LABEL
</a>
```

**Bullet point (rose dot — used in experience achievements):**
```tsx
<li className="flex items-start gap-2 text-xs text-slate-600">
  <span className="w-1.5 h-1.5 rounded-full bg-rose/60 mt-1.5 flex-shrink-0" />
  Achievement text here.
</li>
```

**Form input:**
```tsx
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:border-rose focus:outline-none transition-colors rounded-md" />
```

---

### Borders & Shadows

| Context | Classes |
|---------|---------|
| Default card border | `border border-slate-200` |
| Card hover border | `hover:border-rose/40` (paired with `transition-all duration-300`) |
| Card shadow | `shadow-sm` |
| Nav (after scroll) | `bg-cream-100/95 backdrop-blur-sm border-b border-slate-200` |
| Timeline node | `border-4 border-white` (on top of rose background) |
| Terminal window | `border border-slate-200 bg-white shadow-sm overflow-hidden rounded-lg` |

---

### Interaction Patterns

All interactive elements follow a consistent hover choreography:

1. **Border:** `border-slate-200` → `border-rose/40` (cards) or `border-rose` (buttons)
2. **Icon container:** `bg-slate-100` → `bg-rose/10`
3. **Icon or text:** `text-slate-*` → `text-rose`
4. **Card position:** `translateY(0)` → `translateY(-3px)` via `.card-lift`
5. **Transition:** always `transition-all duration-300` or `transition-colors` for color-only changes

Never introduce `transition-none` or instant state changes on interactive elements.

---

### Icons

- **Library:** Lucide React exclusively. Do not add other icon libraries.
- **Size convention:** `w-4 h-4` for inline/small, `w-5 h-5` for card icons, `w-8 h-8` for feature icons, `w-3 h-3` for status bar meta.
- **Color:** `text-rose` for primary icons; `text-slate-400` or `text-slate-500` for secondary/meta icons.
- **Icons in use:** `Zap`, `Code2`, `Users`, `Cloud`, `BookOpen`, `MapPin`, `Calendar`, `GraduationCap`, `ChevronDown`, `Menu`, `X`, `Send`, `Linkedin`, `Github`, `Globe`, `Copy`, `Check`.

---

## Adding New Sections

1. Create `src/sections/NewSection.tsx`.
2. Import and add it in `App.tsx` in the desired order.
3. Add the section's anchor link to `Navigation.tsx`.
4. Use the canonical section container and section header patterns from the Component Recipes above.
5. Apply `reveal-section` to the outermost container and any sub-blocks that should animate in separately.

---

## Adding New Projects

Edit `src/sections/Projects.tsx`. Each project follows this data shape (inline in JSX or extract to a typed array):

```ts
{
  title: string;
  description: string;
  tech: string[];       // rendered as pill badges
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;    // optional architecture diagram / screenshot
}
```

---

## Git Workflow

- **Main source branch:** `master`
- **Deployed branch:** `gh-pages` (auto-managed by `npm run deploy` — never edit manually)
- **AI feature branches:** `claude/<description>-<id>` (e.g., `claude/add-claude-documentation-Hktf2`)
- Commit messages should be concise and descriptive (imperative mood preferred).

---

## Common Pitfalls

- **Don't change `vite.config.ts` base path** from `'/'` — the CNAME and GitHub Pages setup depend on it.
- **Don't commit to `gh-pages` branch** — it is overwritten on every deploy.
- **Don't import GSAP ScrollTrigger** unless needed; current scroll reveals use the lighter `IntersectionObserver` approach in `App.tsx`.
- **Don't add heavy dependencies** without considering the static bundle size — this is a personal portfolio, keep it lean.
- **Don't use `cream`** as a Tailwind class — the correct token is `cream-100` (e.g., `bg-cream-100`).
- **Don't use `.is-visible`** — the correct JS-applied class is `.visible` (check `index.css`).
- **Don't introduce new color values** (e.g., `blue-400`, `purple-*`) — use only the colors in the Brand & Style Guide table.
- There are **no automated tests** — validate changes by running `npm run build` and visually reviewing with `npm run preview`.

---

## Pre-Deploy Checklist

No automated tests exist. Before merging or deploying, manually verify:

```bash
npm run build    # Must complete with zero TypeScript errors
npm run preview  # Then open http://localhost:4173 and check:
```

- [ ] Loading screen appears and dismisses cleanly
- [ ] Navigation links scroll to correct anchors; mobile hamburger opens/closes
- [ ] Hero section renders with name, subtitle, certifications, and CTA button
- [ ] About section blueprint SVG is visible; three feature cards animate in on scroll
- [ ] Experience timeline renders both roles with achievements and tech pills
- [ ] Toolkit cards stagger-animate in on scroll; hover lift and corner accent work
- [ ] Projects section renders with GitHub/live links
- [ ] Contact terminal types out lines on scroll; copy buttons work; form submits (check Formspree dashboard)
- [ ] Footer renders with current year
- [ ] No console errors in DevTools
- [ ] Resize to mobile (375px) — nav collapses, layout stacks correctly

---

## No Test Suite

There are currently no unit or integration tests. The pre-deploy checklist above is the validation process.

---

## Environment

No environment variables are required for local development. Formspree handles contact form submissions externally with no server-side configuration.
