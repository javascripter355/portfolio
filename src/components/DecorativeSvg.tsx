export function DecorativeSvg() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-12 -z-10 mx-auto hidden w-full max-w-6xl px-4 sm:block">
      <div className="relative ml-auto h-72 w-80 text-white/10">
        <svg
          viewBox="0 0 320 240"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          {/* Horizontal trace with node → branch down → node */}
          <path
            d="M 20 40 L 160 40 L 160 100 L 260 100"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="circuit-path"
          />

          {/* Branch going down-right to component box area */}
          <path
            d="M 80 40 L 80 140 L 200 140 L 200 180 L 280 180"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="circuit-path circuit-path-2"
          />

          {/* Short trace through bottom */}
          <path
            d="M 20 180 L 80 180 L 80 200 L 200 200"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="circuit-path circuit-path-3"
          />

          {/* Component box */}
          <rect
            x="200"
            y="118"
            width="28"
            height="28"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.25"
          />

          {/* Circuit nodes */}
          <circle cx="20" cy="40" r="3" fill="currentColor" className="circuit-node" />
          <circle cx="160" cy="40" r="3" fill="currentColor" className="circuit-node" style={{ animationDelay: "0.6s" }} />
          <circle cx="260" cy="100" r="3" fill="currentColor" className="circuit-node" style={{ animationDelay: "1.2s" }} />
          <circle cx="80" cy="140" r="3" fill="currentColor" className="circuit-node" style={{ animationDelay: "1.8s" }} />
          <circle cx="280" cy="180" r="3" fill="currentColor" className="circuit-node" style={{ animationDelay: "0.4s" }} />
          <circle cx="200" cy="200" r="3" fill="currentColor" className="circuit-node" style={{ animationDelay: "1.6s" }} />
        </svg>
      </div>
    </div>
  );
}
