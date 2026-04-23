import { notFound } from "next/navigation";
import { Container } from "@/src/components/layout/container";
import { SectionHeading } from "@/src/components/section-heading";
import { VideoBlock } from "@/src/components/video-block";
import { cases, getCaseBySlug } from "@/src/data/cases";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-24">
      <article className="space-y-12">
        <SectionHeading eyebrow="Case" title={item.name} description={item.headline} />

        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">{item.description}</p>

        {item.videos?.length ? (
          <div className="space-y-10">
            {item.videos.map((video) => (
              <div key={video.playbackId} className="space-y-3">
                <VideoBlock playbackId={video.playbackId} />
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{video.caption}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <VideoBlock playbackId={item.playbackId} />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {item.name} x LykkeLiga - case film
            </p>
          </div>
        )}

        <blockquote className="border-l border-white/30 pl-6 text-2xl leading-relaxed text-zinc-200 sm:text-3xl">
          <span aria-hidden>&ldquo;</span>
          {item.quote}
          <span aria-hidden>&rdquo;</span>
        </blockquote>
      </article>
    </Container>
  );
}
