import styled from "styled-components"
import Image from "next/image"
import { StaticImageData } from 'next/image'

type src = { src:string} 

interface Props {
  $borderRadius:string
  src?:  StaticImageData | src ,
  alt: string
}

export const MainContainer = styled.div`
  background-color: rgb(22, 107, 219); // ice//
  /* background-color: rgb(240, 250, 252); // ice// */
  /* background-color: blue; // ice// */
  padding-top:5rem;
  width: 100vw;
  height:100vh;
  @media (max-width:700px) {
    height: 155vh;
}
  
`
export const PlaceContainer = styled.button`
  font-size:4vh;
  font-weight: 900;
  font-style: italic;
  transition: all ease-in 0.3s;
  color: white;
  @media (max-width:1024px) {
    font-size: 3rem;
    }

@media (max-width:700px) {
  font-size: 2rem;
}
  &:hover{
    color: sandybrown;
  }
`
export const ImageParagraphContainerPlace = styled(Image)<Props>`
  border: 2px  solid sandybrown;
  display:flex;
  width: 20vw;
  height: 25vh;
  justify-content: space-around;
  border-radius: ${props =>(props.$borderRadius)} ;
  margin: 1rem;
  box-shadow: 2rem  10px 1rem #001c29;
  @media (max-width:1024px) {
    width: 35vw;
    height: 25vh;
    }
  @media (max-width:700px) {
    width: 15rem;
    height: 10rem;
    }


`