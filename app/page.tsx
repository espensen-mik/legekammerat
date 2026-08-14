import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/src/components/hero";
import { Section } from "@/src/components/layout/section";
import { SectionHeading } from "@/src/components/section-heading";
import { FeaturedCaseTile } from "@/src/components/featured-case-tile";
import { EngagementPaths } from "@/src/components/engagement-paths";

const partners = [
  { name: "NORMAL", src: "/Logo/NORMAL_Logo.svg", logoClassName: "h-10 sm:h-12", href: "/cases/normal" },
  { name: "Lidl", src: "/Logo/Lidl_logo_white.svg", logoClassName: "h-9 sm:h-11", href: "/cases/lidl" },
  { name: "Socialpædagogerne", src: "/Logo/SL_logo.svg", logoClassName: "h-10 sm:h-12", href: "/cases/socialpaedagogerne" },
  { name: "Nordea", src: "/Logo/nordea_logo.svg", logoClassName: "h-9 sm:h-11", href: "/cases/nordea" },
  { name: "Bridgestone", src: "/Logo/Bridgestone_logo.svg", logoClassName: "h-10 sm:h-12", href: "/cases/bridgestone" },
  { name: "Hummel", src: "/Logo/hummel.svg", logoClassName: "h-9 sm:h-11", href: "/cases/hummel" },
  { name: "Uniqlo", src: "/Logo/uniqlo_logo-negativ.svg", logoClassName: "h-9 sm:h-11", href: "/cases/uniqlo" },
];

const featuredCases = [
  {
    name: "NORMAL",
    blurb: "Et tæt partnerskab, hvor hverdagsbrand og inkluderende sport skaber synlig glæde.",
    href: "/cases/normal",
    imageSrc: "/normal_hero.jpg",
  },
  {
    name: "Nordea",
    blurb: "Fokus på social impact gennem lokale aktiviteter, storytelling og fællesskab.",
    href: "/cases/nordea",
    imageSrc: "/nordea_hero.jpg",
  },
  {
    name: "Lidl",
    blurb: "Aktivering i øjenhøjde med stærk synlighed og konkrete oplevelser for familier.",
    href: "/cases/lidl",
    imageSrc: "/Lidl_hero.jpg",
  },
  {
    name: "Louis Nielsen",
    blurb: "Brand og formål forenes i et samarbejde med relationer og reel betydning.",
    href: "/cases/louis-nielsen",
    imageSrc: "/louisnielsen_hero.jpg",
  },
  {
    name: "Bridgestone",
    blurb: "Strategisk samarbejde med fokus på bevægelse, samfundsansvar og lokal aktivering.",
    href: "/cases/bridgestone",
    imageSrc: "/bridgestone_hero.jpg",
  },
  {
    name: "Uniqlo",
    blurb: "Partnerskab med fokus på kultur, inklusion og stærke fællesskabsfortællinger.",
    href: "/cases/uniqlo",
    imageSrc: "/uniqlo_hero.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-[#07111d] pb-16">
      <Hero />

      <section className="bg-[#0a1c2e] px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden sm:h-48 sm:w-48">
            <Image
              src="/mouritzen.jpg"
              alt="Torben Mouritzen, founder af Normal"
              fill
              sizes="192px"
              className="object-cover object-[center_18%]"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#00b3a4]">Lykkelige citater</p>
            <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl">
              LykkeLiga er et fantastisk projekt, som alle os hos NORMAL er stolte over at tage del i.
              Vi elsker at skabe lykkelige oplevelser sammen med de skønne håndboldspillere.
            </blockquote>
            <div className="border-t border-white/15 pt-3">
              <p className="text-sm font-semibold text-white">Torben Mouritzen</p>
              <p className="mt-0.5 text-sm text-white/60">Founder af Normal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden bg-[#06111c]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
          <Image
            src="/AFA.jpg"
            alt="LykkeLiga-spillere"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[center_center] lg:object-[70%_center]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#06111c]/70 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111c] from-[0%] via-[#06111c] via-[40%] via-[#06111c]/95 via-[52%] via-[#06111c]/45 via-[68%] to-transparent to-[82%] max-lg:from-[#06111c]/85 max-lg:via-[#06111c]/70 max-lg:via-[45%] max-lg:to-[#06111c]/25" />
        <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-6 py-20 sm:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold text-[#00f4c8]">
              Derfor skal din virksomhed arbejde sammen med LykkeLiga
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Danmarks stærkeste sociale brand
            </h2>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              LykkeLiga har siden starten i 2017 vokset sig til at være et af Danmarks mest elskede sociale
              brands. Med smukke fortællinger, humor og stærk tilstedeværelse på både sociale og
              traditionelle medier er LykkeLiga kendt og elsket i alle afkroge af landet.
            </p>
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              LykkeLigas drift er i høj grad afhængigt af partnerskaber med erhvervslivet og derfor har
              økonomisk støtte direkte effekt på smilebåndet hos de mange lykkelige håndboldsspillere.
            </p>
            <p className="text-sm text-white/70">
              Læs mere om dine muligheder for et samarbejde med LykkeLiga
            </p>
            <Link
              href="/partnerskaber"
              className="inline-flex items-center gap-2 rounded-full bg-[#00b3a4] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#00c9b8]"
            >
              Læs mere
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <EngagementPaths />
      </Section>

      <Section className="bg-[#0a1c2e]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Virksomheder der allerede er med"
            title="Stærke brands i fællesskabet"
            description="Et netværk af virksomheder, der prioriterer fællesskab, synlig impact og langsigtet værdi."
          />
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            {partners.map((partner) => (
              <Link key={partner.name} href={partner.href} className="group">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={220}
                  height={84}
                  className={`${partner.logoClassName} w-auto max-w-[150px] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:max-w-[180px]`}
                />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Støtte med hjertet"
            title="Hvad er LykkeLiga?"
            description="LykkeLiga er et nationalt håndboldfællesskab for børn og unge med funktionsnedsættelser. Takket være din støtte kan vi fortsætte vores arbejde med at skabe lykkelige øjeblikke og fællesskaber i hele landet."
          />
        </div>
      </Section>

      <Section className="bg-[#0a1c2e]">
        <div className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Partnere"
              title="Udvalgte partnerskaber"
              description="Se, hvordan vores samarbejder bliver omsat til stærke resultater."
            />
            <Link href="/cases" className="text-sm font-semibold text-[#00b3a4] hover:text-[#00f4c8]">
              Se alle partnere →
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
              />
            ))}
          </div>
        </div>
      </Section>

      <section className="px-6 pb-10 sm:px-10">
        <div className="mx-auto max-w-7xl bg-[#123347] p-8 sm:p-12">
          <p className="text-sm font-semibold text-[#00f4c8]">Næste skridt</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Skal vi skabe noget, der mærkes?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/70">
            Vi hjælper jer med at gøre en reel forskel - og fortælle historien om det.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/partnerskaber"
              className="inline-flex items-center gap-2 rounded-full bg-[#00b3a4] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#00c9b8]"
            >
              Book møde
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:border-white"
            >
              Se partnere
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
