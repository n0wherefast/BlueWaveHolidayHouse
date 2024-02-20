'use client'
import React from 'react'
// import {dataHomeDescription,DataHome} from '../ref/data'
import { motion,Variants} from 'framer-motion'
import '../../globals.css'
import WaveLine from '@/app/components/WaveLine'
import { Parallax } from '@/app/components/Parallax'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/app/components/Footer'
import { Monoton,Martel_Sans,Contrail_One} from 'next/font/google'
import { homeContents } from '../../ref/types'
import { urlFor } from '../../ref/sanity'
import { PortableText } from '@portabletext/react'

const mono = Monoton({ subsets: ['latin'] , weight: '400' })
const eli = Martel_Sans({ subsets: ['latin'] , weight: '700' })
const one = Contrail_One({ subsets: ['latin'] , weight: '400' })


function HomeWrapper(data:any) {
  const content = data.data
    const variant:Variants = {
        start:{opacity:0 ,x:-20},
        end:{opacity:1, x:1},
        }
   
        return (
          <>
          
    <section className='overflow-hidden pt-[0rem] flex flex-col items-center'>
       <Parallax/>
        <div className=' h-[6rem]' id='home'/>
       <section className='flex flex-col items-center text-2xl w-[100vw] '>
        <div className={` m-5 mt-10 w-full  lg:text-7xl text-5xl text-slate-950 font-black italic`}>
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.5}} className=' flex items-center justify-center w-full h-5 text-teal-500 ml-3'>BlueWave HolidayHouse </motion.h1>
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.6}} className=' flex items-center justify-center w-full  h-5 text-sky-400 ml-3 relative left-[.4rem] top-[-1rem]'>BlueWave HolidayHouse </motion.h1>
         <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' flex items-center justify-center w-full  h-5 text-amber-400 ml-3 relative left-[.8rem] top-[-2rem]'>BlueWave HolidayHouse </motion.h1>
        </div>
        <br />
        {
          content.map((itm:homeContents) => {
            const {id,title,image,url,content} = itm
            return(
              <Link key={id} href={url!} className='   hover:bg-sky-200 transition-all ease-in duration-300 p-2' >
                 <motion.div className='  bg-sky-50 m-2 p-3 rounded-xl border-2 flex flex-col items-center justify-center'  variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}>
                  <strong className={`text-zinc-700 text-4xl md:text-5xl font-black italic mb-6 w-full flex justify-center text-center ${one.className}`} >{title}</strong>
                  <div className='text-zinc-800 flex md:flex-row flex-col text-xl items-center justify-around  p-[1rem]'>
                      {id % 2 == 0? null : <Image priority  className='flex w-[30rem] h-[15rem] md:h-[20rem] justify-around m-1 rou roundedCustom ' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={urlFor(image).url()}  width={500} height={500} alt=''/> }
                      <div className={`w-full lg:w-[25rem] prose  text-justify text-lg font-semibold ${eli.className}`}>
                        <PortableText value={content} />
                      </div> 
                      {id % 2 == 0? <Image  className='flex w-[30rem] h-[15rem] md:h-[20rem] justify-around m-1 rou roundedCustom' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={urlFor(image).url()} width={500} height={500} alt=''/> : null}
                  </div>
                </motion.div>
                 <div className='w-full flex justify-center'><WaveLine/></div>
              </Link>
            );
          })
        }
      </section> 
    </section> 
    <Footer/>
  </>
  )
}

export default HomeWrapper
