"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaAirbnb, FaInstagram, FaWhatsapp, FaWallet, FaConciergeBell } from 'react-icons/fa'
import { getMailHref } from './mailTemplates'

export default function WrappedFrom() {
  const [lang, setLang] = useState<'it' | 'en'>('it')
  const [contacts, setContacts] = useState<any>(null)
  const mailHref = getMailHref(lang, contacts?.email)

  const providerBadges: Record<string, JSX.Element> = {
    airbnb: (
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FF5A5F]">
        <FaAirbnb className="w-4 h-4 text-white" />
      </div>
    ),
    booking: (
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#003580]">
        <FaConciergeBell className="w-4 h-4 text-white" />
      </div>
    ),
    paytourist: (
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#06B6D4]">
        <FaWallet className="w-4 h-4 text-white" />
      </div>
    ),
  }

  useEffect(() => {
    let mounted = true
    fetch('/api/contacts')
      .then((r) => r.json())
      .then((j) => {
        if (mounted && j?.success) setContacts(j.data)
      })
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section id="contacts">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Contacts
        </motion.h2>

        <p className="mt-2 text-slate-600">Non perdere l&apos;occasione di scoprire la bellezza della Sicilia soggiornando in una delle migliori case vacanze di Aci Trezza. BlueWave Holiday House ti aspetta per offrirti un&apos;esperienza indimenticabile, ricca di relax, cultura e avventura. Prenota ora e inizia a sognare la tua vacanza in Sicilia!</p>
        <p className="mt-2 text-slate-600">Per informazioni e prenotazioni dirette.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Left: Contact card */}
          <motion.div
            className="rounded-3xl bg-white shadow-lg border border-slate-100 p-10 md:h-[45%]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -2 }}
          >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold">{lang === 'it' ? 'Contatti' : 'Contacts'}</h3>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-slate-500">Lingua</label>
                  <select aria-label='Select language' value={lang} onChange={(e) => setLang(e.target.value as 'it' | 'en')} className="rounded-md border px-2 py-1 text-xs bg-white">
                    <option value="it">IT</option>
                    <option value="en">EN</option>
                  </select>
                </div>
              </div>

            <div className="mt-4 space-y-4 text-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-sky-600" />
                </div>
                <a className="text-sky-600 font-medium hover:underline text-sm" href={mailHref}>
                  {contacts?.email ?? 'bluewavehhouse@gmail.com'}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <a className="font-medium hover:underline text-sm" href={contacts?.phone ? `tel:${contacts.phone}` : 'tel:+393348951094'}>
                  {contacts?.phone ?? '+39 334 895 1094'}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center mt-1">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="text-sm">{contacts?.address?.[lang] ?? 'Aci Castello / Aci Trezza (CT) · Sicilia'}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.a
                href={mailHref}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {lang === 'it' ? 'Prenota via email' : 'Book via email'}
              </motion.a>
              <motion.a
                href={contacts?.phone ? `tel:${contacts.phone}` : 'tel:+393348951094'}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {lang === 'it' ? 'Chiama ora' : 'Call now'}
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Links card + Info card stacked */}
          <div className="space-y-4">
            <motion.div
              className="rounded-3xl bg-white shadow-xl border border-slate-100 p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.03 }}
            >
              <h3 className="text-lg font-semibold tracking-tight">{lang === 'it' ? 'Prenota' : 'Book'}</h3>
              <div className="mt-4 flex flex-col gap-3">
                {['airbnb', 'booking', 'paytourist', 'whatsapp', 'instagram'].map((k) => {
                  const l = contacts?.links?.[k]
                  if (!l) return null
                  const label = k === 'airbnb'
                    ? 'Airbnb'
                    : k === 'booking'
                    ? 'Booking.com'
                    : k === 'paytourist'
                    ? 'Paytourist'
                    : k === 'whatsapp'
                    ? 'WhatsApp'
                    : 'Instagram'
                  return (
                    <a
                      key={k}
                      href={l.href}
                      aria-label={l.ariaLabel}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3 bg-white hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        {providerBadges[k] ?? (
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100">
                            {k === 'whatsapp' ? (
                              <FaWhatsapp className="w-4 h-4 text-green-500" />
                            ) : (
                              <FaInstagram className="w-4 h-4 text-pink-500" />
                            )}
                          </div>
                        )}
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                      <span className="text-xs text-slate-500">{lang === 'it' ? 'Apri' : 'Open'}</span>
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl bg-white shadow-xl border border-slate-100 p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <h3 className="text-lg font-semibold tracking-tight">{contacts?.info?.title?.[lang] ?? (lang === 'it' ? 'Info utili (indicative)' : 'Useful info (indicative)')}</h3>
              <div className="mt-4 flex flex-col gap-3 text-slate-700">
                {(contacts?.info?.items ?? []).map((item: any) => (
                  <div key={item.key} className="rounded-lg border border-slate-100 p-3 bg-white">
                    <div className="text-sm">{item[lang]}</div>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sky-600 hover:underline text-xs">
                        {lang === 'it' ? 'Maggiori info' : 'More info'}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-700 flex flex-col gap-2">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span>
              <span className="font-semibold">CIN:</span> IT087002C2ZR2P9OW9
            </span>
            <span>
              <span className="font-semibold">CIR:</span> 19087002C230378
            </span>
          </div>
          <div className="text-slate-700">BlueWave HolidayHouse ©2026</div>
        </div>
      </div>
    </section>
  )
}
