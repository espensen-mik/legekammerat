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
      className={`relative rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-white/20 ${
        featured ? "lg:scale-[1.03] shadow-[0_0_40px_rgba(0,255,180,0.1)]" : ""
      }`}
    >
      {badge ? (
        <span className="absolute right-4 top-4 rounded-full border border-[#00f4c8]/40 bg-[#00f4c8]/10 px-3 py-1 text-xs font-medium text-[#bfffee]">
          {badge}
        </span>
      ) : null}
      <div className="space-y-5">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-[#00f4c8]">
          <Icon size={18} />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{label}</p>
          <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-xl font-semibold text-[#9dffe8]">{price}</p>
        </div>
        <ul className="space-y-2 text-sm text-white/75">
          {bullets.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-[#00f4c8]"
        >
          Se mere
        </Link>
      </div>
    </article>
  );
}
