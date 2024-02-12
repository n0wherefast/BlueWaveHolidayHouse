import React from 'react'
import Image from 'next/image'
import { DataPlace } from '../ref/data'
import {motion ,Variants} from 'framer-motion'
function SinglePlace({desc,src,place,}:DataPlace) {

  const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:0},
    }

  return (
    <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' w-full h-[60rem] md:min-h-screen  bg-sky-950 flex flex-col lg:flex-row lg:items-start  items-center' >
        <Image className='w-full h-[90vh]  lg:p-3 lg:mt-5 flex items-center' src={src!} height={1000} width={1000}  alt={desc!}/>
        <div className='w-full flex flex-col  items-center justify-center'>
             <h2 className='m-3 text-3xl lg:text-6xl text-white font-bold' >{place}</h2>
              <p className=' p-2 text-center text-white font-light'>{desc}</p>
        </div>
    </motion.div>
  )
}

export default SinglePlace

{/* <div className=' w-full min-h-[60rem] md:min-h-[95vh]  bg-sky-950 flex  items-start' >
        <Image className='md:w-[60vw] md:h-[85vh] p-3 lg:mt-5 flex items-center' src={src!} height={1000} width={1000}  alt={desc!}/>
        <div className='w-full flex flex-col  items-center justify-center'>
             <h2 className='m-3 text-3xl lg:text-6xl text-white font-bold' >{place}</h2>
              <p className=' p-2 text-center text-white font-light'>{desc}</p>
        </div>
    </div> */}