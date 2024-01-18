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
function Gallery() {

    const variant:Variants = {
        start:{opacity:0 ,x:-20},
        end:{opacity:1, x:8},
        }
  return (
    <>
        <div className=' flex flex-col justify-around items-center h-screen w-full pt-[4.5rem] bg-sky-700 ' >
        <div className=" m-4 w-full  lg:text-7xl text-7xl text-slate-950 font-black italic">
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
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}}>
            <Image className=' w-full h-full  rounded-2xl block'  alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
      </Swiper>
        </div>
    </>
  )
}

export default Gallery
