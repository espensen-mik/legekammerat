 "use client";

import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";
import { useState } from "react";

const packages = [
  {
    slug: "firmafan",
    title: "FirmaFan",
    price: "10.000 kr",
    description:
      "Med denne aftale træder din virksomhed ind i LykkeLigas B2B Fanklub bestående af virksomheder fra hele landet. Medarbejderne i din virksomhed kan bryste sig af, at deres arbejdsplads støtter Danmarks lykkeligste Liga. I modtager herefter B2B nyhedsbrevet “LykkeLiga FanPost,” hvor nye medlemmer introduceres og du kan læse om udviklingen i den lykkelige liga.",
    includes: [
      "Medlemskab af Danmarks lykkeligste FirmaFan klub",
      "SoMe grafik til at prale af medlemsskab",
      "E-mail grafik",
      "Webbanner",
      "Fysisk diplom til arbejdspladsen",
    ],
  },
  {
    slug: "ligasponsor",
    title: "LigaSponsor",
    price: "50.000 kr",
    description:
      "Et LykkeLiga Ligasponsorat betyder, at din virksomhed træder helt ind i vores fællesskab og kan prale af at være med til at støtte Danmarks både lykkeligste og sejeste håndboldstjerner.",
    includes: [
      "Medlemskab af Danmarks lykkeligste FirmaFan klub",
      "SoMe grafik til at prale af medlemsskab",
      "E-mail grafik",
      "Webbanner",
      "Deltagelse til LykkeLigas VIP arrangement “Lykke & Lagkage” (1 person)",
      "Synlighed med logo til “Lykke & Lagkage”",
    ],
  },
  {
    slug: "legeaftale",
    title: "Legeaftale",
    price: "250.000 kr.",
    description:
      "Med en LykkeLiga LegeAftale kommer du endnu tættere på LykkeLiga spillerne og har mulighed for at gennemføre lykkelige events for både spillere og deres familier. Med en Legeaftale åbner du også for muligheden for at anvende LykkeLigas brand i din markedsføring med en egentlig LykkeLiga-kampagne.",
    includes: [
      "Medlemskab af Danmarks lykkeligste FirmaFan klub",
      "SoMe grafik til at prale af medlemsskab",
      "E-mail grafik",
      "Webbanner",
      "Fysisk diplom til arbejdspladsen",
      "Deltagelse til LykkeLigas VIP arrangement “Lykke & Lagkage” (2 personer)",
      "Synlighed med logo til “Lykke & Lagkage”",
      "1 stk. LykkeLiga håndboldtrøje i ramme med virksomhedens logo på maven",
      "Mulighed for 1 årligt oplæg med repræsentant fra LykkeLiga om fx lykke, trivsel og håndbold",
      "Mulighed for at afholde lykkelige events eller aktiviteter med LykkeLiga spillere",
      "Mulighed for at gennemføre kampagneaktivitet med brug af LykkeLigas brand",
      "Mulighed for tilkøb af logo på “LykkeLiga Fællesskabstrøje” som releases hvert 2. år",
    ],
  },
  {
    slug: "legekammerat",
    title: "LegeKammerat",
    price: "Min. 500.000 kr.",
    description:
      "Som LykkeLiga Legekammerat kommer du helt indenfor dørene i Danmarks lykkeligste liga. Du kan sidde med ved bordet, når der skal planlægges LykkeCup og gennemføre kampagner i samarbejde med LykkeLiga. Det her - det er ægte BFF!",
    includes: [
      "Medlemskab af Danmarks lykkeligste FirmaFan klub",
      "SoMe grafik til at prale af medlemsskab",
      "E-mail grafik",
      "Webbanner",
      "Fysisk diplom til arbejdspladsen",
      "Deltagelse til LykkeLigas VIP arrangement “Lykke & Lagkage” (2 personer)",
      "Synlighed med valgfri tilstedeværelse til “Lykke & Lagkage”",
      "1 stk. LykkeLiga håndboldtrøje i ramme med virksomhedens logo på maven",
      "Mulighed for 1 årligt oplæg med repræsentant fra LykkeLiga om fx lykke, trivsel og håndbold",
      "Mulighed for at afholde lykkelige events eller aktiviteter med LykkeLiga spillere",
      "Mulighed for at gennemføre kampagneaktivitet med brug af LykkeLigas brand og i samarbejde med LykkeLigas kreative team",
      "Aktivitet, event eller tilstedeværelse til LykkeCup - Danmarks lykkeligste sæsonfinale",
      "Mulighed for tilkøb af logo på “LykkeLiga Fællesskabstrøje” som releases hvert 2. år",
      "Mulighed for at benytte sig af LykkeLigas lykkelige klubhus i Aalborg",
      "Min. 2 årlige møder, hvor der planlægges fælles aktiviteter",
      "Omtale på LykkeLigas SoMe-kanaler",
    ],
  },
];

