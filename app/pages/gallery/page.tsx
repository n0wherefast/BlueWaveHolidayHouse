'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import '../../globals.css'
import Image from 'next/image';
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';
import img from '../../assets/29-09-11.webp'
import { motion,Variants } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
function Gallery() {
    const size = useSelector((state:RootState)=>state.size.value)

    const variant:Variants = {
        start:{opacity:0 ,x:-10},
        end:{opacity:1, x:8},
        startG:{opacity:0 ,x:-10},
        endG:{opacity:1, x:1},
        }

    const style ={
        backgroundSize:'cover',
         backgroundPosition:'center',
          width: size <= 700? '20rem': size > 700 &&  size <100 ?  '40rem' : '50rem',
          height: size <= 700? '20rem': size > 700 &&  size <100 ?  '40rem' : '50rem',
     }
  return (
    <>
        <div className=' flex flex-col justify-start gap-10 items-center min-h-[92vh] w-full pt-[4.5rem] bg-sky-700 ' >
        <div className='w-full'>   
            <motion.div variants={variant} initial='startG' whileInView='endG' transition={{delay:0.6}}className="mt-10 absolute   w-[93vw]  text-6xl  font-black italic  border-b-[5rem] border-b-amber-400  border-r-[9rem] border-r-transparent  h-[5.2rem]"/>
            <motion.div variants={variant} initial='startG' whileInView='endG' transition={{delay:0.8}}className="mt-10  w-[90vw]  text-6xl  font-black italic  border-b-[5rem] border-b-white  border-r-[9rem] border-r-transparent  h-[5.2rem]">
                {size<700  &&   <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' p-2 flex items-center justify-center w-full text-amber-400 '>Gallery </motion.h1>}       
            </motion.div>
        </div>
           
         
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay:2500,
                disableOnInteraction:false
            }}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow,Autoplay, Pagination]}
            // className="w-[100%] pt-[5rem] pb-[5rem]"
      >
            <SwiperSlide  style={style}>
            <Image className=' w-full h-full  rounded-2xl block'  alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
      </Swiper>
      <p className='p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum velit dolores id consequuntur et, eligendi nulla ducimus facilis dicta aliquid.</p>
        </div>
    </>
  )
}

export default Gallery
