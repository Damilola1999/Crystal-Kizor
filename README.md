# Crystal

A responsive single-page portfolio website for **Crystal Kizor** — an architect, designer, entrepreneur, speaker, and researcher working at the intersection of design, people, and purpose. The site is a React, TypeScript, and Vite application styled with vanilla CSS, featuring staggered text animations, scroll-triggered reveals via Intersection Observer, a responsive backdrop-blur navigation bar, and an ecosystem of brand cards.

## What It's About

Crystal is a personal brand portfolio that introduces who Crystal Kizor is and showcases a growing ecosystem of brands and initiatives. The site unfolds as a one-page scroll through these sections:

### Navbar
A fixed navigation bar that hides when scrolling down and reappears when scrolling up. On desktop, menu items with sub-links reveal a blur-backed dropdown on hover. On tablet and mobile, it collapses into a hamburger menu with an accordion-style submenu. A "Get in Touch" call-to-action is always accessible.

### Hero
A full-viewport landing banner with a background image that smoothly zooms in, a dark overlay for text legibility, role badges ("Architect", "Designer", "Entrepreneur", "Speaker", "Researcher", "Creator"), and a staggered-animated headline: "Building better spaces, people and possibilities." Ends with a script-style signature and the tagline "IDEAS / DESIGN / IMPACT".

### Ecosystem
A grid of seven interactive brand cards — Studio Coka, Ako, Elevated, TEA (The Effective Architect), Speaking, Alive and Free, and Kizor. Each card shows a photo, an inline SVG logo, a description, a proof metric (e.g., "50+ projects across 3 continents"), and a "Visit" link to the brand's external site.

### About
A biography section with a portrait, a video placeholder, an animated title ("Designing systems for a more human, sustainable future."), a narrative bio, a credentials list (RIBA Chartered Architect, M.Arch AA, TEDx Speaker, Design Indaba, UN-Habitat, Royal Academy), and a vertical list of role cards with SVG icons.

### Social Proof
A statistics-and-testimonials showcase: four key stats (15+ years, 200+ projects, 50k+ people reached, 12 countries), press coverage logos, three testimonials from notable figures (UN-Habitat, KNUST, British Council), and client/partner logos (UN-Habitat, AfDB, Google, World Bank, Nike, IKEA).

### Speaking
A speaking-engagements section with a title ("Ideas worth amplifying."), a tag list of topics (African cities, climate-responsive architecture, design for social impact, participatory design, women in architecture, creative entrepreneurship, education, faith & culture), a grid of past stages (TEDx Lagos, Design Indaba, World Architecture Festival, UN-Habitat, Royal Academy, African Climate Summit, Google, Architectural Association), and a "Book Crystal to Speak" call-to-action.

### The Bigger Picture (Closing)
A closing banner with a background image, a quote from Crystal ("Design is not just about buildings, it's about people, possibilities and a better future."), and a call-to-action to explore the ecosystem.

### Footer
The site footer contains the brand mark and tagline, a newsletter signup form, social media links (LinkedIn, Instagram, YouTube, Email), and contact details (email: hello@crystalkizor.com, location: Lagos, Nigeria).

## Design & Animation

The visual language is warm and earth-toned with serif display typography (Cormorant Garamond), a primary sans-serif (Inter / Figtree), and a script accent font (Mrs Saint Delafield). Every section animates on entry: words stagger in one by one, sections fade and slide up as they scroll into view (powered by Intersection Observer), and interactive elements have subtle hover micro-interactions (arrow gaps widen, images zoom, cards lift). A `prefers-reduced-motion` media query disables all animations for users who prefer reduced motion.

## Tech Stack

- **React 19** with **TypeScript 7** for components and type safety
- **Vite 8** as the build tool and development server (with HMR)
- **Oxlint** for linting (React and Oxc plugin rules)
- **gh-pages** for deployment to GitHub Pages
- **Vanilla CSS** — no UI framework; all styling and animations are hand-written
- **Intersection Observer API** for scroll-triggered animations
- **Inline SVG** icons throughout (arrows, social icons, brand logos, shield monogram)

## Getting Started

```bash
npm install
npm run dev      # starts the dev server at http://localhost:5173
```

### Build & Preview

```bash
npm run build    # produces the optimized dist/ folder
npm run preview  # serves the production build locally
```

### Lint & Type Check

```bash
npm run lint      # runs Oxlint
npm run typecheck # runs tsc --noEmit
```

## Deployment

The project deploys to GitHub Pages at https://Damilola1999.github.io/Crystal-Kizor/ using `gh-pages`. Running `npm run deploy` builds the project and pushes the `dist/` folder to the `gh-pages` branch.
