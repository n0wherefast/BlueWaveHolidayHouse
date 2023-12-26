'use client'
import React from 'react'
import { ImageParagraphContainer } from '@/app/styles/HomePage.style'
import img from '../../assets/mobile.jpg'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MainContainer = styled.div`
  padding-top:5rem;
  background-color:darkcyan;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height:100vh;

`
export const PlaceContainer = styled.button`
  /* position: absolute;
  top:35vh;
  left:35vw ; */
  font-size: 3.5rem;
  font-weight: 900;
  font-style: italic;

`
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
