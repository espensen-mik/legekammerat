export type CaseVideo = {
  playbackId: string;
  caption: string;
};

export type Case = {
  slug: string;
  name: string;
  headline: string;
  quote: string;
  description: string;
  playbackId: string;
  coverImage?: string;
  logoSrc?: string;
  videos?: CaseVideo[];
};

export const cases: Case[] = [
  {
    slug: "normal",
    name: "NORMAL",
    headline: "Ikke et helt Normalt samarbejde",
    quote: "Lykkeliga Legekammerat gav os en meningsfuld måde at engagere kunder og medarbejdere på.",
    description:
      "LykkeLiga og NORMAL har et helt og aldeles unikt partnerskab. Et tæt tæt parløb, der skaber uendelig lykke",
    playbackId: "MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I",
    coverImage: "/normal_hero.jpg",
    logoSrc: "/Logo/NORMAL_Logo.svg",
    videos: [
      {
        playbackId: "jsDP1GZFsK51mY9zJze00epIsAlFH8mDMqf1Va02QR01Z8",
        caption:
          'Normal og LykkeLiga arbejder tæt sammen om gennemførslen af årets lykkeligste sæsonfinale "LykkeCup"',
      },
      {
        playbackId: "9WfH74Y2qpGDTUBJZ00ZEm1AT2ac9Sb2pNd1Rsf01QVo8",
        caption:
          "Kom med behind the scenes når medarbejderne fra NORMAL skaber lykke i Herning",
      },
      {
        playbackId: "7Ucnemv3tqdBBP3Pk2PK1NK7ScX3bEviaiHZ8Q500X1A",
        caption:
          "Spillerne i LykkeLiga elsker NORMAL - næsten lige så meget som NORMAL elsker LykkeLiga",
      },
    ],
  },
  {
    slug: "nordea",
    name: "Nordea",
    headline: "Partnerskab med social impact.",
    quote: "Sammen med LykkeLiga skabte vi synlige resultater og stærke fortællinger.",
    description:
      "Nordea styrkede sin lokale tilstedeværelse gennem events, medarbejderfrivillighed og langsigtet støtte.",
    playbackId: "57R1XCb6jKdLdNNkcRKa7wiMuXp8iv02muQnAhS02pqFk",
    coverImage: "/nordea_hero.jpg",
    logoSrc: "/Logo/nordea_logo.svg",
  },
  {
    slug: "lidl",
    name: "Lidl",
    headline: "Fællesskab i øjenhøjde.",
    quote: "Det her er et partnerskab, der kan mærkes i virkeligheden.",
    description:
      "Med Lidl blev legekammerat-konceptet omsat til kampagner, aktiveringer og stærk synlighed i hverdagen.",
    playbackId: "MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I",
    coverImage: "/Lidl_hero.jpg",
    logoSrc: "/Logo/Lidl_logo_white.svg",
  },
  {
    slug: "louis-nielsen",
    name: "Louis Nielsen",
    headline: "Når brand og formål arbejder sammen.",
    quote: "LykkeLiga hjælper os med at skabe relationer med reel betydning.",
    description:
      "Louis Nielsen bidrog til at løfte fortællingen om inklusion gennem et simpelt, tydeligt og engagerende samarbejde.",
    playbackId: "MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I",
    coverImage: "/louisnielsen_hero.jpg",
  },
  {
    slug: "bridgestone",
    name: "Bridgestone",
    headline: "Bevægelse, ansvar og lokal aktivering.",
    quote: "Sammen skaber vi synlighed, der også gør en forskel.",
    description:
      "Strategisk samarbejde med fokus på bevægelse, samfundsansvar og lokal aktivering.",
    playbackId: "MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I",
    coverImage: "/bridgestone_hero.jpg",
    logoSrc: "/Logo/Bridgestone_logo.svg",
  },
  {
    slug: "uniqlo",
    name: "Uniqlo",
    headline: "Kultur, inklusion og fællesskab.",
    quote: "Et partnerskab, der kan mærkes i fortællingen.",
    description:
      "Partnerskab med fokus på kultur, inklusion og stærke fællesskabsfortællinger.",
    playbackId: "MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I",
    coverImage: "/uniqlo_hero.jpg",
    logoSrc: "/Logo/uniqlo_logo-negativ.svg",
  },
  {
    slug: "socialpaedagogerne",
    name: "Socialpædagogerne",
    headline: "Et årelangt engagement i LykkeLiga.",
    quote:
      "Videoen med Muhammed og Mads gav os en sød og sjov platform til at snakke både internt og eksternt om vores årelange engagement i LykkeLiga.",
    description:
      "Socialpædagogerne og LykkeLiga har et tæt partnerskab, hvor uformelle formater og ægte historier gør samarbejdet synligt både internt og eksternt.",
    playbackId: "ef6Xug8ju2xs9LSWfOmpNSfGCrs5SXMB4C9dXFCHIoY",
    logoSrc: "/Logo/SL_logo.svg",
  },
  {
    slug: "hummel",
    name: "Hummel",
    headline: "Fællesskabstrøjen og verdens vigtigste aftale.",
    quote: "Et parløb mellem sport, design og lykkelige fællesskaber.",
    description:
      "Hummel og LykkeLiga har skabt synlige samarbejder om blandt andet Fællesskabstrøjen og fælles kampagnefilm.",
    playbackId: "bgQ4J00R6iIVJTC01OFBnK9PerD4R7acAlZLBY601lpCGs",
    logoSrc: "/Logo/hummel.svg",
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
