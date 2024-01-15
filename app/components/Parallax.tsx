import { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
  } from "framer-motion";
import { DiscoverContainer,ImageContainer, BgContainer } from "../styles/Parallax.style";
import img from '../assets/pexels-max-ravier-3331094.webp'
import Link from "next/link";
import WavyText from "./WavyText";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";



interface ParallaxProps {
  children: string | any;
  baseVelocity: number;
  className?: string
}


export function Parallax() {
const size = useSelector((state:RootState)=>state.size.value)  
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
              { size < 700 ? <MdKeyboardDoubleArrowDown size={35} className='animate-pulse' /> : null}
          </DiscoverContainer> 
          <ImageContainer priority={false} rel="preload" src={img} width={2000} height={2000} alt="image" className=''/>
               
          
      </BgContainer>
  );
}