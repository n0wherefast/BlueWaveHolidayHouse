'use client'
import React,{useState} from 'react'
import {IoPeopleCircleOutline,IoBedOutline,IoClose,IoAdd} from 'react-icons/io5'
import {FaShower,FaCar,FaWifi,FaDog,FaRegSnowflake, FaArrowCircleDown} from 'react-icons/fa'
import {MdMeetingRoom} from 'react-icons/md'
import {GiWashingMachine,GiSeaCliff,GiRiceCooker} from 'react-icons/gi'
import {CgScreen} from 'react-icons/cg'
import {BsPersonWorkspace} from 'react-icons/bs'
import { Variants, motion } from 'framer-motion'
import styled from 'styled-components'
import Button from '@/app/components/Button'
import { AboutContainer , CardContainer,
          CardCollapse,CardAbout,
          ButtonCollapse,CollapseContainer,
          ContainerImage,TextAboutContainer,MainContainer,MainTextContainer} from '@/app/styles/About.style'
// import { useDispatch } from 'react-redux'
// import { scrollTo } from '@/app/redux/slices/scroll/scrollSlice'
import bg from "../../assets/blue_wave__abstract_picture_walpaper_amazing.jpg"




function About() {
  const iconSize = 35
  const [show ,setShow] = useState(false)
  const [disShow ,setDisShow] = useState(false)

  const variant:Variants = {
    start:{opacity:0 ,y:-20},
    end:{opacity:1, y:8},
    }
  
  return (
    <>
    <AboutContainer >
   {/* <ContainerImage alt={''} src={bg}></ContainerImage> */}
   <MainContainer 
  //  className='flex flex-col w-full h-[94vh] lg:h-[93.5vh]  bg-sky-700 items-center'
   >

      <MainTextContainer>
          <h2 className='text-amber-400'>Catch</h2>
          <h2>Your Dream</h2>
          <h2 className=' text-amber-400'>Holiday.</h2> 
      </MainTextContainer>
      <Button to={'#sec'}  y={-65} color={'text-[coral]'}/>
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
                <div className=" flex items-center  "><IoPeopleCircleOutline size={iconSize}/><p className='p-1'>4 Ospiti</p></div>
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
                  <div className='flex  items-center '><GiWashingMachine size={iconSize}/><p className='p-1'>Lavatrice</p></div>
                  <div className='flex  items-center '><FaDog size={iconSize}/><p className='p-1'>Animali domestici ammessi</p></div>
              </div>
            </CardAbout>
        </CollapseContainer>
</CardContainer>

      


      {/* <div className="w-72  mt-2 border border-gray-300"></div> */}

     <section className='p-4 flex flex-col items-center w-full lg:w-[45rem] '>
        <br />
        <div className=" p-1 md:w-auto w-72 font-bold">

        <div className=' text-4xl font-black '>
          <span className='text-sky-600 text-5xl'>A</span>ppartamento
        </div>

        <p className='text-xl '>  
    
             <br />
                ,vacanze nel cuore della città di Catania, a pochi passi dal centro storico vicino ai 
              principali mezzi di trasporto.
              Dotato di ogni comfort per un soggiorno in pieno relax.
            </p>
          <br />
          <div className='text-xl'> 
            <strong>Lo spazio</strong> L&apos;appartamento dispone di un open space con divano letto e tavolo,
             seguito da un angolo cottura dedicato ed un piccolo balconcino. Inoltre dispone di un&apos;ampia camera da letto e doppi servizi: bagno con doccia e di una lavanderia con servizi dedicati.
             L&apos;appartamento è dotato di ogni comfort: Tv satellitari, condizionatori, frigo, cucina e forno.
            </div>
            <br />
            <div className='text-xl'> 
              <strong>Da tenere a mente</strong> Vicino a bar, supermercati, metro, farmacie.
               Consente di spostarsi anche a piedi e visitare la via più importante della città: Via Etnea.
            </div> 
            <br />
        </div>        
        <br />
        
        
      </section>
      
    

      <div className=' flex-col  w-full items-center justify-center'>

        <h2 className=' w-full  flex  justify-between text-6xl font-bold italic p-2'>
          <div  className=' -[25%] flex  items-center justify-center ml-16'>
            <span className=' text-sky-600 text-7xl'>S</span>ervizi
          </div>
        </h2>


          <section className="flex flex-col  md:flex-row gap-2  p-4  w-full justify-between bg-sky-600 "> 
        
      {/* <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.25}} > */}
          <TextAboutContainer>
             <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.25}} >

                <div> <strong className='p-1 text-2xl'>- Politiche:</strong></div>
                <p className='pl-4 prose-lg'>
                    -L&apos;host ti accoglie di persona <br />
                -Sono permessi soggiorni a lungo termine
                 Consente i soggiorni oltre i 28 giorni <br />
                -Animali domestici ammessi
                 Gli animali di servizio sono sempre ammessi
                    <br />
                </p>
              </motion.div>
          </TextAboutContainer> 
      {/* </motion.div> */}
            
          <TextAboutContainer>
          <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.30}} >
              <div> <strong className='p-1'>- Posizione:</strong></div>
              <p className='pl-4'>
                  - Parcheggio in strada. <br />
                  - A pochi passi c&apos;è un parcheggio privato a pagamento.<br />
                  - A piedi:
                  - 3min fermata metropolitana Piazza Borgo<br />
                  - 3min fermata autobus piazza Borgo<br />
                  - 1 Min orto botanico<br />
                  - 5min villa Bellini<br />
                  - 15 minuti teatro Massimo<br />
                  - 20 Min Duomo<br />
                  - 5min supermercato molto fornito decò piazza borgo<br />
                  - 2min panifici, bar e ristorante<br />
                  <br />
              </p>
              </motion.div>
            </TextAboutContainer>

            <TextAboutContainer>
            <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.35}} >
              <div> <strong className='p-1'>- Cucina e zona pranzo:</strong></div>
              <p className='pl-4'>
                    - Cucina : uno spazio in cui gli ospiti possono cucinare <br />
                    - Frigorifero <br />
                    - Forno a microonde <br />
                    - Servizi di base per cucinare
                      Pentole, padelle, olio, sale e pepe <br />
                    - Piatti e posate
                      Scodelle, bacchette, piatti, tazze, ecc. <br />
                    - Freezer <br />
                    - Lavastoviglie <br />
                    - Piano cottura a induzione <br />
                    - Forno Normale<br />
                    - Bollitore <br />
                    - Macchina del caffè: macchina per caffè espresso<br />
                    - Tavolo da pranzo <br />
                  <br />
              </p>
              </motion.div>
          </TextAboutContainer>
          <TextAboutContainer>
          <motion.div variants={variant}  initial='start' whileInView='end' transition={{delay:0.40}} >

              <div> <strong className='p-1'>- Bagno:</strong></div>
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
         </TextAboutContainer>
         </section>
      
      <h2 className=' w-full  flex  justify-between text-6xl font-bold italic p-2'>
          <div  className=' -[25%] flex  items-center justify-center ml-16'>
            <span className=' text-sky-600 text-7xl'>R</span>egole
          </div>
      </h2>

         <section className="flex flex-col  md:flex-row gap-2  p-4  w-full justify-around bg-sky-600 "> 

         <TextAboutContainer>
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
         </TextAboutContainer>
        
         
      </section>
</div>
     
    
    </AboutContainer>

    </>
  )
}

export default About
