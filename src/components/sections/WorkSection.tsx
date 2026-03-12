"use client";

import Image from "next/image";
import { workContent, sectionIndexById } from "@/content/siteContent";

const WORK_STATS = [
  { label: "Stack", value: "Next.js, TypeScript, tRPC, Prisma" },
  { label: "AI", value: "OpenAI API + multimodal workflows" },
  { label: "Product", value: "Notes, flashcards, kits, analytics" },
];

export function WorkSection() {
  return (
    <section id={workContent.id} className="relative h-full no-scrollbar overflow-y-auto sm:overflow-hidden border border-white/10 bg-black/10">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-15" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{ background: "linear-gradient(to bottom, rgba(94,108,255,0.18), rgba(40,82,196,0.08) 55%, transparent)" }}
      />

      <div className="relative z-10 grid h-full min-h-0 grid-cols-1 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)]">
        <div className="flex min-h-0 flex-col border-b border-white/10 p-6 pb-8 sm:p-10 lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="shrink-0">
            <p className="section-enter-1 section-eyebrow term-label">
              {workContent.eyebrow}
            </p>
            <h2 className="section-enter-2 mt-5 text-[clamp(2.6rem,5.5vw,4.8rem)] font-black leading-[0.92] tracking-[-0.06em] text-white">
              {workContent.title}
            </h2>
            <h3 className="section-enter-3 mt-6 max-w-[9ch] text-[clamp(1.8rem,3.6vw,3.2rem)] font-black leading-[0.96] tracking-[-0.045em] text-white">
              <span className="mark-blue">Synthnote.</span>
            </h3>
            <p className="section-enter-3 mt-6 max-w-xl text-[clamp(1rem,1.45vw,1.2rem)] leading-[1.5] text-neutral-200">
              {workContent.paragraphs[0]}
            </p>
          </div>

          <div className="section-enter-4 mt-8 grid gap-1">
            {WORK_STATS.map((item) => (
              <div key={item.label} className="border-t border-white/10 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-sky-200/70">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="section-enter-5 mt-auto border-t border-white/10 pt-5">
            <p className="max-w-xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
              The product side stays <span className="mark-blue">systematic</span> while the interface stays <span className="mark-blue">clean</span>.
            </p>
            <a
              href="#freelance"
              onClick={(e) => {
                e.preventDefault();
                const root = document.getElementById("snap-root");
                if (root) root.scrollTo({ top: root.clientHeight * sectionIndexById.freelance, behavior: "smooth" });
              }}
              className="sm:hidden group mt-5 inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-200 transition-all duration-300 hover:border-sky-300/40 hover:text-white"
            >
              See freelance offer
              <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
            </a>
          </div>
        </div>

        <div className="section-enter-5 hidden sm:flex min-h-0 flex-col p-6 pb-8 sm:p-10">
          <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,0.86fr)] lg:grid-rows-[auto_auto]">
            <figure className="relative overflow-hidden border border-white/10 bg-black/40">
              <div className="relative aspect-[16/9] min-h-[11rem]">
                <Image
                  src="/synthnote/analytics1-homepage.png"
                  alt="Synthnote analytics dashboard with measurable learning pulse cards"
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-contain object-top p-3 sm:p-4"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <figcaption className="font-mono absolute bottom-3 left-3 right-3 text-[10px] font-light uppercase tracking-[0.24em] text-neutral-200">
                  Learning analytics
                </figcaption>
              </div>
            </figure>

            <figure className="relative overflow-hidden border border-white/10 bg-black/40">
              <div className="relative aspect-[16/10] min-h-[10rem]">
                <Image
                  src="/synthnote/hero-homepage.png"
                  alt="Synthnote review dashboard showing cards due today"
                  fill
                  sizes="(max-width: 1024px) 100vw, 28vw"
                  className="object-contain object-top p-3 sm:p-4"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <figcaption className="font-mono absolute bottom-3 left-3 right-3 text-[10px] font-light uppercase tracking-[0.24em] text-neutral-200">
                  Review flow
                </figcaption>
              </div>
            </figure>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:col-start-1 lg:col-end-3">
              <figure className="relative overflow-hidden border border-white/10 bg-black/40">
                <div className="relative aspect-[16/8] min-h-[10rem]">
                  <Image
                    src="/synthnote/flashcard.png"
                    alt="Synthnote flashcard interface with spaced repetition ratings"
                    fill
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-contain object-top p-3 sm:p-4"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <figcaption className="font-mono absolute bottom-3 left-3 right-3 text-[10px] font-light uppercase tracking-[0.24em] text-neutral-200">
                    Flashcard session
                  </figcaption>
                </div>
              </figure>

              <div className="flex items-end justify-end border-t border-white/10 pt-5 lg:min-w-[17rem] lg:border-t-0 lg:pt-0">
                <a
                  href="#freelance"
                  onClick={(e) => {
                    e.preventDefault();
                    const root = document.getElementById("snap-root");
                    if (root) root.scrollTo({ top: root.clientHeight * sectionIndexById.freelance, behavior: "smooth" });
                  }}
                  className="group inline-flex min-h-11 shrink-0 items-center gap-2 border border-white/15 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-200 transition-all duration-300 hover:border-sky-300/40 hover:bg-sky-400/[0.06] hover:text-white"
                >
                  See freelance offer
                  <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


