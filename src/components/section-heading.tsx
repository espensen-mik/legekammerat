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
          className={`text-sm font-semibold ${isLight ? "text-[#0e8f84]" : "text-[#00b3a4]"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          isLight ? "text-[#0a1c2e]" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${isLight ? "text-zinc-600" : "text-white/70"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
