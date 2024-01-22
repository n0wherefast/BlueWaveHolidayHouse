import { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
  } from "framer-motion";
import { DiscoverContainer, BgContainer } from "../styles/Parallax.style";
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
    const yBg = useTransform( scrollYProgress , [0,1] ,["0%" , "50%"]);
      return (
        <BgContainer ref={ref} className="image">
          <DiscoverContainer >
              <motion.div style={{y: yBg}} className="flex flex-col items-center ">
                <Link href={'#home'} className="flex items-center ">
                  { size > 700 ? <MdKeyboardDoubleArrowDown size={110} className='animate-pulse' /> : null}
                   <WavyText text={"discover! "} />
                   { size > 700 ? <MdKeyboardDoubleArrowDown size={110} className='animate-pulse' /> : null}
                   </Link> 
                { size < 700 ? <MdKeyboardDoubleArrowDown size={35} className='animate-pulse' /> : null}
              </motion.div>
          </DiscoverContainer> 
          {/* <ImageContainer blurDataURL="blur" placeholder="blur"  rel="preload" src={img} width={2000} height={2000} alt="image" /> */}
      </BgContainer>
  );
}