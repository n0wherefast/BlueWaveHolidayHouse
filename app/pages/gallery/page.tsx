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
        start:{opacity:0 ,x:-20},
        end:{opacity:1, x:8},
        }

    const style ={
        backgroundSize:'cover',
         backgroundPosition:'center',
          width: size <= 700? '20rem': size > 700 &&  size <100 ?  '40rem' : '50rem',
          height: size <= 700? '20rem': size > 700 &&  size <100 ?  '40rem' : '50rem',
     }
  return (
    <>
        <div className=' flex flex-col justify-start gap-20 items-center min-h-screen w-full p-4 pt-[4.5rem] bg-sky-700 ' >
        <div className=" m-4 mt-12 w-full  lg:text-7xl text-7xl text-slate-950 font-black italic">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' flex items-center justify-center w-full  h-5 text-amber-400 '>Gallery </motion.h1>
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
            className="w-[100%] pt-[50%] pb-[50%]"
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
        </div>
    </>
  )
}

export default Gallery
