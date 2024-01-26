'use client'
import React from 'react'
import { BoxInfo,LinkInfo } from '@/app/styles/Contact.style'
import  {motion ,Variants} from 'framer-motion'
import Map from '@/app/components/Map'
import InterestPlaces from '@/app/components/InterestPlaces'
import { FaAirbnb,FaTripadvisor,FaWhatsapp } from 'react-icons/fa'
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
      <div className=' h-32' >       
        <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.8}} className="  w-[95vw]   lg:text-7xl text-6xl  font-black italic border-b-[5rem] border-b-amber-400  border-r-[6rem] border-r-transparent "/>
        <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.8}} className=" relative top-[-4rem] w-[94vw]   lg:text-7xl text-6xl  font-black italic border-b-[5rem] border-b-sky-600  border-r-[6rem] border-r-transparent  h-[1rem]">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.5}} className=' flex items-center justify-center w-full text-amber-400 p-3 '><p>Contacts</p></motion.h1>
        </motion.div>        
      </div>
      
      <Map/> 
      <div className='h-14' />
               
      <InterestPlaces >
          
      <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}  className=''>
            
      </motion.div>
      </InterestPlaces>
    </section>
    </>
  )
}

export default Contacts
