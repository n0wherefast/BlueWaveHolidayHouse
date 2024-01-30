'use client'
import React ,{useState}from 'react'
import Credits from './Credits'
import { socialLinks } from '../ref/links'
import Link from 'next/link'

function Footer() {
  const [isOpen,setIsOpen] = useState(false)

  const date = new Date()
  const year = date.getFullYear()
  return (
  <>
    <div className=' min-h-[6rem] w-full  flex items-center justify-between p-1'>
      <section className='flex flex-col'>
          <button onClick={()=>setIsOpen(!isOpen)} className='flex flex-col'>
            <p className=' text-md font-bold text-sky-900 hover:text-amber-400'> Credits</p>
            {isOpen && <Credits/>}
          </button>
           <p className=' font-medium italic'>BlueWave HolidayHouse &copy;{year}</p>  
            
      </section>
         

      
      <div className=' flex gap-2 pr-2'>
        {socialLinks.map((link)=>(
          <div key={link.id}>
            <Link href={link.url}>
              <div>{link.icon}</div>
            </Link>
          </div>
      ) )}
    </div>
      </div>
  </>
      
  )
}

export default Footer
