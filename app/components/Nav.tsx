'use client'
import React,{useState , useEffect} from 'react'
import { links,LINK } from '../ref/links'
import LogoImg from '../assets/1693610050074.png'
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { East_Sea_Dokdo} from 'next/font/google'

import { NavbarContainer,
          NavbarLeft,
          NavbarRight,
          NavbarExtend,
          NavbarInnerContainer,
          NavbarLinkContainer,
          NavbarLink, Logo,
          LinkButton,NavTitle,
          NavbarLinkExtended,NavLogoExtend } from "../styles/Navbar.style"

          const EastSea = East_Sea_Dokdo({
            subsets: ['latin'],
            weight: '400'
          })

function Nav() {
  const [isClose ,setIsClose] = useState(false)
    useEffect(()=>{
        function handeSize () {
          if(window.innerWidth > 700){
            setIsClose(false)
          }
        }
        window.addEventListener('resize',()=>handeSize())

    },[])
  return (
   <NavbarContainer  extendnavbar={isClose.toString()} >
    <NavbarInnerContainer >
      <NavbarLeft>
        <Logo alt='blue wave holiday house logo' src={LogoImg}></Logo>
        <NavTitle className={EastSea.className}>
           <p>Blue.Wave</p>
           <p>HolidayHouse</p>
        </NavTitle>
      </NavbarLeft>
      <NavbarRight >
        <NavbarLinkContainer>
          {links.map((link:LINK)=>{
            return(
              <NavbarLink key={link.id} href={link.url}>
                {link.name}
              </NavbarLink>
            )
          })}
          <LinkButton onClick={()=> setIsClose(!isClose)}>
          {isClose ?  <IoMdClose size={30}  /> : <TiThMenu size={30} />}
          </LinkButton> 
        </NavbarLinkContainer> 
      </NavbarRight>
    </NavbarInnerContainer>
     
      {isClose &&  
        <NavbarExtend onClick={()=>setIsClose(false)} >
         { links.map((link:LINK)=>{
            return(
              <NavbarLinkExtended key={link.id} href={link.url}>
                {link.name}
              </NavbarLinkExtended>
            )
          })}
          <NavLogoExtend>
            <Logo alt='blue wave holiday house logo' src={LogoImg}></Logo>
          </NavLogoExtend>
          
       </NavbarExtend> 
      }
      
   </NavbarContainer>
  )
}

export default Nav
