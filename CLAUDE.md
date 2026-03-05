# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server at http://localhost:5173
npm run build      # Production build into dist/
npm run preview    # Serve the production build locally
npm run lint       # Run ESLint
npm run format     # Format src/ with Prettier (run before committing)
npm run db:import  # Import products via scripts/import-products.js
```

No test suite is configured. If you add one, register the script in `package.json` and document it here.

## Docker (development)

```bash
docker-compose up --build          # Dev stack: frontend + PostgreSQL + Redis + Adminer
docker-compose -f docker-compose.prod.yml up --build -d  # Production build on port 80
docker-compose down
```

Local service URLs:
- Frontend: http://localhost:5173
- Backend API (not yet implemented): http://localhost:8080 (`VITE_API_URL`)
- PostgreSQL: `localhost:5432` (db: `monpetitbazaar`, user: `admin`, password: `password`)
- Adminer: http://localhost:8081 (connect with server: `postgres`)
- Redis: `localhost:6379`

Copy `.env.example` to `.env` for local environment variables.

## Architecture

This is a React 18 + Vite single-page application styled with Tailwind CSS, deployed to GitHub Pages. There is **no backend** yet — a Spring Boot backend is planned (see `SPRING_BOOT_README.md`).

**Data flow:**
- Product catalog is stored as static JSON in `src/data/products.json`. The `scripts/import-products.js` script can populate the PostgreSQL database for future backend use.
- Cart state lives in `CartContext` (`src/context/CartContext.jsx`), persisted to `localStorage`. All components access it via the `useCart()` hook.
- Contact form uses EmailJS (`@emailjs/browser`) — credentials configured via `VITE_EMAILJS_*` env vars.

**Routing** (React Router v6, all client-side):
- `/` — HomePage
- `/shop` — ShopPage (filters by category/search, sorts, reads from products.json)
- `/product/:slug` — ProductPage
- `/contact`, `/faq`, and several legal/policy pages

**Component layout:** `Header` + `Footer` wrap all routes. `CartSidebar` is a global overlay rendered outside the route tree.

## Coding conventions

- Formatting: Prettier enforced. Run `npm run format` before committing.
- ESLint config: `.eslintrc.cjs` (React + hooks rules). Fix all lint errors before a PR.
- Style: semicolons, single quotes, PascalCase components, `useX` for hooks.
- No strict commit convention — keep titles short and imperative.
