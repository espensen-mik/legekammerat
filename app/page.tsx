import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/src/components/hero";
import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";
import { VideoBlock } from "@/src/components/video-block";
import { FeaturedCaseTile } from "@/src/components/featured-case-tile";

const partners = [
  { name: "NORMAL", src: "/Normal_logo.svg" },
  { name: "Lidl", src: "/lidl_logo.svg" },
  { name: "Socialpædagogerne", src: "/SL_logo.svg" },
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
    <div className="-mt-16 pb-24">
      <Hero />

      <section className="border-b border-white/10 py-12 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={180}
                  height={64}
                  className="h-8 w-auto object-contain opacity-85 sm:h-10"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured"
            title="Et kig ind i universet."
            description="Filmisk storytelling med fokus på bevægelse, relationer og inkluderende fællesskab."
          />
          <VideoBlock
            title="Partnerfilm"
            playbackId="MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I"
          />
        </Container>
      </section>

      <section className="border-y border-white/10 bg-zinc-900 py-20 sm:py-28">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Koncept"
            title="Hvad er Lykkeliga Legekammerat?"
            description="Et partnerskab for brands, der vil mere end synlighed. I samarbejde med LykkeLiga skaber vi konkrete oplevelser, nærværende aktivering og dokumenterbar samfundsværdi."
          />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1500px] space-y-10 px-6 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Cases"
              title="Udvalgte partnerskaber."
              description="Se, hvordan vores samarbejder bliver omsat til stærke resultater."
            />
            <Link
              href="/cases"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-white"
            >
              Se alle cases
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </div>
  );
}
