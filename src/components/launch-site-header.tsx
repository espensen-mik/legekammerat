import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { KONTAKT_HREF } from "@/src/lib/contact-anchor";

export function LaunchSiteHeader() {
  return (
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

        <a
          href={KONTAKT_HREF}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#e07a6a] px-3 py-2 text-[0.6875rem] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#d46b5c] sm:px-4 sm:text-xs"
        >
          <Heart size={13} className="shrink-0" />
          <span className="whitespace-nowrap">Book en snak</span>
        </a>
      </div>
    </header>
  );
}
