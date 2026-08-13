import Link from "next/link";
import Image from "next/image";
import { type Case } from "@/src/data/cases";

type CaseCardProps = {
  item: Case;
};

export function CaseCard({ item }: CaseCardProps) {
  return (
    <Link href={`/cases/${item.slug}`} className="group flex h-full flex-col bg-[#0f2438]">
      <div className="relative aspect-video overflow-hidden">
        {item.coverImage ? (
          <>
            <Image
              src={item.coverImage}
              alt={`${item.name} partner photo`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            {item.logoSrc ? (
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src={item.logoSrc}
                  alt={`${item.name} logo`}
                  width={220}
                  height={80}
                  className="h-12 w-auto max-w-[60%] object-contain brightness-0 invert sm:h-14"
                />
              </div>
            ) : null}
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-[#07111d] text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Photo
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-[#00b3a4]">{item.name}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{item.headline}</h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/70">{item.description}</p>
        <span className="mt-5 text-sm font-semibold text-[#00b3a4] group-hover:text-[#00f4c8]">
          Læs mere →
        </span>
      </div>
    </Link>
  );
}
