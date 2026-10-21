# Arkitekt Website

Music, videos, artist information, and contact pages built with Next.js App Router, React, TypeScript, and CSS Modules.

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Page content and release ordering live in [src/content/content.tsx](src/content/content.tsx). Images and videos live in [public](public).

The contact endpoint requires `MY_EMAIL` and `MY_PASSWORD` in a local `.env.local` file. `MY_PASSWORD` should be a Gmail app password. Do not commit credentials.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run knip
```

TypeScript checks unused locals and parameters. Knip checks unused files, exports, and dependencies; CSS selectors and variables also need review when changing components.

## Production

```bash
npm run build
npm start
```
