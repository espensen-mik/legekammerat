"use client";

import MuxPlayer from "@mux/mux-player-react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/src/components/layout/container";
import { contactHref } from "@/src/lib/contact-anchor";

export function LaunchHero() {
  const [isCleanView, setIsCleanView] = useState(false);

  return (
    <section className="relative min-h-[32rem] w-full overflow-hidden bg-[#06111c] sm:aspect-video sm:min-h-0">
      <div className="launch-hero-video hero-video absolute inset-0">
        <MuxPlayer
          playbackId="rjy79le010243vQ8Cgs1RWq01ZuPqo1Ft5SwtHdyjWsNyw"
          streamType="on-demand"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      {!isCleanView ? (
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111c]/90 via-[#06111c]/55 to-transparent" />
      ) : null}

      <div className="absolute right-6 top-6 z-20 sm:right-10">
        <button
          type="button"
          onClick={() => setIsCleanView((prev) => !prev)}
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white transition-colors hover:border-white"
          aria-label={
            isCleanView
              ? "Vis overlay og tekst ovenpå videoen"
              : "Vis videoen uden overlay og tekst"
          }
        >
          {isCleanView ? <EyeOff size={18} /> : <Eye size={18} />}
          <span className="pointer-events-none absolute -bottom-10 right-0 whitespace-nowrap rounded-full border border-white/20 bg-black/75 px-2 py-1 text-xs text-zinc-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Se videoen fra LykkeCup 2025
          </span>
        </button>
      </div>

      {!isCleanView ? (
        <Container className="relative z-10 flex min-h-[32rem] items-end pb-10 pt-24 sm:min-h-0 sm:h-full sm:items-center sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-2xl space-y-5 sm:space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#00f4c8] sm:text-sm sm:tracking-[0.18em]">
              Lykkeliga Legekammerat
            </p>
            <h1 className="max-w-[14ch] text-[1.875rem] font-bold leading-[1.15] text-balance text-white sm:max-w-none sm:text-6xl sm:leading-[1.1]">
              Velkommen i en helt anden liga
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Skal din virksomhed være en del af Danmarks lykkeligste fællesskab?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={contactHref("partner")}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#00b3a4] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#00c9b8] sm:w-auto"
              >
                Bliv partner
              </a>
              <a
                href={contactHref("firmafan")}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white sm:w-auto"
              >
                Bliv FirmaFan
              </a>
            </div>
          </motion.div>
        </Container>
      ) : null}
    </section>
  );
}
