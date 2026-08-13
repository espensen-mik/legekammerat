import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#06111c]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <Image
            src="/lykkeliga-logo.svg"
            alt="LykkeLiga"
            width={140}
            height={36}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            LykkeLiga er et nationalt håndboldfællesskab for børn og unge med funktionsnedsættelser.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-white/75">
          <Link href="/" className="hover:text-[#00f4c8]">
            Forside
          </Link>
          <Link href="/cases" className="hover:text-[#00f4c8]">
            Partnere
          </Link>
          <Link href="/kampagner" className="hover:text-[#00f4c8]">
            Kampagner
          </Link>
          <Link href="/legekammerat" className="hover:text-[#00f4c8]">
            Bliv legekammerat
          </Link>
          <Link href="/om" className="hover:text-[#00f4c8]">
            Om
          </Link>
        </nav>

        <div className="space-y-1 text-sm text-white/75">
          <p>53 80 30 17</p>
          <p>info@lykkeliga.dk</p>
        </div>
      </div>
    </footer>
  );
}
