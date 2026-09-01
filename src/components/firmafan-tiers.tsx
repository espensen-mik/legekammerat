"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { contactHref } from "@/src/lib/contact-anchor";

type FirmafanLevel = {
  title: string;
  price: string;
  bullets: string[];
};

const firmafanLevels: FirmafanLevel[] = [
  {
    title: "Bronze",
    price: "Kr. 5.000 pr. år",
    bullets: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter og hvor man bliver annonceret som ny firmafan",
    ],
  },
  {
    title: "Sølv",
    price: "Kr. 10.000 pr. år",
    bullets: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "5 x billetter til LykkeCup",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter – hvor man bliver annonceret som ny firmafan",
    ],
  },
  {
    title: "Guld",
    price: "Kr. 25.000 pr. år",
    bullets: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter og hvor man bliver annonceret som ny firmafan",
      "5 x billetter til LykkeCup",
      "Logo på LykkeLigas www-sponsorside",
      "1 stk. LykkeLiga t-shirt",
      "Støttediplom",
      "10 autografpostkort fra vores spillere",
    ],
  },
];

function FirmafanTierModal({
  level,
  onClose,
}: {
  level: FirmafanLevel;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[55] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Luk pakkeoversigt"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="firmafan-tier-title"
        className="relative z-10 flex max-h-[min(85vh,720px)] w-full max-w-lg flex-col overflow-hidden bg-[#0f2438] shadow-2xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">FirmaFan</p>
            <h3 id="firmafan-tier-title" className="mt-2 text-3xl font-bold text-white">
              {level.title}
            </h3>
            <p className="mt-1 text-xl font-semibold text-[#00f4c8]">{level.price}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white"
            aria-label="Luk"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <p className="text-sm font-semibold text-white/85">Du får:</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
            {level.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[#00b3a4]">–</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 border-t border-white/10 p-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/40"
          >
            Luk
          </button>
          <a
            href={contactHref("firmafan")}
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-[#00b3a4] px-5 py-2 text-sm font-semibold text-white hover:bg-[#00c9b8]"
          >
            Kontakt os
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function FirmafanTiers() {
  const [activeLevel, setActiveLevel] = useState<FirmafanLevel | null>(null);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f2438]">
        <div className="grid md:grid-cols-3">
          {firmafanLevels.map((level, index) => (
            <button
              key={level.title}
              type="button"
              onClick={() => setActiveLevel(level)}
              className={`group relative flex h-full flex-col p-6 text-left transition-colors hover:bg-white/[0.03] md:p-8 ${
                index < firmafanLevels.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {String(index + 1).padStart(2, "0")} / FirmaFan
              </p>
              <h4 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{level.title}</h4>
              <p className="mt-2 text-lg font-semibold text-[#00f4c8]">{level.price}</p>
              <p className="mt-4 text-sm text-white/55">
                {level.bullets.length} fordele inkluderet
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00b3a4] group-hover:text-[#00f4c8]">
                Se hvad du får
                <ArrowRight size={15} />
              </span>
              {index < firmafanLevels.length - 1 ? (
                <span className="pointer-events-none absolute right-4 top-8 hidden text-[#00b3a4]/40 md:block">→</span>
              ) : null}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
          <p className="text-sm text-white/55">Bronze → Sølv → Guld. Samme koncept. Tre niveauer.</p>
          <a
            href={contactHref("firmafan")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00b3a4] hover:text-[#00f4c8]"
          >
            Kontakt os
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {activeLevel ? <FirmafanTierModal level={activeLevel} onClose={() => setActiveLevel(null)} /> : null}
    </>
  );
}
