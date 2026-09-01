"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ContactForm } from "@/src/components/contact-form";
import type { ContactInterest } from "@/src/lib/contact-interest";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialInterest?: ContactInterest;
};

export function ContactModal({
  isOpen,
  onClose,
  title = "Lad os tage en snak",
  initialInterest,
}: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Luk kontaktformular"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 flex max-h-[min(90vh,860px)] w-full max-w-2xl flex-col overflow-hidden bg-[#0f2438] shadow-2xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 p-6 sm:p-8">
          <div>
            <Image
              src="/lykkeliga-logo.svg"
              alt="LykkeLiga"
              width={156}
              height={40}
              className="mb-4 h-8 w-auto object-contain brightness-0 invert sm:h-9"
            />
            <p className="text-sm font-semibold text-[#00b3a4]">Kontakt</p>
            <h2 id="contact-modal-title" className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Fortæl os kort om jeres virksomhed og hvad I er interesseret i.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white"
            aria-label="Luk"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <ContactForm
            key={initialInterest ?? "generic"}
            idPrefix="contact-modal"
            initialInterest={initialInterest}
          />
        </div>
      </div>
    </div>
  );
}
