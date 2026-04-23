import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";

type PackagePageProps = {
  title: string;
  description: string;
};

export function PackagePage({ title, description }: PackagePageProps) {
  return (
    <Container className="py-16 sm:py-24">
      <section className="space-y-8">
        <SectionHeading eyebrow="Legekammerat pakke" title={title} description={description} />
        <div className="border border-white/10 bg-zinc-900/60 p-8 text-zinc-300">
          Placeholder content: Her kan I indsætte detaljer om leverancer, aktivering, timeline og
          partnerfordele for {title.toLowerCase()}-pakken.
        </div>
      </section>
    </Container>
  );
}
