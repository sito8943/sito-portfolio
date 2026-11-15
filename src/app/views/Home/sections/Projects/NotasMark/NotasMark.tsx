/** Sito Notas' mark (from apps/notes), in `currentColor`. Decorative. */
export function NotasMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 528 517"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M483 472V517H345L333.5 472H483Z" />
      <path d="M528 517H483V6.6382e-05H528V517Z" />
      <path d="M345 149H300V6.6382e-05H345V149Z" />
      <path d="M483 6.6382e-05V45.0001H345V6.6382e-05H483Z" />
      <path d="M45 45.0001V6.6382e-05H168L179.5 45.0001H45Z" />
      <path d="M0 6.6382e-05H45V517H0V6.6382e-05Z" />
      <path d="M168 368H213V517H168V368Z" />
      <path d="M45 517V472H168V517H45Z" />
      <path d="M168 6.6382e-05L213 0L345 517H300L168 6.6382e-05Z" />
    </svg>
  );
}
