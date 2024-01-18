'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../globals.css'
import Image from 'next/image'
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';
import img from '../../assets/29-09-11.webp'
function Gallery() {
  return (
    <>
        <div className='h-screen w-full pt-[4.5rem]'>
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
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        
        modules={[EffectCoverflow,Autoplay, Pagination]}
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
