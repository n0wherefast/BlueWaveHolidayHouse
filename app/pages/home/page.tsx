'use client'
import React from 'react'
import { HomeContainer } from '@/app/styles/HomePage.style'
import ParApp from '@/app/components/Parallax'
import Slide from '@/app/components/Slide'
// import videoBG from "../../assets/video/P1133065.mp4"




export default function HomePage() {
  return (
    <HomeContainer className=' overflow-hidden'>
        <video src={require('../../assets/video/P1133065.mp4')}  className=' w-full ' width="320" height="240" autoPlay
          muted
          loop >
        </video>
      <Slide move={{xIni:0, xAni:"-220%"}}/>
        
      <br />
      <Slide move={{xIni:"-220%", xAni:0}}/>
    </HomeContainer> 
  )
}
