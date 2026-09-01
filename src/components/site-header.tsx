"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { ContactModal } from "@/src/components/contact-modal";

const navItems = [
  { href: "/", label: "Forside" },
  { href: "/firmafan", label: "FirmaFan" },
  { href: "/partnerskaber", label: "Partner" },
  { href: "/cases", label: "Cases" },
  { href: "/om", label: "Om LykkeLiga" },
];

export function SiteHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06111c]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
          <Link href="/" aria-label="LykkeLiga" className="flex shrink-0 items-center">
            <Image
              src="/lykkeliga-logo.svg"
              alt="LykkeLiga"
              width={156}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert sm:h-9"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-white/75 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-white ${
                  isActive(item.href) ? "text-[#00f4c8]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#e07a6a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#d46b5c]"
            >
              <Heart size={13} />
              Book en snak
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="border-t border-white/10 bg-[#06111c] px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-white/80">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-1 ${isActive(item.href) ? "text-[#00f4c8]" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book en snak"
      />
    </>
  );
}
