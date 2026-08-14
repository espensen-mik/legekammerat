import Link from "next/link";
import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";
import { OverviewGroup, PackageCard } from "@/src/components/sponsor-package";

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
  { slug: "liga-ven", title: "Liga-ven" },
  { slug: "ligasponsor", title: "Ligasponsor" },
  { slug: "legeaftale", title: "Legeaftale" },
  { slug: "legekammerat", title: "Legekammerat" },
];

const overviewRows = [
  {
    feature: "Fordele fra Firmafan Guld",
    includedIn: ["liga-ven", "ligasponsor", "legeaftale", "legekammerat"],
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

export default function PartnerskaberPage() {
  return (
    <Container className="py-24 sm:py-28">
      <section className="space-y-16">
        <SectionHeading
          eyebrow="Samarbejde"
          title="Skal vi skabe noget sammen?"
          description="Vores partnerskaber er for virksomheder, der vil mere end at støtte. Sammen skaber vi synlighed, aktiviteter og oplevelser, der gør en reel forskel for børn og unge med udviklingshandicap."
        />

        <div className="mx-auto max-w-4xl space-y-4 text-zinc-300">
          <p>
            Med en Partneraftale har din virksomhed mulighed for at blive en synlig og aktiv del af
            LykkeLigas hverdag. Det er også her, vi åbner op for aktiviteter og synlighed med vores spillere.
          </p>
          <p>
            Vil I starte med at bakke op?{" "}
            <Link href="/firmafan" className="font-semibold text-[#00b3a4] hover:text-[#00f4c8]">
              Se FirmaFan
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          {partnerPackages.map((item) => (
            <PackageCard key={item.slug} item={item} label="Partneraftale" />
          ))}
        </div>

        <section className="mx-auto max-w-4xl space-y-8 bg-[#0f2438] p-5 sm:p-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">Overblik</h3>
            <p className="text-zinc-300">
              Støtter → samarbejdspartner → aktiv medspiller → en del af LykkeLiga-familien.
            </p>
          </div>
          <OverviewGroup title="Partnerskaber" columns={overviewColumns} rows={overviewRows} />
        </section>
      </section>
    </Container>
  );
}