const overviewRows = [
  {
    feature: "Medlemskab af Danmarks lykkeligste FirmaFan klub",
    includedIn: ["firmafan", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "SoMe grafik, e-mail grafik og webbanner",
    includedIn: ["firmafan", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "Fysisk diplom til arbejdspladsen",
    includedIn: ["firmafan", "ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "Lykke & Lagkage VIP deltagelse",
    includedIn: ["ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "Synlighed med logo til Lykke & Lagkage",
    includedIn: ["ligasponsor", "legeaftale", "legekammerat"],
  },
  {
    feature: "LykkeLiga håndboldtrøje i ramme med logo",
    includedIn: ["legeaftale", "legekammerat"],
  },
  {
    feature: "Mulighed for oplæg og events med LykkeLiga",
    includedIn: ["legeaftale", "legekammerat"],
  },
  {
    feature: "Kampagne med brug af LykkeLigas brand",
    includedIn: ["legeaftale", "legekammerat"],
  },
  {
    feature: "Aktivitet eller tilstedeværelse til LykkeCup",
    includedIn: ["legekammerat"],
  },
  {
    feature: "Klubhus adgang + fælles planlægningsmøder",
    includedIn: ["legekammerat"],
  },
];

export default function LegekammeratPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container className="py-16 sm:py-24">
        <section className="space-y-16">
          <SectionHeading
            eyebrow="Bliv legekammerat"
            title="Partnerskabsmodeller i LykkeLiga"
            description="Her finder I fire tydelige modeller, som gør det let at vælge det rette niveau for jeres engagement i Danmarks lykkeligste fællesskab."
          />

          <div className="mx-auto grid max-w-4xl gap-8">
            {packages.map((item) => (
              <article key={item.slug} id={item.slug} className="border border-white/15 bg-zinc-800/40 p-7">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">
                    Partnerskabsmodel
                  </p>
                  <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="whitespace-nowrap text-2xl font-semibold tracking-tight text-[#99ffe9]">
                    {item.price}
                  </p>
                </div>

                <p className="mt-6 text-zinc-300">{item.description}</p>

                <div className="mt-8 space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-200">
                    Pakken inkluderer
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    {item.includes.map((feature, featureIndex) => (
                      <li
                        key={feature}
                      className={`flex w-full items-start gap-2 border border-white/8 px-3 py-2 ${
                          featureIndex % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"
                        }`}
                      >
                      <span className="shrink-0 pt-0.5 text-[#00f4c8]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.slug === "firmafan" ? (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="mt-8 rounded-full border border-[#00f4c8]/50 px-5 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-[#00f4c8]"
                  >
                    Bestil her
                  </button>
                ) : null}
              </article>
            ))}
          </div>

          <section className="mx-auto max-w-4xl space-y-6 border border-white/15 bg-zinc-800/30 p-5 sm:p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">Overblik</h3>
              <p className="text-zinc-300">
                Et hurtigt overblik over, hvad der er inkluderet i de fire modeller.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm text-zinc-300">
                    <th className="px-4 py-3 font-medium">Indhold</th>
                    <th className="whitespace-nowrap px-4 py-3 font-medium">FirmaFan</th>
                    <th className="whitespace-nowrap px-4 py-3 font-medium">LigaSponsor</th>
                    <th className="whitespace-nowrap px-4 py-3 font-medium">Legeaftale</th>
                    <th className="whitespace-nowrap px-4 py-3 font-medium">LegeKammerat</th>
                  </tr>
                </thead>
                <tbody>
                  {overviewRows.map((row, rowIndex) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/5 text-sm text-zinc-200 ${
                        rowIndex % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
                      }`}
                    >
                      <td className="px-4 py-3 text-zinc-300">{row.feature}</td>
                      {packages.map((pkg) => (
                        <td key={`${row.feature}-${pkg.slug}`} className="px-4 py-3 text-center">
                          {row.includedIn.includes(pkg.slug) ? (
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
          </section>
        </section>
      </Container>

      {isModalOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-lg border border-white/15 bg-zinc-900 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">
                  Kontakt
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-zinc-100">Bestil FirmaFan</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                Luk
              </button>
            </div>

            <form className="mt-6 space-y-4">
              <div className="space-y-1">
                <label className="text-sm text-zinc-300">Navn</label>
                <input
                  type="text"
                  placeholder="Dit navn"
                  className="w-full border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-zinc-300">E-mail</label>
                <input
                  type="email"
                  placeholder="navn@virksomhed.dk"
                  className="w-full border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-zinc-300">Virksomhed</label>
                <input
                  type="text"
                  placeholder="Virksomhedsnavn"
                  className="w-full border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-zinc-300">Besked</label>
                <textarea
                  placeholder="Fortæl kort om jeres interesse..."
                  rows={4}
                  className="w-full border border-white/15 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="border border-white/15 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-white/40"
                >
                  Annuller
                </button>
                <button
                  type="button"
                  className="border border-[#00f4c8]/50 bg-[#00f4c8]/10 px-4 py-2 text-sm font-medium text-zinc-100"
                >
                  Send forespørgsel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
