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
  background-color: rgb(3 105 161);
  padding-top:5rem;
  /* background-color:darkcyan; */
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
  font-size:4vh;
  font-weight: 900;
  font-style: italic;
 
  border-radius: 70% 30% 43% 57% / 69% 16% 84% 31% ;
  transition: all ease-in 0.3s;
  color: white;

    @media (max-width:700px) {
        
    }

  &:hover{
    color: sandybrown;
   
  }
`
export const ImageParagraphContainerPlace = styled(Image)<Props>`
  border: 2px  solid sandybrown;
  display:flex;
  width: 25vw;
  height: 30vh;
  justify-content: space-around;
  border-radius: ${props =>(props.$borderRadius)} ;
  margin: 1rem;
  box-shadow: 2rem  10px 1rem #001c29;
  @media (max-width:1000px) {
    width: 35vw;
    height: 25vh;
    }
  @media (max-width:700px) {
    width: 15rem;
    height: 10rem;
    }

  &:hover{
    /* width: 35rem;
    height: 25rem; */
    /* filter: blur(20px); */
  }
`