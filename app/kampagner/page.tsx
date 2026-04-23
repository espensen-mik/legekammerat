import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { Section } from "@/src/components/layout/section";
import { SectionHeading } from "@/src/components/section-heading";
import { VideoBlock } from "@/src/components/video-block";

const partnershipHighlights = [
  {
    title: "Ægte historier",
    description: "Vi arbejder med virkelige mennesker, ægte følelser og et fællesskab, der kan mærkes.",
  },
  {
    title: "Kreativt team",
    description: "Interne kreative kræfter med erfaring fra reklame- og kommunikationsbranchen.",
  },
  {
    title: "Aktivering med værdi",
    description: "Kampagner og aktiveringer, der ikke bare ses, men huskes - og giver reel værdi.",
  },
];

const campaignFormats = [
  "Film",
  "Social content",
  "Aktivering",
  "Historiefortælling",
  "Employer branding",
];

const featuredCampaignCases = [
  {
    category: "Featured campaign film",
    partner: "Socialpædagogerne",
    year: "2024",
    title: "Forbundsformanden indkaldes til SponsorUdviklingsSamtale (SUS) med LykkeLiga",
    playbackId: "ef6Xug8ju2xs9LSWfOmpNSfGCrs5SXMB4C9dXFCHIoY",
    caption: "Videoen er produceret af LykkeLigas interne kreative team og leveret i flere formater til forskellige platforme.",
    description:
      "Da Socialpædagogerne og LykkeLiga skulle offentliggøre fornyelsen af samarbejde, var der brug for en uformel og hyggelig ramme, som både kunne bruges internt og eksternt. LykkeLigas kreative team udviklede idé og koncept til at afholde SUS med forbundsformand Benny Andersen, LykkeLiga-spillerne Muhammed og Mads samt Rikke Nielsen.",
    impact:
      "Filmen blev offentliggjort på både LykkeLigas og Socialpædagogernes SoMe-kanaler og fik 100.000-vis af visninger.",
    quote:
      "Videoen med Muhammed og Mads gav os en sød og sjov platform til at snakke både internt og eksternt om vores årelange engagement i LykkeLiga.",
    attribution: "Benny Andersen, Forbundsformand",
  },
  {
    category: "Featured campaign film",
    partner: "Hummel",
    year: "2021",
    title: "Magda & Mølgaard præsenterer Fællesskabstrøje",
    playbackId: "bgQ4J00R6iIVJTC01OFBnK9PerD4R7acAlZLBY601lpCGs",
    caption: "Videoen er produceret af LykkeLigas interne kreative team og filmet i samarbejde med ekstern partner.",
    description:
      "Fællesskabstrøjen 2021 blev test og fremvist hos Hummel i Aarhus. Power-parret Magda & Mølgaard rockede fotostudiet.",
    impact:
      "Videoen er planlagt, klippet og produceret af LykkeLigas interne team i tæt koordinering med partneren.",
  },
  {
    category: "Featured campaign film",
    partner: "Hummel",
    year: "2021",
    title: "LykkeLiga og Hummel - Verdens vigtigste aftale",
    playbackId: "dOu00J8f0002Hi5d3RbJKhf1LLsvITZaNNb100rItwp2j7U",
    caption: "Produceret af LykkeLigas kreative team i samarbejde med produktionsselskabet Mayday Film.",
    description:
      "Da hummel og LykkeLiga fandt sammen i 2021 skulle aftalen naturligvis vises frem til hele verden. Det gjorde vi ved et pressemøde hos Hummel i Aarhus, hvor hele verdenspressen ikke var indkaldt. Hummel bossen måtte have coaching forud for forhandlingerne med de benhårde hunde fra LykkeLiga.",
    impact:
      "Henrik Mølgaard måtte forføje sig da de rigtige stjerner dukkede op. LykkeLigas interne kreative team stod for idé, koncept og instruktion, mens Mayday Film producerede. LykkeLiga stod også for samarbejdet med produktionsselskabet og offentliggørelse af materialet.",
  },
];

