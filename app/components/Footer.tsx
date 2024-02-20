// 'use client'
import React from 'react'
import { socialLinks } from '../ref/links'
import Link from 'next/link'
import FooterWrapper from './wrapper/FooterWrapper'




async function  Footer () {
 

  return(
  
  <FooterWrapper>
      <div className=' flex gap-2 pr-2'>
        {socialLinks.map((link:any)=>(
          <div key={link.id}>
            <Link href={link.url}>
              <div>{link.icon}</div>
            </Link>
          </div>
        ) )}
      </div>
  </FooterWrapper>

  )
}

export default Footer
