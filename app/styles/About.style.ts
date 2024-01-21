import styled from "styled-components";
import { Props } from "./Navbar.style";
import Image from "next/image";


export const AboutContainer = styled.div`
    padding-top:4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height:100vh;
  background-color: rgb(3 105 161);
  @media (min-width: 700px) {
    height: 100vh;
  }
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    gap:2rem;
    width: 100%;
    height:auto; 
    @media (max-width:700px) {
        flex-direction: column;
    }
`
export const CardCollapse =styled.button<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width:20rem;
    height: 3rem;
    border-bottom:${(props)=>(props.$extend === 'true'? '': '2px solid black' )} ;
    &:hover{
        border-bottom:${(props)=>(props.$extend === 'true'? '': ' 2px #0284c7 solid' )} ;
    }

`
export const CollapseContainer = styled.div`
display: flex;
flex-direction: column;
`

export const ButtonCollapse =styled.div<Props>`
    transition: all 1s ease;
    transform:${(props)=>(props.$extend ==='true'? "rotate(-90deg)": "rotate(0deg)")} ;
`
export const CardAbout = styled.div<Props>`
    transition: all 1s ease;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    flex-direction: row;
    padding:${(props)=>(props.$extend === 'true' ? '1rem': '')};
    width:20rem;
    height:${(props)=>(props.$extend ==='true'? '28rem': '0px')};
    background-color:white;
    border-bottom:${(props)=>(props.$extend === 'true'? '2px solid black' :'')} ;
    color:black;
    font-size: larger;
    font-weight: 700;
    font-family: sans-serif;
`
export const ContainerImage = styled(Image)`
 width: 50vw;
 height:auto;
`

export const TextAboutContainer = styled.div`
    padding: 1rem;
    border-radius:1.5rem;
    width:30vw;
    border: 2px solid black;
    background-color: white;
    @media (max-width:700px) {
        width:90vw;
    }
`
export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: start;
  justify-content: start;
  font-style: italic;
  font-weight: 900;
  font-size: 10rem;
  margin: 1.5rem;
  color: rgb(248 250 252);

  @media (max-width:1000px) {
        padding: 0;
        font-size: 8rem;
  }
  @media (max-width:700px) {
        font-size: 12vh;
  }

`