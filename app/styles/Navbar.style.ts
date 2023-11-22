import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";


export const NavbarContainer = styled.nav`
   /* background-color:#1e40af; */
    /* border-bottom: 1px #0284c7 solid; */
    width: 100%;
    height:70px;
    display: flex;
    flex-direction: column;
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
margin: 10px;
max-width: 70px;
height: auto;
`
export const NavTitle = styled.h1`
    font-size: 2.2rem;
    line-height: 0.8;
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
   display: flex ;
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
    }
    @media (max-width: 700px ){
        display: none;
    }
    
`;
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
`;


export const HamburgerMenu = styled(TiThMenu)`
    &:hover{
         color:#0284c7;
         transition: all 0.5s ease;
    }
    &:active{
        transform: rotate(-90deg);
    }
    @media (min-width: 700px) {
        display:none;
    };

`
export const CloseMenu = styled(IoMdClose)`
    &:hover{
         color:#0284c7;
         transition: all 0.5s ease;
    }
    &:active{
        transform: rotate(90deg);
    }
    @media (min-width: 700px) {
        display:none;
    }
`
// export const HumburgerMenuContainer = styled.div`
//    width: 30px;
//    height: 30px;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: center;
//    gap: 5px;

// `
// export const HumburgerMenuRow = styled.div`
//     background-color: black;
//     width: 80%;
//     height: 5px;
//     border-radius: 10px;
//     &:hover:{
//         background-color: blanchedalmond;
//     }
// `

