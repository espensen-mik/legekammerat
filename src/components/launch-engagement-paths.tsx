import { FirmafanTiers } from "@/src/components/firmafan-tiers";
import { PartnershipTiers } from "@/src/components/partnership-tiers";

export function LaunchEngagementPaths() {
  return (
    <div className="space-y-20">
      <section id="firmafan" className="scroll-mt-28 space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold text-[#00b3a4]">Støt LykkeLiga som virksomhed</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">FirmaFan</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Træd ind i Danmarks lykkeligste fanklub for virksomheder. Vis jeres fælles støtte til de mange
            håndboldstjerner i LykkeLiga
          </p>
          <p className="text-base leading-relaxed text-white/60">
            Som firmafan får du mulighed for tilkøb af LykkeLiga produkter. Fx synlighed på spiller/træner-t-shirts,
            køb af foredrag m.m. Firmafans får et særligt link til vores fanshop, hvor man kan købe LykkeLiga tøj
            til favorabel pris.
          </p>
        </div>

        <FirmafanTiers />
      </section>

      <section id="partnerskab" className="scroll-mt-28 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold text-[#00b3a4]">Helt tæt på lykken</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Partnerskab med LykkeLiga</h2>
          <p className="text-lg leading-relaxed text-white/70">
            Vores partnerskaber er for virksomheder, der vil mere end at støtte. Sammen skaber vi synlighed,
            aktiviteter og oplevelser, der gør en reel forskel for børn og unge med udviklingshandicap.
          </p>
        </div>

        <PartnershipTiers />
      </section>
    </div>
  );
}
