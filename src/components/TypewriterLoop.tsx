"use client";

import { useEffect, useState } from "react";

interface TypewriterLoopProps {
  strings: string[];
  prefix?: string;
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

function renderTerminalLine(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  const firstSpace = trimmed.indexOf(" ");
  if (firstSpace === -1) {
    return <span className="terminal-first">{trimmed}</span>;
  }

  const firstWord = trimmed.slice(0, firstSpace);
  const rest = trimmed.slice(firstSpace + 1);

  return (
    <>
      <span className="terminal-first">{firstWord}</span>{" "}
      <span>{rest}</span>
    </>
  );
}

export function TypewriterLoop({
  strings,
  prefix = "",
  className,
  typeSpeed = 58,
  deleteSpeed = 28,
  pauseMs = 1800,
}: TypewriterLoopProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const current = strings[index];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const id = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typeSpeed,
        );
        return () => clearTimeout(id);
      }

      const id = setTimeout(() => setPhase("deleting"), pauseMs);
      return () => clearTimeout(id);
    }

    if (displayed.length > 0) {
      const id = setTimeout(() => setDisplayed((value) => value.slice(0, -1)), deleteSpeed);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setIndex((value) => (value + 1) % strings.length);
      setPhase("typing");
    }, 360);
    return () => clearTimeout(id);
  }, [deleteSpeed, displayed, index, pauseMs, phase, strings, typeSpeed]);

  return (
    <span className={className}>
      {prefix ? <span className="terminal-prefix">{prefix}</span> : null}
      {renderTerminalLine(displayed)}
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}

