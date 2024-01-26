'use client'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  } from "framer-motion";
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
        <section ref={ref} className="flex flex-col md:flex-row items-center justify-end lg:justify-center w-[100vw] min-h-[100vh] image">
          <div className=" flex flex-col justify-start items-center md:mb-[-15rem] lg:ml-[30rem] md:ml-[1rem] mb-[1rem] ml-0 min-h-[8rem] font-black text-[3.5rem] md:text-[8rem] lg:text-[10rem] italic md:h-[10rem] text-amber-400 hover:text-amber-600 uppercase transition-all ease-in duration-[0.5] " >
              <motion.div style={{y: yBg}} className="flex flex-col items-center ">
                <Link href={'#home'} className="flex items-center ">
                  {/* { size > 700 ? <MdKeyboardDoubleArrowDown size={110} className='animate-pulse' /> : null} */}
                   <WavyText text={"discover! "} />
                   { size > 700 && <MdKeyboardDoubleArrowDown size={110} className='animate-pulse' /> }
                   </Link> 
                   { size < 700 && <MdKeyboardDoubleArrowDown size={35} className='animate-pulse' /> }
              </motion.div>
          </div> 
          {/* <ImageContainer blurDataURL="blur" placeholder="blur"  rel="preload" src={img} width={2000} height={2000} alt="image" /> */}
      </section>
  );
}