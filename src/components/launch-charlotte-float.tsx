"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, X } from "lucide-react";

const CHARLOTTE_PHONE_DISPLAY = "28 55 47 31";
const CHARLOTTE_PHONE_HREF = "tel:+4528554731";

export function LaunchCharlotteFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handlePointerDown(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      className="pointer-events-none fixed bottom-6 right-6 z-50 hidden max-w-[22rem] lg:block"
    >
      <div className="pointer-events-auto">
        {isOpen ? (
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0f2438]/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="flex items-start gap-3 border-b border-white/10 p-4">
              <Image
                src="/charlotte.jpg"
                alt="Charlotte"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[#00b3a4]/40"
              />
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm font-semibold text-white">Charlotte</p>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  Har du brug for at komme i kontakt med os straks? Ring til Charlotte
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Luk"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-4 p-4">
              <p className="text-sm leading-relaxed text-white/80">
                Charlotte sidder klar til at fortælle mere om vores partnerskaber. Ring til hende på{" "}
                <a
                  href={CHARLOTTE_PHONE_HREF}
                  className="font-semibold text-[#00f4c8] underline decoration-[#00b3a4]/50 underline-offset-2 hover:text-[#00f4c8]"
                >
                  {CHARLOTTE_PHONE_DISPLAY}
                </a>
              </p>
              <a
                href={CHARLOTTE_PHONE_HREF}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00b3a4] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00c9b8]"
              >
                <Phone size={16} />
                Ring nu
              </a>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={false}
            className="group flex max-w-[22rem] items-center gap-3 rounded-full border border-white/12 bg-[#0f2438]/95 py-2 pl-2 pr-5 text-left shadow-xl shadow-black/40 backdrop-blur-xl transition-colors hover:border-[#00b3a4]/35 hover:bg-[#123347]/95"
          >
            <Image
              src="/charlotte.jpg"
              alt=""
              width={52}
              height={52}
              className="h-[3.25rem] w-[3.25rem] shrink-0 rounded-full object-cover ring-2 ring-[#00b3a4]/35 group-hover:ring-[#00f4c8]/50"
            />
            <span className="text-sm leading-snug text-white/90">
              Har du brug for at komme i kontakt med os straks? Ring til Charlotte
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
