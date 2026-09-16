import Image from "next/image";
import { Heart, Mail, Phone } from "lucide-react";
import { KONTAKT_HREF, LYKKELIGA_URL } from "@/src/lib/contact-anchor";

const footerPartners = [
  { name: "NORMAL", src: "/Logo/NORMAL_Logo.svg", logoClassName: "h-10 max-w-[150px] sm:h-12 sm:max-w-[180px]" },
  { name: "Lidl", src: "/Logo/Lidl_logo_white.svg", logoClassName: "h-9 max-w-[150px] sm:h-11 sm:max-w-[180px]" },
  { name: "Socialpædagogerne", src: "/Logo/SL_logo.svg", logoClassName: "h-10 max-w-[150px] sm:h-12 sm:max-w-[180px]" },
  { name: "Nordea", src: "/Logo/nordea_logo.svg", logoClassName: "h-9 max-w-[150px] sm:h-11 sm:max-w-[180px]" },
  { name: "Bridgestone", src: "/Logo/Bridgestone_logo.svg", logoClassName: "h-4 max-w-[100px] sm:h-5 sm:max-w-[120px]" },
  { name: "Blue Water Foundation", src: "/BW_Foundation.svg", logoClassName: "h-9 max-w-[150px] sm:h-11 sm:max-w-[180px]" },
  { name: "Uniqlo", src: "/Logo/uniqlo_logo-negativ.svg", logoClassName: "h-9 max-w-[150px] sm:h-11 sm:max-w-[180px]" },
  { name: "Herning Kommune", src: "/Logo/Herningkommune_negativ.svg", logoClassName: "h-14 max-w-[150px] sm:h-16 sm:max-w-[180px]" },
  { name: "Joma", src: "/Logo/joma_negativ.svg", logoClassName: "h-14 max-w-[150px] sm:h-16 sm:max-w-[180px]" },
  { name: "MCH", src: "/Logo/MCH_negativ.svg", logoClassName: "h-14 max-w-[150px] sm:h-16 sm:max-w-[180px]" },
  { name: "Teknisk Landsforbund", src: "/Logo/TL-logo-rgb-negativ.svg", logoClassName: "h-9 max-w-[150px] sm:h-11 sm:max-w-[180px]" },
];

export function LaunchSiteFooter() {
  return (
    <footer className="bg-[#06111c]">
      <div className="border-y border-white/10 bg-[#0a1c2e]">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-8 px-6 py-8 sm:px-10">
          {footerPartners.map((partner) => (
            <div key={partner.name} className="flex h-16 items-center justify-center opacity-70 sm:h-20">
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={220}
                height={84}
                className={`w-auto object-contain ${partner.logoClassName}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md space-y-4">
            <Image
              src="/lykkeliga-logo.svg"
              alt="LykkeLiga"
              width={140}
              height={36}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/65">
              LykkeLiga er et nationalt håndboldfællesskab for børn og unge med funktionsnedsættelser.
              Velkommen i en helt anden liga.
            </p>
            <a
              href={KONTAKT_HREF}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#e07a6a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#d46b5c]"
            >
              <Heart size={13} />
              Book en snak
            </a>
          </div>

          <div className="shrink-0 lg:min-w-[14rem]">
            <p className="text-sm font-semibold text-[#00b3a4]">Kontakt</p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <a href="tel:53803017" className="flex items-center gap-2 hover:text-white">
                <Phone size={15} className="shrink-0 text-[#00b3a4]" />
                53 80 30 17
              </a>
              <a href="mailto:info@lykkeliga.dk" className="flex items-center gap-2 hover:text-white">
                <Mail size={15} className="shrink-0 text-[#00b3a4]" />
                info@lykkeliga.dk
              </a>
              <a
                href={LYKKELIGA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pl-7 hover:text-white"
              >
                lykkeliga.dk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {new Date().getFullYear()} LykkeLiga. Alle rettigheder forbeholdes.</p>
          <p>Danmarks lykkeligste fællesskab</p>
        </div>
      </div>
    </footer>
  );
}
