'use client'
import React from 'react'
import { HomeContainer,DescripitonHome,ParagraphContainer,
ImageParagraphContainer,GalleryContainer,} from '@/app/styles/HomePage.style'
import Gallery from '@/app/components/Gallery'
import Image from 'next/image'
import img from '../../assets/29-09-11.webp'
import {dataHomeDescription,DataHome} from '../../ref/data'

import styled from 'styled-components'
import {animate, motion,Variants} from 'framer-motion'
import Slide from '@/app/components/Slide'
import '../../globals.css'
import WaveLine from '@/app/components/WaveLine'
import Link from 'next/link'
import { Parallax } from '@/app/components/Parallax'


export default function HomePage() {

      const variant:Variants = {
        start:{opacity:0 ,x:-20},
        end:{opacity:1, x:8},
        }

        return (
    <HomeContainer className='overflow-hidden'>
      
       <Parallax/>
       
        {/* <GalleryContainer className='Gallery'>
          <Gallery /> 
        </GalleryContainer> */}
        <div className='h-10' id='home'/>
       <DescripitonHome  className=''>
        <h1 className=" m-5 flex items-center justify-center text-5xl text-slate-950 font-black italic">
        BlueWave HolidayHouse
        </h1>
        <br />
        {
          dataHomeDescription.map((itm:DataHome) => {
            const {id,title,desc} = itm
            return(
              <motion.div key={id} variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}>
                <strong className="text-black font-bold mb-6 w-full flex justify-center">{title}</strong>
                <ParagraphContainer>
                    {id % 2 == 0? null : <ImageParagraphContainer priority rel='preload' src={img} width={500} height={500} alt=''/> }
                    <motion.p className=' w-full lg:w-[40vw]'>
                     {desc}
                    </motion.p> 
                    {id % 2 == 0? <ImageParagraphContainer priority rel='preload' src={img} width={500} height={500} alt=''/> : null}
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
