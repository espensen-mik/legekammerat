import { CaseCard } from "@/src/components/case-card";
import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";
import { cases } from "@/src/data/cases";

export default function CasesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="space-y-12">
        <SectionHeading
          eyebrow="Partner cases"
          title="Cases med reel effekt."
          description="Hvert samarbejde er designet til at skabe nærværende oplevelser og langvarig værdi."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((item) => (
            <CaseCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </Container>
  );
}
