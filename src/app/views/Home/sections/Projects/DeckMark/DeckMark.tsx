/** Sito Presentation Deck's mark (from apps/sito-presentation-deck): a screen on its stand, in `currentColor`. Decorative. */
export function DeckMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="6" width="28" height="18" rx="3" />
      <rect x="14" y="24" width="4" height="4" />
    </svg>
  );
}
