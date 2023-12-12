'use client'
import React from 'react'
import { HomeContainer,ImageContainer ,DiscoverContainer} from '@/app/styles/HomePage.style'
import Slide from '@/app/components/Slide'
import Image from 'next/image'
import img from '../../assets/29-09-11.jpg'
import styled from 'styled-components'
import { StaticImageData } from 'next/image'
import '../../globals.css'




export default function HomePage() {
  return (
    <HomeContainer className=' overflow-hidden'>
        <ImageContainer className='image'>
          <DiscoverContainer>
            discover
          </DiscoverContainer>
        </ImageContainer> 
      <Slide move={{xIni:0, xAni:"-220%"}}/>
      <br />
      <Slide move={{xIni:"-220%", xAni:0}}/>
    </HomeContainer> 
  )
}
