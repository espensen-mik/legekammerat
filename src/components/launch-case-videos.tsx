"use client";

import { useEffect, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { Play, X } from "lucide-react";
import { SectionHeading } from "@/src/components/section-heading";

type CaseVideoItem = {
  name: string;
  description: string;
  playbackId: string;
};

/** ~2× display width for retina; tiles are roughly 320–400px wide */
const CASE_GIF_WIDTH = 640;

function muxAnimatedGifUrl(playbackId: string) {
  return `https://image.mux.com/${playbackId}/animated.gif?width=${CASE_GIF_WIDTH}`;
}

const caseVideos: CaseVideoItem[] = [
  {
    name: "Nordea",
    description:
      "LykkeLiga-spillerne Freya og Laurits var trukket i slips og jakke da de forhandlede kontrakt med Nordeas Bankdirektør. Filmen blev årets mest sete på Nordeas interne kanaler.",
    playbackId: "57R1XCb6jKdLdNNkcRKa7wiMuXp8iv02muQnAhS02pqFk",
  },
];

function CaseVideoModal({
  item,
  onClose,
}: {
  item: CaseVideoItem;
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
        aria-labelledby="case-video-title"
        className="relative z-10 w-full max-w-4xl overflow-hidden bg-[#06111c] shadow-2xl"
      >
        <div className="border-b border-white/10 px-5 py-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">Case</p>
          <h2 id="case-video-title" className="mt-1 text-lg font-semibold text-white sm:text-xl">
            {item.name}
          </h2>
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
            playbackId={item.playbackId}
            streamType="on-demand"
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>
  );
}

function CaseVideoTile({
  item,
  onOpen,
}: {
  item: CaseVideoItem;
  onOpen: () => void;
}) {
  return (
    <article className="flex h-full flex-col bg-[#0f2438]">
      <button
        type="button"
        onClick={onOpen}
        className="group relative aspect-[16/10] w-full overflow-hidden"
        aria-label={`Afspil video: ${item.name}`}
      >
        <img
          src={muxAnimatedGifUrl(item.playbackId)}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-[#06111c]/10 transition-colors group-hover:bg-[#06111c]/35" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors group-hover:border-white group-hover:bg-black/60">
            <Play size={22} className="ml-1 fill-white" />
          </span>
        </span>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold tracking-tight text-white">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{item.description}</p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#00b3a4] hover:text-[#00f4c8]"
        >
          <Play size={14} className="fill-current" />
          Se video
        </button>
      </div>
    </article>
  );
}

export function LaunchCaseVideos() {
  const [activeCase, setActiveCase] = useState<CaseVideoItem | null>(null);

  return (
    <>
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Cases"
          title="Kreativ aktivering af partnerskab"
          description="LykkeLiga er mestre i kreativ og humoristisk aktivering af vores samarbejder. Vi producerer selv langt det meste indhold og udvikler koncept, der skaber både synlighed for virksomheder og vores vidunderlige målgruppe."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseVideos.map((item) => (
            <CaseVideoTile key={item.playbackId} item={item} onOpen={() => setActiveCase(item)} />
          ))}
        </div>
      </div>

      {activeCase ? (
        <CaseVideoModal item={activeCase} onClose={() => setActiveCase(null)} />
      ) : null}
    </>
  );
}
