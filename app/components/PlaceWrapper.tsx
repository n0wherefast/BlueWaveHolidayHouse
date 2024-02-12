'use client'
import React , {useEffect, useState, useRef}from 'react'
import { dataPlace ,DataPlace} from '@/app/ref/data'
// import { motion,Variants } from 'framer-motion'
import { MainContainer } from '@/app/styles/Place.style'
import type { RootState } from '@/app/redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize } from '@/app/redux/slice/manageResizeSlice'
import { Swiper, SwiperSlide } from "swiper/react";
import { scrollToTop } from '@/app/redux/slice/scrollTo'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation,Autoplay } from "swiper/modules";
import Card from '@/app/components/Card'
import SinglePlace from '@/app/components/SinglePlace'


function PlaceWrapper({children}:any) {
   const [places,setPlaces] = useState(dataPlace)
   const [place,setPlace] = useState<DataPlace | null> ({})
   const size = useSelector((state:RootState) => state.size.value)
   const dispatch = useDispatch()
   const [selected ,setSelected] = useState(false)
   const ref:any = useRef()


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
  useEffect(()=>{
    HandleCard(ref.current)
  },[])

  //  const variant:Variants = {
  //   start:{opacity:0 ,x:-20},
  //   end:{opacity:1, x:0},
  //   }
 
 const HandleCard = (itm:DataPlace) =>{
  setSelected(true) 
  setPlace({...itm})
  dispatch(scrollToTop('top'))
  setPlaces(places.filter((el)=>el.id))
 }
      
  return (
  <MainContainer className='flex flex-col items-center gap-5 bg-sky-900'>
    <div className='flex flex-wrap md:w-full md:min-h-[60vh] gap-5 items-center justify-center p-10'>
        {children}
    </div>
  </MainContainer>
  )
}

export default PlaceWrapper