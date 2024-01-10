import React from 'react'
import Link from 'next/link'

function InterestPlaces({children}:any) {
  return (
    <section className='w-full  bg-sky-600 flex lg:flex-row flex-col items-center justify-around z-10 absolute' >
            <div className='flex flex-col   ' >
              <div className='flex flex-col md:flex-row p-2 gap-1 m-1'>
                      <div className="text-sm  md:w-auto w-72 m-1 p-2 shadow-slate-400 bg-slate-100 rounded-xl border border-slate-400">
                      <p> <strong className='p-1'>Trasporti:</strong></p>
                      <p className='pl-4'>
                          - 300 m fermata metropolitana Piazza Borgo<br />
                          - 300 m fermata autobus piazza Borgo<br />
                          - 7.1 Km Aereoporto Fontanarossa<br />
                          <br />
                      </p>
                    </div> 
                      <div className="text-sm  md:w-auto w-72 m-1  p-2 shadow-slate-400 bg-slate-100 rounded-xl border border-slate-400">
                      <p> <strong className='p-1'>Attrazioni:</strong></p>
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
                    </div> 
                </div>
                <div className='flex flex-col md:flex-row p-1 gap-1'>
                        <div className="text-sm  md:w-auto w-72 m-1 shadow-slate-400 bg-slate-100 rounded-xl border border-slate-400 p-2">
                        <p> <strong className='p-1'>Mare:</strong></p>
                        <p className='pl-4'>
                            - 4,1 Km Playa di Catania <br />
                            - 3,5 Km San Giovanni Li Cuti <br />
                            - 10 Km Aci Trezza <br />
                            <br />
                        </p>
                      </div>
                      <div className="text-sm  md:w-auto w-72 m-1 shadow-slate-400 bg-slate-100 rounded-xl border border-slate-400 p-2">
                        <p> <strong className='p-1'>Shopping:</strong></p>
                        <p className='pl-4'>
                            - 5min supermercato molto fornito decò piazza borgo<br />
                            - 2min panifici, bar e ristorante<br />
                            - 6,9 Km Centro Commerciale Porte di Catania. <br />
                            - 12 km Km Centro Commerciale Centro Sicilia. <br />
                            <br />
                        </p>
                      </div>
                    </div>
                </div>
                
              <br />
              {/* <h2 className='  text-slate-800 font-homeFont text-5xl font-bold m-4'><span className='text-pink-600' >R</span>ichiesta <span className='text-pink-600'>I</span>nformazioni</h2> */}
              {/* <ContactForm/>  */}
              <br />  
              {/* <div className=" w-60 h-auto ml-10 mr-10 mt-3 mb-3 border border-gray-300"></div>
              <h3 className='text-2xl font-homeFont font-bold'>OR</h3>  
              <div className=" w-60 h-auto ml-10 mr-10 mt-3 mb-3 border border-gray-300"></div>
              <br /> */}
             {children}
        </section>
  )
}

export default InterestPlaces
