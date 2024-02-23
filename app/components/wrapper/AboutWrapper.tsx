"use client"
import React, { useState } from 'react'
import {AboutContainer, CardContainer, CardCollapse,CardAbout,
    ButtonCollapse,CollapseContainer,
    MainContainer,MainTextContainer} from '@/app/styles/About.style'
import {IoPeopleCircleOutline,IoBedOutline,IoClose,IoAdd} from 'react-icons/io5'
import {FaShower,FaCar,FaWifi,FaDog,FaRegSnowflake} from 'react-icons/fa'
import {MdMeetingRoom} from 'react-icons/md'
import {GiWashingMachine,GiSeaCliff,GiRiceCooker} from 'react-icons/gi'
import {CgScreen, CgUsb} from 'react-icons/cg'
import {BsPersonWorkspace} from 'react-icons/bs'
import { Variants, motion } from 'framer-motion'
import Button from '@/app/components/Button'
import { Timmana} from 'next/font/google'
import CardInfo from '../CardInfo'
import { aboutContents } from '@/app/ref/types'
const one = Timmana({ subsets: ['latin'] , weight: '400' })

function AboutWrapper(data:any) {
    const iconSize = 35
    const [show ,setShow] = useState(false)
    const [disShow ,setDisShow] = useState(false)
    const dataRules = data.data
  console.log(dataRules)
    const variant:Variants = {
      start:{opacity:0 ,y:-20},
      end:{opacity:1, y:8},
      startTit:{opacity:0 ,x:-20},
      endTit:{opacity:1, x:2},
      startRev:{opacity:0 ,x:20},
      endRev:{opacity:1, x:2},
      }
  return (
    <>
    <AboutContainer>
        <MainContainer>
            <MainTextContainer className={one.className}>
                <motion.div variants={variant} initial='startTit' whileInView='endTit' className=' shad flex text-[5rem] md:text-[6.7rem] flex-col lg:flex-row lg:text-[7rem] xl:text-[12rem] lg:gap-5'>La soluzione<p className='text-amber-400 uppercase shadW '>ideale</p></motion.div>
                <motion.div variants={variant} initial='startRev' whileInView='endRev' className='  shad text-[5.3rem] md:text-[6.7rem] lg:text-[7rem] xl:text-[10rem] flex-col lg:flex-row w-[90vw] flex lg:gap-5'>Per la tua <p className='text-amber-400 shadW uppercase'>vacanza</p></motion.div>
                <motion.div variants={variant} initial='startTit' whileInView='endTit' className=' shad text-[5.3rem] md:text-[6.7rem] lg:text-[7.5rem] xl:text-[12rem]  flex gap-2 lg:gap-5'>In <p className='text-amber-400 uppercase shadW '>Sicilia</p> .</motion.div> 
            </MainTextContainer>
            <Button to={'#sec'}  y={0} color={'text-amber-400'}/>
        </MainContainer>
    
        <div className=' h-10' id='sec' />
        <br />           
    <CardContainer> 
        <CollapseContainer>
            <CardCollapse onClick={()=>setShow(!show)} $extend={show.toString()}>
                <div className='uppercase'><p>dettagli</p></div> 
                <ButtonCollapse $extend={show.toString()}>
                { show === true? <IoClose size={30}/> : <IoAdd size={30}/>}
                </ButtonCollapse> 
            </CardCollapse>
            <CardAbout  $extend={show.toString()}>
                <div className='flex flex-col gap-4'>
                    <div className=" flex items-center"><GiRiceCooker size={iconSize}/><p className='p-1'>Cucina Completa</p></div>
                    <div className=" flex items-center"> <BsPersonWorkspace size={iconSize}/><p className='p-2'>Spazio di lavoro dedicato</p></div>
                    <div className=" flex items-center"><IoPeopleCircleOutline size={iconSize}/><p className='p-1'>4 Ospiti</p></div>
                    <div className=" flex items-center"><MdMeetingRoom size={iconSize}/><p className='p-1'>1 Camere da letto</p></div>
                    <div className=" flex items-center"><IoBedOutline size={iconSize}/><p className='p-1'>3 Letti</p></div>
                    <div className=" flex items-center"><FaShower size={iconSize}/><p className='p-1'>Bagno</p></div>
                    <div className=" flex items-center"><FaRegSnowflake size={iconSize}/><p className='p-1'>Ambiente Climatizzato</p></div>
                </div>
            </CardAbout>
        </CollapseContainer>

        <CollapseContainer>
            <CardCollapse onClick={()=>setDisShow(!disShow)} $extend={disShow.toString()}>
                <div className='uppercase'><p>DISPONIBILE</p></div> 
                <ButtonCollapse $extend={disShow.toString()}>
                    { disShow === true? <IoClose size={30}/> : <IoAdd size={30}/>}
                </ButtonCollapse>
            </CardCollapse>
                <CardAbout  $extend={disShow.toString()}>
                <div className="flex flex-col gap-4  ">
                    <div className="flex items-center"><GiSeaCliff size={iconSize}/><p className='p-1'>Vista Mare</p></div>
                    <div className='flex  items-center '><FaCar size={iconSize}/> <p className='p-1'>Parcheggio Privato</p></div>
                    <div className='flex  items-center '><FaWifi size={iconSize}/><p className='p-1'>Wi-Fi Internet</p> </div>
                    <div className='flex  items-center '><CgScreen size={iconSize}/><p className='p-1'>HDTV</p></div>
                    <div className='flex  items-center '><CgUsb size={iconSize}/><p className='p-1'>Prese USB</p></div>
                    <div className='flex  items-center '><GiWashingMachine size={iconSize}/><p className='p-1'>Lavatrice</p></div>
                    <div className='flex  items-center '><FaDog size={iconSize}/><p className='p-1'>Animali domestici ammessi</p></div>
                </div>
                </CardAbout>
            </CollapseContainer>
    </CardContainer>

        



        <section className=' prose list-none p-4 flex flex-col items-center w-full lg:w-[45rem] '>
            <br />
            <div className=" p-1 md:w-auto w-72 font-medium">
            <div className=' text-4xl font-black '>
            <span className='text-sky-600 text-5xl'>A</span>ppartamento
            </div>
            <p className='text-xl '>  
                <br />
                Situata a pochi passi dal mare e dalla spiaggia rocciosa di Acitrezza, famosa per i suoi faraglioni e l&apos;area marina protetta, Blue Wave Holiday House è la soluzione perfetta per le tue vacanze in Sicilia.
                Questa accogliente casa vacanze di 60 mq offre tutto il necessario per un soggiorno confortevole e rilassante:
                </p>
            <br />
            <ul className='text-xl'> 
                <li> 🌊 Un soggiorno con divano letto e TV;</li><br />
                <li> 🌊 Una camera da letto matrimoniale con armadio, culla per neonati e TV;</li><br />
                <li> 🌊 Un bagno completo con doccia;</li><br />
                <li> 🌊 Una cucina completamente attrezzata con piano colazione;</li><br />
                <li> 🌊Un terrazzino vista mare</li><br />
                <li> 🌊 Un posto auto privato all&apos;interno del complesso residenziale.</li><br />
            </ul>
                <br />
                <div className='text-xl'> 
                La casa è arredata con gusto e modernità, e offre tutti i comfort necessari per rendere la tua vacanza indimenticabile!
                La posizione strategica di Blue Wave Holiday House ti permette di raggiungere facilmente tutte le principali attrazioni
                del bacino orientale della Sicilia: a soli 25 minuti dall&apos;Aeroporto di Catania, 15 min dal centro di Catania, 40 minuti
                da Taormina, 60 minuti da Siracusa.
                </div> 
                <br />
            </div>        
            <br />
        </section>
        <div className=' flex-col  w-full items-center justify-center'>

            {/* <div className=' w-full  flex  justify-between text-6xl font-bold italic p-2'>
            <div  className=' -[25%] flex  items-center justify-center ml-16'>
                <p className=' text-sky-600 text-7xl'>S</p>ervizi
            </div>
            </div> */}
            <div className=' h-32' >       
            <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.8}} className=" lg:w-1/2 w-[95vw]   border-b-[5rem] border-b-amber-400  border-r-[6rem] border-r-transparent "/>
            <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.8}} className=" relative lg:w-1/2 top-[-4rem] w-[94vw] flex flex-col justify-center  items-center  text-6xl  font-black italic border-b-[5rem] border-b-sky-700  border-r-[6rem] border-r-transparent  h-[1rem]">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.5}} className=' mt-16 flex items-center justify-center w-full text-white p-3 '>
            <p className=' text-amber-400 '>S</p>ervizi
            </motion.h1>
            </motion.div>        
          </div>
            
            

            
            <section className='flex  flex-wrap w-[100%] min-h-[10rem] p-3 gap-5'>            
               
               

                {/* <TextAboutContainer> */}
                  <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}
                             className="text-md  w-[22rem] p-2 bg-sky-700 text-zinc-50 border border-sky-400">

