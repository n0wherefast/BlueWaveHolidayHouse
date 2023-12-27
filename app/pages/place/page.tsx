'use client'
import React from 'react'
import { ImageParagraphContainer } from '@/app/styles/HomePage.style'
import img from '../../assets/mobile.jpg'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { motion } from 'framer-motion'
import { PlaceContainer,MainContainer } from '@/app/styles/Place.style'
import styled from 'styled-components'


function Place() {
  return (
  <MainContainer>
    {
      dataPlace.map((itm:DataPlace)=>{
        const {moveX,moveY,desc,id,place,DelayValue} = itm
        return(
          <motion.div transition={{delay:DelayValue}} initial={{x:0 ,y:0}} whileInView={{x:moveX,y:moveY}} key={id} className=' absolute top-[35vh] left-[35vw]'>
            <PlaceContainer>
              <strong className=' absolute top-[30%] left-[25%]'>{place}</strong>
              <ImageParagraphContainer src={img} alt=''/> 
           </PlaceContainer>
          </motion.div>
        )
      })
    }
     
  </MainContainer>
  )
}

export default Place
