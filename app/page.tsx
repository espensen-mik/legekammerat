import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Crown, Heart, Sparkles, Star } from "lucide-react";
import { Hero } from "@/src/components/hero";
import { Section } from "@/src/components/layout/section";
import { SectionHeading } from "@/src/components/section-heading";
import { VideoBlock } from "@/src/components/video-block";
import { FeaturedCaseTile } from "@/src/components/featured-case-tile";
import { ModelCard } from "@/src/components/model-card";

const partners = [
  { name: "NORMAL", src: "/Logo/NORMAL_Logo.svg", logoClassName: "h-10 sm:h-12" , href: "/cases/normal"},
  { name: "Lidl", src: "/Logo/Lidl_logo_white.svg", logoClassName: "h-9 sm:h-11", href: "/cases/lidl" },
  { name: "Socialpædagogerne", src: "/Logo/SL_logo.svg", logoClassName: "h-10 sm:h-12", href: "#" },
  { name: "Nordea", src: "/Logo/nordea_logo.svg", logoClassName: "h-9 sm:h-11", href: "/cases/nordea" },
  { name: "Bridgestone", src: "/Logo/Bridgestone_logo.svg", logoClassName: "h-10 sm:h-12", href: "#" },
  { name: "Hummel", src: "/Logo/hummel.svg", logoClassName: "h-9 sm:h-11", href: "#" },
];

const modelOverview = [
  {
    label: "Partnerskabsmodel",
    title: "FirmaFan",
    price: "10.000 kr",
    bullets: ["Synlig støtte", "Med i fanfællesskab", "SoMe & grafik"],
    href: "/legekammerat#firmafan",
    Icon: Heart,
  },
  {
    label: "Partnerskabsmodel",
    title: "LigaSponsor",
    price: "50.000 kr",
    bullets: ["Mere synlighed", "VIP adgang", "Event deltagelse"],
    href: "/legekammerat#ligasponsor",
    Icon: Star,
  },
  {
    label: "Partnerskabsmodel",
    title: "Legeaftale",
    price: "250.000 kr",
    bullets: ["Egen aktivering", "Kampagner med LykkeLiga", "Events med spillere"],
    href: "/legekammerat#legeaftale",
    Icon: Sparkles,
  },
  {
    label: "Partnerskabsmodel",
    title: "LegeKammerat",
    price: "500.000+ kr",
    bullets: ["Tæt partnerskab", "Strategisk samarbejde", "Fuld adgang & co-creation"],
    href: "/legekammerat#legekammerat",
    Icon: Crown,
    featured: true,
    badge: "Mest ambitiøse valg",
  },
];

const featuredCases = [
  {
    name: "NORMAL",
    blurb: "Et tæt partnerskab, hvor hverdagsbrand og inkluderende sport skaber synlig glæde.",
    href: "/cases/normal",
    imageSrc: "/normal_hero.jpg",
    toneClassName: "from-zinc-600 via-zinc-800 to-zinc-900",
  },
  {
    name: "Nordea",
    blurb: "Fokus på social impact gennem lokale aktiviteter, storytelling og fællesskab.",
    href: "/cases/nordea",
    imageSrc: "/nordea_hero.jpg",
    toneClassName: "from-slate-600 via-slate-800 to-zinc-900",
  },
  {
    name: "Lidl",
    blurb: "Aktivering i øjenhøjde med stærk synlighed og konkrete oplevelser for familier.",
    href: "/cases/lidl",
    imageSrc: "/Lidl_hero.jpg",
    toneClassName: "from-zinc-700 via-zinc-800 to-zinc-900",
  },
  {
    name: "Louis Nielsen",
    blurb: "Brand og formål forenes i et samarbejde med relationer og reel betydning.",
    href: "/cases/louis-nielsen",
    imageSrc: "/louisnielsen_hero.jpg",
    toneClassName: "from-neutral-700 via-zinc-900 to-black",
  },
  {
    name: "Bridgestone",
    blurb: "Strategisk samarbejde med fokus på bevægelse, samfundsansvar og lokal aktivering.",
    href: "#",
    imageSrc: "/bridgestone_hero.jpg",
    toneClassName: "from-zinc-600 via-zinc-800 to-zinc-900",
  },
  {
    name: "Uniqlo",
    blurb: "Partnerskab med fokus på kultur, inklusion og stærke fællesskabsfortællinger.",
    href: "#",
    imageSrc: "/uniqlo_hero.jpg",
    toneClassName: "from-slate-700 via-zinc-800 to-zinc-900",
  },
];

