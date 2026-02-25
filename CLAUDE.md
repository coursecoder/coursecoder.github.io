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
├── tailwind.config.js             # Custom colors (rose, cream) + fonts
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
1. Watches all `.reveal-section` elements — adds `.is-visible` to trigger fade-in + slide-up.
2. Watches all `.stagger-cards` containers — adds `.is-visible` to trigger staggered card animations.

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
  - Colors: `rose` → `#c17b8e`, `cream` → `#f9f7f5`
  - Fonts: `font-sans` → Inter, `font-mono` → JetBrains Mono
- The design language is **technical/blueprint** — monospace headings, grid patterns, subtle glitch effects, and a cream + rose + slate palette.

### CSS Animation Classes (index.css)

| Class | Effect |
|-------|--------|
| `.reveal-section` | Starts hidden (opacity 0, translateY 30px); `.is-visible` triggers fade-in |
| `.stagger-card` | Same as reveal-section but delays are staggered (0.1s / 0.2s / 0.3s) |
| `.glitch-hover` | Subtle letter-spacing glitch on hover |
| `.animate-bounce-subtle` | Gentle vertical bounce loop |
| `.card-lift` | `translateY(-4px)` + shadow on hover |
| `.node-pulse` | Radial pulse animation for timeline nodes |
| `.hoverable` | Signals to `CustomCursor` to grow the cursor ring |

### Accessibility

- Respect `prefers-reduced-motion` — all animation CSS is wrapped appropriately in `index.css`.
- Touch devices: `CustomCursor` detects touch and hides itself (`pointer: none`).
- Provide `aria-label` on icon-only buttons (e.g., copy buttons in Contact).
- Use semantic HTML elements (`<section>`, `<nav>`, `<footer>`, `<article>`).

### Forms

The contact form in `Contact.tsx` uses **Formspree** (form ID: `xnjbgovz`).
- Submit endpoint: `https://formspree.io/f/xnjbgovz`
- No backend code needed; Formspree handles delivery.
- Handle the `status` state for loading/success/error feedback.

---

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `rose` / `--rose` | `#c17b8e` | Primary accent, links, highlights |
| `cream` | `#f9f7f5` | Page background |
| `slate-900` | Tailwind default | Primary text |
| `slate-600` | Tailwind default | Secondary text |

### Typography

- **Headings:** `font-mono` (JetBrains Mono) — uppercase tracking for section titles
- **Body:** `font-sans` (Inter) — 300–500 weight for readability
- **Code/terminal:** `font-mono` — used in Contact section's terminal aesthetic

### Spacing & Layout

- Standard section padding: `py-20` or `py-24`
- Max content width: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Responsive grid: `grid-cols-1 md:grid-cols-2` or `lg:grid-cols-3` patterns

---

## Adding New Sections

1. Create `src/sections/NewSection.tsx`.
2. Import and add it in `App.tsx` in the desired order.
3. Add the section's anchor link to `Navigation.tsx`.
4. Apply `reveal-section` to the outermost container for scroll animations.
5. Use the established color tokens and typography conventions.

---

## Adding New Projects

Edit `src/sections/Projects.tsx`. Each project follows this data shape (inline in JSX or extract to a typed array):

```ts
{
  title: string;
  description: string;
  tech: string[];       // badges rendered as pills
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
- There are **no automated tests** — validate changes by running `npm run build` and visually reviewing with `npm run preview`.

---

## No Test Suite

There are currently no unit or integration tests. Before opening a PR or deploying:

```bash
npm run build    # Must complete without errors
npm run preview  # Manually verify all sections render correctly
```

---

## Environment

No environment variables are required for local development. Formspree handles contact form submissions externally with no server-side configuration.
