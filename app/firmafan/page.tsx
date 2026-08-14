"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";
import { ContactModal } from "@/src/components/contact-modal";
import { OverviewGroup, PackageCard } from "@/src/components/sponsor-package";

const firmafans = [
  {
    slug: "firmafan-bronze",
    title: "Firmafan Bronze",
    price: "Kr. 5.000 pr. år",
    description:
      "Som firmafan træder din virksomhed ind i LykkeLigas B2B Fanklub med virksomheder fra hele landet. 2 gange om året modtager du “LykkeLiga-FanPost”, hvor nye medlemmer introduceres, og du kan komme tæt på udviklingen i den lykkelige liga.",
    includes: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter og hvor man bliver annonceret som ny firmafan",
    ],
  },
  {
    slug: "firmafan-soelv",
    title: "Firmafan Sølv",
    price: "Kr. 10.000 pr. år",
    description:
      "Som firmafan træder din virksomhed ind i LykkeLigas B2B Fanklub med virksomheder fra hele landet. Sølv-niveauet giver dig mere synlighed og mulighed for at opleve LykkeCup tæt på.",
    includes: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter – hvor man bliver annonceret som ny firmafan",
      "5 x billetter til LykkeCup",
      "Logo på LykkeLigas www-sponsorside",
    ],
  },
  {
    slug: "firmafan-guld",
    title: "Firmafan Guld",
    price: "Kr. 25.000 pr. år",
    description:
      "Firmafan Guld er det stærkeste firmafan-niveau. Du får synlighed, anerkendelse og konkrete oplevelser, der gør det nemt at vise, at I støtter Danmarks lykkeligste liga.",
    includes: [
      "Grafik med “Vi støtter LykkeLiga”, som kan bruges på hjemmeside og i mailsignatur",
      "2 årlige FanPost-hilsner, der bl.a. fortæller om LykkeLigas aktiviteter og hvor man bliver annonceret som ny firmafan",
      "5 x billetter til LykkeCup",
      "Logo på LykkeLigas www-sponsorside",
      "1 stk. LykkeLiga t-shirt",
      "Støttediplom",
      "10 autografpostkort fra vores spillere",
    ],
  },
];

const overviewColumns = [
  { slug: "firmafan-bronze", title: "Bronze" },
  { slug: "firmafan-soelv", title: "Sølv" },
  { slug: "firmafan-guld", title: "Guld" },
];

const overviewRows = [
  {
    feature: "Grafik: “Vi støtter LykkeLiga”",
    includedIn: ["firmafan-bronze", "firmafan-soelv", "firmafan-guld"],
  },
  {
    feature: "2 årlige FanPost-hilsner",
    includedIn: ["firmafan-bronze", "firmafan-soelv", "firmafan-guld"],
  },
  {
    feature: "5 x billetter til LykkeCup",
    includedIn: ["firmafan-soelv", "firmafan-guld"],
  },
  {
    feature: "Logo på LykkeLigas sponsorside",
    includedIn: ["firmafan-soelv", "firmafan-guld"],
  },
  {
    feature: "T-shirt, støttediplom og autografpostkort",
    includedIn: ["firmafan-guld"],
  },
];

export default function FirmafanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container className="py-24 sm:py-28">
        <section className="space-y-16">
          <SectionHeading
            eyebrow="Den nemme vej ind"
            title="Bliv FirmaFan"
            description="En enkel måde at bakke op om LykkeLiga. Som firmafan træder din virksomhed ind i LykkeLigas B2B Fanklub med virksomheder fra hele landet."
          />

          <div className="mx-auto max-w-4xl space-y-4 text-zinc-300">
            <p>
              2 gange om året modtager du “LykkeLiga-FanPost”, hvor nye medlemmer introduceres, og du kan
              komme tæt på udviklingen i den lykkelige liga.
            </p>
            <p>
              Som firmafan får du mulighed for tilkøb af LykkeLiga produkter. Fx synlighed på
              spiller/træner-t-shirts, køb af foredrag m.m. Firmafans får et særligt link til vores fanshop,
              hvor man kan købe LykkeLiga tøj til favorabel pris.
            </p>
            <p>
              Vil I mere end at støtte?{" "}
              <Link href="/partnerskaber" className="font-semibold text-[#00b3a4] hover:text-[#00f4c8]">
                Se vores partnerskaber
              </Link>
              .
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {firmafans.map((item) => (
              <PackageCard
                key={item.slug}
                item={item}
                label="Firmafan"
                onOrder={() => setIsModalOpen(true)}
              />
            ))}
          </div>

          <section className="mx-auto max-w-4xl space-y-8 bg-[#0f2438] p-5 sm:p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">Overblik</h3>
              <p className="text-zinc-300">Bronze → Sølv → Guld. Samme koncept. Tre niveauer.</p>
            </div>
            <OverviewGroup title="FirmaFan" columns={overviewColumns} rows={overviewRows} />
          </section>
        </section>
      </Container>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Bestil Firmafan" />
    </>
  );
}
