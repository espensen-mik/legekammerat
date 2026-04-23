import Link from "next/link";
import Image from "next/image";
import { type Case } from "@/src/data/cases";

type CaseCardProps = {
  item: Case;
};

export function CaseCard({ item }: CaseCardProps) {
  return (
    <Link
      href={`/cases/${item.slug}`}
      className="group flex h-full flex-col justify-between border border-white/10 bg-zinc-900/60 p-6 transition-colors hover:border-[#00f4c8]/45"
    >
      <div className="space-y-4">
        {item.coverImage ? (
          <div className="relative aspect-video overflow-hidden border border-white/10">
            <Image
              src={item.coverImage}
              alt={`${item.name} partner photo`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full items-center justify-center border border-dashed border-white/20 bg-zinc-950 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Photo
          </div>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">{item.name}</p>
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">{item.headline}</h3>
        <p className="line-clamp-3 text-zinc-300">{item.description}</p>
      </div>
      <span className="mt-8 text-sm font-medium text-zinc-100 transition-transform group-hover:translate-x-1 group-hover:text-[#00f4c8]/90">
        Se case
      </span>
    </Link>
  );
}
