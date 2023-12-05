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
            whileHover:{
                transition:{
                    duration:0
                },
                scale:1,
            }
        },
    }

  return (
    <motion.div className=' w-[50%] flex gap-2 text-9xl h-80' variants={variant} initial="initial" animate="animate" >
         {divsProva.map((itm ,indx)=>(
        <Image key={indx} src={img} alt='' className=' w-full text-9xl bg-red-500'></Image> 
        ))} 
        {/* slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide slide */}
     </motion.div>
  )
}

export default Slide