# @lunamonster/luna-design

Design tokens, themes, chat-card contracts, layout specs, and shared copy for
Luna. Consumed by `luna-2.0/ui` (web), `luna-2.0/api` (card builders), and
`luna-mobile` (React Native). Governing decisions:
`lunatwo/DESIGN-INTENT-parity-architecture-2026-07-18.md`.

## What lives here — and what deliberately doesn't

| Here (package is truth) | NOT here (server is truth) |
|---|---|
| Theme tokens (`themes.rainbow/light/dark`, generated `dist/theme.css`) | Sort orders (SQL `ORDER BY` is the ordering contract; clients render array order verbatim) |
| Baseline tokens (`colors`, `typography`, `spacing`, `radii`, `opacity`) | Urgency/overdue logic (server emits `is_overdue`-style flags) |
| Chat card schemas + builders (`contracts.ts`) | `is_general` and other structural flags (server computes, clients read) |
| Copy (`copy.ts`), layouts, dashboard types | |
| Font files (`fonts/`, licensed; redistribution confirmed 2026-07-18) | |

`rules.ts` was deleted in v0.2 — it re-implemented server truths and had zero
consumers on either client. `paletteForContext` (a visual mapping, not
behavior) moved into `tokens.ts`.

## Themes

Three themes, keyed data in `themes.ts`, lifted from the shipped web
`theme.css` (the design-handoff system): **rainbow** ("Bold & Beautiful", the
default), **light** ("Light & Airy"), **dark**. Fonts are per-theme (Stay
Dreaming Alt / Safira March / Cairo — licensed, self-hosted in `fonts/`).

- **Web:** import `@lunamonster/luna-design/dist/theme.css` and
  `dist/fonts.css`; switch with `data-theme` on `<html>` (rainbow also binds to
  bare `:root` — the no-flash contract).
- **Mobile:** statically bound to `themes.rainbow` + `mobileTokens` (the
  purple→pink→amber gradient is a mobile brand token). No switching plumbing on
  mobile by decision; dark is evidence-gated future work.

The v1 "single light cream theme" rule is dead. `colors.cream` and friends
remain as the baseline token set the web dashboard/sidebar/widgets consume.

## Card contracts (`contracts.ts`)

Zod schemas + a discriminated union for every chat `metadata.type`:
`boundary_prompt`, `ingest_receipt`, `intake_summary`, `session_result`,
`document`, `image`, `instagram_handoff`.

- The **api emits only through the builders** (`buildBoundaryPromptCard`, …) —
  strict validation at emission, never on a client.
- **Clients are tolerant readers**: type renderers from `CardMetadata`, keep
  the unknown-type → text/markdown fallbacks (schemas are `.passthrough()`, so
  additive server fields never break an installed client).
- `cardRenderIntent` records deliberate per-client asymmetries (e.g.
  `session_result`: mobile renders, web deliberately doesn't).
- Adding a card type starts HERE; tsc then flags every handler.

## Consuming it

```json
"@lunamonster/luna-design": "github:lunamonster/luna-design#main"
```

Pin to a tag to freeze: `github:lunamonster/luna-design#v0.2.0`. `dist/` is
committed, so git-URL installs need no build step (npm and pnpm both work).

```ts
import { themes, mobileTokens, colors, copy, dashboardLayout, cardMetadataSchema, buildIngestReceiptCard } from '@lunamonster/luna-design';
```

## Local development (live edit loop)

```bash
npm link                                # in this repo
npm link @lunamonster/luna-design       # in the consumer
```

Edit, `npm run build`, reload the consumer. Before pushing the consumer,
unlink and reinstall from git to verify the deployed version.

## Build & drift guard

`npm run build` = tsc + CSS codegen (`scripts/generate-css.cjs`). **Never
hand-edit `dist/`** — `dist/theme.css` and `dist/fonts.css` are generated from
`themes.ts`. CI (`verify-dist.yml`) fails any push where dist wasn't
regenerated (`npm run check:dist` locally).

## Rules

- No React, no React Native, no Tailwind. `tsc` + one codegen script.
- Behavior/ordering logic never returns here — server is truth for those.
- No platform branching beyond the explicit `mobileTokens` slot.
- If this README and the code disagree, the code wins — then fix the README.
