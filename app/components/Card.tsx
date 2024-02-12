import Image from 'next/image'
import React from 'react'
import img from '../assets/etna2018-3.webp'
import { DataPlace } from '../ref/data'
import { PLACE } from '../ref/types'
import { urlFor } from '../ref/sanity'

function Card({description,smalldesc,image,title}:PLACE) {
  return (
    <button className=' w-80 md:w-[32rem] h-[36rem] p-2  bg-sky-950 flex flex-col items-center justify-between hover:scale-105' >
            <Image className='w-full h-1/2 flex items-center object-cover' src={urlFor(image!).url()} height={500} width={500}  alt={smalldesc!}/>
        <h2 className='m-1 text-3xl text-white font-bold' >{title}</h2>
        <p className='w-full p-2 text-center text-white font-light'>{smalldesc}</p>
        <div className='p-2 bg-sky-800 flex items-center justify-center font-semibold'>READ MORE</div>
    </button>
  )
}

export default Card
