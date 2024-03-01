'use client'
import Image from 'next/image'
import React from 'react'
import { PLACES } from '../ref/types'
import { urlFor } from '../ref/sanity'
import Link from 'next/link'
import {motion, Variants} from 'framer-motion'

function Card({description,smalldesc,image,title,slug}:PLACES) {
  const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:1},
    }
  return (
 
    <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}  className=' rounded-xl w-80 md:w-[32rem] h-[36rem] p-2  bg-sky-950 flex flex-col items-center justify-between hover:scale-105' >     
            <Image priority placeholder='blur' blurDataURL={urlFor(image!).url()} className=' rounded-xl w-full h-1/2 flex items-center object-cover' src={urlFor(image!).url()} height={500} width={500}  alt={description!}/>
            <h2 className='m-1 text-3xl text-white font-bold' >{title}</h2>
            <p className=' prose prose-md w-full p-2 text-center text-white font-light'>{smalldesc}</p>
        <Link href={`/pages/place/${slug}`}> 
          <button className='p-2 rounded-xl bg-sky-800 flex items-center justify-center font-semibold'>READ MORE</button>
        </Link>
    </motion.div>
 
  )
}

export default Card
