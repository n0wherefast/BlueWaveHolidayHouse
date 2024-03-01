'use client'
import React ,{useState}from 'react'
import Credits from '../Credits'

function FooterWrapper({children}:{children:React.ReactNode}) {
    const [isOpen,setIsOpen] = useState(false)
    const date = new Date()
  const year = date.getFullYear()

  return (
    <>
    <div className=' min-h-[6rem] w-full  flex items-center justify-between p-1 bg-sky-950 text-zinc-100'>
      <section className='flex flex-col'>
          <button onClick={()=>setIsOpen(!isOpen)} className='flex flex-col'>
            <p className=' text-md font-bold text-sky-300 hover:text-amber-400'> Credits</p>
            {isOpen && <Credits/>}
          </button>
           <p className=' font-medium italic'>BlueWave HolidayHouse &copy;{year}</p>  
            
      </section>
         
      {children}
    </div>
      
    </>
  )
}

export default FooterWrapper
