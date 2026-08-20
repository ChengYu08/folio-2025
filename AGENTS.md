# Repository Guidelines

## Project Structure & Module Organization

This is an interactive Three.js portfolio built with Vite. Application entry files live in `sources/`: `index.html` loads `index.js`, which creates `Game/Game.js`. Keep runtime systems in `sources/Game/`, grouping related code by feature (for example, `World/`, `Inputs/`, `Physics/`, and `Cycles/`). Scene-area implementations belong in `sources/Game/World/Areas/`; static content data belongs in `sources/data/`. Stylus stylesheets are in `sources/style/`, with `index.styl` as the aggregation point. Put source assets in `static/`; treat `dist/` as generated output.

## Build, Test, and Development Commands

- `npm install --force` installs the locked project dependencies.
- `npm run dev` starts Vite in development mode and opens the local site.
- `npm run build` creates the production bundle in `dist/`; run it before submitting changes.
- `npm run preview` serves the current production build for a final browser check.
- `npm run compress` processes eligible models and textures under `static/`. Run it only when changing source assets, and review generated compressed files.

Copy `.env.example` to `.env` when local configuration is needed. Never commit secrets from `.env`.

## Coding Style & Naming Conventions

Use ES modules and the existing JavaScript style: four-space indentation, no semicolons, braces on their own line for classes, methods, and control blocks. Use PascalCase for classes and their files (for example, `World.js`), camelCase for methods, variables, and properties, and descriptive feature directories. Keep import paths relative and place new visual behavior with the system it depends on. Follow the surrounding Stylus conventions when editing `.styl` files; no formatter or linter is configured.

## Testing Guidelines

There is currently no automated test framework or coverage target. For every change, run `npm run build` and exercise the affected interaction in `npm run dev` or `npm run preview`. Verify asset changes load without missing-resource errors and do not unintentionally alter unrelated scene behavior.

## Commit & Pull Request Guidelines

Match the history's concise, imperative commits, often with an emoji and scope: `:bug: Scenery > Fix road tweaks` or `:sparkles: Add Easter event`. Keep each commit focused. Pull requests should explain the user-visible change, link the relevant issue when available, list verification performed, and include screenshots or a short recording for visual, animation, or interaction changes.
