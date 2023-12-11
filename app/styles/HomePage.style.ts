import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const HomeContainer = styled.div`
    padding-top: 5rem;
`   

export const ImageContainer = styled.div` 
  width:100vw;
  height: 92vh;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width:700px) {
    justify-content: center;
  }
`   