'use client'
import React from 'react'
import { HomeContainer } from '@/app/styles/HomePage.style'
import ParApp from '@/app/components/Parallax'
import Slide from '@/app/components/Slide'

export default function HomePage() {
  return (
    <HomeContainer className=' overflow-hidden'>
      <Slide/>
    </HomeContainer> 
  )
}
