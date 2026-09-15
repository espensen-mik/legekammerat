"use client";

import MuxPlayer from "@mux/mux-player-react";
import { Section } from "@/src/components/layout/section";
import { SectionHeading } from "@/src/components/section-heading";

const RESEARCH_PLAYBACK_ID = "vx2rM2jqpcR8IRn7AWeEhnlrOtBQIJ6nOAy5GNbigCk";
/** ~2× a medium ~720px-wide 16:9 player */
const RESEARCH_POSTER_URL = `https://image.mux.com/${RESEARCH_PLAYBACK_ID}/thumbnail.png?width=1440&height=810&time=32`;

export function LaunchResearchSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl space-y-8">
        <SectionHeading
          eyebrow="Forskning"
          title="HåndboldTjek - et lykkeligt forskningsprojekt"
          description="LykkeLiga deltager løbende i forskning omkring trivsel og fællesskab for børn og unge med funktionsnedsættelser. Blandt samarbejdspartnerne er Rigshospitalet, Aalborg Universitet og Aalborg Universitetshospital."
        />

        <div className="overflow-hidden bg-black ring-1 ring-white/10">
          <MuxPlayer
            playbackId={RESEARCH_PLAYBACK_ID}
            streamType="on-demand"
            playsInline
            poster={RESEARCH_POSTER_URL}
            accentColor="#00b3a4"
            style={{ aspectRatio: "16 / 9", width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </Section>
  );
}
