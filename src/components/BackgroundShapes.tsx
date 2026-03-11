function GraphTile() {
  const bars = [
    { x: 18, h: 80 },
    { x: 42, h: 52 },
    { x: 66, h: 118 },
    { x: 90, h: 38 },
    { x: 114, h: 94 },
    { x: 138, h: 66 },
  ];

  const scatter: [number, number][] = [
    [60, 52], [148, 188], [238, 92], [318, 214], [438, 68],
    [518, 162], [638, 198], [728, 72], [818, 174], [938, 108],
    [1018, 218], [1118, 142],
  ];

  return (
    <svg width="1200" height="240" viewBox="0 0 1200 240" fill="none">
      {[30, 60, 90, 120, 150, 180, 210].map((y) => (
        <line key={`h-${y}`} x1="0" y1={y} x2="1200" y2={y} stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
      ))}
      {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200].map((x) => (
        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="240" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
      ))}
      <path
        d="M0,120 C60,40 120,200 180,120 S300,40 360,120 S480,200 540,120 S660,40 720,120 S840,200 900,120 S1020,40 1080,120 S1140,80 1200,120"
        stroke="white" strokeWidth="1.5" strokeOpacity="0.8" strokeLinecap="round"
      />
      {scatter.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="white" fillOpacity="0.7" />
      ))}
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={240 - b.h} width={20} height={b.h} fill="white" fillOpacity="0.18" />
      ))}
    </svg>
  );
}

export function BackgroundShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid" />

      {/* Drifting blobs â€” more visible */}
      <div className="absolute rounded-full"
        style={{ width: 700, height: 700, top: -200, right: -150, background: "rgba(240,239,235,0.06)", filter: "blur(120px)", animation: "drift-1 30s ease-in-out infinite" }} />
      <div className="absolute rounded-full"
        style={{ width: 500, height: 500, bottom: "15%", left: -150, background: "rgba(240,239,235,0.05)", filter: "blur(100px)", animation: "drift-2 24s ease-in-out infinite", animationDelay: "-9s" }} />
      <div className="absolute"
        style={{ width: 380, height: 500, top: "45%", right: "8%", borderRadius: "40%", background: "rgba(240,239,235,0.04)", filter: "blur(90px)", animation: "drift-3 20s ease-in-out infinite", animationDelay: "-5s" }} />

      {/* Corner accent â€” top left */}
      <div className="absolute"
        style={{ width: 300, height: 300, top: -80, left: -80, background: "rgba(104,120,255,0.08)", filter: "blur(80px)", borderRadius: "50%", animation: "drift-2 18s ease-in-out infinite", animationDelay: "-3s" }} />

      {/* Scrolling graph strip */}
      <div className="absolute bottom-0 left-0 right-0 h-60 overflow-hidden"
        style={{ opacity: 0.055, filter: "blur(0.5px)" }}>
        <div className="bg-graph-scroll flex" style={{ width: "200%" }}>
          <GraphTile />
          <GraphTile />
        </div>
      </div>
    </div>
  );
}


