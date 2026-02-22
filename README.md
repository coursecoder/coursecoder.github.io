# Coleen Stanley — Portfolio

Personal portfolio for [Coleen Stanley](https://coursecoder.com).

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS** — styling
- **GSAP** — scroll animations
- **Lenis** — smooth scrolling
- **Lucide React** — icons
- **Formspree** — contact form
- **GitHub Pages** — hosting

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Deploy

```bash
# Save source
git add .
git commit -m "your message"
git push origin master

# Deploy to live site
npm run deploy
```

`npm run deploy` builds the project and pushes to the `gh-pages` branch which serves [coursecoder.com](https://coursecoder.com).

## Project Structure

```
src/
├── components/
│   ├── CustomCursor.tsx
│   └── Navigation.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Toolkit.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
public/
├── CNAME
└── Playdough-AWS-Architecture.png
```
