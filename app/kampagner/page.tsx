import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  CalendarCheck2,
  Camera,
  Check,
  HeartHandshake,
  Mail,
  Megaphone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { FeatureCard } from "@/src/components/feature-card";
import { Section } from "@/src/components/layout/section";
import { SectionHeading } from "@/src/components/section-heading";

const partnershipBlocks = [
  {
    title: "Ægte historier",
    description:
      "Vi arbejder med virkelige mennesker, ægte følelser og et fællesskab, der kan mærkes i kommunikationen.",
    Icon: HeartHandshake,
  },
  {
    title: "Kreativt team",
    description:
      "LykkeLiga har interne kreative ressourcer med erfaring fra reklame- og kommunikationsbranchen.",
    Icon: Sparkles,
  },
  {
    title: "Aktivering med værdi",
    description:
      "Vi skaber kampagner og aktiveringer, der ikke bare ses, men huskes - og giver reel værdi for partneren.",
    Icon: BadgeCheck,
  },
];

const whatWeCreate = [
  {
    title: "Kampagner",
    description:
      "Idéer og fortællinger, der kan leve på tværs af platforme og skabe opmærksomhed.",
    Icon: Megaphone,
  },
  {
    title: "Content",
    description:
      "Video, sociale medier og stærke historier, som virksomheder kan bruge aktivt i deres kommunikation.",
    Icon: Camera,
  },
  {
    title: "Events & aktivering",
    description:
      "Oplevelser, deltagelse og nærvær, hvor medarbejdere, kunder eller publikum møder LykkeLiga tæt på.",
    Icon: CalendarCheck2,
  },
  {
    title: "Employer branding",
    description:
      "Indhold og samarbejder, der styrker stolthed, kultur og mening internt i virksomheden.",
    Icon: Briefcase,
  },
];

const campaignCases = [
  {
    title: "Kampagne med partner",
    description: "Fra idé til kampagneunivers med stærk aktivering på tværs af platforme.",
  },
  {
    title: "Content-samarbejde",
    description: "Video- og SoMe-formater, der omsætter partnerskabet til autentisk storytelling.",
  },
  {
    title: "Aktivering med fællesskab",
    description: "Nærværende aktiviteter, der skaber engagement hos både medarbejdere og publikum.",
  },
];

const processSteps = [
  {
    title: "Vi finder idéen",
    text: "Vi definerer vinklen, muligheden og fortællingen sammen.",
    Icon: Star,
  },
  {
    title: "Vi skaber indholdet",
    text: "Vi udvikler kampagne, content og koncept i tæt samarbejde.",
    Icon: Sparkles,
  },
  {
    title: "Vi aktiverer og deler",
    text: "Vi bringer idéen i live gennem kanaler, events og storytelling.",
    Icon: Users,
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
      <Section className="pt-28 sm:pt-32">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Kampagner"
            title="Skab noget, der kan mærkes"
            description="LykkeLiga hjælper virksomheder med at omsætte samarbejde til kampagner, content og oplevelser med ægte mennesker i centrum."
          />
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
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/35">
        <div className="space-y-10">
          <SectionHeading
            title="Det her er ikke bare et sponsorat"
            description="Et partnerskab med LykkeLiga er en kreativ samarbejdsmulighed, hvor brand, mennesker og mening mødes."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {partnershipBlocks.map((item) => (
              <FeatureCard key={item.title} title={item.title} description={item.description} Icon={item.Icon} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          <SectionHeading title="Det kan vi skabe sammen" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whatWeCreate.map((item) => (
              <FeatureCard key={item.title} title={item.title} description={item.description} Icon={item.Icon} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/35">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              title="Skabt af folk, der har prøvet det før"
              description="LykkeLiga har et internt kreativt team med erfaring fra reklame- og kommunikationsbranchen. Det gør det muligt at udvikle idéer, kampagner og content i tæt samarbejde med partneren - fra første brief til offentlig lancering."
            />
            <ul className="space-y-3 text-white/75">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#00f4c8]" />
                Erfaring fra reklamebranchen
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#00f4c8]" />
                Stærk storytelling
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#00f4c8]" />
                Fokus på effekt og engagement
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-800/70 to-black p-8 shadow-[0_0_40px_rgba(0,255,180,0.1)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">
              Internt kreativt setup
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">Kreativ kapacitet tæt på jer</h3>
            <p className="mt-4 leading-relaxed text-white/70">
              Fra strategi og koncept til produktion og aktivering. Vi bygger idéer sammen med jer,
              så samarbejdet bliver både synligt, relevant og kommercielt stærkt.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          <SectionHeading
            title="Teamet bag kampagnerne"
            description="Et lille, erfarent og engageret team, der forstår både kreativt håndværk, kampagneproduktion og samarbejde med partnere."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {creativeTeam.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden border border-white/10 bg-zinc-900/60 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                  <Image src={person.image} alt={person.name} fill className="object-cover" />
                </div>
                <div className="p-5">
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

      <Section>
        <div className="space-y-10">
          <SectionHeading title="Det har vi skabt sammen med vores partnere" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {campaignCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
              >
                <div className="mb-5 aspect-video border border-white/10 bg-gradient-to-br from-zinc-800 to-black" />
                <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                <Link
                  href="/cases"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-[#00f4c8]"
                >
                  Læs mere
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/35">
        <div className="space-y-10">
          <SectionHeading title="Sådan arbejder vi sammen" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-xs text-white/80">
                    {index + 1}
                  </span>
                  <step.Icon size={16} className="text-[#00f4c8]" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="px-6 pb-10 pt-24 sm:px-10">
        <div className="mx-auto max-w-7xl border border-white/10 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-black p-8 shadow-[0_0_40px_rgba(0,255,180,0.1)] sm:p-12">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">Klar til dialog</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
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
