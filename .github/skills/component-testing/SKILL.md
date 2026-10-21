---
name: component-testing
description: 'Write or update Vitest + React Testing Library specs for components in this repo. Use when adding a component, changing component behavior, or asked to add/fix tests. Covers file location (<component-name>/<component-name>.spec.tsx), accessible queries, mocks for next/image, next/link, next/navigation, IntersectionObserver, and callback assertions.'
---

# Component Testing (Vitest + React Testing Library)

## Commands

- `npm test` — run once (`vitest run`)
- `npm run test:watch` — watch mode
- Config: [vitest.config.mts](../../../vitest.config.mts), global setup: [vitest.setup.tsx](../../../vitest.setup.tsx)

## File convention

- One spec per component, named after it: `src/components/<component-name>/<component-name>.spec.tsx` (nested ones too, e.g. `genres-grid/modal/modal.spec.tsx`).
- Only `*.spec.tsx` files under `src/` are collected.
- Import order follows the eslint `perfectionist/sort-imports` groups: external (`@testing-library/*`, `vitest`, `next/*`) → `@/…` internal → `./component` → `@/content/content` → `*.types` .

## Rules

- Test names start with `should`.
- Query by role + accessible name: `getByRole('button', { name: 'Close' })`. Fallbacks: `getByText`, `getByTitle` (iframes). **No test ids, no `container.querySelector`.**
- Interact via `userEvent` (`click`, `type`, `keyboard`) — not `fireEvent`.
- Minimum tests per unit, but cover every branch: conditional rendering, each prop that changes output, every callback.
- Callbacks: assert exact count/args — `toHaveBeenCalledTimes(1)` or `toHaveBeenCalledExactlyOnceWith(arg)`.
- Prefer real `content` values over hardcoded copy so specs survive copy changes.
- If a control can't be found by role/name, **fix the component's accessibility** (use `<button>`, add `aria-label`, `title` on iframes, `alt=""` on decorative images) rather than weakening the query.

## Global mocks (already in setup — don't redeclare)

- `next/image` → plain `<img>`
- `next/link` → plain `<a>`
- `next/navigation` → `usePathname` returns `'/'`, `useRouter` returns `{ push: vi.fn() }`
- `IntersectionObserver` stub, `window.matchMedia` stub
- `mockReset: true` — mocks reset to their original implementation between tests.
- CSS modules use non-scoped class names (`styles.revealed` → `revealed`).

Override per test:

```tsx
vi.mocked(usePathname).mockReturnValue('/about');
vi.mocked(useRouter).mockReturnValue({ push } as unknown as ReturnType<
  typeof useRouter
>);
```

Module mocks for helpers go at the top of the spec:

```tsx
vi.mock('@/helpers/send-email', () => ({ sendEmail: vi.fn() }));
```

## Template — callbacks on two controls

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Screen from './screen';

describe('Screen', () => {
  it('should call onBackClick and onCloseClick once when their controls are clicked', async () => {
    const onBackClick = vi.fn();
    const onCloseClick = vi.fn();
    render(<Screen onBackClick={onBackClick} onCloseClick={onCloseClick} />);

    await userEvent.click(screen.getByRole('button', { name: 'Back' }));
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(onBackClick).toHaveBeenCalledTimes(1);
    expect(onCloseClick).toHaveBeenCalledTimes(1);
  });
});
```

## Pitfalls seen in this repo

- Nested clickable elements: a close button inside a clickable overlay fires `onClose` twice — stop propagation in the button handler.
- Image `alt` duplicating link text gives names like "Album Album" — decorative images inside labelled links need `alt=""`.
- Async submit side effects (react-hook-form + promises): wrap assertions in `await waitFor(...)`.
- Elements with `aria-hidden="true"` (e.g. closed drawer) are excluded from `getByRole`; use that to assert hidden state.
- Scroll-driven behavior (`window` scroll listeners) isn't reachable via `userEvent`; test the click/outcome instead, stubbing `window.scrollY`/`requestAnimationFrame` with `vi.spyOn`.

## Reference specs

- Callbacks + conditional render: [modal.spec.tsx](../../../src/components/genres-grid/modal/modal.spec.tsx)
- Keyboard + focus: [drawer.spec.tsx](../../../src/components/drawer/drawer.spec.tsx)
- Forms + mocked helpers: [contact.spec.tsx](../../../src/components/contact-form/contact/contact.spec.tsx)
- Router mock: [music-covers.spec.tsx](../../../src/components/music-page-covers/music-covers/music-covers.spec.tsx)
