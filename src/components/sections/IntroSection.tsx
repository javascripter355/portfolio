"use client";

import { TypewriterLoop } from "@/components/TypewriterLoop";
import { heroContent, sectionIndexById } from "@/content/siteContent";

function HighlightWord({ text, tone = "mark-blue" }: { text: string; tone?: string }) {
  return <span className={tone}>{text}</span>;
}

export function IntroSection() {
  return (
    <section id="introduction" className="relative h-full w-full overflow-hidden">
      <div className="hero-fade-enter pointer-events-none absolute inset-0 z-[1] bg-black/10" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden z-[2]">
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            top: "-10%",
            left: "-10%",
            background: "rgba(255,255,255,0.04)",
            filter: "blur(110px)",
            animation: "drift-1 28s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 320,
            height: 320,
            bottom: "18%",
            right: "8%",
            background: "rgba(72, 140, 255, 0.12)",
            filter: "blur(90px)",
            animation: "drift-3 22s ease-in-out infinite",
            animationDelay: "-8s",
          }}
        />
      </div>

      <div
        className="hero-fade-enter pointer-events-none absolute inset-x-0 top-0 h-28 z-10"
        style={{ background: "linear-gradient(to bottom, rgba(14,14,14,0.42) 0%, transparent 100%)" }}
      />

      <div
        className="hero-fade-enter pointer-events-none absolute inset-x-0 bottom-0 h-2/3 z-10"
        style={{ background: "linear-gradient(to top, rgba(14,14,14,0.58) 0%, transparent 100%)" }}
      />

      <div className="relative z-20 flex h-full flex-col">
        <div className="grid flex-1 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]">
          <div className="flex min-h-0 flex-col justify-between p-6 pt-8 sm:p-10">
            <p className="hero-enter-soft hero-stagger-1 font-mono text-[10px] tracking-[0.32em] text-sky-100/80 term-label uppercase">
              INTRODUCTION
            </p>

            <div className="space-y-5 pb-14">
              <h1 className="text-5xl font-bold leading-[0.9] tracking-tight sm:text-7xl">
                <span className="hero-enter hero-stagger-2 block text-white">{heroContent.titleLines[0]}</span>
                <span className="hero-enter hero-stagger-3 mt-1 block text-white">
                  <HighlightWord text={heroContent.titleLines[1]} />
                </span>
                <span className="hero-enter hero-stagger-4 mt-1 block text-white">{heroContent.titleLines[2]}</span>
              </h1>

              <p className="hero-enter-soft hero-stagger-5 terminal-loop font-mono text-sm text-neutral-100 sm:text-[15px]">
                <TypewriterLoop prefix="$ " strings={heroContent.loopPhrases} />
              </p>

              <div className="hero-enter-soft hero-stagger-6 flex items-center gap-3 pt-1">
                <a
                  href="#freelance"
                  onClick={(event) => {
                    event.preventDefault();
                    const root = document.getElementById("snap-root");
                    if (root) {
                      root.scrollTo({ top: root.clientHeight * sectionIndexById.freelance, behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center gap-2 border border-white/35 bg-black/10 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-100 uppercase transition-all duration-300 hover:border-sky-300/65 hover:bg-sky-400/10 hover:text-white"
                >
                  Get in touch
                  <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                </a>
                <button
                  onClick={() => {
                    const root = document.getElementById("snap-root");
                    if (root) root.scrollTo({ top: root.clientHeight, behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-100 uppercase transition-all duration-300 hover:text-sky-100"
                >
                  See more
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">v</span>
                </button>
              </div>
            </div>
          </div>

          <div className="hero-line-v hidden sm:block" style={{ background: "rgba(255,255,255,0.18)" }} />

          <div className="hidden min-h-0 flex-col justify-between p-10 pt-8 sm:flex">
            <div className="flex justify-end">
              <p className="hero-enter-soft hero-stagger-5 font-mono text-neutral-100 text-[10px] tracking-[0.32em] uppercase">
                {heroContent.sideLabel}
              </p>
            </div>

            <div className="space-y-4 pb-14">
              <p className="hero-enter hero-stagger-6 text-4xl font-bold leading-[0.9] tracking-tight text-white sm:text-6xl">
                {heroContent.sideTitle}
              </p>
              <p className="hero-enter-soft hero-stagger-7 hw-note text-sky-100/80">{heroContent.sideNote}</p>

              <div className="hero-enter-soft hero-stagger-8 flex flex-wrap gap-2 pt-2">
                {heroContent.sideTags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`cursor-default border px-3 py-1 font-mono text-[9px] tracking-[0.2em] uppercase transition-all duration-300 hover:border-white/40 hover:text-white ${
                      index % 2 === 0
                        ? "border-sky-300/25 bg-sky-400/10 text-sky-100/90"
                        : "border-white/25 bg-black/10 text-neutral-100/85"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 z-25 hidden sm:block" style={{ top: "42%" }}>
        <div className="hero-line-h h-px w-full" style={{ background: "rgba(255,255,255,0.18)" }} />
        <div className="hero-cross absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-neutral-200">
            <line x1="9" y1="0" x2="9" y2="18" stroke="currentColor" strokeWidth="0.75" />
            <line x1="0" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="0.75" />
          </svg>
        </div>
      </div>

      <div className="hero-enter-soft hero-stagger-8 absolute bottom-0 left-0 right-0 z-30 flex h-9 items-center justify-between border-t border-white/20 px-6 sm:px-10">
        <span className="font-mono text-[9px] tracking-[0.24em] text-neutral-100">
          <span className="text-white">01</span>{" - "}INTRODUCTION
        </span>
        <span className="font-mono text-[9px] tracking-[0.24em] text-neutral-100">
          PERSONAL PORTFOLIO
        </span>
      </div>
    </section>
  );
}


