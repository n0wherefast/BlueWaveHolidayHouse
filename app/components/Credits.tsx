import React from 'react'
import Link from 'next/link'

function Credits() {
  return (
    <div  className='flex items-center  gap-1 '> 
    <h3 className='text-sm font-semibold'>Photo by:</h3>
      <Link className=' font-light hover:text-blue-600' href={'https://www.pexels.com/it-it/foto/areal-foto-di-sea-wave-3331094/'}>
         Max Ravier
      </Link>
      <Link className='font-light hover:text-blue-600'  href={'https://www.pexels.com/it-it/foto/citta-paesaggio-acqua-skyline-17650773/'}>
          Oscar M
      </Link>
    </div>
  )
}

export default Credits
