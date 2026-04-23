import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";

export default function OmPage() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="space-y-8">
        <SectionHeading
          title="Om LykkeLiga"
          description="LykkeLiga arbejder for et inkluderende fællesskab, hvor børn med udviklingshandicap kan opleve glæden ved håndbold, bevægelse og holdånd."
        />
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          Placeholder text: Her kan I fortælle om mission, historie, organisation og den impact,
          LykkeLiga skaber sammen med partnere over hele landet.
        </p>
      </section>
    </Container>
  );
}
