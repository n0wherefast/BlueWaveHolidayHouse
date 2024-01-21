'use client'
import React , {useEffect, useState}from 'react'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { motion,Variants } from 'framer-motion'
import { PlaceContainer,MainContainer,ImageParagraphContainerPlace } from '@/app/styles/Place.style'
import Link from 'next/link'
import type { RootState } from '@/app/redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize } from '@/app/redux/slice/manageResizeSlice'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper/modules";
// import '../../globals.css'


function Place() {
   const [places,setPlaces] = useState(dataPlace)
   const size = useSelector((state:RootState) => state.size.value)
   const checkSize = useSelector((state:RootState) => state.size.checkSize)
   const dispatch = useDispatch()
   const [isClick,setIsClick] = useState(true)


  useEffect(() => {
    if(size<1000){
      dispatch(setCheckSize(true))
    }else{dispatch(setCheckSize(false))}

    dispatch(updateValue(window.innerWidth))
    function handleResize() {
      
      dispatch(updateValue(window.innerWidth))
    }
     
      window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

   });
   const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:0},
    }
   
    
    

      
  return (
  <MainContainer className='flex flex-col bg-sky-700'>
    {/* <div className=" w-full  lg:text-8xl text-7xl text-slate-950 font-black italic ">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' ] flex items-center justify-center w-full text-amber-400 '>Places</motion.h1>
    </div>     */}
<div className=' w-full h-[100vh]'>

<Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
        loop={true}
        modules={[Pagination, Navigation,Autoplay]}
        className=""
        style={{color:'red'}}

      >
    {
      places.map((itm:DataPlace)=>{
        const {place,id,desc,src} = itm


        return(
          <SwiperSlide className='text-slate-50 p-[1rem]' key={id}>
            <Image className='w-full h-[88vh]' src={src!} height={1000} width={1000}  alt='ok'/>
            <motion.div transition={{delay:0.5}} initial={{opacity:0 ,x:22}} whileInView={{opacity:1 ,x:0}}
             className='p-2 w-[18rem] lg:w-[30rem] min-h-[30rem] absolute left-[3rem] lg:left-[10rem] top-[3rem] lg:top-[10rem] border-2  backdrop-blur-xl'>
             <p className='p-2 text-5xl font-bold italic'>{place}</p>
            <p className='p-2 font-medium text-sm lg:text-xl'>{desc}</p>
            </motion.div>           
          </SwiperSlide>
        )
      })
    }
    </Swiper>
</div>
   
  </MainContainer>
  )
}

export default Place

