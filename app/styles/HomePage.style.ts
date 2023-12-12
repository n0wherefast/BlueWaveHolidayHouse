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