"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/siteContent";

const LABELS = navItems.map((item) => item.shortLabel.toLowerCase());

export function SlideNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = document.getElementById("snap-root");
    if (!root) return;

    const onScroll = () => {
      const idx = Math.round(root.scrollTop / root.clientHeight);
      setActive(Math.min(idx, LABELS.length - 1));
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i: number) => {
    const root = document.getElementById("snap-root");
    if (root) root.scrollTo({ top: i * root.clientHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-[9px] sm:right-7">
      {LABELS.map((label, i) => (
        <button
          key={label}
          aria-label={`Go to ${label}`}
          onClick={() => scrollTo(i)}
          className="group flex items-center gap-2"
        >
          <span className="whitespace-nowrap translate-x-1 font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-600 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </span>

          <div
            className="rounded-full transition-all duration-300"
            style={{
              width: "3px",
              height: i === active ? "22px" : "5px",
              background: i === active ? "rgba(240,239,235,0.65)" : "rgba(240,239,235,0.18)",
            }}
          />
        </button>
      ))}
    </div>
  );
}

