# Alfons – Portfolio

My personal portfolio site, built from scratch with React and TypeScript. It presents who I am, the projects I'm working on and the skills I'm developing as a web development student at [Webbutvecklare.net](https://webbutvecklare.net).

## Features

- **Sticky navigation** that highlights the section currently in view (`IntersectionObserver`)
- **Mobile menu** with a hamburger toggle, closable with <kbd>Esc</kbd>
- **Animated skill bars** that fill up the first time they scroll into view
- **Project cards** with hand-drawn SVG illustrations
- **Responsive, dark design** written in plain CSS – no UI library or CSS framework
- **Accessibility**: semantic sections, ARIA labels, `role="meter"` on skill bars and support for `prefers-reduced-motion`

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Plain CSS, one file per component |
| Fonts | Inter and JetBrains Mono (Google Fonts) |

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or later.

```bash
git clone https://github.com/99alfons-stack/MyPortfolio.git
cd MyPortfolio
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
src/
├── App.tsx            # Puts the sections together
├── main.tsx           # Entry point
├── assets/            # Profile picture
├── components/
│   ├── Navbar.tsx     # Sticky menu with active-section highlighting
│   ├── Hero.tsx       # Intro with photo and tech stack
│   ├── About.tsx      # About me, quick facts and interests
│   ├── Projects.tsx   # Project cards
│   ├── Skills.tsx     # Animated skill bars
│   └── Contact.tsx    # Contact details and footer
└── styles/            # One CSS file per component + global index.css
```

## Customizing

Most content lives in plain arrays at the top of each component, so updating the site rarely means touching the markup:

- **Projects** – add an object to `PROJECTS` in `Projects.tsx` (newest first)
- **Skills** – adjust `SKILL_GROUPS` in `Skills.tsx` (level 0–100)
- **Quick facts & interests** – `FACTS` and `INTERESTS` in `About.tsx`
- **Contact details** – `CONTACT` in `Contact.tsx`
- **Profile picture** – replace `src/assets/profile.png`
- **Colors** – CSS variables at the top of `src/styles/index.css`

## Featured project

**[Scan2ERP](https://github.com/99alfons-stack/EAN-Netic)** – my internship project at Netic AB: a mobile web app that scans barcodes, QR codes and text with the camera and fetches customer orders from the Monitor ERP system through a Node.js backend.

## Contact

- GitHub: [99alfons-stack](https://github.com/99alfons-stack)
- Email: 99alfons@gmail.com
