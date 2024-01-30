'use client'
import React from 'react';
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
        startE:{opacity:-10 },
        }

    const style ={
        backgroundSize:'cover',
         backgroundPosition:'center',
          width: size <= 700? '23rem': size > 700 &&  size <100 ?  '38rem' : '40rem',
          height: size <= 700? '23rem': size > 700 &&  size <100 ?  '38rem' : '40rem',
     }
  return (
    <>
        <div className=' flex flex-col justify-start gap-5 items-center min-h-screen w-full pt-[4.5rem] bg-sky-700 ' >
                <div className='w-full'>   
                    <motion.div variants={variant} initial='startG' whileInView='endG' transition={{delay:0.6}} className=" absolute   w-[93vw]  text-6xl  font-black italic  border-b-[5rem] border-b-amber-400  border-r-[9rem] border-r-transparent  h-[5.2rem]"/>
                    <motion.div variants={variant} initial='startG' whileInView='endG' transition={{delay:0.8}} className="  w-[90vw]  text-6xl  font-black italic  border-b-[5rem] border-b-white  border-r-[9rem] border-r-transparent  h-[5.2rem]">
                                    <>
                                        <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' absolute top-[0.2rem] p-2 flex items-center justify-center w-full text-sky-600 '>Gallery </motion.h1>
                                        <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' p-2 flex items-center justify-center w-full text-amber-400 '>Gallery </motion.h1>
                                    </>      
                    </motion.div>
                </div>
           
         
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay:4500,
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
            className=""
      >
            <SwiperSlide  style={style}>
            <Image className=' w-full h-full  rounded-lg block'  alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
            <SwiperSlide  style={style} >
            <Image className=' w-full h-full  rounded-lg block' alt='' width={500} height={500} src={img} />
            </SwiperSlide>
      </Swiper>

       <div className='w-[100%] flex flex-row-reverse items-end mr-1 lg:mb-5'>   
            <motion.div variants={variant} initial='startE' whileInView='endG' transition={{delay:0.6}}className=" absolute  w-[93vw]  text-6xl  font-black italic  border-b-[5rem] border-b-amber-400  border-l-[9rem] border-l-transparent  h-[5rem]"/>
            <motion.div variants={variant} initial='startE' whileInView='endG' transition={{delay:0.8}} className=" w-[90vw]  text-6xl  font-black italic  border-b-[5rem] border-b-white  border-l-[9rem] border-l-transparent  h-[5rem]"/>
        </div>
      {/* <p className='p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum velit dolores id consequuntur et, eligendi nulla ducimus facilis dicta aliquid.</p> */}
        </div>
    </>
  )
}

export default Gallery
