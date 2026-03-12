"use client";

import { useEffect, useRef, useState } from "react";
import { BackgroundShapes } from "@/components/BackgroundShapes";
import { NavBar } from "@/components/NavBar";
import { SlideNav } from "@/components/SlideNav";
import { FreelanceSection } from "@/components/sections/FreelanceSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PhotographySection } from "@/components/sections/PhotographySection";
import { WorkSection } from "@/components/sections/WorkSection";
import { heroContent, sectionOrder } from "@/content/siteContent";
import Image from "next/image";

function getSectionStyle(progress: number, index: number): React.CSSProperties {
  const distance = Math.max(-1, Math.min(1, progress - index));
  const abs = Math.abs(distance);
  const direction = distance >= 0 ? 1 : -1;
  const travel = Math.pow(abs, 0.88) * 72;

  return {
    transform: `translate3d(0, ${direction * -travel}px, 0) scale(${1 - abs * 0.035})`,
    filter: `blur(${abs * 10}px)`,
    opacity: Math.max(0.16, 1 - abs * 0.84),
    transition: "transform 140ms cubic-bezier(0.22, 0.61, 0.36, 1), filter 140ms ease, opacity 140ms ease",
    willChange: "transform, filter, opacity",
  };
}

const SECTION_COUNT = sectionOrder.length;

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [entryKeys, setEntryKeys] = useState(() => Array(SECTION_COUNT).fill(0));
  const prevActiveRef = useRef(-1);

  useEffect(() => {
    const root = document.getElementById("snap-root");
    if (!root) return;

    const update = () => {
      const maxProgress = Math.max(0, SECTION_COUNT - 1);
      const next = Math.max(0, Math.min(maxProgress, root.scrollTop / root.clientHeight));
      setProgress(next);

      const active = Math.round(next);
      if (active !== prevActiveRef.current) {
        prevActiveRef.current = active;
        setEntryKeys((prev) => {
          const keys = [...prev];
          if (keys[active] !== undefined) keys[active] = keys[active] + 1;
          return keys;
        });
      }
    };

    update();
    root.addEventListener("scroll", update, { passive: true });
    return () => root.removeEventListener("scroll", update);
  }, []);

  const backgroundStyle: React.CSSProperties = {
    transform: `translate3d(0, ${progress * -54 - 18}px, 0) scale(${1.1 + progress * 0.01})`,
    transition: "transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1)",
    willChange: "transform",
  };

  const nonHeroStrength = Math.max(0, Math.min(1, (progress - 0.2) / 0.8));
  const bgOverlayStyle: React.CSSProperties = {
    background: `linear-gradient(to bottom, rgba(0,0,0,${0.18 + nonHeroStrength * 0.2}) 0%, rgba(0,0,0,${0.3 + nonHeroStrength * 0.22}) 48%, rgba(0,0,0,${0.46 + nonHeroStrength * 0.26}) 100%)`,
    backdropFilter: `blur(${nonHeroStrength * 22}px)`,
    transition: "background 220ms ease, backdrop-filter 220ms ease",
  };

  return (
    <>
      <div className="scanline" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-[-18vh_-12vw_-32vh_-12vw] -z-20 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 hidden sm:grid sm:grid-cols-2">
          <div className="relative overflow-hidden border-r border-white/10">
            <div className="absolute inset-0" style={backgroundStyle}>
              <Image
                src={heroContent.backgroundImages.left.src}
                alt={heroContent.backgroundImages.left.alt}
                fill
                priority
                sizes="50vw"
                className="hero-image-enter object-cover"
                style={{ objectPosition: "56% center" }}
              />
            </div>
            <div className="absolute inset-0" style={bgOverlayStyle} />
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-0" style={backgroundStyle}>
              <Image
                src={heroContent.backgroundImages.right.src}
                alt={heroContent.backgroundImages.right.alt}
                fill
                priority
                sizes="50vw"
                className="hero-image-enter object-cover grayscale"
                style={{ objectPosition: "58% center" }}
              />
            </div>
            <div className="absolute inset-0" style={bgOverlayStyle} />
          </div>
        </div>

        <div className="absolute inset-0 sm:hidden">
          <div className="absolute inset-0" style={backgroundStyle}>
            <Image
              src={heroContent.backgroundImages.left.src}
              alt={heroContent.backgroundImages.left.alt}
              fill
              priority
              sizes="100vw"
              className="hero-image-enter object-cover"
              style={{ objectPosition: "58% center" }}
            />
          </div>
          <div className="absolute inset-0" style={bgOverlayStyle} />
        </div>
      </div>
      <BackgroundShapes />
      <NavBar />
      <SlideNav />

      <div id="snap-root" className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <div id="introduction" className="snap-start h-screen relative overflow-hidden">
          <div className="relative h-full w-full" style={getSectionStyle(progress, 0)}>
            <div key={entryKeys[0]} className="relative h-full w-full">
              <IntroSection />
            </div>
          </div>
        </div>

        <div id="photography" className="snap-start h-screen relative overflow-hidden flex flex-col pt-14 sm:pt-20 pb-6 px-6 sm:px-10">
          <div className="relative z-10 w-full flex-1 flex flex-col min-h-0" style={getSectionStyle(progress, 1)}>
            <div key={entryKeys[1]} className="relative w-full flex-1 flex flex-col min-h-0">
              <PhotographySection />
            </div>
          </div>
        </div>

        <div id="work" className="snap-start h-screen relative sm:overflow-hidden pt-16 pb-6 sm:pb-8">
          <div className="relative z-10 h-full w-full" style={getSectionStyle(progress, 2)}>
            <div key={entryKeys[2]} className="relative h-full w-full px-6 sm:px-10">
              <WorkSection />
            </div>
          </div>
        </div>

        <div id="freelance" className="snap-start h-screen min-h-0 relative pt-16 pb-6 sm:pb-8">
          <div className="relative z-10 h-full w-full min-h-0" style={getSectionStyle(progress, 3)}>
            <div key={entryKeys[3]} className="relative h-full w-full min-h-0 px-6 sm:px-10">
              <FreelanceSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
