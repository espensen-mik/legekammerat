"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Heart, Mail, Phone } from "lucide-react";
import { ContactModal } from "@/src/components/contact-modal";

const navItems = [
  { href: "/", label: "Forside" },
  { href: "/cases", label: "Partnere" },
  { href: "/kampagner", label: "Kampagner" },
  { href: "/legekammerat", label: "Bliv legekammerat" },
  { href: "/om", label: "Om" },
];

export function SiteHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-[#06111c]">
          <nav className="mx-auto flex w-full max-w-7xl items-center gap-4 overflow-x-auto px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 sm:px-10 sm:text-xs">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap transition-colors hover:text-white ${
                  isActive(item.href) ? "text-[#00f4c8]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-b border-white/10 bg-[#0a1c2e]/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-10">
            <Link href="/" aria-label="LykkeLiga" className="flex items-center">
              <Image
                src="/lykkeliga-logo.svg"
                alt="LykkeLiga"
                width={156}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert sm:h-10"
                priority
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              <a href="tel:53803017" className="flex items-center gap-3 text-sm text-white/85">
                <Phone size={16} className="text-[#00b3a4]" />
                <span>
                  <span className="block font-semibold">53 80 30 17</span>
                  <span className="text-xs text-white/55">Ring til os - så bliver du lykkelig</span>
                </span>
              </a>
              <a href="mailto:info@lykkeliga.dk" className="flex items-center gap-3 text-sm text-white/85">
                <Mail size={16} className="text-[#00b3a4]" />
                <span>
                  <span className="block font-semibold">info@lykkeliga.dk</span>
                  <span className="text-xs text-white/55">Danmarks lykkeligste adresse</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/legekammerat"
                className="hidden rounded-full bg-[#3d5a73] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#4a6b88] sm:inline-flex"
              >
                Se modeller
              </Link>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#e07a6a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#d46b5c]"
              >
                <Heart size={13} />
                Book en snak
              </button>
            </div>
          </div>
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
