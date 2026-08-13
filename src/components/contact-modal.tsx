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
      <div className="w-full max-w-lg bg-[#0f2438] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#00b3a4]">Kontakt</p>
            <h3 className="mt-1 text-2xl font-bold text-white">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Luk
          </button>
        </div>

        <form className="mt-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-white/75">Navn</label>
            <input
              type="text"
              placeholder="Dit navn"
              className="w-full border border-white/15 bg-[#07111d] px-3 py-2 text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-white/75">E-mail</label>
            <input
              type="email"
              placeholder="navn@virksomhed.dk"
              className="w-full border border-white/15 bg-[#07111d] px-3 py-2 text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-white/75">Virksomhed</label>
            <input
              type="text"
              placeholder="Virksomhedsnavn"
              className="w-full border border-white/15 bg-[#07111d] px-3 py-2 text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-white/75">Besked</label>
            <textarea
              placeholder="Fortæl kort om jeres interesse..."
              rows={4}
              className="w-full border border-white/15 bg-[#07111d] px-3 py-2 text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/40"
            >
              Annuller
            </button>
            <button
              type="button"
              className="rounded-full bg-[#00b3a4] px-4 py-2 text-sm font-semibold text-white"
            >
              Send forespørgsel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
