'use client'
import React from 'react'
import { HomeContainer,DescripitonHome,ParagraphContainer,
ImageParagraphContainer,GalleryContainer,} from '@/app/styles/HomePage.style'
import Gallery from '@/app/components/Gallery'
import Image from 'next/image'
import img from '../../assets/mobile.jpg'
import wavefoam1 from '../../assets/waveFoam1.png'
import wavefoam2 from '../../assets/waveFoam2.png'
import wavefoam3 from '../../assets/waveFoam3.png'
import styled from 'styled-components'
import {animate, motion} from 'framer-motion'
import Slide from '@/app/components/Slide'
import '../../globals.css'
import WaveLine from '@/app/components/WaveLine'
import Link from 'next/link'
import { Parallax } from '@/app/components/Parallax'

// export const BgContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background-color:#f7eda7; */
//   width: 100vw;
//   height: 93.5vh;
// `

// export const ImgContainer = styled.div`
//  width: 100vw;
//  height: 90vh;
// `

export default function HomePage() {
 const handleScroll = () => {
    console.log('ok')
 }

 const ScrollTo = () => {
  window.scrollTo(5,1000)
 }

  return (
    <HomeContainer className='overflow-hidden ' onScroll={()=>handleScroll()}>
      
       <Parallax/>
        <br />
        <br />   {/* last change */}

        <GalleryContainer>
          <Gallery /> 
        </GalleryContainer>
        
       <DescripitonHome  className='' id='home'>
        <h1 className=" m-5 flex items-center justify-center text-5xl text-slate-950 font-black italic">
        BlueWave HolidayHouse
        </h1>
        <br />
     
        <strong className="text-black font-bold mb-6">La tua casa vacanza ideale nel cuore di Catania!</strong>
        <motion.div initial={{ x: -20, opacity:0  }} whileInView={{ x: 20, opacity:1 }} transition={{delay:0.2}}>
          <ParagraphContainer>
              <motion.p className=' w-full lg:w-[40vw]'>
                  Scegliere di soggiornare da noi significa avere tutto a portata di mano per una visita indimenticabile alla città.
                  Situata a soli 15 minuti in auto dall&apos;aeroporto di Catania Fontana Rossa, la nostra casa vacanza è la base perfetta
                    per un weekend nella meravigliosa Catania.
              </motion.p> 
              <ImageParagraphContainer src={img} alt=''/>
          </ParagraphContainer>
          </motion.div>

        <WaveLine/>
        <strong className="text-black font-bold ">La tua casa vacanza</strong>
       <motion.div initial={{ x: -20, opacity:0  }} whileInView={{ x: 20, opacity:1 }}  transition={{delay:0.2}} >
        <ParagraphContainer>            
          <ImageParagraphContainer src={img} alt=''/>
          <motion.p  className=" w-full lg:w-[40vw] ">
           Con la sua posizione strategica, potrai visitare facilmente il centro storico e immergerti nella ricca storia e cultura
           della città. Passeggiando lungo
           <strong className="text-sky-700 font-bold">Via Etna</strong>, la via più importante di Catania,
           potrai ammirare le affascinanti architetture e goderti lo spirito vivace della
            <strong className="text-sky-700 font-bold">movida catanese</strong>, sorseggiando un delizioso cocktail.
          </motion.p>
        </ParagraphContainer>
      </motion.div> 

        <WaveLine />
        <strong className="text-black font-bold">La tua casa vacanza</strong>
        <ParagraphContainer>
          <motion.p className='w-full lg:w-[40vw]'>
          Tutto ciò sarà ancora più piacevole grazie alla comodità offerta dalla nostra posizione privilegiata:
           Cortese Home si trova a soli 10 minuti a piedi dalle principali attrazioni turistiche della città.
        </motion.p>
         <ImageParagraphContainer src={img} alt=''/>
        </ParagraphContainer>
        <WaveLine />
        <strong className="text-black font-bold">La tua casa vacanza</strong>
        <ParagraphContainer>
        <ImageParagraphContainer src={img} alt=''/>
          <motion.p className='w-full lg:w-[40vw]]'>
          Confortevole, accogliente e dotata di tutti i comfort di cui hai bisogno, Cortese Home ti offre un rifugio
           tranquillo e rilassante dopo una giornata intensa di visite turistiche. La nostra casa vacanza è arredata con 
           gusto e dispone di spazi luminosi e accoglienti per garantirti un soggiorno piacevole e rigenerante.
        </motion.p>
        </ParagraphContainer>
      <WaveLine/>
        <strong className="text-black font-bold ">La tua casa vacanza</strong>
        <ParagraphContainer>
          <motion.p className='w-full lg:w-[40vw]'>
          Potrai goderti il tuo weekend a Catania sapendo di avere un comodo ritiro a pochi passi dalle principali attrazioni.
        </motion.p>
        <ImageParagraphContainer src={img} alt=''/>
        </ParagraphContainer>
      <WaveLine/>
        <strong className="text-black font-bold">La tua casa vacanza</strong>
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






{/* <SvgContainer>      
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,160C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00c8e2" fill-opacity="1" d="M0,0L80,48C160,96,320,192,480,218.7C640,245,800,203,960,176C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00c8e2" fill-opacity="1" d="M0,288L80,272C160,256,320,224,480,181.3C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00aeff" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,112C640,149,800,235,960,229.3C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0066ff" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,250.7C640,267,800,245,960,202.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
          </SvgContainer> */}