'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../globals.css'
import Image from 'next/image'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import img from '../../assets/29-09-11.webp'
function Gallery() {
  return (
    <>
        <div className='h-screen w-full pt-[4.5rem]'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt='' width={1000} height={1000} src={img} />
        </SwiperSlide>
      </Swiper>
        </div>
    </>
  )
}

export default Gallery
