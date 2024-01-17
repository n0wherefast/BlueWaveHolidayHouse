'use client'
import React ,{useState}from 'react'
import Credits from './Credits'
import { socialLinks } from '../ref/links'
import Link from 'next/link'

function Footer() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className=' h-[4rem] w-full bg-slate-100 flex items-center justify-between pl-2'>
      <button onClick={()=>setIsOpen(!isOpen)} className=' text-xl font-bold hover:text-amber-400'>Credits</button>
      {isOpen && <Credits/>}
      <div className=' flex gap-2 pr-3'>
        {socialLinks.map((link)=>(
          <div key={link.id}>
            <Link href={link.url}>
              <div>{link.icon}</div>
            </Link>
          </div>
      ) )}
    </div>
      </div>
      
  )
}

export default Footer
