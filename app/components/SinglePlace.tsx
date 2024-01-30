import React from 'react'
import Image from 'next/image'
import { DataPlace } from '../ref/data'

function SinglePlace({desc,src,place,}:DataPlace) {
  return (
    <div className=' w-[100%] min-h-[60rem] md:min-h-[120vh]  bg-sky-950 flex flex-col items-center' >
        <Image className='md:w-[80vw] md:h-[85vh] p-3 flex items-center' src={src!} height={1000} width={1000}  alt={desc!}/>
        <h2 className='m-3 text-3xl lg:text-6xl text-white font-bold' >{place}</h2>
        <p className='w-[80vw] p-2 text-center text-white font-light'>{desc}</p>
    </div>
  )
}

export default SinglePlace
