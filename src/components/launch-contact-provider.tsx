"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ContactModal } from "@/src/components/contact-modal";
import { KONTAKT_ANCHOR, KONTAKT_HREF } from "@/src/lib/contact-anchor";

function isKontaktHash(hash: string) {
  return hash === KONTAKT_HREF || hash === `#${KONTAKT_ANCHOR}`;
}

export function LaunchContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    if (!isKontaktHash(window.location.hash)) {
      window.history.pushState(null, "", KONTAKT_HREF);
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (isKontaktHash(window.location.hash)) {
      window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      setIsOpen(isKontaktHash(window.location.hash));
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

      const link = target.closest(`a[href="${KONTAKT_HREF}"]`);
      if (!link) return;

      event.preventDefault();
      openModal();
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
      <ContactModal isOpen={isOpen} onClose={closeModal} title="Book en snak" />
    </>
  );
}