const processSteps = [
  {
    title: "Vi finder idéen",
    text: "Vi definerer vinklen, muligheden og fortællingen sammen.",
  },
  {
    title: "Vi skaber indholdet",
    text: "Vi udvikler kampagne, content og koncept i tæt samarbejde.",
  },
  {
    title: "Vi aktiverer og deler",
    text: "Vi bringer idéen i live gennem kanaler, events og storytelling.",
  },
];

const creativeTeam = [
  {
    name: "Mikael Espensen",
    role: "Creative Lead",
    image: "/profil/Mikael.jpg",
    email: "mikael@lykkeliga.dk",
    bio: "Mikael har arbejdet som Creative Director på bureau i 18 år og har lavet kampagner og koncepter for både offentlige og private kunder i B2C og B2B markeder.",
  },
  {
    name: "Charlotte Espensen",
    role: "Tekstforfatter & Projektleder",
    image: "/profil/charlotte.jpg",
    email: "charlotte@lykkeliga.dk",
    bio: "Charlotte har været ejer og direktør af reklamebureauet Weltklasse og har tung erfaring med at planlægge og gennemføre kampagner.",
  },
  {
    name: "Signe van Ingen Bro",
    role: "Projektleder",
    image: "/profil/Signe.jpg",
    email: "signe@lykkeliga.dk",
    bio: "Signe er uddannet fra Danmarks Medie- og Journalisthøjskole og kender LykkeLigas brand ud i alle hjørner. Hun spiller bl.a. en central rolle i samarbejdet med NORMAL og Bluewater Foundation.",
  },
  {
    name: "Anne",
    role: "Studentermedhjælp",
    image: "/profil/Anne.jpg",
    email: "anne@lykkeliga.dk",
    bio: "Anne er under uddannelse og bidrager med energi, struktur og kreativt overblik i teamets daglige indholdsarbejde.",
  },
  {
    name: "Rikke Nielsen",
    role: "LykkeLiga-profil",
    image: "/profil/rikke.jpg",
    email: "rikke@lykkeliga.dk",
    bio: "Rikke er et kendt og afholdt ansigt på LykkeLiga og spiller ofte en central rolle i kampagner og produktion af content.",
  },
  {
    name: "Lars Lundsgaard",
    role: "Kontrakter og praktik",
    image: "/profil/lars.jpg",
    email: "lars@lykkeliga.dk",
    bio: "Lars er administrerende direktør i LykkeLiga. Han tager sig af kontrakter og aftaler og sikrer, at både LykkeLiga og den enkelte Legekammerat får det bedste ud af samarbejdet.",
  },
];

