// 'use client'
import React,{useEffect} from 'react'
import {motion} from 'framer-motion'
import { FaArrowCircleDown } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { checkPageHeight } from '../redux/slice/manageResizeSlice'
import Link from 'next/link'

function Button({color,y,to }:any) {
  const dispatch = useDispatch()
  const  checkHeight = useSelector((state:RootState) => state.size.isDownPage)
  
  useEffect(() => {
    window.addEventListener('scroll',()=>{
     dispatch(checkPageHeight())
    }) 
  }, [])

  return (
    <motion.button   animate={{ y: y,  scale: [1,1.5,1], borderRadius:[0,2,2,0]} } 
                         transition={{ ease: "easeOut", duration: 1 }}
                         className='   w-[10%]'> 
                         <Link href={to} >
                            <h2 className= {`transition-all ease-in flex justify-center items-center text-4xl lg:text-5xl rounded-2xl hover:text-slate-100 font-extrabold  ${color}`}>
                                 <p className=' animate-pulse'><FaArrowCircleDown/></p>
                            </h2>
                            
                          </Link>
    </motion.button>
  )
}

export default Button
