import styled from "styled-components";
import Image from "next/image";
import { StaticImageData } from "next/image";

type src = { src:string} 

interface Props {
  $borderRadius:string
  src?:  StaticImageData | src ,
  alt: string
}

export const ImageContainerPlace = styled(Image)<Props>`
  width: 100vw;
  height: 100vh;

  @media (max-width:1000px) {
    width: 35vw;
    height: 25vh;
    }
  @media (max-width:700px) {
    width: 100vw;
    height: 100vh;
    }

  `