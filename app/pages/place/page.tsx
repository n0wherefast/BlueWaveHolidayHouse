'use client'
import React , {useEffect, useState}from 'react'
import image from '../../assets/mobile.jpg'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { motion } from 'framer-motion'
import { PlaceContainer,MainContainer,ImageParagraphContainerPlace } from '@/app/styles/Place.style'
import styled from 'styled-components'
import Link from 'next/link'
import pagePlace from './[name]/page'
import type { RootState } from '@/app/redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize } from '@/app/redux/slice/manageResizeSlice'
import { store } from '@/app/redux/store'


// import '../../../globals.css'


function Place() {
   const [places,setPlaces] = useState(dataPlace)
   const size = useSelector((state:RootState) => state.size.value)
   const checkSize = useSelector((state:RootState) => state.size.checkSize)
   const dispatch = useDispatch()
   // const [checkSize ,setCheckSize] = useState(false)
   const [width, setWidth] = useState(800)


  
 


  useEffect(() => {

    function handleResize() {
      // setWidth(innerWidth)
      if(window.innerWidth  < 1000){
        dispatch(setCheckSize(true))
      }else{dispatch(setCheckSize(false))}

      setWidth(window.innerWidth)
      dispatch(updateValue(width))
    }

      window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
    };

  }, []);

       
       console.log(checkSize)
      
  return (
  <MainContainer>
    
    {
      places.map((itm:DataPlace)=>{
        const {moveX,moveY,desc,id,place,DelayValue,Bradius,src,moveXsm,moveYsm} = itm 
        let x = checkSize === true ? moveXsm : moveX
        let y = checkSize === true ? moveYsm : moveY
        
        return(
          <motion.div
              transition={{delay:DelayValue}} 
              initial={{x:0 ,y:0}}  animate={{x:x,y:y}} 
              whileHover={{scale:1.2}}
              key={id} 
              className=' absolute top-[35vh] lg:left-[35vw] left-[15vw] '>
                <Link href={{ pathname:`/pages/place/${place}`, query:{name:place, desc:desc ,img:src?.src} }}>
                  <PlaceContainer className=''>
                    <strong className=' absolute top-[30%] left-[25%] '>{place}</strong>
                    <ImageParagraphContainerPlace width={500} height={500} src={src} alt={place}  $borderRadius={Bradius}/> 
                  </PlaceContainer>
               </Link>              
          </motion.div>
        )
      })
    }
  </MainContainer>
  )
}

export default Place

