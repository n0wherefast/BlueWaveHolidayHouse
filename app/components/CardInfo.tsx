import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../ref/sanity'
import { PortableText } from '@portabletext/react'
import { motion,Variants} from 'framer-motion'
import { homeContents } from '../ref/types'
import { Monoton,Martel_Sans,Contrail_One} from 'next/font/google'



const mono = Monoton({ subsets: ['latin'] , weight: '400' })
const eli = Martel_Sans({ subsets: ['latin'] , weight: '700' })
const one = Contrail_One({ subsets: ['latin'] , weight: '400' })


function CardInfo({url,id,content,title,image}:homeContents) {

    const variant:Variants = {
        start:{opacity:0 ,x:-20},
        end:{opacity:1, x:1},
        }
  return (
  <>
  { !url? 
    <div key={id} className=' p-2' >
        <motion.div className=' hover:bg-sky-200 transition-all ease-in duration-200  bg-sky-50 m-2 p-3 rounded-xl border-2 flex flex-col items-center justify-center'  variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}>
        <strong className={`text-zinc-700 text-4xl md:text-5xl font-black italic mb-6 w-full flex justify-center text-center ${one.className}`} >{title}</strong>
        <div className='text-zinc-800 gap-3 flex flex-col md:flex-row text-xl items-center justify-around  p-[1rem]'>
            {id % 2 == 0? null : <Image priority  className='flex w-[30rem] h-[15rem] md:h-[20rem] justify-around m-1 roundedCustomR ' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={urlFor(image).url()}  width={500} height={500} alt=''/> }
            <div className={`w-full lg:w-[25rem] text-lg font-semibold ${eli.className}`}>
                <PortableText value={content} />
            </div> 
            {id % 2 == 0? <Image  className='flex w-[30rem] h-[15rem] md:h-[20rem] justify-around m-1 rou roundedCustomL' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={urlFor(image).url()} width={500} height={500} alt=''/> : null}
        </div>
        </motion.div>
    </div>
    :
    <>
       <Link key={id} href={url!} className=' prose   transition-all ease-in duration-300 p-2' >
                 <motion.div className=' hover:bg-sky-200 transition-all ease-in duration-200  bg-sky-50 m-2 p-3 rounded-xl border-2 flex flex-col items-center justify-center'  variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}>
                  <strong className={`text-zinc-700 text-4xl md:text-5xl font-black italic mb-6 w-full flex justify-center text-center ${one.className}`} >{title}</strong>
                  <div className='text-zinc-800 gap-3 flex md:flex-row flex-col text-xl items-center justify-around  p-[1rem]'>
                      {id % 2 == 0? null : <Image priority  className='flex w-[30rem] h-[15rem] md:h-[20rem] justify-around m-1 roundedCustomR ' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={urlFor(image).url()}  width={500} height={500} alt=''/> }
                      <div className={`w-full lg:w-[25rem]  text-lg font-semibold ${eli.className}`}>
                        <PortableText value={content} />
                      </div> 
                      {id % 2 == 0? <Image  className='flex w-[30rem] h-[15rem] md:h-[20rem] justify-around m-1 rou roundedCustomL' placeholder='blur' blurDataURL='../../assets/mobile.webp' src={urlFor(image).url()} width={500} height={500} alt=''/> : null}
                  </div>
                </motion.div>
    </Link>
    </>
}
 </> )
}

export default CardInfo
