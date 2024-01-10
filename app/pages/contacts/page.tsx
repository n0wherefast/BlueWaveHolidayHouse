'use client'
import React from 'react'
import { BoxInfo,LinkInfo } from '@/app/styles/Contact.style'
import  {motion } from 'framer-motion'
import Map from '@/app/components/Map'
import InterestPlaces from '@/app/components/InterestPlaces'
import { FaAirbnb,FaWhatsapp } from 'react-icons/fa'
import { TbBrandBooking } from "react-icons/tb";
import Waves from '@/app/components/Waves'

import Link from 'next/link'







function Contacts() {
  
  return (
    <div className='w-[99vw] h-screen  pt-[5rem] flex flex-col'>
      
      
      <InterestPlaces >
        <motion.div  className=''>
            <BoxInfo top={'45rem'} left={'30rem'} >
              <h1 className=' lg:text-3xl  w-full' >Contatti</h1>
              <div className='flex gap-2 lg:text-xl text-lg font-semibold'>
                <h2> Email:</h2>
                <p>bluewavehhouse@gmail.com</p>
              </div>
              <div className='flex gap-2 text-xl font-semibold'>
                <h2> Tel:</h2>
                <p>3348951094</p>
              </div>
              <LinkInfo>
               <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                  <FaAirbnb className='m-2 hover:text-red-400' size={55}/>
              </Link> 
              <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                  <TbBrandBooking className='m-2 hover:text-red-400' size={55}/>
              </Link> 
              <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                  <FaWhatsapp className='m-2 hover:text-red-400' size={55}/>
              </Link> 
              </LinkInfo>
            </BoxInfo>
      </motion.div>
      </InterestPlaces>
      <Map/>       
      

        {/* <Waves/> */}
    </div>
  )
}

export default Contacts
