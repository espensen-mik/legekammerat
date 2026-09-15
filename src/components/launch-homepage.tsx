import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { LaunchHero } from "@/src/components/launch-hero";
import { TorbenQuote } from "@/src/components/torben-quote";
import { Section } from "@/src/components/layout/section";
import { SectionHeading } from "@/src/components/section-heading";
import { LaunchFeaturedCaseTile } from "@/src/components/launch-featured-case-tile";
import { LaunchEngagementPaths } from "@/src/components/launch-engagement-paths";
import { contactHref, LYKKELIGA_URL } from "@/src/lib/contact-anchor";

const SPONSOR_PDF_PATH = "/sponsor_materiale2026.pdf";

const partners = [
  { name: "NORMAL", src: "/Logo/NORMAL_Logo.svg", logoClassName: "h-10 sm:h-12" },
  { name: "Lidl", src: "/Logo/Lidl_logo_white.svg", logoClassName: "h-9 sm:h-11" },
  { name: "Socialpædagogerne", src: "/Logo/SL_logo.svg", logoClassName: "h-10 sm:h-12" },
  { name: "Nordea", src: "/Logo/nordea_logo.svg", logoClassName: "h-9 sm:h-11" },
  { name: "Bridgestone", src: "/Logo/Bridgestone_logo.svg", logoClassName: "h-5 sm:h-6" },
  { name: "Blue Water Foundation", src: "/BW_Foundation.svg", logoClassName: "h-9 sm:h-11" },
  { name: "Uniqlo", src: "/Logo/uniqlo_logo-negativ.svg", logoClassName: "h-9 sm:h-11" },
  { name: "Herning Kommune", src: "/Logo/Herningkommune_negativ.svg", logoClassName: "h-14 sm:h-16" },
  { name: "Joma", src: "/Logo/joma_negativ.svg", logoClassName: "h-14 sm:h-16" },
  { name: "MCH", src: "/Logo/MCH_negativ.svg", logoClassName: "h-14 sm:h-16" },
  { name: "Teknisk Landsforbund", src: "/Logo/TL-logo-rgb-negativ.svg", logoClassName: "h-9 sm:h-11" },
];

const featuredCases = [
  {
    name: "NORMAL",
    blurb: "Et tæt partnerskab, hvor hverdagsbrand og inkluderende sport skaber synlig glæde.",
    imageSrc: "/normal_hero.jpg",
  },
  {
    name: "Nordea",
    blurb: "Fokus på social impact gennem lokale aktiviteter, storytelling og fællesskab.",
    imageSrc: "/nordea_hero.jpg",
  },
  {
    name: "Lidl",
    blurb: "Aktivering i øjenhøjde med stærk synlighed og konkrete oplevelser for familier.",
    imageSrc: "/Lidl_hero.jpg",
  },
  {
    name: "Louis Nielsen",
    blurb: "Brand og formål forenes i et samarbejde med relationer og reel betydning.",
    imageSrc: "/louisnielsen_hero.jpg",
  },
  {
    name: "Bridgestone",
    blurb: "Strategisk samarbejde med fokus på bevægelse, samfundsansvar og lokal aktivering.",
    imageSrc: "/bridgestone_hero.jpg",
  },
  {
    name: "Uniqlo",
    blurb: "Partnerskab med fokus på kultur, inklusion og stærke fællesskabsfortællinger.",
    imageSrc: "/uniqlo_hero.jpg",
  },
];

export function LaunchHomepage() {
  return (
    <div className="bg-[#07111d] pb-16">
      <LaunchHero />

      <TorbenQuote />

      <section className="relative min-h-[70vh] overflow-hidden bg-[#06111c]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
          <Image
            src="/AFA.jpg"
            alt="LykkeLiga-spillere"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[calc(50%+100px)_center] lg:object-[calc(70%+100px)_center]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#06111c]/70 lg:hidden" />
        <div className="absolute inset-0 w-[calc(100%+100px)] -translate-x-[100px] bg-gradient-to-r from-[#06111c] from-[0%] via-[#06111c] via-[28%] via-[#06111c]/95 via-[40%] via-[#06111c]/45 via-[55%] to-transparent to-[68%] max-lg:from-[#06111c]/85 max-lg:via-[#06111c]/70 max-lg:via-[35%] max-lg:to-[#06111c]/25" />
        <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-6 py-20 sm:px-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-base font-semibold text-[#00f4c8]">
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
            <a
              href={contactHref("partner")}
              className="inline-flex items-center gap-2 rounded-full bg-[#00b3a4] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#00c9b8]"
            >
              Hør mere
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Section>
        <LaunchEngagementPaths />
      </Section>

      <Section className="bg-[#0a1c2e]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Virksomheder der allerede er med"
            title="Stærke brands i fællesskabet"
            description="Et netværk af virksomheder, der prioriterer fællesskab, synlig impact og langsigtet værdi."
          />
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex h-16 items-center justify-center opacity-70 sm:h-20">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={220}
                  height={84}
                  className={`${partner.logoClassName} w-auto max-w-[150px] object-contain sm:max-w-[180px]`}
                />
              </div>
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
          <a
            href={LYKKELIGA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00b3a4] hover:text-[#00f4c8]"
          >
            Læs mere om LykkeLiga
            <ArrowRight size={15} />
          </a>
        </div>
      </Section>

      <Section className="bg-[#0a1c2e]">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Cases"
            title="Udvalgte samarbejder"
            description="Se, hvordan vores samarbejder bliver omsat til stærke resultater."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCases.map((item) => (
              <LaunchFeaturedCaseTile
                key={item.name}
                name={item.name}
                blurb={item.blurb}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </Section>

      <section className="px-6 pb-10 sm:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden bg-[#123347]">
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-stretch">
            <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:min-h-[28rem]">
              <Image
                src="/sponsor_mat_mockup.jpg"
                alt="LykkeLiga partner materiale"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Vil du vide mere?
              </h2>
              <p className="mt-3 text-lg font-semibold text-[#00f4c8] sm:text-xl">
                Download vores partner materiale som PDF
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Er du typen der hellere vil sidde i en god lænestol og læse et print? Så download vores
                materiale som PDF og læs det i fred og ro.
              </p>
              <div className="mt-8">
                <a
                  href={SPONSOR_PDF_PATH}
                  download="sponsor_materiale2026.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00b3a4] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#00c9b8]"
                >
                  Download PDF her
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
