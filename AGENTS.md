# AGENTS.md — sito-portfolio

> [!IMPORTANT]
> Read [ARCHITECTURE_RULES.md](ARCHITECTURE_RULES.md) and [STYLE_GUIDE.md](STYLE_GUIDE.md) before making any code change.

- Toolchain mirrors `../apps/wallet`: when upgrading deps or configs, copy versions and config shape from there.
- Push and open PRs with `gh1` (account `sito8943`), not `gh`.
- `@sito/ui` hover/`:active` rules only match `:enabled` buttons; anchors styled as buttons rely on the `a.sito-ui-button` rules in `src/shared/ui/styles/components.css`.
- `@sito/ui` is imported into the `components.sito-ui` sub-layer so component classes always win over it. Do not move it to `components` directly or specificity battles come back.
- Tailwind's `scale-*` sets the CSS `scale` property, not `transform`: any element that declares its own transition must list `scale` too, or appear/leave animations snap.
- Global CSS that is not layered beats every Tailwind utility; keep element defaults in `@layer base`.
- Breakpoints are desktop-first (`md:` = max 767px), defined with `@custom-variant` in `variables.css`.
- The pre-commit hook formats after staging; run `pnpm format` before `git add` so the commit holds the formatted files.
