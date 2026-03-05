# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # Production build into dist/
npm run preview    # Serve the production build locally
npm run lint       # ESLint
npm run format     # Prettier on src/ (run before committing)
```

No test suite is configured.

## Docker (optional)

```bash
docker-compose up --build          # Dev: frontend only, http://localhost:5173
docker-compose -f docker-compose.prod.yml up --build -d  # Prod: Nginx on port 80
```

## Architecture

React 18 + Vite SPA styled with Tailwind CSS, deployed to GitHub Pages via `deploy-gh-pages.yml`.

**This is a frontend-only project — there is no backend.**

**Data flow:**
- Product catalog lives in `src/data/products.json`. To add/update products, edit that file directly.
- Cart state lives in `CartContext` (`src/context/CartContext.jsx`), persisted to `localStorage`. All components consume it via `useCart()`.
- Contact form uses EmailJS (`@emailjs/browser`) — credentials in `.env` (`VITE_EMAILJS_*`). Falls back to `mailto:` if not configured.

**Routing** (React Router v6, all client-side):
- `/` — HomePage
- `/shop` — ShopPage (search, category filter, sort — all reads from products.json)
- `/product/:slug` — ProductPage (image zoom via `react-medium-image-zoom`)
- `/contact`, `/faq`, and several legal/policy pages

**Component layout:** `Header` + `Footer` wrap all routes. `CartSidebar` is a global overlay rendered outside the route tree in `App.jsx`.

## Product schema

```json
{
  "id": 1,
  "name": "string",
  "slug": "url-friendly-string",
  "category": "string",
  "price": 0.00,
  "description": "string",
  "image": "primary image URL",
  "images": ["array", "of", "image", "URLs"],
  "inStock": true
}
```

## Coding conventions

- Prettier enforced. Run `npm run format` before committing.
- ESLint config: `.eslintrc.cjs` (React + hooks). Fix all errors before a PR.
- Semicolons, single quotes, PascalCase components, `useX` hooks.
- Short, imperative commit titles.
