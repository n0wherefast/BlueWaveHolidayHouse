'use client'
import React from 'react'
import { HomeContainer,DescripitonHome,ParagraphContainer,
ImageParagraphContainer} from '@/app/styles/HomePage.style'
import img from '../../assets/29-09-11.webp'
import {dataHomeDescription,DataHome} from '../../ref/data'
import { motion,Variants} from 'framer-motion'
import '../../globals.css'
import WaveLine from '@/app/components/WaveLine'
import { Parallax } from '@/app/components/Parallax'


export default function HomePage() {

      const variant:Variants = {
        start:{opacity:0 ,x:-20},
        end:{opacity:1, x:8},
        }

        return (
    <HomeContainer className='overflow-hidden'>
       <Parallax/>
        <div className=' h-[6rem]' id='home'/>
       <DescripitonHome>
        <div className=" m-5 mt-10 w-full  lg:text-7xl text-5xl text-slate-950 font-black italic">
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.5}} className=' flex items-center justify-center w-full h-5 text-teal-500 '>BlueWave HolidayHouse </motion.h1>
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.6}} className=' flex items-center justify-center w-full  h-5 text-sky-400  relative left-[.4rem] top-[-1rem]'>BlueWave HolidayHouse </motion.h1>
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' flex items-center justify-center w-full  h-5 text-amber-400  relative left-[.8rem] top-[-2rem]'>BlueWave HolidayHouse </motion.h1>
        </div>
        <br />
        {
          dataHomeDescription.map((itm:DataHome) => {
            const {id,title,desc,img} = itm
            return(
              <motion.div className='flex flex-col items-center justify-center' key={id} variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}>
                <strong className="text-black text-3xl font-black italic mb-6 w-full flex justify-center text-center ">{title}</strong>
                <ParagraphContainer>
                    {id % 2 == 0? null : <ImageParagraphContainer priority rel='preload' src={img!} width={500} height={500} alt=''/> }
                    <motion.p className=' w-full lg:w-[40vw] text-lg font-semibold'>
                     {desc}
                    </motion.p> 
                    {id % 2 == 0? <ImageParagraphContainer priority rel='preload' src={img!} width={500} height={500} alt=''/> : null}
                </ParagraphContainer>
                <div className='w-full flex justify-center'><WaveLine/></div>
              </motion.div>
            );
          })
        }
      </DescripitonHome> 
    </HomeContainer> 
  )
}
