import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases | LykkeLiga",
  description: "Se samarbejder og cases fra LykkeLigas kommercielle partnerskaber.",
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
