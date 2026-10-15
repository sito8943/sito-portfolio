# ARCHITECTURE_RULES

Adapted from `sito-app/apps/ARCHITECTURE_RULES.md` (via the Lean Startup Bootcamp landing) for this
Vite + React SPA portfolio.

## Mandatory Pre-Work

All coding agents (Codex, Claude, or any automated contributor) **must read this file and
[STYLE_GUIDE.md](STYLE_GUIDE.md) before making any code change**.

---

## 1) Scope

- These architecture rules are mandatory for this project.
- Any new feature, refactor, or file move must follow this document.
- If an exception is needed, document it explicitly in the implementation notes/PR.

---

## 2) State Management and Data Flow

- Use `Context + Provider` patterns to avoid prop-drilling.
- Do not pass shared state through multiple component levels unless it is strictly local UI state.
- When a domain needs shared state, expose a provider and a typed access hook
  (for example: `ThemeProvider` + `useTheme`).
- Keep business logic out of presentational components (atoms, molecules, templates).

---

## 3) Models and Domain Design

- Define explicit, typed models for domain entities (`Skill`, `Project`, `Social`…).
- Keep model definitions in a `types.ts` next to the code that owns them.
- Avoid ad-hoc object shapes spread across components; static lists live in `constants.ts`.
- Validate incoming external data (storage, network, env) before using it in views.
  Env vars are typed in `src/vite-env.d.ts` and read only in `src/shared/config/`.

---

## 4) Styling Rules (Tailwind + Co-located CSS)

Full guide: [STYLE_GUIDE.md](STYLE_GUIDE.md).

- No Tailwind utility strings in TSX. Components use **semantic class names** (`.hero-title`,
  `.project-card`) defined in a `styles.css` next to the component, composed with `@apply`.
- Theme tokens live in `src/shared/ui/styles/variables.css`; classes reused by several components
  (`.section-title`, `.card-row`) live in `src/shared/ui/styles/components.css`.
- Every component `styles.css` must be `@import`ed from `src/shared/ui/styles/styles.css`
  (one stylesheet). Do not import CSS from TSX and do not add `@reference` to these files.
- State is expressed with attributes, not conditional class strings: `data-open`, `data-shown`,
  `aria-current` → `.drawer[data-open="true"]`.
- Runtime-computed values (stagger delays) stay in `style={...}`, as CSS custom properties.
- No CSS-in-JS (`@emotion/*`) and no CSS modules.
- `@sito/ui` is the UI kit (`Button`, `IconButton`, `Spinner`, `Dialog`, `ContextMenu`). Anchors that
  look like buttons use `buttonClassName()` from `@/shared/utils`.

---

## 5) Folder Structure (Required)

```txt
src/
  main.tsx                # Entry: i18n, global stylesheet, <App />
  app/                    # Composition root
    App.tsx               # Router (paths from shared/config/routes.ts)
    views/                # Route/page-level screens
      <View>/
        <View>.tsx        # Composes a template + sections
        sections/         # Page sections used only by this view (Header, Hero, Footer…)

  shared/                 # Generic, domain-agnostic building blocks
    ui/
      styles/             # Global CSS entry, tokens, base rules, shared classes and animations
      atoms/              # Smallest UI pieces (LazyImage, SitoLogo, MiniLogo)
      molecules/          # Small compositions (InView, Marquee, ToTop)
      templates/          # Page shells with slots, no content (PageLayout, Section, SplashScreen)
    hooks/                # Reusable hooks (useInViewOnce, useActiveSection)
    config/               # Static app config: links, socials, sections, routes
    utils/                # Pure helpers (buttonClassName, scrollToSection)

  features/               # One folder per domain feature
    <feature>/
      components/         # Feature-specific components
      providers/          # Feature providers/context
      hooks/              # Feature hooks
      constants.ts | utils.ts | types.ts
      index.ts            # Public API of the feature

  lang/                   # i18n dictionaries: <lng>/<namespace>.json
  assets/                 # Images and static files imported by code
```

