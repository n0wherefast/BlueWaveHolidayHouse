'use client'
import React, { useEffect, useState, useRef } from 'react'
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import Social from './Social'


export interface CONTEXT {
  isDarkMode?:boolean,
  isLangSwitch?:boolean,
  setIsLangSwitch? : Function,
  setIsDarkMode? : Function,
  handleDarkMode? :Function | any,
  handleLangSwitch? : Function | any,
}


function Navbar({linksProp}:any) {
  const [isOpen,setIsOpen] = useState(false)
  const [isClick,setIsClick] = useState(false)
  const [isMenu , setIsMenu] = useState<boolean>()
  // const [isNameChanged,setIsNameChanged] = useState(true)
  const  [size,setSize] =useState(800)
  
// console.log(linksProp[0].isMenuPage)
  const resizeTimer = useRef<number | null>(null)

  useEffect(() => {
    function handleResizeDebounced() {
      if (resizeTimer.current) {
        clearTimeout(resizeTimer.current)
      }
      resizeTimer.current = window.setTimeout(() => {
        const w = window.innerWidth
        if (w > 800 || w < 500) {
          setIsOpen(false)
          setIsClick(false)
          setIsMenu(w > 500)
        }
        setSize(w)
      }, 120)
    }

    // initial state
    const initialW = window.innerWidth
    setIsMenu(initialW > 500)

    window.addEventListener('resize', handleResizeDebounced)
    return () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current)
      window.removeEventListener('resize', handleResizeDebounced)
    }
  }, [])
const handleNavClick = (path: string) => {
  if (path === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.querySelector(path); 
    el?.scrollIntoView({ behavior: "smooth" }); 
  }
};
  
  return (
    <header  className = { isOpen?` p-2 transition-all duration-500 ease-in-out bg-slate-100  text-slate-800  sticky top-0 z-10  ` : 
                                  ` transition-all duration-500 ease-in-out h-20 flex items-center bg-slate-100  text-slate-800 sticky top-0 z-10`}>
                                    

    <div className={isOpen ? ` min-h-96 transition-all ease-in-out duration-300  container mx-auto flex  p-3 flex-col  md:flex-row justify-around items-center md:justify-start` :
                                 ` h-24 transition-all ease-in-out duration-200  container mx-auto flex  p-3 flex-col  md:flex-row justify-between items-center md:justify-between `}>
                
        <div className="flex flex-row w-full md:w-auto justify-between items-center m-2 md:p-0">
          <div className="leading-tight select-none">
            <div className="text-2xl font-extrabold tracking-tight text-sky-700 drop-shadow-sm font-sans">
              <span className="bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent">BlueWave</span> <span className="text-slate-700">HolidayHouse</span>
            </div>
            <div className="text-xs text-slate-600 font-medium tracking-wide">Aci Trezza · Sicilia orientale</div>
          </div>
          <button
            id="button menu"
            aria-label="button menu"
            className={
              (isOpen
                ? 'ml-8 flex rotate-180 md:hidden text-sky-500 bg-white/80 shadow-md border border-sky-200'
                : 'ml-8 flex md:hidden text-sky-600 hover:bg-sky-100 p-2 rounded-full shadow transition') +
              ' transition-all duration-200'
            }
            onClick={() => (setIsOpen(!isOpen), setIsClick(false))}
          >
            {isOpen ? <IoMdClose size={30} /> : <FaBars size={25} />}
          </button>
        </div>

        <nav onClick={()=>setIsOpen(false)} className={isOpen? ` gap-2  w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600	flex  flex-col md:flex-row items-start text-base justify-start  ` :
                                 ` hidden  md:ml-4 md:py-1 md:pl-4 	md:flex  items-center text-md justify-center`}>
              <ul className='flex flex-col md:flex-row gap-2 mr-6 md:gap-6 lg:gap-8  '>
                  {
                  linksProp.map((link:any,id:any)=>{
                      return(
                      <li key={id}>
                        <Link  href={link.path} onClick={()=>handleNavClick(link.path)}  className="mr-5 transition-all ease-in rounded-full px-2 py-1 hover:text-white hover:bg-gradient-to-r from-sky-500 to-teal-400 hover:text-xl  text-lg font-medium">
                          {link.name}
                           
                        </Link>
                      </li>
                      )
                    })
                  }
              </ul>
            {linksProp[0].isMenuPage ?  null :
            <>
                {/* <div  className= {isOpen? `md:inline-flex items-center  py-1 px-3     mt-4 md:mt-0` 
                              :  ` hidden md:inline-flex items-center ml-5 py-1 px-3   text-amber mt-4 md:mt-0  ` }>
                  <Social/>
                </div> */}
                  <motion.a
                    onClick={()=>setIsOpen(false)}
                    href="#contacts"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className= {isOpen? `md:inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md mt-4 md:mt-0 ` 
                              :  ` hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md ` }>
                    Contact
                  </motion.a>  
            </>
            }
                         
        </nav>


        
        
                

        </div>
    </header>
  )
}

export default Navbar