'use client'
import React from 'react'
import { BoxInfo,LinkInfo } from '@/app/styles/Contact.style'
import  {motion ,Variants} from 'framer-motion'
import Map from '@/app/components/Map'
import InterestPlaces from '@/app/components/InterestPlaces'
import { FaAirbnb,FaWhatsapp } from 'react-icons/fa'
import { TbBrandBooking } from "react-icons/tb";
import Image from 'next/image'
import img from '../../assets/waveCard3.png'
import img2 from '../../assets/waveCardOriz.png'
import Link from 'next/link'
import Button from '@/app/components/Button'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import logoP from '../../assets/logo_paytourist_retina_r.webp'




function Contacts() {
  const size = useSelector((state:RootState)=>state.size.value)

  const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:0},
    }
 
  return (
    <> 
  <section className='pt-[3rem] lg:pt-0 flex flex-col w-full'>
    <div className= 'flex flex-col items-center justify-end w-full min-h-screen'>
          <Image placeholder='blur' blurDataURL='../../assets/waveCardOriz.png' className=' w-[100vw] lg:h-[105vh] h-[98vh] ' width={1000} height={900} src={size >  700 ? img2: img} alt='blue wave background'/>
          <Button y={size < 700 ? -75 : size >1300? -100 :-25} to={'#contact'}  color={'text-[darkcyan]'}/>
    </div>
      <br />
      <div className='h-16' id='contact' />
      <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.8}} className=" w-full  lg:text-7xl text-6xl  font-black italic m-1  border-b-[5rem] border-b-sky-600  border-r-[6rem] border-r-white  h-[5.2rem]">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.5}} className=' flex items-center justify-center w-full text-amber-400 p-3 '><p>Contacts</p></motion.h1>
      </motion.div>
    <br />
      <Map/> 
      <div className='h-14' />
         
      <InterestPlaces >
          
      <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}  className=''>
            <BoxInfo>
            <div  className='p-1'>
            <h1 className=' font-black italic  h-5  w-full  text-4xl lg:text-5xl ' >Prenota adesso</h1>
            <h1 className='text-amber-400 relative top-[-17px] text-4xl lg:text-5xl font-black italic h-5 w-full ' >Prenota adesso</h1>
          </div>
               <p> <strong className=' text-3xl font-black italic'> <span className=' text-amber-400' >C</span>ontatti:</strong></p>
                  <div className='p-1 flex gap-2 lg:text-xl text-lg font-semibold items-center'>
                    <h2 className=' text-amber-400 text-2xl font-black italic' > Email:</h2>
                    <p>bluewavehhouse@gmail.com</p>
                  </div>
                  <div className='flex gap-2 text-xl font-semibold items-center'>
                    <h2 className=' text-amber-400 text-2xl font-black italic' > Tel:</h2>
                    <p>+39 3348951094</p>
                </div>  
                                   
                 <p> <strong className=' text-3xl font-black italic'> <span className=' text-amber-400' >L</span>ink:</strong></p>
                <LinkInfo>                
                      <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/965158960549808793?_set_bev_on_new_domain=1693421299_M2U2NDkyN2NiZTk1&source_impression_id=p3_1705435505_TKYN%2B%2BsmqOiHnMsk'}>
                          <FaAirbnb className='m-2 text-red-400 hover:text-amber-400  hover:scale-110 p-1 border-2 rounded-2xl' size={55}/>
                      </Link> 
                      <Link aria-label='link for bookong.com' href={'https://www.booking.com/Share-WE3Iho'}>
                          <TbBrandBooking className='m-2 text-blue-800 hover:text-amber-400 hover:scale-110  p-1 border-2 rounded-2xl' size={55}/>
                      </Link> 
                      <Link aria-label='link whatsApp' href={'https://wa.me/message/RJUSAJYMVHYHF1'}>
                          <FaWhatsapp className='m-2 text-green-400 hover:text-amber-400 hover:scale-110  p-1 border-2 rounded-2xl' size={55}/>
                      </Link> 
                      <Link aria-label='link whatsApp' href={'https://acicastello.paytourist.com/strutture-certificate/case-vacanze/apct000069-0002.html'}>   
                          <Image className='m-2 hover:text-amber-400 hover:scale-110  p-2 border-2 rounded-2xl'  width={50} height={50}  src={logoP} alt='logo'/>
                      </Link>
                </LinkInfo>
            </BoxInfo>
      </motion.div>
      </InterestPlaces>
    </section>
    </>
  )
}

export default Contacts
