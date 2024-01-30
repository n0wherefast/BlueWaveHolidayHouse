import Image from 'next/image'
import React from 'react'
import img from '../assets/etna2018-3.webp'
import { DataPlace } from '../ref/data'

function Card({desc,src,place,id,smalldesc}:DataPlace) {
  return (
    <div className=' w-72 h-96  bg-sky-950 flex flex-col items-center hover:scale-105' >
            <Image className='w-full h-1/2 flex items-center' src={src!} height={500} width={500}  alt={desc!}/>
        <h2 className='m-3 text-3xl text-white font-bold' >{place}</h2>
        <p className='w-full p-2 text-center text-white font-light'>{smalldesc}</p>
    </div>
  )
}

export default Card
