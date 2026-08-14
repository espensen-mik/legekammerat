"use client";

import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";
import { ContactModal } from "@/src/components/contact-modal";
import { Check } from "lucide-react";
import { useState } from "react";

const firmafans = [
  {
    slug: "firmafan-bronze",
    title: "Firmafan Bronze",
    price: "Kr. 5.000 pr. år",
    description:
      "Som firmafan træder din virksomhed ind i LykkeLigas B2B Fanklub med virksomheder fra hele landet. 2 gange om året modtager du “LykkeLiga-FanPost”, hvor nye medlemmer introduceres, og du kan komme tæt på udviklingen i den lykkelige liga.",
    includes: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter og hvor man bliver annonceret som ny firmafan",
    ],
  },
  {
    slug: "firmafan-soelv",
    title: "Firmafan Sølv",
    price: "Kr. 10.000 pr. år",
    description:
      "Som firmafan træder din virksomhed ind i LykkeLigas B2B Fanklub med virksomheder fra hele landet. Sølv-niveauet giver dig mere synlighed og mulighed for at opleve LykkeCup tæt på.",
    includes: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter – hvor man bliver annonceret som ny firmafan",
      "5 x billetter til LykkeCup",
      "Logo på LykkeLigas www-sponsorside",
    ],
  },
  {
    slug: "firmafan-guld",
    title: "Firmafan Guld",
    price: "Kr. 25.000 pr. år",
    description:
      "Firmafan Guld er det stærkeste firmafan-niveau. Du får synlighed, anerkendelse og konkrete oplevelser, der gør det nemt at vise, at I støtter Danmarks lykkeligste liga.",
    includes: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter og hvor man bliver annonceret som ny firmafan",
      "5 x billetter til LykkeCup",
      "Logo på LykkeLigas www-sponsorside",
      "1 stk. LykkeLiga t-shirt",
      "Støttediplom",
      "10 autografpostkort fra vores spillere",
    ],
  },
];

const partnerPackages = [
  {
    slug: "liga-ven",
    title: "Liga-ven",
    price: "Kr. 75.000 pr. år",
    description:
      "For virksomheder, som har lidt ekstra midler, de gerne vil gøre en god gerning med. Udover fordelene i Firmafan Guld-pakken får du som Liga-ven adgang til omtale på LykkeLigas hjemmeside og sociale medier - og selvfølgelig i vores FanPost-hilsner til erhvervssponsorer i LykkeLiga. Som Liga-ven får du også 2 x billetter til vores VIP-event til LykkeCup.",
    includes: [
      "Fordele indeholdt i Firmafan Guld",
      "Omtale på LykkeLigas hjemmeside og sociale medier",
      "Omtale i FanPost-hilsner til erhvervssponsorer",
      "2 x billetter til VIP-event til LykkeCup",
    ],
  },
  {
    slug: "ligasponsor",
    title: "Ligasponsor",
    price: "Kr. 150.000 pr. år",
    description:
      "Som Ligasponsor bliver din virksomhed en synlig og aktiv del af LykkeLigas hverdag. Det er også på dette niveau, at vi åbner op for aktiviteter og synlighed med vores spillere. Ligasponsorer i LykkeLiga: Lidl, Bridgestone, Uniqlo.",
    includes: [
      "De fordele, der er indeholdt i Firmafan Guld og Liga-ven aftalerne",
      "Adgang til VIP-eventet Lykke og Lagkage (LykkeCup)",
      "Mulighed for aktiviteter og kampagner med børnene",
      "Eksponering på LykkeLigas sociale medier",
    ],
  },
  {
    slug: "legeaftale",
    title: "Legeaftale",
    price: "Min. 250.000 kr. pr. år",
    description:
      "Med en Partneraftale har din virksomhed mulighed for at blive en synlig og aktiv del af LykkeLigas hverdag. En Legeaftale åbner for aktiviteter, kampagner og synlighed tættere på målgruppen. Legeaftaler i LykkeLiga: Blue Water.",
    includes: [
      "Synlighed til LykkeCup",
      "Adgang til VIP-eventet Lykke og Lagkage (LykkeCup)",
      "Mulighed for aktiviteter og kampagner med børnene",
      "1 valgfrit årligt foredrag om LykkeLiga",
      "Eksponering på LykkeLigas sociale medier",
      "De fordele, der er indeholdt i Firmafan Guld og Liga-ven aftalerne",
    ],
  },
  {
    slug: "legekammerat",
    title: "Legekammerat",
    price: "Min. 500.000 kr. pr. år",
    description:
      "Udover de fordele en legeaftale giver, får du som legekammerat en aktiv plads i LykkeLiga-familien. Her arbejder vi sammen om at skabe lykke og fællesskab i målgruppen. Legekammeraten er en synlig spiller i LykkeLigas hverdag – og får synlighed til LykkeCup, VIP Lykke og Lagkage og aktiviteter med målgruppen. En legekammerat har LykkeLiga som en hjertesag, der gennemsyrer hele organisationen. Løbende møder og planlægning af fælles aktiviteter.",
    includes: [
      "Synlighed til LykkeCup",
      "Adgang til VIP-eventet Lykke og Lagkage (LykkeCup)",
      "Mulighed for aktiviteter og kampagner med børnene",
      "1 valgfrit årligt foredrag om LykkeLiga",
      "Eksponering på LykkeLigas sociale medier",
      "De fordele, der er indeholdt i Firmafan Guld og Liga-ven aftalerne",
      "Aktiv plads i LykkeLiga-familien med løbende møder og fælles planlægning",
    ],
    quote:
      "LykkeLiga er et fantastisk projekt, som alle os hos NORMAL er stolte over at tage del i. Vi elsker at skabe lykkelige oplevelser sammen med de skønne håndboldspillere og er taknemmelige for, at vi får lov at være med på holdet. Det giver SÅ meget mening for os, at vi kan hjælpe og vi glæder os til hvert eneste arrangement, hvor vi kan være med. Holdet bag LykkeLiga arbejder dygtigt med hjertet forrest, stor autenticitet og livsglæde. Og man er aldrig i tvivl om, at missionen er at gøre børnene lykkelige. LykkeLiga tænker skævt, ligesom vi selv synes, vi gør. Derfor er vi et perfekt match!",
    attribution: "Torben Mouritzen, founder af Normal",
  },
];

