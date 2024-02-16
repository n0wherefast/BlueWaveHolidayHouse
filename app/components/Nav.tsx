'use client'
import React,{useState , useEffect} from 'react'
import { links,LINK } from '../ref/links'
import LogoImg from '../assets/1693610050074.png'
import { TiWavesOutline  } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Open_Sans} from 'next/font/google'
import { RootState } from '../redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize, } from '../redux/slice/manageResizeSlice'
import {  NavbarContainer,
          NavbarExtend,
          NavbarLink,NavbarLinkExtended,
          LinkButton,NavLogoExtend
        }from "../styles/Navbar.style"
import Image from 'next/image';
import {motion,Variants }from 'framer-motion'
import Link from 'next/link';
import { socialLinks } from '../ref/links';
import { Mitr} from 'next/font/google'

const mitr = Mitr({ subsets: ['latin'] , weight: '700' })

const OpenSans = Open_Sans({
  subsets:['latin'],
  weight:'700',
})

function Nav() {
   const [isClose ,setIsClose] = useState(false)
   const size = useSelector((state:RootState) => state.size.value)
   const checkSize = useSelector((state:RootState) => state.size.checkSize)
   const  checkHeight = useSelector((state:RootState) => state.size.isDownPage)

   const dispatch = useDispatch()
  


  useEffect(() => {
    if(size<700){
      dispatch(setCheckSize(true))
      setIsClose(false)
  
      }else if (size>1000){
        setIsClose(false)
      }
      else{dispatch(setCheckSize(false))}
    dispatch(updateValue(window.innerWidth))
    function handleResize() {
    dispatch(updateValue(window.innerWidth))
    }
    
      window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

   },[size]);
   
   const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:8},
    }

  return (
   <NavbarContainer  $extendnavbar={isClose.toString()} >
    <section  className={`${ checkHeight == false? 'flex':'hidden' } backdrop-blur-sm w-[100%] h-[70px]`}>
        <section className='navLeft flex flex-[30%] justify-start  items-center font-bold'>
          {/* <Image className='m-[10px] w-[70px] h-auto' placeholder='blur' blurDataURL='../assets/1693610050074.png' alt='blue wave holiday house logo' rel='preload' width={70} height={70} src={LogoImg}/> */}
          <Link href={'/'}>
          <section  className={`  ${ checkHeight == true? 'invert':'invert-0' } ${mitr.className}  ml-2 italic flex flex-col w-[10rem] text-[2rem] leading-7  ${OpenSans.className}` }>
            <p>BlueWave</p>
            <p>HolidayHouse</p>
          </section>
          </Link>
         </section>
         
      <section className=' navRight flex flex-[70%] items-center lg:justify-around lg:pr-[1.5rem] pr-0 justify-end' >
        <div className='NavbarLinkContainer flex items-center gap-[1.8rem]'>
          {links.map((link:LINK)=>{
            return(
              <NavbarLink key={link.id} href={link.url}>
                {link.name}
              </NavbarLink>
            )
          })}
          <LinkButton $isclose={isClose.toString()} onClick={(e)=>( setIsClose(!isClose))}>
             {isClose ?  <IoMdClose  title='close button menù' color={'white'}  size={30} /> : <TiWavesOutline   title='open button menù' size={40} />}
          </LinkButton> 
        </div> 
      </section>
    </section>
     
      {isClose &&  
        <NavbarExtend onClick={()=>setIsClose(false)} >
         { links.map((link:LINK)=>{
            return(
              
                <NavbarLinkExtended key={link.id} href={link.url}>
                  <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:link.delay}} >
                    <div className='h-[5.4rem]'>
                      {link.name}
                      <p className=' text-amber-400 relative top-[-6.2rem] left-[0.1rem] '>{link.name}</p>
                    </div>               
                  </motion.div>
                </NavbarLinkExtended>
              
            )
          })}
          <NavLogoExtend >
          {socialLinks.map((link)=>(
          <motion.div key={link.id}
           variants={variant} initial='start' whileInView='end' transition={{delay:1.2}}>
            <Link href={link.url}>
              <div >{link.icon}</div>
            </Link>
          </motion.div>
      ) )}
            {/* <Image alt='blue wave holiday house logo' width={70} height={70} rel='preload' src={LogoImg}></Image> */}
          </NavLogoExtend>
       </NavbarExtend> 
      }
   </NavbarContainer>
  )
}

export default Nav
