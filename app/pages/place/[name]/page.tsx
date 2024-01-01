'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { ImageParagraphContainerPlace } from '@/app/styles/Place.style'



 function PagePlace()  {
  
   const serchParams = useSearchParams()
   const desc = serchParams.get('desc')
   const place = serchParams.get('name')
   const img = serchParams.get('img')
   
    console.log(img)
  return (
    <div className='pt-[10rem]'>
        <h1> {place}</h1>
        <ImageParagraphContainerPlace width={500} height={500} src={img} alt='' />
        <h2>{desc}</h2>
    </div>
  )
}

export default PagePlace
