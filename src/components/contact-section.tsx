"use client";

import { Section } from "@/src/components/layout/section";
import { SectionHeading } from "@/src/components/section-heading";
import { ContactForm } from "@/src/components/contact-form";
import { KONTAKT_ANCHOR } from "@/src/lib/contact-anchor";

/** Inline contact section — used in full-site mode. Launch mode uses ContactModal instead. */
export function ContactSection() {
  return (
    <Section id={KONTAKT_ANCHOR} className="scroll-mt-28 bg-[#0a1c2e]">
      <div className="mx-auto max-w-3xl space-y-10">
        <SectionHeading
          eyebrow="Kontakt"
          title="Lad os tage en snak"
          description="Fortæl os kort om jeres virksomhed og hvad I er interesseret i. Vi vender tilbage hurtigst muligt."
        />
        <div className="bg-[#0f2438] p-6 sm:p-8">
          <ContactForm idPrefix="contact-section" />
        </div>
      </div>
    </Section>
  );
}
