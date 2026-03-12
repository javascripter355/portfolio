"use client";

import { freelanceContent } from "@/content/siteContent";

const STYLE_NOTES = [
  "Minimal",
  "Clean",
  "Modern",
];

export function FreelanceSection() {
  return (
    <section
      id={freelanceContent.id}
      className="relative h-full overflow-hidden border border-white/10 bg-black/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-12" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{ background: "linear-gradient(to bottom, rgba(82, 147, 255, 0.16), rgba(30, 75, 170, 0.06) 58%, transparent)" }}
      />

      <div className="relative z-10 grid min-h-full grid-cols-1 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
        <div className="flex min-h-0 flex-col border-b border-white/10 p-4 pb-6 sm:p-10 lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="shrink-0">
            <p className="section-enter-1 section-eyebrow term-label">
              {freelanceContent.eyebrow}
            </p>
            <h2 className="section-enter-2 mt-5 text-[clamp(2.8rem,6vw,5.2rem)] font-black leading-[0.92] tracking-[-0.06em] text-white">
              {freelanceContent.title}
            </h2>
            <p className="section-enter-3 mt-5 sm:mt-8 max-w-2xl text-[clamp(1.1rem,1.9vw,1.75rem)] leading-[1.24] text-neutral-200">
              <span className="mark-blue">Minimal</span> surface, <span className="mark-blue">sharp</span> rhythm.
            </p>
            <p className="section-enter-4 mt-3 sm:mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              {freelanceContent.paragraphs[0]}
            </p>
          </div>

          <div className="section-enter-5 mt-8 hidden sm:grid gap-1">
            {STYLE_NOTES.map((line, index) => (
              <div key={line} className="flex items-center justify-between border-t border-white/10 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-enter-5 flex min-h-0 flex-col justify-between p-4 pb-6 sm:p-10">
          <div>
            <p className="section-eyebrow term-label">Contact</p>
            <h3 className="mt-5 max-w-[12ch] text-[clamp(2rem,3.8vw,3.8rem)] font-black leading-[0.94] tracking-[-0.045em] text-white">
              Start here, then move to Fiverr.
            </h3>
            <p className="mt-3 sm:mt-8 max-w-lg text-[clamp(1rem,1.45vw,1.3rem)] leading-[1.4] text-neutral-200">
              {freelanceContent.paragraphs[2]}
            </p>

            <div className="mt-3 sm:mt-8 grid gap-3 sm:gap-4">
              <a
                href="mailto:laurentiuslionel@gmail.com"
                className="group relative block border-t border-white/10 py-3 sm:py-4 pr-20 transition-colors duration-300 hover:border-sky-300/30"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300/45">01  Email</p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-3xl">laurentiuslionel@gmail.com</p>
                <div className="pointer-events-none absolute bottom-4 right-0 flex items-center gap-3 text-sky-200/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="h-px w-0 bg-sky-300/70 transition-all duration-300 group-hover:w-16" />
                  <span className="translate-x-[-0.35rem] font-mono text-[11px] uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-0">
                    -&gt;
                  </span>
                </div>
              </a>
              <a
                href="https://instagram.com/laurentius.lionel"
                target="_blank"
                rel="noreferrer"
                className="group relative block border-t border-white/10 py-3 sm:py-4 pr-20 transition-colors duration-300 hover:border-sky-300/30"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300/45">02  Instagram</p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-3xl">@laurentius.lionel</p>
                <div className="pointer-events-none absolute bottom-4 right-0 flex items-center gap-3 text-sky-200/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="h-px w-0 bg-sky-300/70 transition-all duration-300 group-hover:w-16" />
                  <span className="translate-x-[-0.35rem] font-mono text-[11px] uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-0">
                    -&gt;
                  </span>
                </div>
              </a>
              <a
                href="https://fiverr.com/laurentlionel"
                target="_blank"
                rel="noreferrer"
                className="group relative block border-t border-white/10 py-3 sm:py-4 pr-20 transition-colors duration-300 hover:border-sky-300/30"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300/45">03  Fiverr</p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-3xl">fiverr.com/laurentlionel</p>
                <div className="pointer-events-none absolute bottom-4 right-0 flex items-center gap-3 text-sky-200/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="h-px w-0 bg-sky-300/70 transition-all duration-300 group-hover:w-16" />
                  <span className="translate-x-[-0.35rem] font-mono text-[11px] uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-0">
                    -&gt;
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

