# Kevin Raweng Anak Usan: Portfolio

**Live: [kevin-raweng-portfolio.vercel.app](https://kevin-raweng-portfolio.vercel.app/)**

Personal portfolio site. Vite + React + Tailwind CSS + DaisyUI.

Single scrolling page with anchor-linked, full-height sections and scroll-snap navigation.
Deployed on Vercel; every push to `main` deploys automatically.

## Run

```bash
npm install
npm run dev
```

Build: `npm run build` · Preview build: `npm run preview`

## Structure

- `src/App.jsx`: composes the page and mounts the snap-navigation hook
- `src/components/`: one file per section: `Navbar`, `Hero`, `About`, `Skills`,
  `Experience`, `Capstone`, `Projects`, `Education`, `Contact`
- `src/components/Section.jsx`: shared full-height section shell; handles the
  alternating navy tones, the optional blueprint grid, and the snap target
- `src/components/Reveal.jsx`: fade + rise wrapper used throughout
- `src/hooks/useScrollReveal.js`: IntersectionObserver reveal
- `src/hooks/useSnapNavigation.js`: smooth anchor scrolling that cooperates with
  scroll-snap (see note below)
- `src/index.css`: Tailwind layers, blueprint grid, corner-bracket frames
- `tailwind.config.js`: navy/gold palette, fonts, DaisyUI `blueprint` theme
- `src/assets/`: static imports (no profile photo is committed, by choice)

## Design

Navy-dominant, alternating two navy shades per section, muted gold accent only.
Blueprint motif: faint gold grid (heavier every 5th line) plus corner-bracket
frames on the hero title block and the featured project card. Fonts: Space Grotesk
(display), Inter (body), JetBrains Mono (labels). Flat throughout, no gradients,
no heavy shadows.

Every section is one viewport tall with its content vertically centred, so
sections align flush to the top of the screen rather than leaving gaps.

## Accessibility & motion

`prefers-reduced-motion` is respected in three places: the reveal hook resolves
immediately, the CSS transitions are disabled, and scroll-snap plus smooth
scrolling are both turned off.

## Note on scroll-snap

Chromium cancels an in-flight smooth scroll while `scroll-snap-type` is active,
pulling the page back to the snap point it started from, so a plain anchor click
never leaves the current section. `useSnapNavigation` works around this by
suspending snapping for the duration of the animation and restoring it once the
scroll settles, with an instant-jump fallback for environments that don't animate
smooth scrolls at all. Don't remove it without re-testing every nav link.

## Deploy

Hosted on Vercel. Pushing to `main` builds and deploys automatically; the
framework preset is detected from Vite (build `npm run build`, output `dist`),
so no `vercel.json` is needed and there are no environment variables to set.

To deploy by hand, for instance if the Git integration is down:

```bash
npx vercel --prod
```

Vite builds a plain static site to `dist/`, so any static host will serve it.

## Extending

Single page, anchor-linked. Add React Router and a `src/pages/` folder if it ever
needs multiple routes. `Projects.jsx` renders from a `PROJECTS` array; adding a
project is one more entry. The contact section is static links; swap it for a
form component when there's a backend to post to.
