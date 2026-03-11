export function ScribbleLine({ className }: { className?: string }) {
  return (
    <svg
      width="320"
      height="14"
      viewBox="0 0 320 14"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M2 10 C 50 4, 100 12, 160 7 S 260 4, 318 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="draw-path"
      />
    </svg>
  );
}
