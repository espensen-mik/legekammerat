import Link from "next/link";
import { type LucideIcon } from "lucide-react";

type ModelCardProps = {
  label: string;
  title: string;
  price: string;
  bullets: string[];
  href: string;
  Icon: LucideIcon;
  featured?: boolean;
  badge?: string;
};

export function ModelCard({
  label,
  title,
  price,
  bullets,
  href,
  Icon,
  featured = false,
  badge,
}: ModelCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col border border-white/10 bg-[#0f2438] p-6 ${
        featured ? "ring-1 ring-[#00b3a4]/50" : ""
      }`}
    >
      {badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-[#00b3a4]/15 px-3 py-1 text-xs font-medium text-[#9dffe8]">
          {badge}
        </span>
      ) : null}
      <div className="flex flex-1 flex-col space-y-5">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00b3a4]/15 text-[#00f4c8]">
          <Icon size={18} />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{label}</p>
          <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
          <p className="text-lg font-semibold text-[#00f4c8]">{price}</p>
        </div>
        <ul className="space-y-2 text-sm text-white/70">
          {bullets.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-[#00b3a4] hover:text-[#00f4c8]"
        >
          Læs mere →
        </Link>
      </div>
    </article>
  );
}
