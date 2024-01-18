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
function Gallery() {
  return (
    <>
        <div className='h-screen w-full pt-[4.5rem]  bg-sky-900' >
        <div>Gallery</div>
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
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}}>
            <Image className=' w-full h-full  rounded-2xl block'  alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide className='bg-cover bg-center w-[50%] h-[20rem]' style={{backgroundSize:'cover', backgroundPosition:'center', width:'20rem' ,height: '20rem'}} >
            <Image className=' w-full h-full  rounded-2xl block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
      </Swiper>
        </div>
    </>
  )
}

export default Gallery
