import { type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
};

export function FeatureCard({ title, description, Icon, className = "" }: FeatureCardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-white/20 ${className}`}
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-[#00f4c8]">
        <Icon size={18} />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
    </article>
  );
}
