'use client'
import React from 'react'
import { HomeContainer,ImageContainer } from '@/app/styles/HomePage.style'
import Slide from '@/app/components/Slide'
import Image from 'next/image'
import img from '../../assets/29-09-11.jpg'
import styled from 'styled-components'
import { StaticImageData } from 'next/image'
import '../../globals.css'

export const DiscoverContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 13rem;
  margin-left: 3rem;
  font-size:10rem;
  font-weight:900;
  font-style: italic;
  text-transform: uppercase;
  /* backdrop-filter: blur(10px); */
  height:10rem;
  @media (max-width:1000px) {
    
  }
  @media (max-width:700px) {
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: -20rem;
  padding: 10px;
  height: 6rem;
  backdrop-filter: blur(20px);
  margin-left:0px;
  font-size:4rem;
  font-weight:900;
  }

  color:rgb(251 191 36);
  &:hover{
    color: darkorange;
  }

`


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
