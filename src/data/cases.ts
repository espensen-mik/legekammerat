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
  },
  {
    slug: "louis-nielsen",
    name: "Louis Nielsen",
    headline: "Når brand og formål arbejder sammen.",
    quote: "LykkeLiga hjælper os med at skabe relationer med reel betydning.",
    description:
      "Louis Nielsen bidrog til at løfte fortællingen om inklusion gennem et simpelt, tydeligt og engagerende samarbejde.",
    playbackId: "MqPyyeDQG02UsU8I373hCGfxLatU00KXIbBQlvaxbgY02I",
    coverImage: undefined,
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
