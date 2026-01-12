# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds Nuxt app source. Key areas: `app/pages` (routes), `app/layout` (layouts), `app/components` (UI/base/business/layout), `app/composables`, `app/plugins`, `app/middleware`, and `app/assets` (CSS and static assets).
- `public/` contains static files served as-is.
- Build outputs live in `.nuxt/`, `.output/`, and `dist/` (generated). Avoid committing generated artifacts unless required.
- Configuration lives in `nuxt.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `components.json` (shadcn/kit config).

## Build, Test, and Development Commands
Use `pnpm` (see `package.json`):
- `pnpm dev`: start the Nuxt dev server with HMR.
- `pnpm build`: build the app for production.
- `pnpm generate`: generate a static site.
- `pnpm preview`: preview the production build locally.
- `pnpm postinstall`: runs `nuxt prepare` to generate types and build artifacts.

## Coding Style & Naming Conventions
- TypeScript + Vue SFCs under `app/`. Prefer PascalCase for components (e.g., `UserCard.vue`) and camelCase for composables (e.g., `useAuth.ts`).
- Indentation: 2 spaces in Vue/TS/CSS. Keep imports ordered and grouped logically.
- ESLint is configured via `eslint.config.mjs` (Antfu preset). No lint script is defined; add one if needed or run `pnpm dlx eslint .`.

## Testing Guidelines
- No test runner is configured in `package.json` yet. If you add tests, place them near features or in a new `tests/` directory and document the command (e.g., `pnpm test`).
- Use clear, descriptive test names (e.g., `auth.login.success`).

## Commit & Pull Request Guidelines
- Git history suggests Conventional Commits (e.g., `feat: add utils`). Use `feat:`, `fix:`, `chore:`, etc., with a short summary.
- PRs should include: a short description, linked issue (if any), and screenshots for UI changes.

## Security & Configuration Tips
- Keep secrets out of the repo. Use `.env` for local config and document new variables in `nuxt.config.ts` or project docs.
- When adding new dependencies, prefer pinned versions and update `pnpm-lock.yaml`.
