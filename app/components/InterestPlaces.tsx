import React from 'react'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import {motion,Variants} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaAirbnb, FaTripadvisor, FaWhatsapp } from 'react-icons/fa'
import { TbBrandBooking } from 'react-icons/tb'
import logoP from '../assets/logo_paytourist_retina_r.webp'

function InterestPlaces({children}:any) {
   const size = useSelector((state:RootState)=>state.size.value)
   const variant:Variants = {
    start:{opacity:0 ,x:-20},
    end:{opacity:1, x:0},
    }
  return (
    <>
    <section className='flex  flex-wrap w-[100%] min-h-[10rem] p-3 gap-5'>            
               
                      <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}
                       className="text-md  w-[22rem] p-2 bg-sky-700 text-zinc-50 border border-sky-400">
                      <p> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >T</span>rasporti:</strong></p>
                      <p className='pl-4'>
                          - 300 m fermata metropolitana Piazza Borgo<br />
                          - 300 m fermata autobus piazza Borgo<br />
                          - 7.1 Km Aereoporto Fontanarossa<br />
                          <br />
                      </p>
                    </motion.div> 
                    <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-sm w-[22rem]   p-2 bg-sky-700 text-zinc-50  border border-sky-400">
                      <p> <strong className='p-1 text-3xl font-black italic'> <span className=' text-amber-400' >A</span>ttrazioni:</strong></p>
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
               
              
                <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-sm   w-[22rem]  bg-sky-700 text-zinc-50  border border-sky-400 p-2">
                        <p> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >M</span>are:</strong></p>
                        <p className='pl-4'>
                            - 4,1 Km Playa di Catania <br />
                            - 3,5 Km San Giovanni Li Cuti <br />
                            - 10 Km Aci Trezza <br />
                            <br />
                        </p>
                      </motion.div>
                      <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-sm   w-[22rem]   bg-sky-700 text-zinc-50 border border-sky-400 p-2">
                        <p> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >S</span>hopping:</strong></p>
                        <p className='pl-4'>
                            - 5min supermercato molto fornito decò piazza borgo<br />
                            - 2min panifici, bar e ristorante<br />
                            - 6,9 Km Centro Commerciale Porte di Catania. <br />
                            - 12 km Km Centro Commerciale Centro Sicilia. <br />
                            <br />
                        </p>
                      </motion.div>


                       <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className="text-sm   w-[22rem]   bg-sky-700 text-zinc-50 border border-sky-400 p-2">
                         <p> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >L</span>ink:</strong></p>
                          <section className=' flex flex-wrap flex-row justify-start'>
                          <Link aria-label='link whatsApp' href={'https://acicastello.paytourist.com/strutture-certificate/case-vacanze/apct000069-0002.html'}>   
                                  <Image className='m-1 hover:text-amber-400 hover:scale-110  p-2 border-2 rounded'  width={76} height={68}  src={logoP} alt='logo'/>
                              </Link>                
                              <Link aria-label='link per airBnB' href={'https://www.airbnb.it/rooms/965158970549808793?_set_bev_on_new_domain=1693421299_M2U2NDkyN2NiZTk1&source_impression_id=p3_1705437005_TKYN%2B%2BsmqOiHnMsk'}>
                                  <FaAirbnb className='m-1 text-red-400 hover:text-amber-400  hover:scale-110 p-1 border-2 rounded' size={80}/>
                              </Link>
                              <Link aria-label='link whatsApp' href={'https://www.tripadvisor.it/VacationRentalReview-g1007324-d26672499-Blue_Wave_Holiday_House-Acitrezza_Aci_Castello_Province_of_Catania_Sicily.html'}>
                                  <FaTripadvisor className='m-1 text-amber-300 hover:text-amber-400 hover:scale-110  p-1 border-2 rounded' size={80}/>
                              </Link>  
                              <Link aria-label='link for bookong.com' href={'https://www.booking.com/Share-WE3Iho'}>
                                  <TbBrandBooking className='m-1 text-blue-800 hover:text-amber-400 hover:scale-110  p-1 border-2 rounded' size={80}/>
                              </Link> 
                              <Link aria-label='link whatsApp' href={'https://wa.me/message/RJUSAJYMVHYHF1'}>
                                  <FaWhatsapp className='m-1 text-green-400 hover:text-amber-400 hover:scale-110  p-1 border-2 rounded' size={80}/>
                              </Link> 
                          </section>
                       </motion.div>

                    

                  <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} className=" w-[22rem]   bg-sky-700 text-zinc-50 border border-sky-400 p-2">
                     <p> <strong className='p-1 text-4xl font-black italic'><span className=' text-amber-400' >C</span>ontatti</strong></p>
                    <div className='flex flex-col'>
                        <div className='p-1 flex flex-col gap-2 lg:text-xl text-lg font-semibold items-center'>
                        <p> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >E</span>mail:</strong></p>
                          <p>bluewavehhouse@gmail.com</p>
                        </div>
                        <div className='flex flex-col gap-2 text-xl font-semibold items-center'>
                        <p> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >T</span>el:</strong></p>
                          <p>+39 3348951094</p>
                      </div>  
                   </div>                        
               </motion.div>
               
               <Link className=" flex min-h-[10rem] w-[22rem]  bg-sky-700 text-zinc-50 border border-sky-400 p-2" 
                          href={''}>
                        <motion.div className='border-4 border-amber-400' variants={variant} initial="start" whileInView="end" transition={{delay:0.25}} >
                            <div  className='p-1 mb-3'>
                              <h1 className=' font-black italic h-5 w-full text-6xl '>Prenota adesso</h1>
                              <h1 className='text-amber-400 relative top-[-16px] font-black italic h-5 w-full text-6xl ' >Prenota adesso</h1>
                            </div>                         
                      </motion.div>
                  </Link>
                    
                
        </section>
      </>
  )
}

export default InterestPlaces
