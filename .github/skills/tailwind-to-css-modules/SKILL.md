---
name: tailwind-to-css-modules
description: "Migrate a selected React or Next.js component from Tailwind utility classes to a colocated plain CSS Module. Use when converting JSX className styling, responsive utilities, or component styles to scoped CSS while preserving behavior and using this project's design tokens."
argument-hint: 'Name or select the component to migrate'
---

# Tailwind to CSS Modules

Move the selected component's Tailwind presentation into a colocated `*.module.css` file without changing its behavior or public API.

## Procedure

1. Identify the selected component and its colocated styles. Inspect the component, its current Tailwind classes, and relevant call sites when the component accepts styling props or class variants. Keep the migration limited to styles owned by the selected component; do not migrate child components unless asked.
2. Inventory the classes before editing. Account for layout, spacing, sizing, typography, color, borders, responsive variants, pseudo states, transitions, animations, and conditional classes. Preserve the existing DOM structure and interaction/state logic.
3. Create or update a CSS Module beside the component using the established `*.module.css` naming convention. Use semantic, component-scoped class names rather than translating each utility into an unrelated one-off selector.
4. Replace the component's Tailwind classes with imported CSS Module classes. Preserve conditional states and caller-provided `className` behavior where present; do not leave the component's Tailwind utilities behind or move unrelated global styling into the module.
5. Use CSS logical properties for directional layout and spacing: for example, `margin-inline`, `padding-block`, `inset-inline-start`, and `border-inline-end`, rather than left/right-specific properties. Keep physical properties only when the design is intentionally tied to a physical direction.
6. Reuse design values from `src/styles/colors.css` and `src/styles/tokens.css` with `var(...)`. Prefer existing color, spacing, typography, weight, and radius variables over hard-coded equivalents. Do not invent replacement global tokens as part of a component migration.
7. Use the shared custom media queries from `src/styles/media.css` (for example, `@media (--md)`) for responsive rules. The project config loads that file and transforms custom media through PostCSS; do not replace these breakpoints with new values or assume CSS custom properties work directly inside media-query conditions.
8. Check hover, focus, active, disabled, and responsive behavior against the original component. Preserve accessibility-related selectors and visible focus behavior; use `:focus-visible` when it matches the existing behavior.
9. Validate the migration with the narrowest relevant test or check, then run the available project build or lint check when practical. Inspect the final component to confirm its styles are module-scoped, responsive behavior is retained, and no unrelated files or components were changed.

## Completion Criteria

- The selected component no longer depends on its migrated Tailwind utility classes.
- JSX structure, dynamic state, interactions, accessibility, and caller-facing styling behavior are preserved.
- Styles are scoped in a colocated CSS Module and use logical properties.
- Existing colors, design tokens, and shared custom media queries are reused wherever applicable.
- Relevant validation passes, or any unavailable/failed check is reported clearly.
