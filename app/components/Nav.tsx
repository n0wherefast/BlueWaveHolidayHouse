'use client'
import React,{useState , useEffect} from 'react'
import { links,LINK } from '../ref/links'
import LogoImg from '../assets/1693610050074.png'
import { TiThMenu,TiWavesOutline  } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { East_Sea_Dokdo,Open_Sans} from 'next/font/google'
import { RootState } from '../redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize } from '../redux/slice/manageResizeSlice'
import { 
          NavbarContainer,
          NavbarLeft,
          NavbarRight,
          NavbarExtend,
          NavbarInnerContainer,
          NavbarLinkContainer,
          NavbarLink, Logo,
          LinkButton,NavTitle,
          NavbarLinkExtended,NavLogoExtend
        } 

        from "../styles/Navbar.style"


const OpenSans = Open_Sans({
  subsets:['latin'],
  weight:'700',
})

function Nav() {
   const [isClose ,setIsClose] = useState(false)
   const size = useSelector((state:RootState) => state.size.value)
   const checkSize = useSelector((state:RootState) => state.size.checkSize)
   const dispatch = useDispatch()
  


  useEffect(() => {
    if(size<700){
      dispatch(setCheckSize(true))
      setIsClose(false)
    }else{dispatch(setCheckSize(false))}

    dispatch(updateValue(window.innerWidth))
    function handleResize() {
      
      dispatch(updateValue(window.innerWidth))
    }
     
      window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

   });




    // useEffect(()=>{
    //     function handeSize () {
    //       if(window.innerWidth > 700){
    //         setIsClose(false)
    //       }
    //     }
    //     window.addEventListener('resize',()=>handeSize())

    // },[])
  return (
   <NavbarContainer  $extendnavbar={isClose.toString()} >
    <NavbarInnerContainer >
      <NavbarLeft>
        <Logo priority alt='blue wave holiday house logo' src={LogoImg}></Logo>
        <NavTitle className={OpenSans.className}>
          <strong>BlueWave</strong>
           <strong>HolidayHouse</strong> 
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
          <LinkButton $isclose={isClose.toString()} onClick={(e)=>( setIsClose(!isClose))}>
          {isClose ?  <IoMdClose size={30}  /> : <TiWavesOutline size={35} />}
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
