"use client";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export function ContactModal({ isOpen, onClose, title }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg border border-white/15 bg-zinc-900 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">Kontakt</p>
            <h3 className="mt-1 text-2xl font-semibold text-zinc-100">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Luk
          </button>
        </div>

        <form className="mt-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-zinc-300">Navn</label>
            <input
              type="text"
              placeholder="Dit navn"
              className="w-full border border-white/15 bg-[#323629] px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-zinc-300">E-mail</label>
            <input
              type="email"
              placeholder="navn@virksomhed.dk"
              className="w-full border border-white/15 bg-[#323629] px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-zinc-300">Virksomhed</label>
            <input
              type="text"
              placeholder="Virksomhedsnavn"
              className="w-full border border-white/15 bg-[#323629] px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-zinc-300">Besked</label>
            <textarea
              placeholder="Fortæl kort om jeres interesse..."
              rows={4}
              className="w-full border border-white/15 bg-[#323629] px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="border border-white/15 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-white/40"
            >
              Annuller
            </button>
            <button
              type="button"
              className="border border-[#00f4c8]/50 bg-[#00f4c8]/10 px-4 py-2 text-sm font-medium text-zinc-100"
            >
              Send forespørgsel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
