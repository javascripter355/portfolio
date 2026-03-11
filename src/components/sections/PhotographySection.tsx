"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { photographyContent, photographySlides, sectionIndexById } from "@/content/siteContent";

function getRelPos(idx: number, cur: number, total: number): number {
  let p = idx - cur;
  if (p > total / 2) p -= total;
  if (p < -total / 2) p += total;
  return p;
}

function cardStyle(pos: number, hov: boolean): React.CSSProperties {
  const tx =
    "transform 0.72s cubic-bezier(0.18, 0.9, 0.22, 1), opacity 0.56s ease, filter 0.56s ease";

  if (pos === 0) {
    return { transform: "translateX(0) scale(1)", opacity: 1, zIndex: 20, filter: "brightness(1)", transition: tx };
  }

  const s = Math.sign(pos);
  const a = Math.abs(pos);

  if (a === 1) {
    return {
      transform: `translateX(${s * 28}vw) scale(0.61) translateY(2vh)`,
      opacity: hov ? 0.82 : 0.56,
      zIndex: 10,
      filter: hov ? "brightness(0.78)" : "brightness(0.52)",
      cursor: "pointer",
      transition: tx,
    };
  }

  if (a === 2) {
    return {
      transform: `translateX(${s * 54}vw) scale(0.38) translateY(5vh)`,
      opacity: 0.18,
      zIndex: 5,
      filter: "brightness(0.34)",
      pointerEvents: "none",
      transition: tx,
    };
  }

  return { transform: `translateX(${s * 90}vw) scale(0.3)`, opacity: 0, zIndex: 0, pointerEvents: "none", transition: tx };
}

export function PhotographySection() {
  const [cur, setCur] = useState(0);
  const [hov, setHov] = useState<number | null>(null);
  const dragX = useRef<number | null>(null);
  const total = photographySlides.length;

  const advance = useCallback((dir: 1 | -1) => setCur((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const root = document.getElementById("snap-root");
      if (!root) return;
      const slideIdx = Math.round(root.scrollTop / root.clientHeight);
      if (slideIdx !== sectionIndexById.photography) return;
      if (e.key === "ArrowLeft") advance(-1);
      if (e.key === "ArrowRight") advance(1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [advance]);

  const dragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const dragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragX.current === null) return;
    const x = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    if (Math.abs(dragX.current - x) > 55) advance(dragX.current - x > 0 ? 1 : -1);
    dragX.current = null;
  };

  return (
    <section id={photographyContent.id} className="flex h-full flex-col">
      <div className="section-enter-1 mb-4 flex items-baseline justify-between gap-6">
        <div>
          <p className="section-eyebrow term-label">
            {photographyContent.eyebrow}
          </p>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {photographyContent.title}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">Steady eye.</p>
        </div>
        <p className="hidden font-mono text-[8px] tracking-[0.24em] text-sky-200/45 sm:block">
          &lt;- -&gt; or drag
        </p>
      </div>

      <div
        className="section-enter-2 relative flex-1 min-h-0 w-full overflow-hidden border border-[--border] select-none"
        onMouseDown={dragStart}
        onMouseUp={dragEnd}
        onTouchStart={dragStart}
        onTouchEnd={dragEnd}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute rounded-full"
            style={{ width: 520, height: 520, top: "-15%", left: "-8%", background: "rgba(255,255,255,0.055)", filter: "blur(130px)", animation: "drift-1 26s ease-in-out infinite" }}
          />
          <div
            className="absolute rounded-full"
            style={{ width: 380, height: 380, bottom: "5%", right: "-6%", background: "rgba(94, 164, 255, 0.11)", filter: "blur(100px)", animation: "drift-2 32s ease-in-out infinite", animationDelay: "-14s" }}
          />
          <div
            className="absolute"
            style={{ width: 260, height: 480, top: "25%", right: "22%", borderRadius: "38%", background: "rgba(255,255,255,0.028)", filter: "blur(90px)", animation: "drift-3 22s ease-in-out infinite", animationDelay: "-6s" }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-black/15" />

        <div className="absolute inset-0 flex items-center justify-center">
          {photographySlides.map((slide, idx) => {
            const pos = getRelPos(idx, cur, total);
            const isHov = hov === idx && Math.abs(pos) === 1;

            return (
              <div
                key={slide.src}
                className="absolute"
                style={{ ...cardStyle(pos, isHov), width: "min(28vw, 320px)", aspectRatio: "3 / 4", transformOrigin: "center center" }}
                onClick={() => {
                  if (pos === -1) advance(-1);
                  if (pos === 1) advance(1);
                }}
                onMouseEnter={() => setHov(idx)}
                onMouseLeave={() => setHov(null)}
              >
                <div className="relative h-full w-full overflow-hidden border border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 38vw, 320px"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/15" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            );
          })}
        </div>

        <button
          aria-label="Previous"
          onClick={() => advance(-1)}
          className="group absolute left-4 top-1/2 z-30 flex -translate-y-1/2 items-center gap-1.5 font-mono text-[10px] tracking-[0.24em] text-neutral-500 transition-colors hover:text-white sm:left-7"
        >
          <span className="transition-transform group-hover:-translate-x-1">&lt;-</span>
          <span className="hidden sm:inline">PREV</span>
        </button>

        <button
          aria-label="Next"
          onClick={() => advance(1)}
          className="group absolute right-4 top-1/2 z-30 flex -translate-y-1/2 items-center gap-1.5 font-mono text-[10px] tracking-[0.24em] text-neutral-500 transition-colors hover:text-white sm:right-7"
        >
          <span className="hidden sm:inline">NEXT</span>
          <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-30 flex h-9 items-center justify-between bg-black/20 px-4 sm:px-7">
          <span className="font-mono text-[9px] tracking-[0.24em] text-neutral-500">
            <span className="text-neutral-200">{String(cur + 1).padStart(2, "0")}</span>
            {" - "}
            {String(total).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-[5px]">
            {photographySlides.map((slide, i) => (
              <button
                key={slide.src}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCur(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === cur ? "18px" : "4px",
                  height: "3px",
                  background: i === cur ? "rgba(135, 189, 255, 0.8)" : "rgba(240,239,235,0.15)",
                }}
              />
            ))}
          </div>

          <span className="font-mono text-[9px] tracking-[0.24em] text-neutral-500">
            PHOTOGRAPHY
          </span>
        </div>
      </div>
    </section>
  );
}