const overviewColumns = [
  { slug: "firmafan-bronze", title: "Bronze" },
  { slug: "firmafan-soelv", title: "Sølv" },
  { slug: "firmafan-guld", title: "Guld" },
  { slug: "liga-ven", title: "Liga-ven" },
  { slug: "ligasponsor", title: "Ligasponsor" },
  { slug: "legeaftale", title: "Legeaftale" },
  { slug: "legekammerat", title: "Legekammerat" },
];

const overviewRows = [
  {
    feature: "Grafik: “Vi støtter LykkeLiga”",
    includedIn: [
      "firmafan-bronze",
      "firmafan-soelv",
      "firmafan-guld",
      "liga-ven",
      "ligasponsor",
      "legeaftale",
      "legekammerat",
    ],
  },
  {
    feature: "2 årlige FanPost-hilsner",
    includedIn: [
      "firmafan-bronze",
      "firmafan-soelv",
      "firmafan-guld",
      "liga-ven",
      "ligasponsor",
      "legeaftale",
      "legekammerat",
    ],
  },
  {
    feature: "5 x billetter til LykkeCup",
    includedIn: ["firmafan-soelv", "firmafan-guld", "liga-ven", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "Logo på LykkeLigas sponsorside",
    includedIn: ["firmafan-soelv", "firmafan-guld", "liga-ven", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "T-shirt, støttediplom og autografpostkort",
    includedIn: ["firmafan-guld", "liga-ven", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "Omtale på hjemmeside og SoMe",
    includedIn: ["liga-ven", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "VIP-billetter til LykkeCup",
    includedIn: ["liga-ven", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "Adgang til VIP-eventet Lykke og Lagkage",
    includedIn: ["ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "Aktiviteter og kampagner med børnene",
    includedIn: ["ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "1 valgfrit årligt foredrag om LykkeLiga",
    includedIn: ["legeaftale", "legekammerat"],
  },
  {
    feature: "Synlighed til LykkeCup + løbende fælles planlægning",
    includedIn: ["legekammerat"],
  },
];

function PackageCard({
  item,
  label,
  onOrder,
}: {
  item: {
    slug: string;
    title: string;
    price: string;
    description: string;
    includes: string[];
    quote?: string;
    attribution?: string;
  };
  label: string;
  onOrder?: () => void;
}) {
  return (
    <article id={item.slug} className="bg-[#0f2438] p-7">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">{label}</p>
        <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">{item.title}</h3>
        <p className="whitespace-nowrap text-2xl font-semibold tracking-tight text-[#99ffe9]">{item.price}</p>
      </div>

      <p className="mt-6 text-zinc-300">{item.description}</p>

      <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-200">Du får</p>
        <ul className="space-y-2 text-sm text-zinc-300">
          {item.includes.map((feature, featureIndex) => (
            <li
              key={feature}
              className={`flex w-full items-start gap-2 border border-white/8 px-3 py-2 ${
                featureIndex % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"
              }`}
            >
              <Check size={14} className="mt-0.5 shrink-0 text-[#00f4c8]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {item.quote ? (
        <blockquote className="mt-8 border-l border-white/30 pl-5 text-base italic leading-relaxed text-zinc-200">
          &ldquo;{item.quote}&rdquo;
          {item.attribution ? <p className="mt-3 text-sm not-italic text-zinc-400">- {item.attribution}</p> : null}
        </blockquote>
      ) : null}

      {onOrder ? (
        <div className="mt-8 pt-2">
          <button
            type="button"
            onClick={onOrder}
            className="inline-flex items-center rounded-full bg-[#00b3a4] px-5 py-2 text-sm font-semibold text-white hover:bg-[#00c9b8]"
          >
            Bestil nu!
          </button>
        </div>
      ) : null}
    </article>
  );
}

function OverviewGroup({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: { slug: string; title: string }[];
  rows: { feature: string; includedIn: string[] }[];
}) {
  const visibleRows = rows.filter((row) => columns.some((column) => row.includedIn.includes(column.slug)));

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h4>

      <div className="space-y-3 md:hidden">
        {visibleRows.map((row) => (
          <div key={`${title}-${row.feature}`} className="border-t border-white/10 pt-3">
            <p className="text-sm text-zinc-300">{row.feature}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {columns.map((column) => {
                const included = row.includedIn.includes(column.slug);
                return (
                  <span
                    key={`${row.feature}-${column.slug}`}
                    className={`text-xs ${included ? "text-[#99ffe9]" : "text-zinc-600"}`}
                  >
                    {included ? "✓" : "-"} {column.title}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <table className="hidden w-full table-fixed border-collapse text-left md:table">
        <thead>
          <tr className="border-b border-white/10 text-sm text-zinc-300">
            <th className="w-[36%] px-2 py-3 font-medium sm:px-3">Indhold</th>
            {columns.map((column) => (
              <th key={column.slug} className="px-1 py-3 text-center text-xs font-medium leading-tight sm:px-2 sm:text-sm">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, rowIndex) => (
            <tr
              key={`${title}-${row.feature}`}
              className={`border-b border-white/5 text-sm text-zinc-200 ${
                rowIndex % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
              }`}
            >
              <td className="px-2 py-3 leading-snug text-zinc-300 sm:px-3">{row.feature}</td>
              {columns.map((column) => (
                <td key={`${row.feature}-${column.slug}`} className="px-1 py-3 text-center sm:px-2">
                  {row.includedIn.includes(column.slug) ? (
                    <span className="text-[#00f4c8]">✓</span>
                  ) : (
                    <span className="text-zinc-600">-</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegekammeratPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container className="py-24 sm:py-28">
        <section className="space-y-16">
          <SectionHeading
            eyebrow="Bliv legekammerat"
            title="Velkommen i en helt anden liga"
            description="I en organisation som LykkeLiga er vi dybt afhængige af kommercielle sponsorer. Takket være din støtte kan vi fortsætte vores arbejde med at skabe lykkelige øjeblikke og fællesskaber i hele landet."
          />

          <div className="mx-auto max-w-4xl space-y-4 text-zinc-300">
            <p>
              Vi skelner mellem to former for støtte: Firmafan og Partneraftaler. Som firmafan træder din
              virksomhed ind i LykkeLigas B2B Fanklub. Med en Partneraftale har din virksomhed mulighed for at
              blive en synlig og aktiv del af LykkeLigas hverdag - og det er også her, vi åbner op for
              aktiviteter og synlighed med vores spillere.
            </p>
            <p>
              Som firmafan får du mulighed for tilkøb af LykkeLiga produkter. Fx synlighed på
              spiller/træner-t-shirts, køb af foredrag m.m. Firmafans får et særligt link til vores fanshop,
              hvor man kan købe LykkeLiga tøj til favorabel pris.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">Firmafans</h2>
              <p className="text-zinc-300">Tre niveauer for virksomheder, der vil støtte med hjertet.</p>
            </div>
            {firmafans.map((item) => (
              <PackageCard
                key={item.slug}
                item={item}
                label="Firmafan"
                onOrder={() => setIsModalOpen(true)}
              />
            ))}
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">PartnerPakker</h2>
              <p className="text-zinc-300">
                Aftaler for dem, der gerne vil give lidt ekstra for at engagere sig i lykkelige fællesskaber.
              </p>
            </div>
            {partnerPackages.map((item) => (
              <PackageCard key={item.slug} item={item} label="Partneraftale" />
            ))}
          </div>

          <section className="mx-auto max-w-4xl space-y-10 bg-[#0f2438] p-5 sm:p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">Overblik</h3>
              <p className="text-zinc-300">Et hurtigt overblik over, hvad der er inkluderet i sponsor-modellerne.</p>
            </div>

            <OverviewGroup
              title="Firmafans"
              columns={overviewColumns.filter((column) => column.slug.startsWith("firmafan-"))}
              rows={overviewRows}
            />
            <OverviewGroup
              title="PartnerPakker"
              columns={overviewColumns.filter((column) => !column.slug.startsWith("firmafan-"))}
              rows={overviewRows}
            />
          </section>
        </section>
      </Container>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Bestil Firmafan" />
    </>
  );
}
