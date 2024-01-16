'use client'
import React , {useEffect, useState}from 'react'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { motion } from 'framer-motion'
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

   
    
    

      
  return (
  <MainContainer className=''>
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
                      {place}
                      <p className=' text-amber-400 relative top-[-2.8rem] left-[0.1rem] '>{place}</p>
                    </div> 
                      </strong>
                    <ImageParagraphContainerPlace className='  ' width={500} height={500} src={src} alt={place}  $borderRadius={Bradius}/> 
                  </PlaceContainer>
               </Link>              
          </motion.div>      
        )
      })
    }
    {/* {size<1400? null:<Waves/>} */}
  </MainContainer>
  )
}

export default Place

