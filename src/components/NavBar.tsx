"use client";

import { navItems, siteIdentity } from "@/content/siteContent";

export function NavBar() {
  const scrollToSection = (index: number) => {
    const root = document.getElementById("snap-root");
    if (root) root.scrollTo({ top: index * root.clientHeight, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="nav-shell nav-enter w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-3 sm:px-5">
          <div className="nav-line-draw h-px flex-1 bg-[rgba(196,227,255,0.82)]" />
          <div className="nav-cross mx-3 flex h-4 w-4 items-center justify-center text-sky-100/80 sm:mx-4">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="9" y1="0" x2="9" y2="18" stroke="currentColor" strokeWidth="0.75" />
              <line x1="0" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="0.75" />
            </svg>
          </div>
          <div className="nav-line-draw h-px flex-1 bg-[rgba(196,227,255,0.82)]" />
        </div>

        <div className="relative flex min-h-[3.25rem] items-center justify-between gap-3 px-3 pb-2 pt-2 sm:min-h-[3.5rem] sm:px-5 sm:pb-2.5 sm:pt-2.5">
          <div className="nav-noise" aria-hidden="true" />

          <button
            type="button"
            onClick={() => scrollToSection(0)}
            className="nav-enter-soft inline-flex min-h-9 items-center gap-2 self-start font-mono text-[0.66rem] tracking-[0.3em] text-white uppercase transition-all duration-300 hover:text-sky-100 sm:min-h-10 sm:gap-3 sm:text-[0.72rem]"
          >
            <span className="nav-status-dot" aria-hidden="true" />
            <span>{siteIdentity.displayName}</span>
            <span className="hidden text-[0.52rem] tracking-[0.24em] text-sky-100/52 lg:inline">
              {siteIdentity.tagline}
            </span>
          </button>

          <nav aria-label="Primary" className="nav-enter-soft flex flex-wrap items-center justify-end gap-x-1.5 gap-y-1.5 sm:gap-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(index)}
                className="nav-chip min-h-9 px-2.5 py-1.5 font-mono text-[0.58rem] tracking-[0.22em] text-sky-50/86 uppercase transition-all duration-300 hover:text-white sm:min-h-10 sm:px-3 sm:text-[0.62rem]"
              >
                {item.shortLabel}
              </button>
            ))}
          </nav>

          <div className="pointer-events-none absolute inset-x-3 bottom-0 flex items-center gap-2 sm:inset-x-5">
            <div className="nav-line-draw h-px flex-1 bg-[rgba(171,214,255,0.36)]" />
            <span className="nav-enter-soft hidden font-mono text-[0.46rem] uppercase tracking-[0.28em] text-sky-100/45 sm:inline">
              Ready
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
