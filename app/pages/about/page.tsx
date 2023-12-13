'use client'
import React,{useState} from 'react'
import {IoPeopleCircleOutline,IoBedOutline,IoClose,IoAdd} from 'react-icons/io5'
import {FaShower,FaCar,FaWifi,FaDog,FaRegSnowflake, FaArrowCircleDown} from 'react-icons/fa'
import {MdMeetingRoom} from 'react-icons/md'
import {GiWashingMachine,GiSeaCliff,GiRiceCooker} from 'react-icons/gi'
import {CgScreen} from 'react-icons/cg'
import {BsPersonWorkspace} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { AboutContainer , CardContainer,
          CardCollapse,CardAbout,
          ButtonCollapse,CollapseContainer,
          ContainerImage,TextAboutContainer} from '@/app/styles/About.style'
// import { useDispatch } from 'react-redux'
// import { scrollTo } from '@/app/redux/slices/scroll/scrollSlice'
import bg from "../../assets/blue_wave__abstract_picture_walpaper_amazing.jpg"

function About() {
  const iconSize = 35
  const [show ,setShow] = useState(false)
  const [disShow ,setDisShow] = useState(false)
  
  return (
    <>
    <AboutContainer >
   {/* <ContainerImage alt={''} src={bg}></ContainerImage> */}
   <div className=' flex w-full h-[93vh] bg-sky-700'>
      <div className='h-full w-full flex flex-col items-start justify-center italic font-black text-[12vh] p-1  md:p-0 md:text-[8rem] lg:text-[9.5rem] text-slate-50'>
         <h2 className='text-amber-400'>Catch</h2> <h2>Your Dream</h2> <h2 className=' text-amber-400'>Holiday.</h2> 
      </div>
   </div>
      <div>
          <motion.button animate={{ y: -65,  scale: [1,1.5,1], borderRadius:[0,2,2,0]}} 
                         transition={{ ease: "easeOut", duration: 1 }}
                         
                         className=''> 
                            <h2 className= ' transition-all ease-in flex justify-center items-center  text-4xl lg:text-6xl rounded-2xl hover:text-slate-100 font-extrabold  text-[coral]'>
                                 <p className=' animate-pulse'><FaArrowCircleDown/></p>
                            </h2>
          </motion.button>
      </div>
    
               <br id='sec' />
<CardContainer> 
      <CollapseContainer>
        <CardCollapse onClick={()=>setShow(!show)} $extend={show.toString()}>
        <p className='uppercase'><div>dettagli</div></p> 
            <ButtonCollapse $extend={show.toString()}>
              { show === true? <IoClose size={30}/> : <IoAdd size={30}/>}
            </ButtonCollapse>
          
        </CardCollapse>
        <CardAbout  $extend={show.toString()} >
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
              <p className='uppercase'><div>DISPONIBILE</div></p> 
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
          {/* <TextAboutContainer>
          <p className='text-xl '> <div className=' font-homeFont text-5xl'><span className='text-pink-600'>L</span>ocalità:</div>
          <br /> <br /> 
          <div>Catania</div>, situata sulla splendida costa orientale della Sicilia, è una città ricca di storia, cultura 
          e bellezze naturali. Con la sua posizione privilegiata, ai piedi del maestoso vulcano Etna, Catania 
          affascina i visitatori con il suo mix unico di elementi antichi e moderni. </p>
          <br />
          <p className='text-xl'> 
            <div>La città</div> vanta un patrimonio storico di grande importanza, testimoniato dai suoi numerosi siti archeologici e monumenti.
           Il Duomo di Catania, un capolavoro di architettura barocca, si erge maestoso nella piazza principale, mentre il Teatro Romano,
            risalente al I secolo a.C., offre uno sguardo affascinante nella vita dell&apos;antica Catania.
            </p>
            <br />
            <p className='text-xl'> 
              <div>La vivace</div>  vita di strada e la ricca tradizione culinaria rendono Catania un vero paradiso per gli amanti del cibo. I mercati all&apos;aperto, 
            come il famoso Mercato del Pesce e il Mercato della Piazza Carlo Alberto, offrono un&apos;ampia selezione di prodotti freschi e prelibatezze locali. I piatti tradizionali
             catanesi, come la pasta alla Norma e i cannoli siciliani, deliziano i palati di residenti e visitatori.
            </p> 
            <br />
        </div> */}
        <br />
        {/* <TextAboutContainer>
        <p className='text-xl'> <div className=' font-homeFont text-5xl'><span className='text-pink-600'>S</span>toria:</div>
          <br /> <br />
          <div>Catania</div>,situata sulla costa orientale della Sicilia, vanta una storia e una cultura ricche di fascino e di influssi multietnici.
                     Fondata nell&apos;VIII secolo a.C. dagli antichi greci, Catania è una delle città più antiche dell&apos;isola
                       e ha subito numerosi eventi che hanno plasmato la sua identità unica nel corso dei secoli.</p>
          <br />
          <p className='text-xl'> 
            <div>La storia</div> di Catania è stata segnata da diverse dominazioni, tra cui quella greca,
             romana, bizantina, araba, normanna e spagnola. Ogni cultura ha lasciato un&apos;impronta indelebile sulla città,
             contribuendo alla ricchezza del suo patrimonio artistico e architettonico.
            </p>
            <br />
            <p className='text-xl'> 
              <div>Il centro storico</div> di Catania è un labirinto di strade strette e antiche, arricchito
               da importanti monumenti barocchi che testimoniano il periodo di splendore della città nel XVIII secolo.
                La Cattedrale di Sant&apos;Agata, con la sua imponente facciata, è uno dei principali luoghi di culto e un simbolo di Catania.
               Il Teatro Romano, risalente al I secolo a.C., è un&apos;importante testimonianza dell&apos;epoca romana.
            </p> 
            <br />
            <p className='text-xl'> 
              <div>Famosa </div> anche per i suoi festeggiamenti religiosi, tra cui la Festa di Sant&apos;Agata,
               la patrona della città, che si svolge ogni anno a febbraio.
               Questa festa, una delle più importanti dell&apos;isola, attira visitatori da tutto il mondo per assistere 
               alla spettacolare processione e ai tradizionali &quot;candelieri&quot; portati a spalla dai fedeli.
            </p> 
            <br />
        </div> */}
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
          <p className='text-xl'> 
            <div>Lo spazio</div> L&apos;appartamento dispone di un open space con divano letto e tavolo,
             seguito da un angolo cottura dedicato ed un piccolo balconcino. Inoltre dispone di un&apos;ampia camera da letto e doppi servizi: bagno con doccia e di una lavanderia con servizi dedicati.
             L&apos;appartamento è dotato di ogni comfort: Tv satellitari, condizionatori, frigo, cucina e forno.
            </p>
            <br />
            <p className='text-xl'> 
              <div>Da tenere a mente</div> Vicino a bar, supermercati, metro, farmacie.
               Consente di spostarsi anche a piedi e visitare la via più importante della città: Via Etnea.
            </p> 
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


          <section className="flex flex-col  md:flex-row gap-2  p-4  w-full justify-between"> 
        
    
          <TextAboutContainer>
                <p> <div className='p-1 text-2xl'>- Politiche:</div></p>
                <p className='pl-4 prose-lg'>
                    -L&apos;host ti accoglie di persona <br />
                -Sono permessi soggiorni a lungo termine
                 Consente i soggiorni oltre i 28 giorni <br />
                -Animali domestici ammessi
                 Gli animali di servizio sono sempre ammessi
                    <br />
                </p>
          </TextAboutContainer> 
            
          <TextAboutContainer>
              <p> <div className='p-1'>- Posizione:</div></p>
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
            </TextAboutContainer>
            <TextAboutContainer>
              <p> <div className='p-1'>- Cucina e zona pranzo:</div></p>
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
          </TextAboutContainer>
          <TextAboutContainer>
              <p> <div className='p-1'>- Bagno:</div></p>
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
         </TextAboutContainer>
         </section>
      
      <h2 className=' w-full  flex  justify-between text-6xl font-bold italic p-2'>
          <div  className=' -[25%] flex  items-center justify-center ml-16'>
            <span className=' text-sky-600 text-7xl'>R</span>egole
          </div>
      </h2>

         <section className="flex flex-col  md:flex-row gap-2  p-4  w-full justify-around"> 

         <TextAboutContainer>
            <p className='p-2'> - Check-in:
              <div className='pl-4'>Check-in dalle 15:00-20:00</div>
            </p>
            <p className='p-2'> - Check-out:
              <div className='pl-4'>Check-out entro le 11:00</div>
            </p>
            <p className='p-2'> - Orari di silenzio
              <div className='pl-4'>23:00 - 07:00</div>  
            </p>
         
            <p className='p-2'>  
              <div className='p-1'>- Vietato organizzare feste/eventi</div>
            </p>
         
            <p className='p-2'> 
              <div className='p-1'>- Fotografia pubblicitaria consentita</div>
            </p>
         
            <p className='p-2'> 
                <div className='p-1'>- Non è consentito fumare</div>
            </p>
         
            <p className='p-2'> 
              <div className='p-1'>- Spegnere tutto</div>
            </p>
         </TextAboutContainer>

         <TextAboutContainer>
            <p> <div className='p-1'>- Note Aggiuntive:</div></p>
              <p className='pl-4'>
                            Ogni viaggio lascia un ricordo, noi cerchiamo di fare il nostro meglio, per tanto ti chiediamo di rispettare piccole semplici regole della casa: <br />
                          - Non lasciare porte, infissi e finestre aperte quando non c&apos;è nessuno in casa. <br />
                          - Rispettare le regole della raccolta differenziata. <br />
                          - Spegnere i condizionatori se non utilizzati. <br />
                          - Rispettare gli orari di silenzio per non disturbare i condomini.
                    <br />
              </p>
         </TextAboutContainer>
        
         
      </section>
</div>
     
    
    </AboutContainer>

    </>
  )
}

export default About
