"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ContactModal } from "@/src/components/contact-modal";

export function SiteHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const navLinkClass = (href: string) =>
    `transition-colors hover:text-[#00f4c8] ${pathname === href ? "text-[#00f4c8]" : ""}`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
          <Link href="/" aria-label="LykkeLiga" className="flex items-center">
            <Image
              src="/lykkeliga-logo.svg"
              alt="LykkeLiga"
              width={156}
              height={40}
              className="h-9 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>
          <nav className="flex items-center gap-3 text-xs text-zinc-300 sm:gap-5 sm:text-sm">
            <Link href="/cases" className={navLinkClass("/cases")}>
              Cases
            </Link>
            <Link href="/kampagner" className={navLinkClass("/kampagner")}>
              Kampagner
            </Link>
            <Link href="/legekammerat" className={navLinkClass("/legekammerat")}>
              Bliv legekammerat
            </Link>
            <Link href="/om" className={navLinkClass("/om")}>
              Om
            </Link>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="border border-[#00f4c8]/50 bg-[#00f4c8]/10 px-2.5 py-1 text-[11px] font-medium text-zinc-100 transition-colors hover:border-[#00f4c8] sm:px-3 sm:py-1.5 sm:text-xs"
            >
              Book en snak
            </button>
          </nav>
        </div>
      </header>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book en snak"
      />
    </>
  );
}
