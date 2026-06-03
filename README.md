# @lunamonster/luna-design

Design tokens, layout specs, copy, behavior rules, and shared types for Luna.
Consumed by `luna-2.0/ui` (web) and `luna-mobile` (React Native). Edit once,
both rebuild. Pure TypeScript — no React, no React Native, no Tailwind, no
platform-specific code.

## What lives here

- `tokens.ts` — colors, typography, spacing, radii, opacity.
- `layouts.ts` — measurements per surface (dashboard, sidebar).
- `copy.ts` — user-facing strings.
- `rules.ts` — urgency thresholds, overdue logic, sort orders, palette hashing.
- `types.ts` — `DashboardItem`, `DashboardResponse`, etc.
- `index.ts` — barrel; consumers import from `@lunamonster/luna-design` only.

## Consuming it

Add a git dependency in the consumer's `package.json`:

```json
"@lunamonster/luna-design": "github:lunamonster/luna-design#main"
```

Pin to a tag when you want to freeze: `github:lunamonster/luna-design#v0.2.0`.

The `prepare` script compiles `dist/` on install, so git-URL consumers get
compiled output automatically. Import from the package root:

```ts
import { colors, dashboardLayout, copy, rules, DashboardItem } from '@lunamonster/luna-design';
```

## Local development (live edit loop)

```bash
# in this repo
npm link

# in the consumer (e.g. luna-2.0/ui)
npm link @lunamonster/luna-design   # or: pnpm link --global @lunamonster/luna-design
```

Edit a token here, `npm run build`, reload the consumer — the change shows up.
Before pushing the consumer to git, unlink and reinstall from git to verify the
deployed version works:

```bash
npm unlink @lunamonster/luna-design && npm install github:lunamonster/luna-design#main
```

## Adding a token

Edit the relevant file, `npm run build`, commit, push. Consumers pick it up on
their next `npm update` (or immediately, under `npm link`).

## Rules

- No React, no React Native, no Tailwind, no bundler. `tsc` is the only build.
- Single light cream theme. No dark mode in v1.
- No platform branching in this repo. If platforms genuinely diverge on a value,
  that value lives in the platform's own code, not here.
- Color values track the live web app so consumers render identically; the API
  may still override space accent colors at runtime via `DashboardSpace.color`.