export default function KampagnerPage() {
  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black">
      <Section className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(circle_at_top,rgba(0,244,200,0.14),transparent_65%)]" />
        <div className="relative mx-auto max-w-4xl space-y-8">
          <SectionHeading
            eyebrow="Kampagner"
            title="Skab noget, der kan mærkes"
            description="LykkeLiga hjælper virksomheder med at omsætte samarbejde til kampagner, content og oplevelser med ægte mennesker i centrum."
          />
          <p className="max-w-3xl text-lg leading-relaxed text-white/70">
            Fra første idé til sidste publicering former vi kampagner, der føles menneskelige, stærke og
            relevante for både partneren og publikum.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/legekammerat"
              className="inline-flex items-center gap-2 border border-[#00f4c8]/50 bg-[#00f4c8]/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00f4c8]"
            >
              Book en snak
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40"
            >
              Se cases
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Formatoversigt</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {campaignFormats.map((format) => (
                <span
                  key={format}
                  className="inline-flex items-center border border-white/15 bg-white/[0.02] px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/60"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-14">
          <SectionHeading
            title="Det har vi skabt sammen med vores partnere"
            description="Udvalgte kampagner produceret af LykkeLigas interne kreative team i samarbejde med stærke partnere."
          />
          <div className="divide-y divide-white/10">
            {featuredCampaignCases.map((item, index) => (
              <article key={item.title} className="py-14 first:pt-0">
                <div
                  className={`grid grid-cols-1 gap-10 lg:items-start ${
                    index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <VideoBlock title={item.category} playbackId={item.playbackId} />
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/45">{item.caption}</p>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/85">
                      {item.category}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/55">
                      {item.partner} / {item.year}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-white/75">{item.description}</p>
                    <p className="mt-4 text-base leading-relaxed text-white/70">{item.impact}</p>

                    {item.quote ? (
                      <>
                        <blockquote className="mt-8 border-l border-white/30 pl-5 text-lg italic leading-relaxed text-white/90">
                          &ldquo;{item.quote}&rdquo;
                        </blockquote>
                        {item.attribution ? (
                          <p className="mt-2 pl-5 text-sm text-white/65">- {item.attribution}</p>
                        ) : null}
                      </>
                    ) : null}

                    <Link
                      href="/cases"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 hover:gap-3 hover:text-[#00f4c8]"
                    >
                      Se flere cases
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/20">
        <div className="space-y-12">
          <SectionHeading
            title="Det her er ikke bare et sponsorat"
            description="Et partnerskab med LykkeLiga er en kreativ samarbejdsmulighed, hvor brand, mennesker og mening mødes."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {partnershipHighlights.map((item) => (
              <article key={item.title} className="border-t border-white/20 pt-5">
                <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-12">
          <SectionHeading
            title="Det kan vi skabe sammen"
            description="En fleksibel palette af formater, hvor fortælling, aktivering og forretning hænger sammen."
          />
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-4">
            {campaignFormats.map((item, index) => (
              <div key={item} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-white">{item}</h3>
                <p className="text-sm text-white/65">
                  Formatet tilpasses partner, platform og fortælling - uden at miste den menneskelige kerne.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              title="Skabt af folk, der har prøvet det før"
              description="LykkeLiga har et internt kreativt team med erfaring fra reklame- og kommunikationsbranchen. Det gør det muligt at udvikle idéer, kampagner og content i tæt samarbejde med partneren - fra første brief til offentlig lancering."
            />
            <p className="max-w-xl text-white/70">
              Fra strategi og koncept til produktion og aktivering. Vi bygger idéer sammen med jer,
              så samarbejdet bliver både synligt, relevant og kommercielt stærkt.
            </p>
          </div>
          <div className="space-y-3 border-t border-white/20 pt-4 text-sm text-white/70 lg:mt-6">
            <p>Erfaring fra reklamebranchen</p>
            <p>Stærk storytelling med ægte mennesker</p>
            <p>Fokus på effekt, engagement og relationer</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-12">
          <SectionHeading
            title="Teamet bag kampagnerne"
            description="Et lille, erfarent og engageret team, der forstår både kreativt håndværk, kampagneproduktion og samarbejde med partnere."
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {creativeTeam.map((person) => (
              <article key={person.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#9dffe8]">{person.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{person.bio}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#00f4c8]"
                  >
                    <Mail size={14} />
                    {person.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/20">
        <div className="space-y-12">
          <SectionHeading title="Sådan arbejder vi sammen" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border-l border-white/20 pl-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="px-6 pb-14 pt-24 sm:px-10">
        <div className="mx-auto max-w-7xl border border-white/10 bg-gradient-to-r from-zinc-900/85 via-zinc-900/60 to-black/80 p-8 sm:p-12">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">Klar til dialog</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Skal vi skabe noget sammen?
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-white/70">
              Vi er klar til at udvikle idéer, der både skaber værdi for jer og gør en reel forskel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/legekammerat"
                className="inline-flex items-center gap-2 border border-[#00f4c8]/50 bg-[#00f4c8]/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00f4c8]"
              >
                Book møde
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/legekammerat"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40"
              >
                Se partnerskaber
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
