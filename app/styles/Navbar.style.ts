import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";


export interface Props {
    $extendnavbar?:string
    $isclose?:string
    $extend?:string
}

// #0093E9


export const NavbarContainer = styled.nav<Props>`
    /* border-bottom: 1px #0284c7 solid;  */
    width: 100%;
    height:${(props)=>(props.$extendnavbar === 'true'? "100vh " :"70px")};
    background-color:${(props)=>(props.$extendnavbar === 'true'? "rgb(14 165 253);":"none")};
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    position: fixed;
    z-index: 100;

    @media (max-width: 700px) {
      /* position: absolute; */
      position: fixed;
       z-index:100;  
    }
    
`;
export const NavbarLeft = styled.nav`
    display: flex;
    display:flex ;
    flex: 30%;
    justify-content: start;
    align-items: center;
    font-weight: bold;
    /* padding-left:5rem; */
`;
export const Logo = styled(Image)`
margin:10px;
max-width: 70px;
height: auto;
`
export const NavTitle = styled.h1`
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1;
    display:  flex;
    flex-direction: column;

    width:10rem;
    /* & p:nth-child(odd){
        color: blue;
    }
    & p:nth-child(even){
        color: red;
    } */
`



export const NavbarRight = styled.nav`
    flex: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    @media (max-width: 700px ){
        justify-content: end;
        padding-right:1.5rem ;
    }
    
`;
export const NavbarExtend = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap:1.5rem;


@media (min-width: 700px) {
  display: none;
}
`;
export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius:50px; 
`;
export const NavbarLink = styled(Link)`
    /* background-color:#0284c7; */
    border-radius: 10px;
    font-size: larger;
    font-weight: 600;
    text-decoration: none;
    margin:0.1rem;
    padding: 0.3rem;
    &:hover {
        background-color:#0284c7;
         transition: all 0.7s ease;
         color: white;
         transform: scale(1.2);
         &:nth-child(odd){
            transform: rotate(15deg);
         }
         &:nth-child(even){
            transform: rotate(-15deg);
         }
         
    }
    @media (max-width: 700px ){
        display: none;
    }
    
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
   background-color: white;
`;

export const LinkButton = styled.button<Props>`
    height:${(props)=>(props.$extendnavbar === 'true'? "100vh " :"70px")};
    transition: all 0.5s ease;
    transform:${(props)=>(props.$isclose === 'true' ? "rotate(-90deg)": "rotate(0deg)")} ;
    color:${(props)=>(props.$isclose === 'true' ? "#0284c7": "black")} ;
    &:hover{
            color:#0284c7;
         }
         /* &:focus{
             transform: rotate(-90deg);
             color:#0284c7;
          } */
         @media (min-width: 700px) {
           display:none;
        };
`
export const NavbarLinkExtended = styled(Link)`
  color:#262626;
  font-size: 4rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  padding-left: 1.5rem;
  transition: all 0.3s ease-in;
  width: 100%;
  &:hover{
    /* background-color: #ffd11a ; */
    color: #ffd11a;
  }
`;

export const NavLogoExtend = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
