import React from 'react'
import Link from 'next/link'
import WaveLine from './WaveLine'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import {motion,Variants} from 'framer-motion'

function InterestPlaces({children}:any) {
   const size = useSelector((state:RootState)=>state.size.value)
   const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:0},
    }
  return (
    <section className='w-[600vtext-zinc-50 w]  flex lg:flex-row flex-col items-center justify-around ' >
        {children}
      {/* <br /> */}
            <div className='flex lg:flex-row md:flex-wrap flex-col  ' >
              <div className='flex flex-col md:flex-row  gap-2 m-1'>
                      <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-md md:w-auto w-full p-2 shadow-sky-400 bg-sky-600 text-zinc-50 border border-sky-400">
                      <p> <strong className='p-1 text-2xl font-black italic'><span className=' text-amber-400' >T</span>rasporti:</strong></p>
                      <p className='pl-4'>
                          - 300 m fermata metropolitana Piazza Borgo<br />
                          - 300 m fermata autobus piazza Borgo<br />
                          - 7.1 Km Aereoporto Fontanarossa<br />
                          <br />
                      </p>
                    </motion.div> 
                    <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-sm  md:w-auto lg:w-72   p-2 shadow-sky-400 bg-sky-600 text-zinc-50 w-full border border-sky-400">
                      <p> <strong className='p-1 text-2xl font-black italic'> <span className=' text-amber-400' >A</span>ttrazioni:</strong></p>
                      <p className='pl-4'>
                          - 250 m Orto Botanico<br />
                          - 850 m villa Bellini<br />
                          - 1,8 Km Teatro Massimo<br />
                          - 1,7 Km Piazza Duomo<br />
                          - 1,4 km Terme Romane<br />
                          - 1,6 Km Monastero Dei Benedettini<br />
                          - 2,6 Km Castello Ursino<br />
                          - 1,7 Km Parco Gioeni<br />
                          <br />
                      </p>
                    </motion.div> 
                </div>
                <div className='flex flex-col md:flex-row p-1 gap-2'>
                <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-sm  md:w-auto lg:w-72 w-full shadow-sky-400 bg-sky-600 text-zinc-50  border border-sky-400 p-2">
                        <p> <strong className='p-1 text-2xl font-black italic'><span className=' text-amber-400' >M</span>are:</strong></p>
                        <p className='pl-4'>
                            - 4,1 Km Playa di Catania <br />
                            - 3,5 Km San Giovanni Li Cuti <br />
                            - 10 Km Aci Trezza <br />
                            <br />
                        </p>
                      </motion.div>
                      <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-sm  md:w-auto lg:w-72 w-full  shadow-sky-400 bg-sky-600 text-zinc-50 border border-sky-400 p-2">
                        <p> <strong className='p-1 text-2xl font-black italic'><span className=' text-amber-400' >S</span>hopping:</strong></p>
                        <p className='pl-4'>
                            - 5min supermercato molto fornito decò piazza borgo<br />
                            - 2min panifici, bar e ristorante<br />
                            - 6,9 Km Centro Commerciale Porte di Catania. <br />
                            - 12 km Km Centro Commerciale Centro Sicilia. <br />
                            <br />
                        </p>
                      </motion.div>
                    </div>
                </div>
                
              <br />
              {/* <h2 className='  text-sky-800 font-homeFont text-5xl font-bold m-4'><span className='text-pink-600' >R</span>ichiesta <span className='text-pink-600'>I</span>nformazioni</h2> */}
              {/* <ContactForm/>  */}
              <br />  
              {/* <div className=" w-60 h-auto ml-10 mr-10 mt-3 mb-3 border border-gray-300"></div>
              <h3 className='text-2xl font-homeFont font-bold'>OR</h3>  
              <div className=" w-60 h-auto ml-10 mr-10 mt-3 mb-3 border border-gray-300"></div>
              <br /> */}
             
        </section>
  )
}

export default InterestPlaces
