'use client'
import React from 'react'
import styled from 'styled-components'
import  {motion } from 'framer-motion'
import Map from '@/app/components/Map'



export const BoxInfo = styled.div`
    width: 30vw;
    height: 25vh;
    background-color: lightgrey;
    z-index: 10;
    position: absolute;
    top: 40rem;
    left: 75rem;
    border-radius: 20px ;
`


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
