'use client'
import React from 'react'
import { HomeContainer,ImageContainer 
  ,DiscoverContainer,DescripitonHome,ParagraphContainer,
ImageParagraphContainer,GalleryContainer,} from '@/app/styles/HomePage.style'
import Gallery from '@/app/components/Gallery'
import Image from 'next/image'
import img from '../../assets/29-09-11.jpg'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Slide from '@/app/components/Slide'
import '../../globals.css'


export default function HomePage() {
 

  return (
    <HomeContainer className='overflow-hidden'>
        <ImageContainer className='image'>
          <DiscoverContainer>
            discover
          </DiscoverContainer>
        </ImageContainer> 
        <br />
       

        <GalleryContainer>
          <Gallery /> 
        </GalleryContainer>
      
      <DescripitonHome id='home'>
        <h1 className=" h-56 m-5 flex items-center justify-center text-7xl text-slate-950 font-black italic mb-4 ">
        BLUE WAVE HOLIDAY HOUSE
        </h1>
        <br />
     
        <strong className="text-black font-bold mb-6">La tua casa vacanza ideale nel cuore di Catania!</strong>
        
          <ParagraphContainer>
              <motion.p className=' w-full lg:w-[40vw]'>
                  Scegliere di soggiornare da noi significa avere tutto a portata di mano per una visita indimenticabile alla città.
                  Situata a soli 15 minuti in auto dall&apos;aeroporto di Catania Fontana Rossa, la nostra casa vacanza è la base perfetta
                    per un weekend nella meravigliosa Catania.
              </motion.p> 
              <ImageParagraphContainer src={img} alt=''/>
          </ParagraphContainer>
         
        <br />
        <ParagraphContainer>            
          <ImageParagraphContainer src={img} alt=''/>
          <motion.p className=" w-full lg:w-[40vw] ">
           Con la sua posizione strategica, potrai visitare facilmente il centro storico e immergerti nella ricca storia e cultura
           della città. Passeggiando lungo
           <strong className="text-sky-700 font-bold">Via Etna</strong>, la via più importante di Catania,
           potrai ammirare le affascinanti architetture e goderti lo spirito vivace della
            <strong className="text-sky-700 font-bold">movida catanese</strong>, sorseggiando un delizioso cocktail.
          </motion.p>
        </ParagraphContainer>
        
        <br />
        <ParagraphContainer>
          <motion.p className='w-full lg:w-[40vw]'>
          Tutto ciò sarà ancora più piacevole grazie alla comodità offerta dalla nostra posizione privilegiata:
           Cortese Home si trova a soli 10 minuti a piedi dalle principali attrazioni turistiche della città.
        </motion.p>
         <ImageParagraphContainer src={img} alt=''/>
        </ParagraphContainer>
        
        <ParagraphContainer>
        <ImageParagraphContainer src={img} alt=''/>
          <motion.p className='w-full lg:w-[40vw]]'>
          Confortevole, accogliente e dotata di tutti i comfort di cui hai bisogno, Cortese Home ti offre un rifugio
           tranquillo e rilassante dopo una giornata intensa di visite turistiche. La nostra casa vacanza è arredata con 
           gusto e dispone di spazi luminosi e accoglienti per garantirti un soggiorno piacevole e rigenerante.
        </motion.p>
        </ParagraphContainer>
        
        <ParagraphContainer>
          <motion.p className='w-full lg:w-[40vw]'>
          Potrai goderti il tuo weekend a Catania sapendo di avere un comodo ritiro a pochi passi dalle principali attrazioni.
        </motion.p>
        <ImageParagraphContainer src={img} alt=''/>
        </ParagraphContainer>
        
        <ParagraphContainer>
        <ImageParagraphContainer src={img} alt=''/>
          <motion.p className='w-full lg:w-[40vw]'>
          Non perdere l&apos;opportunità di visitare Catania e scegliere Cortese Home come la tua casa vacanza ideale nel centro della città.
           Prenota ora e scopri tutto ciò che questa affascinante destinazione ha da offrire.
        </motion.p> 
        </ParagraphContainer>
         

      </DescripitonHome>
    </HomeContainer> 
  )
}