### Where does a component go?

| It is…                                                       | Put it in                        |
| ------------------------------------------------------------ | -------------------------------- |
| A tiny visual piece with no knowledge of the app             | `shared/ui/atoms/`               |
| A small reusable composition of atoms, still domain-agnostic | `shared/ui/molecules/`           |
| A page shell that only arranges slots                        | `shared/ui/templates/`           |
| Tied to one domain (i18n, contact…) and possibly reused      | `features/<feature>/components/` |
| Used by only one page                                        | `app/views/<View>/sections/`     |

### Dependency direction

```txt
app  →  features  →  shared, lang
app  →  shared, lang
```

- `shared/` must not import from `features/`, `app/` or `lang/`. Pass text in as props
  (e.g. `ToTop` takes `label`).
- A feature must not import another feature's internals; use its `index.ts`.
- `app/` is the only layer that may depend on everything.
- Promote code to `shared/` only when it is genuinely generic; otherwise keep it with its feature or view.
- Import through the `@/` alias (`@/shared/ui/atoms`), never with `../../..` across layers.

---

## 6) Unit-Level File Structure (Mandatory)

When a component or hook needs supporting code, give it its own folder:

```txt
ComponentName/
  ComponentName.tsx    # Only one component (or one hook) per file
  styles.css           # Semantic classes for this component (@apply)
  animations.css       # Optional: hand-written keyframes/transitions (unlayered)
  constants.ts         # Constants only
  utils.ts             # Reusable helper functions only
  types.ts             # Type aliases and interfaces only
  index.ts             # Public exports
```

Rules:

- One hook per file (`useSomething.ts`).
- One component per file (`Something.tsx`), as a named export.
- Do not declare reusable helpers/constants/types inside component or hook files.
- Move helper functions to `utils.ts`, constants to `constants.ts`, interfaces/types to `types.ts`.
- Keep support files as siblings of the component/hook they support.
- Expose the public API through `index.ts`; import folders, not their inner files.
- Sections and views loaded with `@loadable/component` also re-export the component as `default`
  from their `index.ts`.

---

## 7) Routing Conventions

- `react-router-dom` with `BrowserRouter`; routes are declared in `src/app/App.tsx`.
- Paths live in `shared/config/routes.ts` (`ROUTES`). Never hardcode route strings in
  `<Link to=...>` or `navigate(...)`.
- Home is a single-page site: navigation uses in-page anchors. Section ids live once in
  `shared/config/site.ts` (`SECTIONS`, `NAV_LINKS`). Do not hardcode `#section` strings elsewhere.
- Views are lazy-loaded (`@loadable/component`) so each route ships its own chunk.

---

## 8) i18n Rules

- `i18next` + `react-i18next`, initialised in `features/i18n` (imported once from `main.tsx`).
- All user-facing copy lives in `src/lang/<lng>/` JSON namespaces (`_common`, `_pages`).
- Every language must have the same keys.
- Avoid hardcoded user-facing strings in components; read them with `useTranslation()`.
- Shared UI never calls `useTranslation()`: it receives text through props.

---

## 9) Tooling

- Package manager: **pnpm 10** (version pinned in `package.json`).
- Node: version in `.nvmrc`.
- Type checking: **TypeScript 7** strict (`tsc -b`, run by `pnpm build`).
- Linting: **oxlint** with type-aware rules (`pnpm lint`, zero warnings allowed).
- Formatting: **Prettier** (`pnpm format`).
- A husky `pre-commit` hook runs `format` and `lint:fix`.
- CI runs format check, lint and build on every PR; pushes to `master` also deploy to Firebase.
- Before finishing any change run: `pnpm format && pnpm lint && pnpm build`.

---

## 10) Implementation Discipline

- Prefer clear boundaries: UI layer (`shared/ui`), domain layer (`features`), composition (`app`).
- Prefer small, composable modules over monolithic files.
- Keep APIs typed and explicit.
- Behaviour-preserving moves first, improvements second: never mix a file move with a visual change.
