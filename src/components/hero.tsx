"use client";

import MuxPlayer from "@mux/mux-player-react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/src/components/layout/container";

export function Hero() {
  const [isCleanView, setIsCleanView] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden border-b border-white/10">
      <MuxPlayer
        playbackId="rjy79le010243vQ8Cgs1RWq01ZuPqo1Ft5SwtHdyjWsNyw"
        streamType="on-demand"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!isCleanView ? (
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
      ) : null}

      <div className="absolute right-6 top-20 z-20 sm:right-10">
        <button
          type="button"
          onClick={() => setIsCleanView((prev) => !prev)}
          className="group relative inline-flex h-10 w-10 items-center justify-center border border-white/25 bg-black/40 text-white transition-colors hover:border-white"
          aria-label={
            isCleanView
              ? "Vis overlay og tekst ovenpå videoen"
              : "Vis videoen uden overlay og tekst"
          }
        >
          {isCleanView ? <EyeOff size={18} /> : <Eye size={18} />}
          <span className="pointer-events-none absolute -bottom-10 right-0 whitespace-nowrap border border-white/20 bg-black/75 px-2 py-1 text-xs text-zinc-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Se videoen fra LykkeCup 2025
          </span>
        </button>
      </div>

      {!isCleanView ? (
        <Container className="relative z-10 flex h-full items-center justify-center py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-6 text-center"
          >
            <div className="mx-auto h-px w-20 bg-[#00f4c8]/70" />
            <h1 className="text-4xl font-semibold uppercase tracking-[0.12em] text-zinc-100 sm:text-6xl md:text-7xl">
              LYKKELIG LEGEKAMMERAT
            </h1>
            <p className="mx-auto whitespace-nowrap text-sm leading-relaxed text-zinc-200 sm:text-xl md:text-2xl">
              Skal din virksomhed være en del af Danmarks lykkeligste fællesskab?
            </p>
            <div className="flex justify-center">
              <Link
                href="/cases"
                className="rounded-full border border-white/30 bg-black/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#00f4c8]/70 hover:bg-black/35"
              >
                Se samarbejderne
              </Link>
            </div>
          </motion.div>
        </Container>
      ) : null}
    </section>
  );
}
