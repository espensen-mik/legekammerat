import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";

const facts = [
  { value: "1.511", label: "spillere i Danmark" },
  { value: "81", label: "hold" },
  { value: "509", label: "trænere" },
  { value: "62", label: "kommuner med mindst 1 LykkeLigahold" },
  { value: "150.000", label: "følgere på SoMe" },
  { value: "13,5%", label: "af danskere i målgruppen spiller LykkeLiga håndbold" },
];

const reasons = [
  "Vær med til at gøre en samfundsmæssig forskel",
  "Spred lykke - LykkeLiga er lig med glæde, fællesskab og positiv energi",
  "ESG / Social impact",
  "Bliv en del af en stærk og autentisk fortælling",
  "Medarbejderengagement / frivillighed. Sammen om en god sag",
  "Genvej til kreativ synlighed sammen med en ekstraordinær målgruppe",
  "Sammen styrker vi fællesskaber for en udfordret målgruppe",
  "En fælles indsats for at styrke trivsel og sundhed hos målgruppen",
];

export default function OmPage() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="space-y-14">
        <SectionHeading
          title="Om LykkeLiga"
          description="Velkommen i en helt anden liga"
        />

        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-300">
          <p>
            Her er vi superstjerner, ekstraordinære talenter, cheftrænere og guldvindere. Bøvl, brok og
            diagnoser hænger vi på en knage i omklædningsrummet. I stedet hylder vi hinanden og alt det,
            vi kan sammen – uanset hvad “du døjer med”.
          </p>
          <p>
            LykkeLiga er et nationalt håndboldfællesskab for børn og unge med funktionsnedsættelser. Vores
            håndboldhold er organiseret i helt almindelige håndboldforeninger men indgår sammen i et trygt,
            positivt og sjovt fællesskab på tværs af Danmark. Fællesskabet inkluderer også LykkeLiga-spillernes
            familier og de mange frivillige, som skaber lykke ude i hallerne.
          </p>
          <p>
            LykkeLiga sigter efter, at børn og unge med funktionsnedsættelser trives mentalt, fysisk og
            socialt på lige fod med andre – og at idræt og fællesskab er en naturlig del af deres hverdag.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Fakta om LykkeLiga</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-white/15 pt-4">
                <p className="text-3xl font-semibold tracking-tight text-[#99ffe9]">{fact.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{fact.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-400">
            Hold i Danmark inkl. Færøerne og Grønland, Tyskland og Sverige. 378 spillere over 18 år. 44 timer
            om året bruger spillerne i gennemsnit i vores fællesskab.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Lykkelige grunde til at støtte LykkeLiga
          </h2>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="border-l border-white/20 pl-4 text-sm leading-relaxed text-zinc-300">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}
