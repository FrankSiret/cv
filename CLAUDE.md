# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal resume/CV website for Frank Siret (Java Developer) built with React + Vite. Deploys as a static site to GitHub Pages at `https://franksiret.github.io/resume-cv/`.

## Commands

```bash
npm run dev      # start dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

CI/CD: every push to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages.

## Architecture

**Single-page app** with no routing. All sections scroll on one page.

```
src/
├── main.jsx            # ReactDOM root, imports styles.css
├── App.jsx             # Theme state (dark/light) + page layout
├── assets/css/
│   └── styles.css      # All CSS (unchanged from original static site)
├── data/               # Pure JS data files — edit these to update resume content
│   ├── education.js    # education[] + icpcAwards[]
│   ├── experience.js   # experience[] with HTML-string bullets
│   ├── skills.js       # primarySkills[] + extraSkills[]
│   ├── certificates.js
│   └── social.js
└── components/
    ├── ui/             # Reusable primitives
    │   ├── SectionTitle.jsx   # <h2 className="section-title">
    │   ├── TimelineItem.jsx   # timeline dot+line row (prefix: 'education'|'experience')
    │   └── ExternalLink.jsx   # external link icon
    ├── Header.jsx       # fixed bottom nav with mobile toggle + active link tracking
    ├── Home.jsx         # profile photo, name, contacts, theme toggle, PDF download
    ├── Social.jsx
    ├── Profile.jsx
    ├── Education.jsx    # includes collapsible ICPC awards list
    ├── Skills.jsx       # includes "See More/Less" for extra skills
    ├── Experience.jsx   # bullets rendered via dangerouslySetInnerHTML (controlled data)
    ├── Certificates.jsx
    ├── Languages.jsx
    ├── Interests.jsx
    └── ScrollTop.jsx

public/assets/           # Static files served as-is (base URL handled by Vite)
├── img/perfil.jpg
└── pdf/Frank_Siret_CV_June_2024.pdf
```

**Theme toggle** — `App.jsx` holds `darkTheme` state, applies/removes `dark-theme` class on `document.body`, and passes toggle handler to `Home.jsx`.

**Static assets** — referenced via `import.meta.env.BASE_URL` (e.g. `${import.meta.env.BASE_URL}assets/img/perfil.jpg`) so paths resolve correctly on GitHub Pages.

**Vite base** — set to `/resume-cv/` in `vite.config.js` to match the GitHub Pages project URL. Change this if the repo is renamed.

## GitHub Pages setup

In the repo settings → Pages, set source to **GitHub Actions** (not a branch). The workflow handles everything else.
