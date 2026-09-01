import Image from "next/image";

type LaunchFeaturedCaseTileProps = {
  name: string;
  blurb: string;
  imageSrc?: string;
  toneClassName?: string;
};

export function LaunchFeaturedCaseTile({
  name,
  blurb,
  imageSrc,
  toneClassName = "from-zinc-700 via-zinc-800 to-zinc-900",
}: LaunchFeaturedCaseTileProps) {
  return (
    <article className="flex h-full flex-col bg-[#0f2438]">
      <div className="relative aspect-[16/10] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name} partnership`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${toneClassName}`} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold tracking-tight text-white">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{blurb}</p>
      </div>
    </article>
  );
}
