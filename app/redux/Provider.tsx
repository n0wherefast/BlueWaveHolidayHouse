'use client'
import React,{Suspense} from 'react'
import { Provider } from 'react-redux'
import {store} from './/store'
import { useEffect,useState } from 'react'
import logo from '../assets/1693610050074.png'
import Image from 'next/image'

function Providers({children}:any) {
  const [load ,setLoad] = useState<boolean>(false)

   useEffect(()=>{
     setTimeout(()=>(setLoad(true)),1000)
   },[])
  
  return (
    <>
   
        <Provider store={store}>
         <Suspense fallback={<Loading/>}>
           { children }
         </Suspense>    
      </Provider>
   
    
    </>
    
  )
}

export default Providers

function Loading() {
  return(
    <div className=' w-full h-screen bg-slate-100 flex flex-col gap-10 justify-center items-center'>
         <div className=' mt-52 w-[20rem] h-[30rem]'> 
          <div className=' items-center justify-center flex flex-col'>
            <div className=' font-black italic lg:text-8xl text-[2.5rem] text-sky-600 uppercase'> BlueWave</div>
            <div className=' font-black italic lg:text-8xl text-[2.6rem] text-sky-600 uppercase'> HolidayHouse</div>
          </div>
          <div className=' items-center justify-center flex flex-col relative lg:top-[-11.5rem] top-[-7.4rem] left-[0.2rem]'>
            <div className=' font-black italic lg:text-8xl text-[2.5rem] text-amber-400 uppercase'> BlueWave</div>
            <div className=' font-black italic lg:text-8xl text-[2.6rem] text-amber-400 uppercase'> HolidayHouse</div>
          </div>
        </div>
            
         <Image className=' animate-bounce' placeholder='blur' blurDataURL='../assets/1693610050074.png' src={logo} width={200} height={200} alt='logo image loading'/>
      </div>
  )
}
