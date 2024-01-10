import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowCircleDown } from 'react-icons/fa'

function Button({color,y}:any) {
  return (
    <motion.button   animate={{ y: y,  scale: [1,1.5,1], borderRadius:[0,2,2,0]} } 
                         transition={{ ease: "easeOut", duration: 1 }}
                         className='   w-[100%]'> 
                            <h2 className= {`transition-all ease-in flex justify-center items-center text-4xl lg:text-5xl rounded-2xl hover:text-slate-100 font-extrabold  ${color}`}>
                                 <p className=' animate-pulse'><FaArrowCircleDown/></p>
                            </h2>
    </motion.button>
  )
}

export default Button
