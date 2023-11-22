'use client'
import React,{useState} from 'react'
import { links,LINK } from '../ref/links'
import LogoImg from '../assets/1693610050074.png'
import { TiThMenu } from "react-icons/ti";
import { East_Sea_Dokdo} from 'next/font/google'

import { NavbarContainer,
          NavbarLeft,
          NavbarRight,
          NavbarExtend,
          NavbarInnerContainer,
          NavbarLinkContainer,
          NavbarLink, Logo,
          HamburgerMenu,NavTitle,CloseMenu } from "../styles/Navbar.style"

          const EastSea = East_Sea_Dokdo({
            subsets: ['latin'],
            weight: '400'
          })

function Nav() {
  const [isClose ,setIsClose] = useState(true)
  return (
   <NavbarContainer>
    <NavbarInnerContainer>
      <NavbarLeft>
        <Logo alt='blue wave holiday house logo' src={LogoImg}></Logo>
        <NavTitle className={EastSea.className}>
           <p>Blue.Wave</p>
           <p>Holiday House</p>
        </NavTitle>
       
      </NavbarLeft>
      <NavbarRight>
        <NavbarLinkContainer>
          {links.map((link:LINK)=>{
            return(
              <NavbarLink key={link.id} href={link.url}>
                {link.name}
              </NavbarLink>
            )
          })}
          {isClose === true? <HamburgerMenu size={30}  onClick={()=> setIsClose(!isClose)}/> : <CloseMenu size={30} onClick={()=> setIsClose(!isClose)}  />}
          
        </NavbarLinkContainer> 
      </NavbarRight>
    </NavbarInnerContainer>
     <NavbarExtend>

     </NavbarExtend>
   </NavbarContainer>
  )
}

export default Nav
