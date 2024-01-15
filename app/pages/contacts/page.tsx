'use client'
import React from 'react'
import { BoxInfo,LinkInfo } from '@/app/styles/Contact.style'
import  {motion } from 'framer-motion'
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




function Contacts() {
  const size = useSelector((state:RootState)=>state.size.value)
 
  return (
    <> 
    <div className='pt-[4.4rem] flex flex-col w-full'>

        <div className=' flex justify-center items-start  w-full h-[90vh]  '>
            <Image className=' w-[100vw] lg:w-[100vw]' src={size >  700 ? img2: img} alt='wer'/>
        </div>
       <Button y={size < 700 ? -55 : size >1300? -10 :-25} to={'#contact'}  color={'text-[darkcyan]'}/>

      <Map/> 
      <br />
      <div className='h-14' id='contact' />
      <InterestPlaces >
        <motion.div  className=''>
            <BoxInfo>
              <div className='h-16'>
                <h1 className='text-5xl font-black italic  w-full ' >Contatti</h1>
                <h1 className='text-amber-400 relative top-[-45px] text-5xl font-black italic  w-full ' >Contatti</h1>
               </div>
                  <div className='flex gap-2 lg:text-xl text-lg font-semibold items-center'>
                    <h2 className=' text-amber-400 text-2xl font-black italic' > Email:</h2>
                    <p>bluewavehhouse@gmail.com</p>
                  </div>
                  <div className='flex gap-2 text-xl font-semibold items-center'>
                    <h2 className=' text-amber-400 text-2xl font-black italic' > Tel:</h2>
                    <p>+39 3348951094</p>
                </div>
                <LinkInfo>
                <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                    <FaAirbnb className='m-2 hover:text-amber-400 p-1 border-2 rounded-2xl' size={55}/>
                </Link> 
                <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                    <TbBrandBooking className='m-2 hover:text-amber-400  p-1 border-2 rounded-2xl' size={55}/>
                </Link> 
                <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                    <FaWhatsapp className='m-2 hover:text-amber-400  p-1 border-2 rounded-2xl' size={55}/>
                </Link> 
                </LinkInfo>
            </BoxInfo>
      </motion.div>
      </InterestPlaces>
    </div>
    </>
  )
}

export default Contacts
