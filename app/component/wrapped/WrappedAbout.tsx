
'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

function WrappedAbout({ data }: any) {

  function IconDot({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="6" fill="currentColor" />
      </svg>
    )
  }
 
  
  // Destrutturazione dei gruppi principali
  const [
    houseRulesGroup,
    comfortServicesGroup,
    facilitiesGroup,
    policiesGroup,
    apartmentInfoGroup
  ] = data;

  // Destrutturazione dei singoli elementi
  const [houseRules, additionalNotes] = houseRulesGroup;
  const [comfort, services] = comfortServicesGroup;
  const [bathroom, kitchen, location] = facilitiesGroup;
  const [policies] = policiesGroup;
  const [apartmentDesc, mainComforts] = apartmentInfoGroup;
  const clasname0 = `group  border border-slate-200/80 bg-white/60  p-6 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 
                      hover:bg-white/70 hover:ring-sky-400/20 relative overflow-hidden rounded-3xl before:absolute before:inset-x-0 before:top-0 before:h-[6px] before:content-[''] 
                      before:bg-gradient-to-r before:from-sky-500/60 before:via-emerald-500/50 before:to-indigo-500/60 before:rounded-t-3xl`

  return (
    <>
      {/* Sezione About - Appartamento */}
      <section  className="  relative border-b border-slate-200/70 bg-gradient-to-b from-white/30 via-white/10 to-transparent"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative ">
    <motion.h2
      className=" text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      Comfort e Relax
    </motion.h2>
    <motion.h2
      className=" text-xl sm:text-xl  leading-tight tracking-tight bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      La casa è dotata di un soggiorno luminoso, una camera da letto confortevole, una cucina attrezzata, un bagno moderno e un balcone con vista mare, dove potrai goderti il panorama mozzafiato. Ogni dettaglio è pensato per garantire un&apos;esperienza di relax totale, permettendoti di ricaricare le energie dopo una giornata di esplorazione.
    </motion.h2>

    <div className="mt-6 grid md:grid-cols-2 gap-8">
      {/* Card Descrizione Appartamento */}
      <motion.div
        className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(2, 132, 199, 0.10)" }}
      >
        <h3 className="text-lg sm:text-2xl font-semibold text-slate-900 leading-tight">
          {apartmentDesc.sectionTitle}
        </h3>
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-700">
          {apartmentDesc.description}
        </p>
        <Image
          src="/terrazza.opt.webp"
          alt={"Terrazza con vista mare"}
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, 330px"
          quality={75}
          className="mt-4 rounded-lg shadow-md aspect-[4/4]"
        />
      </motion.div>

      {/* Card La Casa */}
      <motion.div
        className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(2, 132, 199, 0.10)" }}
      >
        {/* <h3 className="text-lg sm:text-2xl font-semibold text-slate-900 leading-tight">
          La casa
        </h3> */}
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-700">
          {apartmentDesc.house}
        </p>
        <Image
          src="/letto (2).opt.webp"
          alt={"Camera da letto"}
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, 330px"
          quality={75}
          className="mt-4 rounded-lg shadow-md aspect-[4/4]"
        />
      </motion.div>

      {/* Card Comfort Principali */}
      <motion.div
         className={` ${clasname0}  bg-red-500  text-md`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.10)" }}
      >
        <h3 className="text-lg sm:text-2xl font-semibold text-slate-900 leading-tight">
          Comfort principali
        </h3>
        <ul className="mt-4 text-base leading-relaxed text-slate-700 pl-0 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
          {mainComforts.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
        <Image
          src="/Soggiorno.opt.webp"
          alt={"Soggiorno"}
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, 330px"
          quality={75}
          className="mt-4 rounded-lg shadow-md aspect-[4/4]"
        />
      </motion.div>
<Image
          src="/mobile.opt.webp"
          alt={"sea wave image"}
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, 380px"
          quality={75}
          className="mt-4 rounded-lg shadow-md aspect-[4/3]"
        />

    </div>
    
  </div>
</section>

{/* Sezione Comfort e Servizi */}
<section className="relative border-b border-slate-200/70 bg-gradient-to-b from-white/25 via-white/10 to-transparent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative">
    <motion.h2
      className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      Servizi
    </motion.h2>

    <div className="mt-6 grid md:grid-cols-2 gap-8">
      {/* Card Comfort */}
      <motion.div
        className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(2, 132, 199, 0.10)" }}
      >
        <h3 className="text-lg sm:text-2xl font-semibold text-slate-900 leading-tight">
          {comfort.sectionTitle}
        </h3>
        <ul className="mt-4 text-base leading-relaxed text-slate-700 pl-0 space-y-2">
          {comfort.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Card Servizi */}
      <motion.div
         className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.10)" }}
      >
        <h3 className="text-lg sm:text-2xl font-semibold text-slate-900 leading-tight">
          {services.sectionTitle}
        </h3>
        <ul className="mt-4 text-base leading-relaxed text-slate-700 pl-0 space-y-2">
          {services.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>

{/* Sezione Facilities */}
<section className="relative border-b border-slate-200/70 bg-gradient-to-b from-white/25 via-white/10 to-transparent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative">
    <motion.h2
      className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      Dotazioni
    </motion.h2>

    <div className="mt-6 grid md:grid-cols-3 gap-8">
      {/* Card Bathroom */}
      <motion.div
        className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(2, 132, 199, 0.10)" }}
      >
        <h3 className="text-base sm:text-2xl font-semibold text-slate-900">
          {bathroom.sectionTitle}
        </h3>
        <ul className="mt-4 text-slate-600/95 pl-0 space-y-2">
          {bathroom.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Card Kitchen */}
      <motion.div
        className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.10)" }}
      >
        <h3 className="text-base sm:text-2xl font-semibold text-slate-900">
          {kitchen.sectionTitle}
        </h3>
        <ul className="mt-4 text-slate-600/95 pl-0 space-y-2">
          {kitchen.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Card Location */}
      <motion.div
        className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.10)" }}
      >
        <h3 className="text-base sm:text-2xl font-semibold text-slate-900">
          {location.sectionTitle}
        </h3>
        <ul className="mt-4 text-slate-600/95 pl-0 space-y-2">
          {location.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>

{/* Sezione Regole e Politiche */}
<section className="relative border-b border-slate-200/70 bg-gradient-to-b from-white/25 via-white/10 to-transparent">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative">
    <motion.h2
      className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      Regole e Politiche
    </motion.h2>

    <div className="mt-6 grid md:grid-cols-2 gap-8">
      {/* Card Regole della Casa */}
      <motion.div
           className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.10)" }}
      >
        <h3 className="text-base sm:text-2xl font-semibold text-slate-900">
          {houseRules.sectionTitle}
        </h3>
        <ul className="mt-4 text-slate-600/95 pl-0 space-y-2">
          {houseRules.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Card Note Aggiuntive */}
      <motion.div
         className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.10)" }}
      >
        <h3 className="text-base sm:text-2xl font-semibold text-slate-900">
          Note aggiuntive
        </h3>
        <ul className="mt-4 text-slate-600/95 pl-0 space-y-2">
          {additionalNotes.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Card Politiche */}
      <motion.div
         className={` text-xl ${clasname0}`}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.10)" }}
      >
        <h3 className="text-base sm:text-2xl font-semibold text-slate-900">
          {policies.sectionTitle}
        </h3>
        <ul className="mt-4 text-slate-600/95 pl-0 space-y-2">
          {policies.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-sky-500 flex-shrink-0">
                <IconDot className="w-4 h-4" />
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>

    </>
  )
}

export default WrappedAbout
