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
    width: 100vw;
    height:${(props)=>(props.$extendnavbar === 'true'? "100vh " :"70px")};
    background-color:${(props)=>(props.$extendnavbar === 'true'? "rgb(3 105 161);":"none")};
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    position: fixed;
    z-index: 100;
    color: rgb(186 230 253 );
   

    @media (max-width: 700px) {
      /* position: absolute; */
      position: fixed;
       z-index:100;   
        /* mix-blend-mode:${(props)=>(props.$extendnavbar === 'true'? "none":"difference")}; */
        /* color:${(props)=>(props.$extendnavbar === 'true'? "white":"rgb(3 105 161)")}; */

    }
    
`;
export const NavbarLeft = styled.nav`
    display: flex;
    flex: 30%;
    justify-content: start;
    align-items: center;
    font-weight: bold;

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

export const NavbarLink = styled(Link)`
    /* background-color:#0284c7; */
    border-radius: 10px;
    font-size: 1.5rem;
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
    margin-right: 1rem;
    transform:${(props)=>(props.$isclose === 'true' ? "rotate(-90deg)": "rotate(0deg)")} ;
    /* color:${(props)=>(props.$isclose === 'true' ? "#0284c7": "rgb(2 132 199)")} ; */
    &:hover{
            color:#0284c7;
         }
        
         @media (min-width: 700px) {
           display:none;
        };
`
export const NavbarLinkExtended = styled(Link)`
  color: rgb(255,255,255);
  font-size: 4.3rem;
  font-weight: 800;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 0rem 0.4rem;
  padding-left: 1.5rem;
  transition: all 0.3s ease-in;
  width: 100%;
  &:hover{
    color: #ffd11a;
  }
`;

export const NavLogoExtend = styled.div`
    width: 100%;
    display: flex;
    gap:2rem;
    color: white;
    justify-content: center;
    padding: 1rem;
`;
