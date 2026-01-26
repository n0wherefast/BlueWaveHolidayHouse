import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, Sparkles, ExternalLink } from 'lucide-react'
import data from '../../api/places/data.json'
import { div } from 'framer-motion/client'

export const dynamic = 'force-dynamic';

type Props = {
  params: { id: string } | Promise<{ id: string }>
}

function getPlaceById(id: string) {
  if (!id) return null;
  return (data as any[]).find((p: any) => p.id === id) || null;
}

export async function generateMetadata({ params }: Props) {
  const { id } = (await params) as { id: string };
  const place = getPlaceById(id);
  if (!place) return { title: 'Luogo non trovato' };
  return {
    title: place.name,
    description: place.description?.slice(0, 160) || `${place.name} - Dettagli e informazioni`,
    openGraph: {
      title: place.name,
      description: place.description?.slice(0, 160),
      images: [
        ...(place.image ? [place.image] : []),
        ...((place.publisher && place.publisher.logo) ? [place.publisher.logo] : [])
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = (await params) as { id: string };
  const place = getPlaceById(id);
  if (!place) return notFound();
  // compute approximate reading time
  const textForReading = `${place.description || ''} ${place.details || ''}`;
  const wordCount = (textForReading.match(/\S+/g) || []).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  const authorName = (place as any).author?.name || 'BlueWave';
  const publishedRaw = (place as any).publishedDate;
  const publishedDate = publishedRaw ? new Date(publishedRaw).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }) : null;
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: place.name,
    image: place.image ? [place.image] : [],
    datePublished: publishedRaw || undefined,
    author: {
      "@type": "Person",
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: (place.publisher && place.publisher.name) || "BlueWave",
      ...(place.publisher && place.publisher.logo ? { logo: { "@type": "ImageObject", url: place.publisher.logo } } : {})
    },
    description: place.description?.slice(0, 160) || ''
  };

  return (
   <div className="relative backdrop-blur min-h-screen bg-gradient-to-r from-sky-100/55  to-emerald-50">
    <article className=" relative max-w-7xl mx-auto px-8 sm:px-10 py-6 sm:py-10 ">
           <Image src="/sea.webp" alt="sea background" fill className="absolute inset-0 -z-30 object-cover " loading="lazy" />

        {/* Decorative gradient overlays (kept subtle) */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-sky-100 via-slate-200 to-indigo-100/50" />
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.06),transparent_15%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.04),transparent_20%)]" />

      <div className="relative z-10   max-w-4xl ">
        <Link href="/places" className="text-sm text-slate-500 hover:underline">← Torna ai luoghi</Link>

        <header className="mt-4">
          <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight text-slate-800/90 bg-clip-text ">{place.name}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm sm:text-lg text-slate-600">
            <span className="text-slate-600">{authorName}</span>
            <span className="text-slate-400">•</span>
            {publishedDate && <span>{publishedDate}</span>}
            <span className="text-slate-400">•</span>
            <span>{readTime} min lettura</span>
          </div>
        </header>

        {place.image && (
          <div className="mt-8 rounded-md overflow-hidden shadow-sm">
            <Image
              src={place.image}
              alt={place.name}
              width={2000}
              height={1000}
              className="w-full md:h-[36rem] object-cover object-top"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              placeholder={place.blurDataURL ? 'blur' : 'empty'}
              {...(place.blurDataURL ? { blurDataURL: place.blurDataURL } : {})}
            />
          </div>
        )}

        <div className="mt-10 prose prose-lg max-w-none text-slate-700 text-lg">
          <p className="lead text-lg">{place.description}</p>

          {place.details && (
            <section className="mt-6">
              {(() => {
                const paras = place.details.split('\n\n');
                return paras.map((para: string, pi: number) => {
                  const lines = para.split('\n').map((l: string) => l.trim()).filter(Boolean);
                  if (lines.length === 0) return null;
                  const title = lines[0];
                  const rest = lines.slice(1);
                  const hasLabeled = rest.some((r) => r.includes(': '));
                  return (
                    <div key={pi} className={pi === 0 ? '' : 'mt-6'}>
                      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
                      {rest.length === 0 ? null : (
                        <div className="mt-3 text-slate-700">
                          {hasLabeled ? (
                            <ul className="list-none space-y-3">
                              {rest.map((line: string, li: number) => {
                                if (!line) return null;
                                if (line.includes(': ')) {
                                  const [label, content] = line.split(': ', 2);
                                  return (
                                    <li key={li} className="flex items-start gap-3">
                                      <MapPin className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                                      <div>
                                        <div className="font-medium text-slate-800">{label}</div>
                                        <div className="text-sm text-slate-600">{content}</div>
                                      </div>
                                    </li>
                                  );
                                }
                                return (
                                  <li key={li} className="flex items-start gap-3">
                                    <Sparkles className="h-4 w-4 text-amber-300 mt-1 flex-shrink-0" />
                                    <div className="text-sm text-slate-600">{line}</div>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            rest.map((line: string, li: number) => (
                              <p key={li} className="text-slate-700">{line}</p>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                });
              })()}
            </section>
          )}
        </div>

        {place.hashtags && place.hashtags.length > 0 && (
          <div className="mt-10">
            <div className="flex flex-wrap gap-3">
              {place.hashtags.map((tag: string) => (
                <span key={tag} className="text-base bg-gradient-to-r from-sky-500 to-emerald-400 text-white px-4 py-2 rounded-full">#{tag}</span>
              ))}
            </div>
          </div>
        )}
        {/* JSON-LD structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </div>
    </article>
    </ div>
  )
}
