'use client'
import React from 'react'
import { HomeContainer } from '@/app/styles/HomePage.style'
import ParApp from '@/app/components/Parallax'
import Slide from '@/app/components/Slide'
import Image from 'next/image'
import img from '../../assets/29-09-11.jpg'
import styled from 'styled-components'
import { StaticImageData } from 'next/image'


export const ImageContainer = styled.div` 
width:100vw;
height: 90vh;
background-image: url(${img}); 
`   


export default function HomePage() {
  return (
    <HomeContainer className=' overflow-hidden'>
        <ImageContainer> </ImageContainer>
      <Slide move={{xIni:0, xAni:"-220%"}}/>
        
      <br />
      <Slide move={{xIni:"-220%", xAni:0}}/>
    </HomeContainer> 
  )
}
