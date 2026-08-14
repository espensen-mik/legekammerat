import { Check } from "lucide-react";

export type SponsorPackage = {
  slug: string;
  title: string;
  price: string;
  description: string;
  includes: string[];
  quote?: string;
  attribution?: string;
};

export function PackageCard({
  item,
  label,
  onOrder,
}: {
  item: SponsorPackage;
  label: string;
  onOrder?: () => void;
}) {
  return (
    <article id={item.slug} className="scroll-mt-28 bg-[#0f2438] p-7">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f4c8]/80">{label}</p>
        <h3 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">{item.title}</h3>
        <p className="whitespace-nowrap text-2xl font-semibold tracking-tight text-[#99ffe9]">{item.price}</p>
      </div>

      <p className="mt-6 text-zinc-300">{item.description}</p>

      <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-200">Du får</p>
        <ul className="space-y-2 text-sm text-zinc-300">
          {item.includes.map((feature, featureIndex) => (
            <li
              key={feature}
              className={`flex w-full items-start gap-2 border border-white/8 px-3 py-2 ${
                featureIndex % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"
              }`}
            >
              <Check size={14} className="mt-0.5 shrink-0 text-[#00f4c8]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {item.quote ? (
        <blockquote className="mt-8 border-l border-white/30 pl-5 text-base italic leading-relaxed text-zinc-200">
          &ldquo;{item.quote}&rdquo;
          {item.attribution ? <p className="mt-3 text-sm not-italic text-zinc-400">- {item.attribution}</p> : null}
        </blockquote>
      ) : null}

      {onOrder ? (
        <div className="mt-8 pt-2">
          <button
            type="button"
            onClick={onOrder}
            className="inline-flex items-center rounded-full bg-[#00b3a4] px-5 py-2 text-sm font-semibold text-white hover:bg-[#00c9b8]"
          >
            Bestil nu!
          </button>
        </div>
      ) : null}
    </article>
  );
}

export function OverviewGroup({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: { slug: string; title: string }[];
  rows: { feature: string; includedIn: string[] }[];
}) {
  const visibleRows = rows.filter((row) => columns.some((column) => row.includedIn.includes(column.slug)));

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h4>

      <div className="space-y-3 md:hidden">
        {visibleRows.map((row) => (
          <div key={`${title}-${row.feature}`} className="border-t border-white/10 pt-3">
            <p className="text-sm text-zinc-300">{row.feature}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {columns.map((column) => {
                const included = row.includedIn.includes(column.slug);
                return (
                  <span
                    key={`${row.feature}-${column.slug}`}
                    className={`text-xs ${included ? "text-[#99ffe9]" : "text-zinc-600"}`}
                  >
                    {included ? "✓" : "-"} {column.title}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <table className="hidden w-full table-fixed border-collapse text-left md:table">
        <thead>
          <tr className="border-b border-white/10 text-sm text-zinc-300">
            <th className="w-[36%] px-2 py-3 font-medium sm:px-3">Indhold</th>
            {columns.map((column) => (
              <th key={column.slug} className="px-1 py-3 text-center text-xs font-medium leading-tight sm:px-2 sm:text-sm">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, rowIndex) => (
            <tr
              key={`${title}-${row.feature}`}
              className={`border-b border-white/5 text-sm text-zinc-200 ${
                rowIndex % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
              }`}
            >
              <td className="px-2 py-3 leading-snug text-zinc-300 sm:px-3">{row.feature}</td>
              {columns.map((column) => (
                <td key={`${row.feature}-${column.slug}`} className="px-1 py-3 text-center sm:px-2">
                  {row.includedIn.includes(column.slug) ? (
                    <span className="text-[#00f4c8]">✓</span>
                  ) : (
                    <span className="text-zinc-600">-</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
