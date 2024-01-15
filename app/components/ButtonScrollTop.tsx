'use client'
import React,{useEffect,useRef} from 'react'
import {motion} from 'framer-motion'
import {  FaArrowCircleUp } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { checkPageHeight } from '../redux/slice/manageResizeSlice'
import{ scrollToTop } from '../redux/slice/scrollTo'

interface BUTTONSCROLL {
  to?:string,
  color?:string,
  y?:string,
}


function ButtonScrollTop({color,y,to}:BUTTONSCROLL) {
  const dispatch = useDispatch()
  const  checkHeight = useSelector((state:RootState) => state.size.isDownPage)
  const size = useSelector((state:RootState) => state.size.value )
  const ref = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll',()=>{
     dispatch(checkPageHeight())
    }) 
  }, [])
 
  
 
  return (
    <>
    
    { checkHeight === true ? <motion.button   animate={{ y: y,  scale: [1,1.5,1], borderRadius:[0,2,2,0]} } 
                            transition={{ ease: "easeOut", duration: 1 }}
                            className={` fixed  bottom-10 ${size < 700? 'left-[85vw]':'left-[90vw]' }`}
                             ref={ref}  onClick={()=>dispatch(scrollToTop(to))}>  
                                <h2 className= {`transition-all ease-in flex justify-center items-center text-4xl lg:text-5xl rounded-2xl hover:text-slate-100 font-extrabold   ${color}`}>
                                    <p className=''><FaArrowCircleUp/></p>
                                </h2>
                             </motion.button> :null}
  </>
  )
}

export default ButtonScrollTop