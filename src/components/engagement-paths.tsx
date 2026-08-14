import Link from "next/link";
import { ArrowRight } from "lucide-react";

const firmafanLevels = [
  {
    title: "Bronze",
    price: "5.000 kr / år",
    bullets: ["Grafik: “Vi støtter LykkeLiga”", "2 årlige FanPost-hilsner"],
    href: "/legekammerat#firmafan-bronze",
  },
  {
    title: "Sølv",
    price: "10.000 kr / år",
    bullets: ["Alt i Bronze", "5 x billetter til LykkeCup", "Logo på sponsorsiden"],
    href: "/legekammerat#firmafan-soelv",
  },
  {
    title: "Guld",
    price: "25.000 kr / år",
    bullets: ["Alt i Sølv", "T-shirt + støttediplom", "10 autografpostkort"],
    href: "/legekammerat#firmafan-guld",
  },
];

const partnershipTiers = [
  {
    stage: "Støtter",
    title: "Liga-ven",
    price: "75.000 kr / år",
    bullets: ["Inkl. Firmafan Guld", "Omtale på hjemmeside og SoMe", "2 x VIP-billetter til LykkeCup"],
    href: "/legekammerat#liga-ven",
    cta: "Se partnerskabet",
  },
  {
    stage: "Samarbejdspartner",
    title: "Ligasponsor",
    price: "150.000 kr / år",
    bullets: ["VIP Lykke og Lagkage", "Aktiviteter med børnene", "Eksponering på SoMe"],
    href: "/legekammerat#ligasponsor",
    cta: "Se mulighederne",
  },
  {
    stage: "Aktiv medspiller",
    title: "Legeaftale",
    price: "Min. 250.000 kr / år",
    bullets: ["Synlighed til LykkeCup", "1 årligt foredrag", "Kampagner med børnene"],
    href: "/legekammerat#legeaftale",
    cta: "Se partnerskabet",
  },
];

export function EngagementPaths() {
  return (
    <div className="space-y-20">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">To måder at være med</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Velkommen i en helt anden liga</h2>
          <p className="text-lg leading-relaxed text-white/70">
            I kan bakke LykkeLiga op som FirmaFan - eller træde ind i et egentligt partnerskab, hvor vi skaber
            noget sammen.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="#firmafan"
            className="group border border-white/10 bg-[#0f2438] p-7 transition-colors hover:border-[#00b3a4]/50"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Den nemme vej ind</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Bliv FirmaFan</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">En enkel måde at støtte LykkeLiga</p>
            <p className="mt-5 text-lg font-semibold text-[#00f4c8]">Fra 5.000 kr / år</p>
          </a>
          <a
            href="#partnerskaber"
            className="group border border-[#00b3a4]/30 bg-[#123347] p-7 transition-colors hover:border-[#00f4c8]/60"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">Samarbejde</p>
            <h3 className="mt-3 text-2xl font-bold text-white">Bliv partner</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Skab aktiviteter, synlighed og værdi sammen med os
            </p>
            <p className="mt-5 text-lg font-semibold text-[#00f4c8]">Fra 75.000 kr / år</p>
          </a>
        </div>
      </div>

      <section id="firmafan" className="scroll-mt-28 space-y-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">Den nemme vej ind</p>
          <h3 className="text-3xl font-bold text-white">FirmaFan</h3>
          <p className="text-white/70">En enkel måde at bakke op om LykkeLiga.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f2438]">
          <div className="grid md:grid-cols-3">
            {firmafanLevels.map((level, index) => (
              <Link
                key={level.title}
                href={level.href}
                className={`group relative p-6 transition-colors hover:bg-white/[0.03] md:p-7 ${
                  index < firmafanLevels.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  {String(index + 1).padStart(2, "0")} / FirmaFan
                </p>
                <h4 className="mt-3 text-2xl font-bold text-white">{level.title}</h4>
                <p className="mt-1 text-lg font-semibold text-[#00f4c8]">{level.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {level.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {index < firmafanLevels.length - 1 ? (
                  <span className="absolute right-3 top-7 hidden text-[#00b3a4]/50 md:block">→</span>
                ) : null}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
            <p className="text-sm text-white/55">Bronze → Sølv → Guld. Samme koncept. Tre niveauer.</p>
            <Link
              href="/legekammerat#firmafan-bronze"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00b3a4] hover:text-[#00f4c8]"
            >
              Bliv FirmaFan
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section id="partnerskaber" className="scroll-mt-28 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">Partnerskaber</p>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Skal vi skabe noget sammen?</h3>
          <p className="text-lg leading-relaxed text-white/70">
            Vores partnerskaber er for virksomheder, der vil mere end at støtte. Sammen skaber vi synlighed,
            aktiviteter og oplevelser, der gør en reel forskel for børn og unge med udviklingshandicap.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {partnershipTiers.map((tier, index) => (
            <article
              key={tier.title}
              className={`flex flex-col rounded-2xl border border-white/10 p-6 sm:p-7 ${
                index === 0 ? "bg-[#0c1d2e]" : index === 1 ? "bg-[#102538]" : "bg-[#143044]"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">{tier.stage}</p>
              <h4 className="mt-3 text-2xl font-bold text-white">{tier.title}</h4>
              <p className="mt-1 text-lg font-semibold text-[#00f4c8]">{tier.price}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-white/70">
                {tier.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#00f4c8]"
              >
                {tier.cta}
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>

        <article className="relative overflow-hidden rounded-2xl border border-[#00b3a4]/35 bg-gradient-to-br from-[#164556] via-[#123347] to-[#0a1c2e] p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#00f4c8]/10" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00f4c8]">
                  En del af LykkeLiga-familien
                </p>
                <span className="rounded-full bg-[#00b3a4]/20 px-3 py-1 text-xs font-semibold text-[#9dffe8]">
                  Tætteste partnerskab
                </span>
              </div>
              <h4 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Legekammerat</h4>
              <p className="text-xl font-semibold text-[#00f4c8]">Min. 500.000 kr / år</p>
              <p className="max-w-2xl text-base leading-relaxed text-white/75">
                Det tætteste kommercielle partnerskab. Her er LykkeLiga en hjertesag, der gennemsyrer
                organisationen - med fælles planlægning, synlighed og aktiviteter tæt på spillerne.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Aktiv plads i LykkeLiga-familien</li>
                <li>Løbende fælles planlægning</li>
                <li>Hjertesag i hele organisationen</li>
              </ul>
            </div>
            <div className="lg:text-right">
              <Link
                href="/legekammerat#legekammerat"
                className="inline-flex items-center gap-2 rounded-full bg-[#00b3a4] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#00c9b8]"
              >
                Tal med os
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
