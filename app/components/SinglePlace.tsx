import React from 'react'
import Image from 'next/image'
import { DataPlace } from '../ref/data'

function SinglePlace({desc,src,place,}:DataPlace) {
  return (
    <div className=' w-full h-[60rem] md:h-[160vh]  bg-sky-950 flex flex-col items-center' >
        <Image className='w-full h-1/2 flex items-center' src={src!} height={1000} width={1000}  alt={desc!}/>
        <h2 className='m-3 text-3xl text-white font-bold' >{place}</h2>
        <p className='w-full p-2 text-center text-white font-light'>{desc}</p>
    </div>
  )
}

export default SinglePlace
