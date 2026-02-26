# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the React app (Vite). Key areas:
- `src/components/` for reusable UI components (PascalCase files, e.g. `Header.jsx`).
- `src/pages/` for route-level screens.
- `src/context/` for React context providers.
- `src/data/` for local data files.
- `public/` for static assets served as-is.
- `scripts/` for Node utilities (e.g. product import).
- `dist/` is build output (generated).

## Build, Test, and Development Commands
- `npm run dev` starts the Vite dev server.
- `npm run build` produces a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint checks.
- `npm run format` formats sources in `src/` with Prettier.
- `npm run db:import` imports products using `scripts/import-products.js`.
- `npm run db:import:docker` runs the same import inside the Docker compose frontend container.

## Coding Style & Naming Conventions
- Formatting is enforced by Prettier; do not hand-format. Run `npm run format` before committing.
- ESLint rules are defined in `.eslintrc.cjs` (React + hooks). Fix lint errors before opening a PR.
- Use semicolons and single quotes, consistent with existing files in `src/`.
- React components use PascalCase file and symbol names; hooks follow the `useX` pattern.

## Testing Guidelines
- No automated test suite is currently configured in this repo.
- If you introduce tests, add a script in `package.json` and document the framework and conventions here.

## Commit & Pull Request Guidelines
- Recent commits use short, imperative summaries without a strict convention (e.g. “fix the 404 redirect”). Keep titles concise and action-oriented.
- PRs should include a clear description of changes, any linked issues, and screenshots for UI changes.

## Security & Configuration Tips
- Copy `.env.example` to `.env` for local secrets and do not commit real credentials.
- Review `DOCKER.md` and `docker-compose.yml` when working with Docker-based workflows.
