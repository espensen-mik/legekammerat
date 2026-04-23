type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({ eyebrow, title, description, tone = "dark" }: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.24em] ${
            isLight ? "text-[#12a391]" : "text-[#00f4c8]/80"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold leading-tight tracking-tight sm:text-5xl ${
          isLight ? "text-zinc-900" : "text-zinc-100"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-lg leading-relaxed ${isLight ? "text-zinc-700" : "text-zinc-300"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
