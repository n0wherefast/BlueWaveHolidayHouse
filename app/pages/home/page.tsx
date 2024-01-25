'use client'
import React from 'react'
import {dataHomeDescription,DataHome} from '../../ref/data'
import { motion,Variants} from 'framer-motion'
import '../../globals.css'
import WaveLine from '@/app/components/WaveLine'
import { Parallax } from '@/app/components/Parallax'
import Image from 'next/image'


export default function HomePage() {

      const variant:Variants = {
        start:{opacity:0 ,x:-20},
        end:{opacity:1, x:1},
        }

        return (
    <section className='overflow-hidden pt-[2rem] md:pt-[4rem] flex flex-col items-center'>
       <Parallax/>
        <div className=' h-[6rem]' id='home'/>
       <section className='flex flex-col items-center text-2xl w-[100vw] '>
        <div className=" m-5 mt-10 w-full  lg:text-7xl text-5xl text-slate-950 font-black italic">
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.5}} className=' flex items-center justify-center w-full h-5 text-teal-500 ml-3'>BlueWave HolidayHouse </motion.h1>
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.6}} className=' flex items-center justify-center w-full  h-5 text-sky-400 ml-3 relative left-[.4rem] top-[-1rem]'>BlueWave HolidayHouse </motion.h1>
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' flex items-center justify-center w-full  h-5 text-amber-400 ml-3 relative left-[.8rem] top-[-2rem]'>BlueWave HolidayHouse </motion.h1>
        </div>
        <br />
        {
          dataHomeDescription.map((itm:DataHome) => {
            const {id,title,desc,img} = itm
            return(
              <motion.div className='flex flex-col items-center justify-center' key={id} variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}>
                <strong className="text-black text-3xl font-black italic mb-6 w-full flex justify-center text-center ">{title}</strong>
                <div className='flex md:flex-row flex-col text-xl items-center justify-around w-[100vw] p-[1rem]'>
                    {id % 2 == 0? null : <Image  className='flex w-[30rem] h-[20rem] justify-around m-1 rou roundedCustom ' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={img!} width={500} height={500} alt=''/> }
                    <motion.p className=' w-full lg:w-[40vw] text-lg font-semibold'>
                     {desc}
                    </motion.p> 
                    {id % 2 == 0? <Image  className='flex w-[30rem] h-[20rem] justify-around m-1 rou roundedCustom' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={img!} width={500} height={500} alt=''/> : null}
                </div>
                <div className='w-full flex justify-center'><WaveLine/></div>
              </motion.div>
            );
          })
        }
      </section> 
    </section> 
  )
}
