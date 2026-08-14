import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FirmaFan | LykkeLiga",
  description:
    "Bliv FirmaFan og træd ind i LykkeLigas B2B Fanklub. Bronze, Sølv og Guld fra 5.000 kr. om året.",
};

export default function FirmafanLayout({ children }: { children: React.ReactNode }) {
  return children;
}
