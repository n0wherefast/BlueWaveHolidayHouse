'use client'
import React from 'react'
import { BoxInfo } from '@/app/styles/Contact.style'
import  {motion } from 'framer-motion'
import Map from '@/app/components/Map'






function Contacts() {
  return (
    <div className='w-full h-screen  pt-[5rem] '>
      <motion.div  className=''>
            <BoxInfo>
              <h1> Addres:</h1>
            </BoxInfo>
        </motion.div>
      <Map/>
    </div>
  )
}

export default Contacts
