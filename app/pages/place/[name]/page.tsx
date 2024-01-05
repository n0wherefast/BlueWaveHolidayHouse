'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import styled from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import WaveLine from '@/app/components/WaveLine'
import { ImageContainerPlace } from '@/app/styles/PlaceDinam.style'


 function PagePlace()  {
  
   const serchParams = useSearchParams()
   const desc = serchParams.get('desc')
   const place = serchParams.get('name')
   const img =  serchParams.get('img')
  
  
   
  //  console.log(serchParams)
  return (
    <div className='pt-[1rem] flex  flex-col items-center'>
        <ImageContainerPlace width={500} height={500} src={img!} alt={place!} />
        <h1 className=' absolute top-[35rem] left-[4rem] lg:top-[40rem] lg:left-[45rem] text-[3rem] lg:text-[10rem] text-amber-400 font-[900] italic'> {place}</h1>
        <br />
        <WaveLine/>
        <h2 className=' text-2xl text-center  font-semibold'>{desc}</h2>
        <br />
        <WaveLine/>
    </div>
  )
}

export default PagePlace
