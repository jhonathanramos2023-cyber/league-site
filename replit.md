# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### League of Legends Website (`artifacts/lol-website`)
- **Type**: react-vite, frontend-only
- **Preview path**: `/`
- **Description**: A complete, cinematic League of Legends fan website
- **Features**:
  - Home page with Jinx hero splash, floating gold particles, animated stats, featured champions
  - Champion gallery with filter by role/difficulty and real-time search (loads 160+ champs from DataDragon API)
  - Individual champion profiles with skills, lore, skins, and curiosidades tabs
  - History of Runeterra page with timeline and factions
  - Regions page with 12 interactive region cards (Demacia, Noxus, Ionia, Freljord, etc.)
  - Game modes page (SR, ARAM, TFT, Arena)
  - Esports page (Worlds history, leagues, top players)
  - Music page (K/DA, Pentakill, True Damage, Star Guardian, Battle Academia)
- **External APIs**: Riot Games DataDragon CDN (public, no key required)
- **Design**: Dark navy (#050E1A) + gold (#C8AA6E) theme, Cinzel/Rajdhani fonts, Framer Motion animations
