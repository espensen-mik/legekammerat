"use client";

import MuxPlayer from "@mux/mux-player-react";
import { motion } from "motion/react";

type VideoBlockProps = {
  title?: string;
  playbackId: string;
};

export function VideoBlock({ title, playbackId }: VideoBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="space-y-4"
    >
      {title ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">{title}</p>
      ) : null}
      <div className="overflow-hidden border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <MuxPlayer
          playbackId={playbackId}
          streamType="on-demand"
          accentColor="#00f4c8"
          className="aspect-video w-full"
        />
      </div>
    </motion.div>
  );
}
