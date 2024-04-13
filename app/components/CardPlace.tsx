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
 
    <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}  className=' w-80 md:w-[32rem] h-[36rem] p-2  bg-sky-700 flex flex-col items-center justify-between hover:scale-105' >     
            <Image priority placeholder='blur' blurDataURL={urlFor(image!).url()} className=' w-full h-1/2 flex items-center object-cover' src={urlFor(image!).url()} height={500} width={500}  alt={description!}/>
            <h2 className='m-1 text-4xl text-white font-bold first-letter:text-amber-400' >{title}</h2>
            <p className=' prose prose-md w-full p-2 text-center text-white font-light'>{smalldesc}</p>
        <Link href={`/pages/place/${slug}`}> 
          <button className='p-2 text-white bg-sky-800 flex items-center justify-center font-semibold'>READ MORE</button>
        </Link>
    </motion.div>
 
  )
}

export default Card
{/* <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}
className="text-md  w-[22rem] p-2 bg-sky-700 text-zinc-50 border border-sky-400">

<p className='flex flex-col justify-center items-center'> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >P</span>olitiche:</strong></p>
<p className='pl-4 prose-lg'>
    -L&apos;host ti accoglie di persona <br />
    -Sono permessi soggiorni a lungo termine
    Consente i soggiorni oltre i 28 giorni <br />
    -Animali domestici ammessi
    Gli animali di servizio sono sempre ammessi
        <br />
</p>
</motion.div>  */}