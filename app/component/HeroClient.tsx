"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Sparkles } from 'lucide-react';

export default function HeroClient() {
  const fadeUp:any = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center relative -z-100 text-slate-900 sm:text-white sm:bg-transparent sm:p-0 bg-white/45 rounded-3xl py-7 px-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-sky-500 to-emerald-500/85 sm:bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80">
          <Sparkles className="h-5 w-5" />
          discover
        </div>

        <h1 className="mt-6 text-3xl sm:text-7xl font-bold">
          BlueWave HolidayHouse
          <span className="block text-base sm:text-xl font-medium sm:text-white/80 mt-3">
            Aci Trezza · Sicilia orientale
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl sm:text-white/85 max-w-3xl mx-auto leading-relaxed">
          Se stai cercando la base perfetta per esplorare la meravigliosa Sicilia, non cercare oltre! BlueWave Holiday House,
           situata nella pittoresca Aci Trezza, nella splendida Sicilia orientale, è la scelta ideale per chi desidera una vacanza all’insegna del relax, della cultura e della scoperta.
        </p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        >
          <motion.a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-black/35 sm:border-white/15 bg-white/10 px-6 py-3.5 text-md font-semibold sm:text-white hover:bg-white/15"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Scopri l’appartamento
          </motion.a>
          <motion.a
            href="#contacts"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-6 py-3.5 text-md font-semibold text-slate-900 shadow"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Contatti e prenotazioni
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 grid md:grid-cols-3 gap-4 "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        {[
          { title: 'Vista e relax', desc: 'Balcone e atmosfera di mare per staccare davvero.' },
          { title: 'Comodo per muoversi', desc: 'Fermate bus e servizi nelle vicinanze.' },
          { title: 'Ideale per esplorare', desc: 'Etna, Catania, Taormina, Siracusa a portata di mano.' },
        ].map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-7 text-white/90 shadow-sm"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div className="font-semibold">{c.title}</div>
            <div className="mt-2 text-md text-white/75 leading-relaxed">{c.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
