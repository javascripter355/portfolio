export function OscilloscopeDivider() {
  return (
    <div className="my-16 flex items-center gap-4">
      <div className="flex-1 border-t border-[--border]" />
      <svg
        width="120"
        height="28"
        viewBox="0 0 120 28"
        aria-hidden="true"
        fill="none"
        className="shrink-0 text-neutral-700"
      >
        <path
          d="M0 14 C10 14,15 4,20 4 S30 24,35 24 S45 4,50 4 S60 24,65 24 S75 4,80 4 S90 24,95 24 S105 14,120 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="osc-path"
        />
      </svg>
      <div className="flex-1 border-t border-[--border]" />
    </div>
  );
}
