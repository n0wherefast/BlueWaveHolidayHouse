import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame} from "framer-motion";

import { DiscoverContainer,ImageContainer,ImgContainer, BgContainer } from "../styles/Parallax.style";
import { Image } from "next/dist/client/image-component";
import styled from "styled-components";
import Link from "next/link";
import WavyText from "./WavyText";



interface ParallaxProps {
  children: string | any;
  baseVelocity: number;
  className?: string
}



export function Parallax() {

const ref = useRef<HTMLDivElement>(null)

const {scrollYProgress}:any = useScroll({
  target:ref,
  offset:["start start" , "end start"]
})
const yBg = useTransform( scrollYProgress , [0,1] ,["0%" , "100%"]);
  return (
    <BgContainer ref={ref}>
      
       <DiscoverContainer >
          <motion.div style={{y: yBg}}>
            <Link href={'#home'}> <WavyText text={"discover! "} /></Link> 
          </motion.div>
       </DiscoverContainer> 
      
      <ImageContainer className='image'>
            {/* <motion.div  className="  foam  h-screen w-s" >   </motion.div>  */}
            {/* <Image className='svg'  src={wavefoam2} alt='waveBg'/> */}
            {/* <Image className='svg' src={wavefoam3} alt='waveBg'/> */}
      </ImageContainer> 
  </BgContainer>
  );
}