import React from 'react'
import {motion, Variant } from 'framer-motion'
import img from '../assets/blue_wave__abstract_picture_walpaper_amazing.jpg'
import Image from 'next/image'


function Slide({move}:any ) {

    const divsProva = [ "1","1", "1","1","1","1","1","4","1","2","1","1","1","5","1","1","1","1",]
 
    const variant = {
        initial:{
            x:move.xIni,
        },
        animate:{
            x:move.xAni,
            transition:{
                ease: "linear",
                 duration:40,
                 repeat: Infinity
            },
        },
    }

  return (
    <motion.div className='w-[50%] flex gap-2 h-80' variants={variant} initial="initial" animate="animate" >
         {divsProva.map((itm ,indx)=>(
        <Image className='z-0 ' key={indx} src={img} alt='Gallery' ></Image> 
        ))} 
    </motion.div>
  )
}

export default Slide