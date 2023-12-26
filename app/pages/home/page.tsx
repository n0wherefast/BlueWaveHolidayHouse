'use client'
import React from 'react'
import { HomeContainer,DescripitonHome,ParagraphContainer,
ImageParagraphContainer,GalleryContainer,} from '@/app/styles/HomePage.style'
import Gallery from '@/app/components/Gallery'
import Image from 'next/image'
import img from '../../assets/mobile.jpg'
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
       
        <GalleryContainer className='Gallery'>
          <Gallery /> 
        </GalleryContainer>
        
       <DescripitonHome  className='' id='home'>
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
                    {id % 2 == 0? null : <ImageParagraphContainer src={img} alt=''/> }
                    <motion.p className=' w-full lg:w-[40vw]'>
                     {desc}
                    </motion.p> 
                    {id % 2 == 0? <ImageParagraphContainer src={img} alt=''/> : null}
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






{/* <SvgContainer>      
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,160C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00c8e2" fill-opacity="1" d="M0,0L80,48C160,96,320,192,480,218.7C640,245,800,203,960,176C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00c8e2" fill-opacity="1" d="M0,288L80,272C160,256,320,224,480,181.3C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00aeff" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,112C640,149,800,235,960,229.3C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0066ff" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,250.7C640,267,800,245,960,202.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
          </SvgContainer> */}