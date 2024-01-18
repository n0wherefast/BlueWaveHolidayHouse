'use client'
import React , {useEffect, useState}from 'react'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { motion,Variants } from 'framer-motion'
import { PlaceContainer,MainContainer,ImageParagraphContainerPlace } from '@/app/styles/Place.style'
import Link from 'next/link'
import type { RootState } from '@/app/redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize } from '@/app/redux/slice/manageResizeSlice'



// import '../../../globals.css'


function Place() {
   const [places,setPlaces] = useState(dataPlace)
   const size = useSelector((state:RootState) => state.size.value)
   const checkSize = useSelector((state:RootState) => state.size.checkSize)
   const dispatch = useDispatch()
  


  useEffect(() => {
    if(size<1000){
      dispatch(setCheckSize(true))
    }else{dispatch(setCheckSize(false))}

    dispatch(updateValue(window.innerWidth))
    function handleResize() {
      
      dispatch(updateValue(window.innerWidth))
    }
     
      window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

   });
   const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:0},
    }
   
    
    

      
  return (
  <MainContainer className='flex flex-col'>
    <div className=" w-full  lg:text-8xl text-7xl text-slate-950 font-black italic ">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' lg:absolute lg:top-[25rem] flex items-center justify-center w-full text-amber-400 '>Places</motion.h1>
    </div>
    <div className=' w-full h-screen'>
      {
      places.map((itm:DataPlace)=>{
        const {moveX,moveY,desc,id,place,DelayValue,Bradius,src,moveXsm,moveYsm,moveXmd,moveYmd} = itm 
        let x =  checkSize === true ? moveXsm  : size === 1024 ? moveXmd : moveX
        let y =  checkSize === true ? moveYsm : size === 1024 ? moveYmd : moveY 
        
        return(
          
          <motion.div
              transition={{delay:DelayValue}} 
              initial={{x:0 ,y:0}}  animate={{x:x,y:y}} 
              whileHover={{scale:1.2}}
              key={id} 
              className='  absolute top-[35vh] lg:left-[35vw] left-[15vw] z-50 '>
                <Link  href={{ pathname:`/pages/place/${place}`, query:{name:place, desc:desc ,img:src?.src} }}>
                  <PlaceContainer className=''>
                    <strong className='   absolute top-[30%] left-[15%] '>
                    <div className='h-24 text-slate-100 '>
                       <p className='w-full h-2'>{place}</p>
                       <p className='w-full h-2 text-amber-400 relative top-[-0.6rem] left-[0.1rem] '>{place}</p>
                    </div>
                      </strong>
                    <ImageParagraphContainerPlace className='  ' width={500} height={500} src={src} alt={place}  $borderRadius={Bradius}/> 
                  </PlaceContainer>
               </Link>              
          </motion.div>      
        )
      })
    }
    </div>
    
    {/* {size<1400? null:<Waves/>} */}
  </MainContainer>
  )
}

export default Place

