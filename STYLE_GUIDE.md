# Style Guide — Sito Portfolio

How CSS and Tailwind v4 are organized in this project. Adapted from `sito-app/apps/wallet/STYLE_GUIDE.md`.

## Quick Overview

- **Stack**: Tailwind v4, used through `@apply` inside co-located component CSS. No utility strings in TSX.
- **UI kit**: `@sito/ui` (imported into the `components.sito-ui` sub-layer).
- **Tokens**: `src/shared/ui/styles/variables.css` (`@theme` colors + `@sito/ui` theme vars).
- **One stylesheet**: `src/shared/ui/styles/styles.css` imports everything; `main.tsx` imports it once.
- **Co-location**: each component with styles has a `styles.css` in its folder (and an optional
  `animations.css` for hand-written motion).
- **Dark only**: there is no light theme.

## Structure

```txt
src/shared/ui/styles/
├─ styles.css       # Entry: imports below, then every component stylesheet
├─ variables.css    # @import "tailwindcss", @sito/ui, fonts, breakpoints, @theme tokens
├─ base.css         # Element defaults (@layer base) + reduced motion
├─ components.css   # Classes shared by several components (.section-title, .card-row…)
└─ animations.css   # Shared floating-icon motion (.float-y, .scale-animation)

src/app/views/Home/sections/Hero/
├─ Hero.tsx
├─ styles.css       # .hero-stack, .hero-title … (@layer components + @apply)
└─ FloatingIcons/
   └─ styles.css    # .hero-plane, .hero-plane-icon …
```

## Writing Component CSS

```css
@layer components {
  .project-card {
    @apply rounded-xl border-[1px] border-placeholder-dark bg-dark-background2;
  }
  .drawer[data-open="false"] .drawer-panel {
    @apply -translate-x-4 opacity-0;
  }
}
```

```tsx
<div data-open={visible} className="drawer">
```

Then add the file to `src/shared/ui/styles/styles.css` (shared files first, then `app/`):

```css
@import "../../../app/views/Home/sections/Projects/styles.css";
```

### Rules

1. **`@layer components` for `@apply` classes.** They sit over `base` and over `@sito/ui`, whose
   styles live in the `components.sito-ui` sub-layer (a sub-layer always loses to rules placed
   directly in `components`, whatever the specificity).
2. **No `@reference`.** These files are imported into the global entry, which already has the
   Tailwind context.
3. **State through attributes**, never conditional class strings:
   `data-open`, `data-shown`, `data-at-top`, `data-filled`, `aria-current`.
4. **Hand-written motion stays unlayered** (`animations.css`), like `InView`'s rise-in.
   Reduced motion is global: `base.css` turns off every transition, animation and smooth scroll.
5. **Runtime values stay inline** as custom properties: `style={{ "--in-view-delay": delay }}`.
6. **Breakpoints are desktop-first** (max-width): `md:` means 767px and below,
   `sm:` 639px and below (see `@custom-variant` in `variables.css`).
7. **Transitions on buttons:** Tailwind's `scale-*` sets the CSS `scale` property, while
   `@sito/ui`'s press effect uses `transform`. A class that declares its own transition must list
   both (see `.to-top`).
8. **Buttons on anchors:** `@sito/ui` hover/active rules target `:enabled`, which `<a>` never
   matches. `components.css` restores them for `a.sito-ui-button`.

## Naming

- Kebab case, one root class per component: `.project-card`, then children `.project-card-media`,
  `.project-card-body`.
- Prefix children with the root name; keep selectors flat (one class, or class + attribute).
- Shared, cross-component classes go in `components.css` with a generic name (`.section-title`).
- Motion classes describe the motion: `.float-y`, `.scale-animation`, `.in-view`.

## Tokens and Theming

- Add a color: register it in `@theme` as `--color-<name>` in `variables.css`, then use it in
  `@apply` (`bg-<name>`, `text-<name>`).
- `@sito/ui` colors (buttons, spinner) are tuned with the `--sito-ui-*` vars in `variables.css`.

## Where to Change Common Things

| Change                         | File                                            |
| ------------------------------ | ----------------------------------------------- |
| Colors, fonts, breakpoints     | `src/shared/ui/styles/variables.css`            |
| `@sito/ui` theme               | `src/shared/ui/styles/variables.css` (`:root`)  |
| Body, headings, reduced motion | `src/shared/ui/styles/base.css`                 |
| Section title, card rows       | `src/shared/ui/styles/components.css`           |
| Floating icon motion           | `src/shared/ui/styles/animations.css`           |
| Scroll-in reveal               | `src/shared/ui/molecules/InView/animations.css` |
| A component's look             | `<Component>/styles.css`                        |

## Verifying Style Changes

A refactor that should not change the look must keep computed styles identical. Compare
`getComputedStyle` for every element before and after (desktop and mobile widths, drawer open,
404, hover) rather than trusting screenshots alone. Freeze animations and transitions before
reading values so the comparison is deterministic.
