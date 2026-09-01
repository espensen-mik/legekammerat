"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ContactModal } from "@/src/components/contact-modal";
import {
  contactHref,
  contactInterestFromHash,
  isContactHash,
  type ContactInterest,
} from "@/src/lib/contact-interest";
import { KONTAKT_ANCHOR } from "@/src/lib/contact-anchor";

function readInterestFromLink(link: HTMLAnchorElement): ContactInterest | undefined {
  const dataInterest = link.getAttribute("data-contact-interest");
  if (dataInterest === "firmafan" || dataInterest === "partner") {
    return dataInterest;
  }

  const href = link.getAttribute("href") ?? "";
  return contactInterestFromHash(href);
}

export function LaunchContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialInterest, setInitialInterest] = useState<ContactInterest | undefined>();

  const openModal = useCallback((interest?: ContactInterest) => {
    setInitialInterest(interest);
    setIsOpen(true);

    const nextHash = contactHref(interest);
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setInitialInterest(undefined);

    if (isContactHash(window.location.hash)) {
      window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;

      if (isContactHash(hash)) {
        setIsOpen(true);
        setInitialInterest(contactInterestFromHash(hash));
        return;
      }

      setIsOpen(false);
      setInitialInterest(undefined);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a[href^="#kontakt"]');
      if (!link || !(link instanceof HTMLAnchorElement)) return;

      event.preventDefault();
      openModal(readInterestFromLink(link));
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openModal]);

  return (
    <>
      {children}
      <span id={KONTAKT_ANCHOR} className="sr-only" tabIndex={-1} aria-hidden="true" />
      <ContactModal isOpen={isOpen} onClose={closeModal} initialInterest={initialInterest} />
    </>
  );
}
