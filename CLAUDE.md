# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Folio 2025 is an interactive 3D portfolio (a drivable vehicle world) built with **Three.js WebGPU** (`three/webgpu` + TSL shaders) and **Vite**. Physics uses **Rapier3D** (`@dimforge/rapier3d`, loaded via WASM). The original project is Cheng Yu's; this fork adds seasonal/events content (Easter, Black Friday, Christmas, etc.).

## Commands

```bash
npm install --force      # locked deps; --force is required
npm run dev              # Vite dev server (opens browser), restarts on static/ file changes
npm run build            # production bundle into dist/
npm run preview          # serve the built dist/ for a final check
npm run compress         # re-compress GLB/KTX assets under static/ — run only when source assets change
```

There is no test framework, linter, or formatter. The verification loop is: `npm run build`, then exercise the affected interaction in `npm run dev`/`preview` and confirm no missing-asset errors.

## Environment

Copy `.env.example` to `.env`. All vars are `VITE_`-prefixed and read via `import.meta.env`:
- `VITE_COMPRESSED` — when truthy, loads `-compressed.glb` models and `.ktx` textures instead of `.glb`/`.png` (see the two resource-load batches in `Game.init()`).
- `VITE_GAME_PUBLIC` — exposes the `Game` singleton on `window.game` for debugging.
- `VITE_PLAYER_SPAWN` — respawn point name (default `landing`).
- `VITE_LOG`, `VITE_MUSIC`, `VITE_WHISPERS_COUNT`, cycle progress overrides.

## Architecture

**Entry & singleton.** `sources/index.html` → `sources/index.js` → `Game/Game.js`. `Game` is a singleton (`Game.getInstance()`); nearly every system grabs `this.game = Game.getInstance()` in its constructor rather than receiving deps. `Game.init()` constructs ~50 subsystems in a specific order, loading resources in two batches (an "intro" batch first so the loading screen can render, then the rest in parallel with the Rapier WASM import).

**`threejs-override.js`** — imported before anything else; monkeypatches `THREE.Object3D.prototype.copy` so `clone()`/`copy()` preserve transform/layers/shadow flags (defaults differ from stock Three.js — read this before debugging clone-related behavior).

**Game loop: Ticker + Events, not Update methods.** `sources/Game/Ticker.js` drives a fixed-ish timestep (`delta`, clamped at `maxDelta = 1/30`, plus a `scale` for bullet-time). Each tick fires the `'tick'` event on `ticker.events`. Systems subscribe to `'tick'` with an integer **priority** (the 2nd arg to `.on()`) — that priority IS the per-frame ordering. The phases documented in `readme.md` ("Game loop" section: 0=Time/Inputs … 13=InstancedGroup) correspond to these priorities. `Time.js` owns the global `scale` and ties `gsap.globalTimeline.timeScale` to it so GSAP animations stay in sync with bullet-time. `Ticker.wait(frames, cb)` schedules a delayed callback in frames.

**World & step loading.** `sources/Game/World/World.js` builds the scene across `step(0)` (grid + intro), `step(1)` (all visual world content: floor, grass, trees, areas, objects…), and `step(2)` (whispers). `Game.init()` calls `world.step(1)` after resources resolve. World features are one-class-per-feature files under `sources/Game/World/` (e.g. `Grass.js`, `Snow.js`, `Trees.js`, `Leaves.js`) plus `Areas/Areas.js` for interactive scene regions (`sources/Game/World/Areas/`).

**Player & vehicle split.** `Player.js` is the high-level controller (inputs → physics → view); `Physics/PhysicsVehicle.js` is the Rapier rigid body, `World/VisualVehicle.js` is the rendered mesh. The loop separates pre-physics (input → vehicle), physics step, and post-physics (vehicle → player → view) phases.

**Other key systems** (`sources/Game/`):
- `Rendering.js` / `PreRenderer.js` — WebGPU renderer + postprocessing passes (`Passes/`); pre-rendering only at `quality.level === 0` on WebGPU.
- `Physics/` — Rapier wrapper; `Objects.js` adds bodies via a config object (`{ type, colliders: [{ shape, parameters, category }] }`). Collision `category` strings (`floor`, `object`, `bumper`…) map to Rapier groups — see `Physics.js`.
- `Cycles/` — `DayCycles` (time-of-day lighting/weather driver) and `YearCycles` (seasonal events like Easter/Christmas) extend `Cycles.js`.
- `Materials/` — custom TSL node materials (e.g. `MeshDefaultMaterial`); shaders are written with `three/tsl` functions, not GLSL strings.
- `ResourcesLoader.js` — async GLB/texture loader; the `?cb=1` query suffix on asset paths is a cache-buster, not a real param.
- Events/seasonal content: `Easter.js`, `BlackFriday/`, `Achievements.js`, `KonamiCode.js`.

**Code style (no formatter configured — match the surrounding files):**
- ES modules, four-space indent, **no semicolons**, braces on their own line for classes/methods/control blocks.
- PascalCase classes & files (`World.js`), camelCase members. Relative imports. New visual behavior lives with the system that owns it.

**Assets:** source art lives in `resources/` (Blender file `folio-2025.blend`, `.pur`/`.psd`/`.sbs` sources, raw sounds); runtime assets live in `static/` (organized by feature: `areas/`, `foliage/`, `terrain/`, `easter/`, …). `dist/` is generated. `resources/` and `static/` are the source of truth; never hand-edit generated compressed variants (`-compressed.glb`, `.ktx`).

This repo is indexed by CodeGraph (`.codegraph/` exists) — prefer `codegraph_explore`/`codegraph_node` over grep+Read for locating symbols and tracing call paths.

## Commits

Match the history's concise imperative style, often with an emoji + scope: `:bug: Scenery > Fix road tweaks`, `:sparkles: Add Easter event`. Keep each commit focused.
