"use client";

import { useEffect, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { Play, X } from "lucide-react";

const TORBEN_VIDEO_PLAYBACK_ID = "gyBhgNNuR1BTVCfX00IloKF3ouaYb45wgP02THmVwWrWU";
/** 16:9 GIF — width drives aspect ratio on Mux; ~2× for 320px display */
const TORBEN_GIF_WIDTH = 512;
const TORBEN_GIF_URL = `https://image.mux.com/${TORBEN_VIDEO_PLAYBACK_ID}/animated.gif?width=${TORBEN_GIF_WIDTH}`;

function TorbenVideoModal({ onClose }: { onClose: () => void }) {
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Luk video"
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="torben-video-title"
        className="relative z-10 w-full max-w-4xl overflow-hidden bg-[#06111c] shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">
              Lykkelige citater
            </p>
            <h2 id="torben-video-title" className="mt-1 text-lg font-semibold text-white sm:text-xl">
              Torben Mouritzen, founder af Normal
            </h2>
          </div>
        </div>

        <div className="hero-video relative aspect-video w-full bg-black">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white/55 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-black/55 hover:text-white/90 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
            aria-label="Luk video"
          >
            <X size={17} strokeWidth={1.75} />
          </button>
          <MuxPlayer
            playbackId={TORBEN_VIDEO_PLAYBACK_ID}
            streamType="on-demand"
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>
  );
}

export function TorbenQuote() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="bg-[#0a1c2e] px-6 py-8 sm:px-10 sm:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="group relative aspect-video w-full max-w-[17rem] shrink-0 overflow-hidden sm:max-w-[20rem]"
            aria-label="Afspil video med Torben Mouritzen"
          >
            <img
              src={TORBEN_GIF_URL}
              alt="Torben Mouritzen, founder af Normal"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-[#06111c]/10 transition-colors group-hover:bg-[#06111c]/35" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors group-hover:border-white group-hover:bg-black/60 sm:h-16 sm:w-16">
                <Play size={24} className="ml-1 fill-white" />
              </span>
            </span>
          </button>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#00b3a4]">Lykkelige citater</p>
            <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl">
              LykkeLiga er et fantastisk projekt, som alle os hos NORMAL er stolte over at tage del i.
              Vi elsker at skabe lykkelige oplevelser sammen med de skønne håndboldspillere.
            </blockquote>
            <div className="border-t border-white/15 pt-3">
              <p className="text-sm font-semibold text-white">Torben Mouritzen</p>
              <p className="mt-0.5 text-sm text-white/60">Founder af Normal</p>
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#00b3a4] hover:text-[#00f4c8]"
              >
                <Play size={14} className="fill-current" />
                Se video
              </button>
            </div>
          </div>
        </div>
      </section>

      {isVideoOpen ? <TorbenVideoModal onClose={() => setIsVideoOpen(false)} /> : null}
    </>
  );
}
