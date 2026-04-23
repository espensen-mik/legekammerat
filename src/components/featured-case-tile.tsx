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
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden border border-white/10 bg-zinc-900"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${name} partnership`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${toneClassName}`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.08),transparent_42%)]" />
        </>
      )}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/55" />
      <div className="absolute inset-0 flex items-end p-6">
        <div className="translate-y-4 space-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{name}</h3>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-200">{blurb}</p>
        </div>
      </div>
    </Link>
  );
}
