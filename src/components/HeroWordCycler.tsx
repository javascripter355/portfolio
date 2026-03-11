"use client";

import { useEffect, useState } from "react";

const WORDS = ["Teenager.", "Creator.", "Builder."] as const;
const TYPE_SPEED = 88;   // ms per character
const DELETE_SPEED = 44; // ms per character
const PAUSE_MS = 2400;   // hold after fully typed

export function HeroWordCycler() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  // Increment to remount the word span and re-trigger the CSS animation
  const [wordKey, setWordKey] = useState(0);

  const current = WORDS[index];

  useEffect(() => {
    if (phase === "typing") {
      if (displayed.length < current.length) {
        const id = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(id);
      } else {
        const id = setTimeout(() => setPhase("deleting"), PAUSE_MS);
        return () => clearTimeout(id);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const id = setTimeout(
          () => setDisplayed((d) => d.slice(0, -1)),
          DELETE_SPEED
        );
        return () => clearTimeout(id);
      } else {
        setIndex((i) => (i + 1) % WORDS.length);
        setWordKey((k) => k + 1);
        setPhase("typing");
      }
    }
  }, [displayed, phase, current]);

  const isCreator = current === "Creator.";

  return (
    <span className="block" style={{ minHeight: "1em" }}>
      {isCreator ? (
        // key remounts on each new cycle → re-runs stab-reveal CSS animation
        <span key={wordKey} className="mark-yellow">
          {displayed}
        </span>
      ) : (
        <span key={wordKey} className="text-white">
          {displayed}
        </span>
      )}
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}