<p className='flex flex-col justify-center items-center'> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >P</span>olitiche:</strong></p>
                     <p className='pl-4 prose-lg'>
                            -L&apos;host ti accoglie di persona <br />
                        -Sono permessi soggiorni a lungo termine
                        Consente i soggiorni oltre i 28 giorni <br />
                        -Animali domestici ammessi
                        Gli animali di servizio sono sempre ammessi
                            <br />
                    </p>
               </motion.div> 
                    {/* <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.25}} >
                        <div> <strong className='p-1 text-2xl'>- Politiche:</strong></div>
                        <p className='pl-4 prose-lg'>
                            -L&apos;host ti accoglie di persona <br />
                        -Sono permessi soggiorni a lungo termine
                        Consente i soggiorni oltre i 28 giorni <br />
                        -Animali domestici ammessi
                        Gli animali di servizio sono sempre ammessi
                            <br />
                        </p>
                    </motion.div> */}
                {/* </TextAboutContainer>    */}
                
                          
                {/* <TextAboutContainer> */}
                <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}
                             className="text-md  w-[22rem] p-2 bg-sky-700 text-zinc-50 border border-sky-400">

<p className='flex flex-col justify-center items-center'> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >P</span>osizione:</strong></p>
                    <p className='pl-4'>
                        - Posto auto privato in condominio <br />
                        - Parcheggio in strada. <br />
                        A piedi:<br/>
                        - bar sotto casa<br />
                        - fermata autobus sotto casa<br />
                        - 5 Min discesa a mare<br />
                        In auto<br />
                        - 15 min Catania centro<br />
                        - 2 min supermercato molto fornito decò<br />
                        - 5 min centro commerciale<br/>
                        - 2 min panifici, bar e ristorante<br />
                        <br />
                    </p>
               </motion.div> 
                {/* <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.30}} >
                    <div> <strong className='p-1'>- Posizione:</strong></div>
                    <p className='pl-4'>
                        - Posto auto privato in condominio <br />
                        - Parcheggio in strada. <br />
                        A piedi:<br/>
                        - bar sotto casa<br />
                        - fermata autobus sotto casa<br />
                        - 5 Min discesa a mare<br />
                        In auto<br />
                        - 15 min Catania centro<br />
                        - 2 min supermercato molto fornito decò<br />
                        - 5 min centro commerciale<br/>
                        - 2 min panifici, bar e ristorante<br />
                        <br />
                    </p>
                    </motion.div> */}
                    {/* </TextAboutContainer> */}

                    {/* <TextAboutContainer> */}
                    <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}
                             className="text-md  w-[22rem] p-2 bg-sky-700 text-zinc-50 border border-sky-400">

