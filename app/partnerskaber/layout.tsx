import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner | LykkeLiga",
  description:
    "Bliv partner med LykkeLiga: Liga-ven, Ligasponsor, Legeaftale og Legekammerat. Skab synlighed, aktiviteter og værdi sammen med os.",
};

export default function PartnerskaberLayout({ children }: { children: React.ReactNode }) {
  return children;
}
