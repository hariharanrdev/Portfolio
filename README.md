# Portfolio Site — Hariharan R

An animated, fully responsive portfolio website built with **React + Vite + TypeScript**, featuring cinematic scroll-snap sections, dark/light theme toggle, and Framer Motion animations.

## 🚀 Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build & dev server)
- **Tailwind CSS 4** (utility-first styling with CSS variables)
- **Framer Motion** (animations & transitions)
- **React Hook Form + Zod** (form validation)
- **React Icons** (icon library)

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, ScrollLayout
│   └── sections/     # Hero, About, CTA, Resume, Projects, Skills, Contact
├── context/          # ThemeContext (dark/light persistence)
├── data/             # config.ts, projects.ts
└── index.css         # Global styles & theme tokens
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

- **Personal info**: Edit `src/data/config.ts` (name, email, socials, education, certifications)
- **Projects**: Edit `src/data/projects.ts`
- **Skills**: Edit `src/components/sections/Skills.tsx`
- **Resume PDF**: Place your file in `public/` and update `resumeUrl` in `config.ts`
- **Theme colors**: Edit CSS variables in `src/index.css` under `@theme`

## 📄 License

MIT
