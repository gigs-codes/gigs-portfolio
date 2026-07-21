# Garima Swami — Portfolio

A 3D personal portfolio built with React, Vite, and React Three Fiber, styled in a light, colorful crayon theme.

## Stack

- React 19 + Vite
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) for the 3D hero scene
- Plain CSS with a custom crayon color system (`src/index.css`)
- Contact form via [Formspree](https://formspree.io)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` — page sections (Hero, About, Experience, Projects, Publications, Skills, Education, Life, Contact)
- `src/data/content.js` — all portfolio content (bio, experience, projects, skills, etc.)
- `public/GARIMA_SWAMI_RESUME.pdf` — downloadable resume
