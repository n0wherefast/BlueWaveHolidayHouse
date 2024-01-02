'use client'
import React , {useEffect, useState}from 'react'
import image from '../../assets/mobile.jpg'
import { dataPlace ,DataPlace} from '@/app/ref/data'
import { motion } from 'framer-motion'
import { PlaceContainer,MainContainer,ImageParagraphContainerPlace } from '@/app/styles/Place.style'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import pagePlace from './[name]/page'


// import '../../../globals.css'


function Place() {
  const [checkSize ,setCheckSize] = useState(false)
  const [width, setWidth] = useState(800)
  const [places,setPlaces] = useState(dataPlace)
  const {push} = useRouter()

  // const HandleClick = (place:any,desc:any,src:any) => {
  //      push({ pathname:`/pages/place/${place}`, 
  //             query:{name:place, desc:desc ,img:src?.src} 
  //          })
  //   }

  useEffect(() => {
    function handleResize() {
      // setWidth(innerWidth)
      if(window.innerWidth  < 1000){
        setCheckSize(true)
      } 
      else{setCheckSize(false)}
    }

     window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
    };

  }, []);
       
  return (
  <MainContainer>
    {
      places.map((itm:DataPlace)=>{
        const {moveX,moveY,desc,id,place,DelayValue,Bradius,src} = itm
        let x = checkSize === true ? 300 : moveX
        let y = checkSize === true ? moveY : moveY
        
        return(
          <motion.div
              transition={{delay:DelayValue}} 
              initial={{x:0 ,y:0}} whileInView={{x:x,y:y}} whileHover={{scale:1.2}}
              key={id} 
              className=' absolute top-[35vh] left-[35vw]'  >
                <Link href={{ pathname:`/pages/place/${place}`, query:{name:place, desc:desc ,img:src?.src} }} >
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

