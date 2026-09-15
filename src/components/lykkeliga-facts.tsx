"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

type FactShape = "pill" | "circle" | "ring";
type FactTone = "coral" | "teal" | "navy" | "tealSoft";

type Fact = {
  id: string;
  value?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  shape: FactShape;
  tone: FactTone;
  format?: "int" | "da" | "percent";
};

const facts: Fact[] = [
  {
    id: "kommuner",
    value: 62,
    label: "kommuner med mindst 1 LykkeLigahold",
    shape: "pill",
    tone: "coral",
    format: "int",
  },
  {
    id: "hold",
    value: 81,
    label: "hold",
    shape: "ring",
    tone: "teal",
    format: "int",
  },
  {
    id: "andel",
    value: 13.5,
    decimals: 1,
    suffix: "%",
    label: "af danskere i målgruppen spiller LykkeLiga håndbold",
    shape: "pill",
    tone: "tealSoft",
    format: "percent",
  },
  {
    id: "spillere",
    value: 1511,
    label: "spillere i Danmark",
    shape: "circle",
    tone: "teal",
    format: "int",
  },
  {
    id: "geografi",
    label: "Hold i Danmark inkl. Færøerne og Grønland, Tyskland og Sverige.",
    shape: "pill",
    tone: "navy",
  },
  {
    id: "timer",
    value: 44,
    suffix: " timer",
    label: "om året bruger spillerne i gennemsnit i vores fællesskab.",
    shape: "pill",
    tone: "navy",
    format: "int",
  },
  {
    id: "traenere",
    value: 509,
    label: "trænere",
    shape: "ring",
    tone: "teal",
    format: "int",
  },
  {
    id: "voksne",
    value: 378,
    label: "spillere over 18 år",
    shape: "circle",
    tone: "coral",
    format: "int",
  },
  {
    id: "some",
    value: 150000,
    label: "følgere på SoMe",
    shape: "pill",
    tone: "tealSoft",
    format: "da",
  },
];

function formatFactValue(fact: Fact, current: number): string {
  if (fact.format === "da") {
    return Math.round(current).toLocaleString("da-DK");
  }

  if (fact.format === "percent" || (fact.decimals ?? 0) > 0) {
    return current.toLocaleString("da-DK", {
      minimumFractionDigits: fact.decimals ?? 1,
      maximumFractionDigits: fact.decimals ?? 1,
    });
  }

  return String(Math.round(current));
}

function useCountUp(target: number | undefined, active: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof target !== "number" || !active) {
      return;
    }

    const endValue = target;
    let frame = 0;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(endValue * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, durationMs, target]);

  return value;
}

function toneClasses(tone: FactTone, shape: FactShape) {
  if (shape === "ring") {
    return "border-[3px] border-[#00b3a4] bg-transparent text-white";
  }

  switch (tone) {
    case "coral":
      return "bg-[#e07a6a] text-white shadow-[0_18px_40px_rgba(224,122,106,0.22)]";
    case "teal":
      return "bg-[#00b3a4] text-white shadow-[0_18px_40px_rgba(0,179,164,0.22)]";
    case "tealSoft":
      return "bg-[#164556] text-[#00f4c8] ring-1 ring-[#00b3a4]/35";
    case "navy":
    default:
      return "bg-[#0f2438] text-white ring-1 ring-white/10";
  }
}

function shapeClasses(shape: FactShape) {
  switch (shape) {
    case "circle":
      return "aspect-square w-full max-w-[11.5rem] rounded-full px-5 py-6 sm:max-w-[12.5rem]";
    case "ring":
      return "aspect-square w-full max-w-[10.5rem] rounded-full px-5 py-6 sm:max-w-[11.5rem]";
    case "pill":
    default:
      return "min-h-[7.5rem] w-full rounded-[999px] px-7 py-6 sm:min-h-[8rem] sm:px-8";
  }
}

function FactCard({ fact, active, index }: { fact: Fact; active: boolean; index: number }) {
  const counted = useCountUp(fact.value, active);
  const hasValue = typeof fact.value === "number";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
      className={`flex items-center justify-center text-center ${shapeClasses(fact.shape)} ${toneClasses(fact.tone, fact.shape)}`}
    >
      <div className={`mx-auto max-w-[16rem] ${hasValue ? "space-y-1.5" : ""}`}>
        {hasValue ? (
          <p
            className={`font-bold tracking-tight ${
              fact.shape === "pill" ? "text-4xl sm:text-5xl" : "text-4xl sm:text-[2.75rem]"
            } ${fact.tone === "tealSoft" ? "text-[#00f4c8]" : ""}`}
          >
            {fact.prefix}
            {formatFactValue(fact, counted)}
            {fact.suffix}
          </p>
        ) : null}
        <p
          className={`leading-snug ${
            hasValue
              ? "text-sm sm:text-[0.95rem]"
              : "text-base font-medium sm:text-lg"
          } ${
            fact.tone === "tealSoft"
              ? "text-white/75"
              : fact.shape === "ring"
                ? "text-white/75"
                : "text-white/90"
          }`}
        >
          {fact.label}
        </p>
      </div>
    </motion.div>
  );
}

export function LykkeLigaFacts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className="space-y-5">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-sm font-semibold text-[#00f4c8]"
      >
        Fakta om LykkeLiga
      </motion.p>

      <div className="grid grid-cols-2 items-center gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
        <div className="col-span-2 sm:col-span-1 lg:col-span-4">
          <FactCard fact={facts[0]} active={isInView} index={0} />
        </div>
        <div className="col-span-1 flex justify-center lg:col-span-3">
          <FactCard fact={facts[1]} active={isInView} index={1} />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-5">
          <FactCard fact={facts[2]} active={isInView} index={2} />
        </div>

        <div className="col-span-1 flex justify-center lg:col-span-3">
          <FactCard fact={facts[3]} active={isInView} index={3} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <FactCard fact={facts[4]} active={isInView} index={4} />
        </div>
        <div className="col-span-2 lg:col-span-5">
          <FactCard fact={facts[5]} active={isInView} index={5} />
        </div>

        <div className="col-span-1 flex justify-center lg:col-span-3">
          <FactCard fact={facts[6]} active={isInView} index={6} />
        </div>
        <div className="col-span-1 flex justify-center lg:col-span-4">
          <FactCard fact={facts[7]} active={isInView} index={7} />
        </div>
        <div className="col-span-2 lg:col-span-5">
          <FactCard fact={facts[8]} active={isInView} index={8} />
        </div>
      </div>
    </div>
  );
}
