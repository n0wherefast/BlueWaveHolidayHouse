'use client'
import Image from 'next/image'
import React from 'react'
import Gallery from '../Gallery'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa'
import { GalleryResponse } from '@/app/types/dataTypes'


function WrappedGallery({gallery}:any) {
  // console.log(gallery)
  return (
    <>
      <section id="gallery" className="border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  Gallery
                </motion.h2>
                <p className="mt-2 text-slate-600">Anteprima: soggiorno, camera, cucina, bagno, balcone e vista mare.</p>
              </div>
              <a
                href="https://www.instagram.com/bwholidayhouse?igsh=MW93bzN4ZWd4NHFtbA=="
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:underline"
              >
                Apri Instagram <FaInstagram className="w-4 h-4 text-pink-500" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((item:GalleryResponse) => (
                <motion.div
                  key={item.label}
                  className={`group relative aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br ${item.tone} overflow-hidden shadow-sm`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.18),transparent_50%)]" />
                  </div>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <Image
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      width={500}
                      height={500}
                      src={item.path}
                      alt={item.alt}
                    />
                    {/* <div className="text-slate-600 text-sm font-medium">{item.label}</div> */}
                  </div>
                </motion.div> 
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default WrappedGallery
