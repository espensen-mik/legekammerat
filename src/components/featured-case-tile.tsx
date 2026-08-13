import Link from "next/link";
import Image from "next/image";

type FeaturedCaseTileProps = {
  name: string;
  blurb: string;
  href?: string;
  imageSrc?: string;
  toneClassName?: string;
};

export function FeaturedCaseTile({
  name,
  blurb,
  href = "#",
  imageSrc,
  toneClassName = "from-zinc-700 via-zinc-800 to-zinc-900",
}: FeaturedCaseTileProps) {
  return (
    <Link href={href} className="group flex h-full flex-col bg-[#0f2438]">
      <div className="relative aspect-[16/10] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name} partnership`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${toneClassName}`} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold tracking-tight text-white">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{blurb}</p>
        <span className="mt-4 text-sm font-semibold text-[#00b3a4] group-hover:text-[#00f4c8]">
          Læs mere →
        </span>
      </div>
    </Link>
  );
}
