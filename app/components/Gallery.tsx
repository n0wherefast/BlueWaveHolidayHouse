import React from 'react'
import Slide from '@/app/components/Slide'
import styled from 'styled-components'


function Gallery() {
  return (
    <>
    <br />
     <Slide  move={{xIni:0, xAni:"-220%"}}/>
      <br />
     <Slide move={{xIni:"-220%", xAni:0}}/>
    </>
  )
}

export default Gallery