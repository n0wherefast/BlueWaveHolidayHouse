'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

function WrappedPlaces({ data }: any) {
    // console.log(data)
    if (!data || !Array.isArray(data)) {
      return (
        <section id="places" className="border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <motion.h2 className="text-2xl sm:text-3xl font-bold">Places</motion.h2>
            <p className="mt-2 text-slate-600">Nessun luogo disponibile al momento.</p>
          </div>
        </section>
      );
    }

  return (
     <section id="places" className="border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <motion.h2
              className="text-2xl sm:text-3xl text-slate-700 font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Scopri le Meraviglie della Sicilia, Luoghi Iconici e Attrazioni da Non Perdere
            </motion.h2>
            <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed">
              Durante il tuo soggiorno, avrai l&apos;opportunità di visitare luoghi iconici come il centro storico di Catania, dichiarato Patrimonio dell&apos;Umanità dall&apos;UNESCO,
               il maestoso Etna, le incantevoli spiagge rocciose di Aci Trezza e i famosi Faraglioni. Non dimenticare di esplorare le storiche città di Siracusa e Taormina, ricche di cultura e bellezze naturali.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <motion.div
                className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(56, 189, 248, 0.10)' }}
              >
                <h3 className="font-semibold">Attrazioni (indicative)</h3>
                <ul className="mt-3 text-slate-600 space-y-2 list-disc pl-5">
                  <li>14 km Catania centro</li>
                  <li>4 km Acireale</li>
                  <li>2 km Aci Castello</li>
                  <li>1 km lungomare Aci Trezza</li>
                </ul>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.10)' }}
              >
                <h3 className="font-semibold">Mare (indicativo)</h3>
                <ul className="mt-3 text-slate-600 space-y-2 list-disc pl-5">
                  <li>500 m discesa a mare</li>
                  <li>1 km lungomare Aci Trezza</li>
                  <li>9 km San Giovanni Li Cuti</li>
                  <li>15 km Playa di Catania</li>
                </ul>
              </motion.div>
              {data.map((place: any, index: number) => (
                <Link key={place.id || index} href={`/places/${place.id}`} className="block">
                  <motion.div
                    className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: 0.1 + index * 0.05 }}
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.10)" }}
                  >
                    {place.image && (
                      <div className="mb-4 w-full overflow-hidden rounded-md">
                        <Image
                          src={place.image}
                          alt={place.name}
                          width={1200}
                          height={800}
                          className="w-full h-80 object-cover rounded-md"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold">{place.name}</h3>
                    <ul className="mt-3 text-slate-600 space-y-2 list-disc pl-5">
                      {(Array.isArray(place.details) ? place.details : [place.description || '']).map((detail: string, detailIndex: number) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
  )
}

export default WrappedPlaces