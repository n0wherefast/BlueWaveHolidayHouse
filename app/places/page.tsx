import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../component/Navbar'

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Luoghi - BlueWave',
  description: 'Scopri i luoghi e le attrazioni nelle vicinanze di BlueWave HolidayHouse.',
}

export default async function Page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  const fetchUrl = apiUrl ? `${apiUrl}/api/places` : `/api/places`;
  const res = await fetch(fetchUrl, { next: { revalidate: 36 } });
  if (!res.ok) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl font-bold">Errore nel recupero dei luoghi</h1>
      </div>
    );
  }
  const places = await res.json() as any[];
  const navLinks = [
    { name: 'Home', path: '/' , isMenuPage: false }
  ];

  return (
    <div className="relative w-full mx-auto px-0 sm:px-0 py-0">
      <Image src="/sea.webp" alt="sea background" fill className="absolute inset-0 -z-10 object-cover" loading="lazy" />
      <Navbar linksProp={navLinks} />
      <div className="  bg-gradient-to-r from-sky-400/55 via-emerald-300/35 to-indigo-400max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <header className="mb-8 font-sans font-extrabold p-6 rounded-2xl text-center">
        <h1 className="text-4xl text-slate-800/90 sm:text-5xl font-extrabold">Luoghi e attrazioni</h1>
        <p className="mt-2 sm:text-slate-600 text-slate-800/90">Scopri i luoghi più belli: storia, natura, cibo e attività.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <Link key={place.id} href={`/places/${place.id}`} className="group block rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
            <div className="relative w-full h-48 md:h-56 lg:h-44">
              {place.image ? (
                <Image src={place.image} alt={place.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full bg-slate-100" />
              )}
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">{place.name}</h3>
              <p className="mt-2 text-sm md:text-base text-slate-600 line-clamp-3">{place.description}</p>

              {place.hashtags && place.hashtags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {place.hashtags.slice(0,4).map((tag: string) => (
                    <span key={tag} className="text-xs md:text-sm bg-sky-500 text-white px-2 py-1 rounded-full">#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}
