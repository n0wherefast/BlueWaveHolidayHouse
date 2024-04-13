'use client'
import React , {useEffect, useState, useRef}from 'react'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { MainContainer } from '@/app/styles/Place.style'
import type { RootState } from '@/app/redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize } from '@/app/redux/slice/manageResizeSlice'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function PlaceWrapper({children}:any) {
  //  const [places,setPlaces] = useState(dataPlace)
  //  const [place,setPlace] = useState<DataPlace | null> ({})
   const size = useSelector((state:RootState) => state.size.value)
   const dispatch = useDispatch()
  //  const [selected ,setSelected] = useState(false)
  //  const ref:any = useRef()


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

      
  return (
  <MainContainer className='flex flex-col items-center gap-5 bg-white'>
    <div className=' flex flex-wrap md:w-full md:min-h-[60vh] gap-5 items-center justify-center p-10'>
        {children}
    </div>
  </MainContainer>
  )
}

export default PlaceWrapper