export default function Home() {

  return (
    <div className="-mt-16 bg-gradient-to-b from-black via-zinc-900 to-black pb-28">
      <Hero />

      <Section className="py-24 sm:py-28">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Partnerskabsmodeller overblik"
            title="Hvilken rolle vil I spille?"
            description="Fire niveauer. Et fælles mål: at skabe lykkelige øjeblikke."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modelOverview.map((item) => (
              <ModelCard
                key={item.title}
                label={item.label}
                title={item.title}
                price={item.price}
                bullets={item.bullets}
                href={item.href}
                Icon={item.Icon}
                featured={item.featured}
                badge={item.badge}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/40">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Trust"
            title="Virksomheder der allerede er med"
            description="Et stærkt netværk af brands, der prioriterer fællesskab, synlig impact og langsigtet værdi."
          />
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            {partners.map((partner) => (
              <Link key={partner.name} href={partner.href} className="group">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={220}
                  height={84}
                  className={`${partner.logoClassName} max-w-[150px] w-auto object-contain opacity-55 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-w-[180px]`}
                />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-white/10">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Featured"
            title="Breaking LykkeNEWS med LIDL"
            description="Da LIDL samlede ind til LykkeLiga gennem deres LIDL+ App gik Rikke og Magda i BREAKING!"
          />
          <div className="space-y-4">
            <VideoBlock
              title="Featured video"
              playbackId="MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I"
            />
            <p className="border-l-2 border-[#00f4c8]/60 bg-white/[0.03] px-3 py-2 text-sm leading-relaxed text-white/80">
              Videoen er produceret af LykkeLigas interne kreative team og blev publiceret på
              LykkeLigas sociale kanaler med et publikum på mere end 150.000 følgere.
            </p>
            <Link
              href="/cases/lidl"
              className="group relative z-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-100 transition-colors hover:text-[#00f4c8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f4c8]/60"
            >
              Læs mere om samarbejdet
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/10 bg-zinc-900/40">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Koncept"
            title="Hvad er Lykkeliga Legekammerat?"
            description="Et partnerskab for brands, der vil mere end synlighed. I samarbejde med LykkeLiga skaber vi konkrete oplevelser, nærværende aktivering og dokumenterbar samfundsværdi."
          />
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Cases"
              title="Udvalgte partnerskaber."
              description="Se, hvordan vores samarbejder bliver omsat til stærke resultater."
            />
            <Link
              href="/cases"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-100 transition-colors hover:text-[#00f4c8]"
            >
              Se alle cases
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCases.map((item) => (
              <FeaturedCaseTile
                key={item.name}
                name={item.name}
                blurb={item.blurb}
                href={item.href}
                imageSrc={item.imageSrc}
                toneClassName={item.toneClassName}
              />
            ))}
          </div>
        </div>
      </Section>

      <section className="px-6 pb-8 sm:px-10">
        <div className="mx-auto max-w-7xl border border-white/10 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-black p-8 shadow-[0_0_40px_rgba(0,255,180,0.1)] sm:p-12">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">Næste skridt</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Skal vi skabe noget, der mærkes?
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-white/70">
              Vi hjælper jer med at gøre en reel forskel - og fortælle historien om det.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/legekammerat"
                className="inline-flex items-center gap-2 border border-[#00f4c8]/50 bg-[#00f4c8]/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00f4c8]"
              >
                Book møde
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
        </div>
      </section>
    </div>
  );
}
