# nefi.ink

Portfolio website for tattoo artist **Ramon Néfi**, specialized in Blackwork and Sketch.

Built as a static single-page site deployed on GitHub Pages.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (static export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Deploy | GitHub Pages |

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, global styles
  page.tsx          # Single-page composition
components/
  Nav.tsx           # Fixed navigation bar
  Hero.tsx          # Full-screen hero with parallax background
  About.tsx         # Artist bio and stats
  Portfolio.tsx     # Tattoo gallery grid
  Contact.tsx       # Booking CTA (WhatsApp + Instagram)
  Footer.tsx        # Footer
public/
  images/           # Static image assets
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000/nefi-ink](http://localhost:3000/nefi-ink) in your browser.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Generate static export to `out/` |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run setup` | Run image setup script |

## Deployment

The site is configured for GitHub Pages via static export:

```js
// next.config.js
output: 'export'
basePath: '/nefi-ink'
```

To deploy, push to the `main` branch. GitHub Actions (or manual upload of the `out/` folder) publishes the static files.

## Design Tokens

The color palette and typography are defined in `tailwind.config.ts` under the `ink` namespace:

| Token | Value | Usage |
|---|---|---|
| `ink-black` | `#080808` | Page background |
| `ink-text` | `#e8e0d0` | Primary text |
| `ink-red` | `#c41e1e` | Accent color |
| `ink-muted` | `#7a7060` | Secondary text |
| `font-display` | Cinzel | Headings |
| `font-serif` | Cormorant | Body copy |

## Contact

- Instagram: [@nefi.ink](https://instagram.com/nefi.ink)
- WhatsApp: available via the booking button on the site
