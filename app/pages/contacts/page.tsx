'use client'
import React from 'react'
import { BoxInfo } from '@/app/styles/Contact.style'
import  {motion } from 'framer-motion'
import Map from '@/app/components/Map'
import InterestPlaces from '@/app/components/InterestPlaces'
import { FaAirbnb,FaWhatsapp } from 'react-icons/fa'
import { TbBrandBooking } from "react-icons/tb";
import Waves from '@/app/components/Waves'

import Link from 'next/link'







function Contacts() {
  
  return (
    <div className='w-full h-screen  pt-[5rem] flex'>
      
      <motion.div  className=''>
            <BoxInfo top ={'43rem'} left ={'75rem'} >
              <h1> Addres:</h1>
              <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                  <FaAirbnb className='m-2 hover:text-red-400' size={55}/>
              </Link> 
              <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                  <TbBrandBooking className='m-2 hover:text-red-400' size={55}/>
              </Link> 
              <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/853661203460112114?adults=2&check_in=2023-10-01&check_out=2023-10-08&source_impression_id=p3_1687258577_%2BvWKPiaOia6dOiMN&previous_page_section_name=1000&federated_search_id=6069cfe0-1fd5-48db-ae88-98878887dda1'}>
                  <FaWhatsapp className='m-2 hover:text-red-400' size={55}/>
              </Link> 
            </BoxInfo>
      </motion.div>

          <Map/>
       
          <InterestPlaces/>
        

        {/* <Waves/> */}
    </div>
  )
}

export default Contacts
