"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { contactHref } from "@/src/lib/contact-anchor";

type PartnershipTier = {
  stage: string;
  title: string;
  price: string;
  examples: string;
  description?: string;
  bullets: string[];
  featured?: boolean;
};

const partnershipTiers: PartnershipTier[] = [
  {
    stage: "Støtter",
    title: "Liga-ven",
    price: "Kr. 75.000 pr. år",
    examples: "F.eks. Colgate, Thorlund Skou",
    description:
      "For virksomheder, som har lidt ekstra midler, de gerne vil gøre en god gerning med. Udover fordelene i Firmafan Guld-pakken får du som Liga-ven adgang til omtale på LykkeLigas hjemmeside og sociale medier – og selvfølgelig i vores FanPost-hilsner til erhvervssponsorer i LykkeLiga. Som Liga-ven får du også 2 x billetter til vores VIP-event til LykkeCup.",
    bullets: [
      "Fordele indeholdt i Firmafan Guld",
      "Omtale på LykkeLigas hjemmeside og sociale medier",
      "Omtale i FanPost-hilsner til erhvervssponsorer",
      "2 x billetter til VIP-event til LykkeCup",
    ],
  },
  {
    stage: "Samarbejdspartner",
    title: "Ligasponsor",
    price: "Kr. 150.000 pr. år",
    examples: "F.eks. Bridgestone, Uniqlo og Socialpædagogerne",
    description:
      "Som Ligasponsor bliver din virksomhed en synlig og aktiv del af LykkeLigas hverdag. Det er også på dette niveau, at vi åbner op for aktiviteter og synlighed med vores spillere.",
    bullets: [
      "De fordele, der er indeholdt i Firmafan Guld og Liga-ven aftalerne",
      "Adgang til VIP-eventet Lykke og Lagkage (LykkeCup)",
      "Mulighed for aktiviteter og kampagner med børnene",
      "Eksponering på LykkeLigas sociale medier",
    ],
  },
  {
    stage: "Aktiv medspiller",
    title: "Legeaftale",
    price: "Min. 250.000 kr. pr. år",
    examples: "F.eks. Blue Water, Lidl og Louis Nielsen",
    description:
      "Med en Partneraftale har din virksomhed mulighed for at blive en synlig og aktiv del af LykkeLigas hverdag. En Legeaftale åbner for aktiviteter, kampagner og synlighed tættere på målgruppen.",
    bullets: [
      "Synlighed til LykkeCup",
      "Adgang til VIP-eventet Lykke og Lagkage (LykkeCup)",
      "Mulighed for aktiviteter og kampagner med børnene",
      "1 valgfrit årligt foredrag om LykkeLiga",
      "Eksponering på LykkeLigas sociale medier",
      "De fordele, der er indeholdt i Firmafan Guld og Liga-ven aftalerne",
    ],
  },
  {
    stage: "En del af LykkeLiga-familien",
    title: "Legekammerat",
    price: "Min. 500.000 kr. pr. år",
    examples: "F.eks. Normal og Teknisk Landsforbund",
    featured: true,
    description:
      "Udover de fordele en legeaftale giver, får du som legekammerat en aktiv plads i LykkeLiga-familien. Her arbejder vi sammen om at skabe lykke og fællesskab i målgruppen. Legekammeraten er en synlig spiller i LykkeLigas hverdag – og får synlighed til LykkeCup, VIP Lykke og Lagkage og aktiviteter med målgruppen. En legekammerat har LykkeLiga som en hjertesag, der gennemsyrer hele organisationen. Løbende møder og planlægning af fælles aktiviteter.",
    bullets: [
      "Synlighed til LykkeCup",
      "Adgang til VIP-eventet Lykke og Lagkage (LykkeCup)",
      "Mulighed for aktiviteter og kampagner med børnene",
      "1 valgfrit årligt foredrag om LykkeLiga",
      "Eksponering på LykkeLigas sociale medier",
      "De fordele, der er indeholdt i Firmafan Guld og Liga-ven aftalerne",
      "Aktiv plads i LykkeLiga-familien med løbende møder og fælles planlægning",
    ],
  },
];

function PartnershipTierModal({
  tier,
  onClose,
}: {
  tier: PartnershipTier;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[55] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Luk pakkeoversigt"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="partnership-tier-title"
        className="relative z-10 flex max-h-[min(85vh,760px)] w-full max-w-xl flex-col overflow-hidden bg-[#0f2438] shadow-2xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">
              {tier.stage}
            </p>
            <h3 id="partnership-tier-title" className="mt-2 text-3xl font-bold text-white">
              {tier.title}
            </h3>
            <p className="mt-1 text-xl font-semibold text-[#00f4c8]">{tier.price}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white"
            aria-label="Luk"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          {tier.description ? (
            <p className="text-sm leading-relaxed text-white/75">{tier.description}</p>
          ) : null}

          <p className={`text-sm font-semibold text-white/85 ${tier.description ? "mt-6" : ""}`}>
            Du får:
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
            {tier.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[#00b3a4]">–</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-medium text-[#00f4c8]/90">{tier.examples}</p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 border-t border-white/10 p-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/40"
          >
            Luk
          </button>
          <a
            href={contactHref("partner")}
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-[#00b3a4] px-5 py-2 text-sm font-semibold text-white hover:bg-[#00c9b8]"
          >
            Kontakt os
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function PartnershipTiers() {
  const [activeTier, setActiveTier] = useState<PartnershipTier | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {partnershipTiers.map((tier) => (
          <button
            key={tier.title}
            type="button"
            onClick={() => setActiveTier(tier)}
            className={`group flex h-full flex-col rounded-2xl border p-6 text-left transition-colors sm:p-7 ${
              tier.featured
                ? "border-[#00b3a4]/35 bg-gradient-to-br from-[#164556] via-[#123347] to-[#0a1c2e] hover:border-[#00f4c8]/50"
                : "border-white/10 bg-[#0f2438] hover:border-[#00b3a4]/40"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00b3a4]">
              {tier.stage}
            </p>
            <h4 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{tier.title}</h4>
            <p className="mt-2 text-lg font-semibold text-[#00f4c8]">{tier.price}</p>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-white/65">{tier.examples}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#00f4c8]">
              Se hvad du får
              <ArrowRight size={15} />
            </span>
          </button>
        ))}
      </div>

      {activeTier ? (
        <PartnershipTierModal tier={activeTier} onClose={() => setActiveTier(null)} />
      ) : null}
    </>
  );
}