<p className='flex flex-col justify-center items-center'> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >C</span>ucina e zona pranzo:</strong></p>
                   <p className='pl-4'>
                            - Cucina : uno spazio in cui gli ospiti possono cucinare <br />
                            - Frigorifero <br />
                            {/* - Forno a microonde <br /> */}
                            - Servizi di base per cucinare
                            Pentole, padelle, olio, sale e pepe <br />
                            - Piatti e posate
                            Scodelle, piatti, tazze, ecc. <br />
                            - Freezer <br />
                            {/* - Lavastoviglie <br /> */}
                            - Piano cottura  <br />
                            - Forno Normale<br />
                            - Bollitore <br />
                            - Macchina del caffè: macchina per caffè espresso<br />
                            - Tavolo da pranzo <br />
                        <br />
                    </p>
               </motion.div> 

                    
                    {/* <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.35}} >
                    <div> <strong className='p-1'>- Cucina e zona pranzo:</strong></div>
                    
                    </motion.div> */}
                {/* </TextAboutContainer> */}
                {/* <TextAboutContainer> */}

                <motion.div variants={variant} initial="start" whileInView="end" transition={{delay:0.25}}
                             className="text-md  w-[22rem] p-2 bg-sky-700 text-zinc-50 border border-sky-400">

<p className='flex flex-col justify-center items-center'> <strong className='p-1 text-3xl font-black italic'><span className=' text-amber-400' >B</span>agno:</strong></p>
                   <p className='pl-4'>
                            - Asciugacapelli <br />
                            - Prodotti per la pulizia <br />
                            - Shampoo <br />
                            - Sapone per il corpo <br />
                            - Bidet <br />
                            - Acqua calda <br />
                            - Gel doccia <br />
                        <br />
                    </p>
               </motion.div> 
                {/* <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.40}} >

                    <div> <strong className='p-1'>- Bagno:</strong></div>
                    
                    </motion.div> */}
                {/* </TextAboutContainer> */}
    </section>
        
        {/* <div className=' w-full  flex  justify-between text-6xl font-bold italic p-2'>
            <div  className=' -[25%] flex  items-center justify-center ml-16'>
                <p className=' text-sky-600 text-7xl'>R</p>egole
            </div>
        </div> */}

        <div className=' h-32' >       
            <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.8}} className=" lg:w-1/2 w-[95vw]   border-b-[5rem] border-b-amber-400  border-r-[6rem] border-r-transparent "/>
            <motion.div variants={variant} initial='start' whileInView='end' transition={{delay:0.8}} className=" relative lg:w-1/2 top-[-4rem] w-[94vw] flex flex-col justify-center  items-center  text-6xl  font-black italic border-b-[5rem] border-b-sky-700  border-r-[6rem] border-r-transparent  h-[1rem]">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.5}} className=' mt-16 flex items-center justify-center w-full text-white p-3 '>
            <p className=' text-amber-400 '>R</p>egole
            </motion.h1>
            </motion.div>        
          </div>

            <section className="flex flex-col items-center w-[100%]  bg-sky-700 "> 
                {dataRules.map((rules:aboutContents) =>{
                    const {id} = rules
                    return(
                        <div key={id}>
                             <CardInfo {...rules}/>
                        </div>
                       
                    )
                })}

            {/* <TextAboutContainer>
            <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.60}} >

                <div className='p-2'> - Check-in:
                <p className='pl-4'>Check-in dalle 15:00-20:00</p>
                </div>
                <div className='p-2'> - Check-out:
                <p className='pl-4'>Check-out entro le 11:00</p>
                </div>
                <div className='p-2'> - Orari di silenzio
                <p className='pl-4'>23:00 - 07:00</p>  
                </div>
            
                <div className='p-2'>  
                <p className='p-1'>- Vietato organizzare feste/eventi</p>
                </div>
            
                <div className='p-2'> 
                <p className='p-1'>- Fotografia pubblicitaria consentita</p>
                </div>
            
                <div className='p-2'> 
                    <p className='p-1'>- Non è consentito fumare</p>
                </div>
            
                <div className='p-2'> 
                <p className='p-1'>- Spegnere tutto</p>
                </div>
                <div className='p-2'> 
                <p className='p-1'>- Rispettare gli orari di silenzio per non disturbare i condomini.</p>
                </div>
                </motion.div>
            </TextAboutContainer>

            <TextAboutContainer>
            <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.65}} >

                <div> <p className='p-1'>- Note Aggiuntive:</p></div>
                <p className='pl-4'>
                                Ogni viaggio lascia un ricordo, noi cerchiamo di fare il nostro meglio, per tanto ti chiediamo di rispettare piccole semplici regole della casa: <br />
                            - Non lasciare porte, infissi e finestre aperte quando non c&apos;è nessuno in casa. <br />
                            - Rispettare le regole della raccolta differenziata. <br />
                            - Spegnere i condizionatori se non utilizzati. <br />
                            - Rispettare gli orari di silenzio per non disturbare i condomini.
                        <br />
                </p>
                </motion.div>
            </TextAboutContainer> */}
            
            
        </section>
    </div>
</AboutContainer>
    </>
  )
}

export default AboutWrapper
