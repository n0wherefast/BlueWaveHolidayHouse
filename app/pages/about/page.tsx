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
          ButtonCollapse,CollapseContainer,ContainerImage} from '@/app/styles/About.style'
// import { useDispatch } from 'react-redux'
// import { scrollTo } from '@/app/redux/slices/scroll/scrollSlice'
import bg from "../../assets/blue_wave__abstract_picture_walpaper_amazing.jpg"

function About() {
  const iconSize = 35
  const [show ,setShow] = useState(false)
  const [disShow ,setDisShow] = useState(false)
  
  return (
    <>
    < AboutContainer >
   {/* <ContainerImage alt={''} src={bg}></ContainerImage> */}
   <div className=' flex justify-center items-start w-full h-[90vh] bg-sky-700'>
      <strong className='italic font-black text-[5.5rem] p-1  md:p-0 md:text-[10rem] lg:text-[13rem] text-slate-50'>Catch Your Dream Holiday.</strong>
   </div>
      <div >
          <motion.button animate={{ y: -80,  scale: [1,1.5,1], borderRadius:[0,2,2,0]}} 
                         transition={{ ease: "easeOut", duration: 1 }}
                         
                         className=''> 
                            <h2 className= ' transition-all ease-in flex justify-center items-center  text-4xl lg:text-6xl rounded-2xl hover:text-slate-100 font-extrabold  text-amber-400'>
                                 <p className=' animate-pulse'><FaArrowCircleDown/></p>
                            </h2>
          </motion.button>
      </div>
    
               <br id='sec' />
<CardContainer> 
      <CollapseContainer>
        <CardCollapse onClick={()=>setShow(!show)}>
        <p className='uppercase'><strong>dettagli</strong></p> 
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
          <CardCollapse onClick={()=>setDisShow(!disShow)}>
              <p className='uppercase'><strong>DISPONIBILE</strong></p> 
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
          {/* <div className=" p-1 md:w-auto w-72">
          <p className='text-xl '> <strong className=' font-homeFont text-5xl'><span className='text-pink-600'>L</span>ocalità:</strong>
          <br /> <br /> 
          <strong>Catania</strong>, situata sulla splendida costa orientale della Sicilia, è una città ricca di storia, cultura 
          e bellezze naturali. Con la sua posizione privilegiata, ai piedi del maestoso vulcano Etna, Catania 
          affascina i visitatori con il suo mix unico di elementi antichi e moderni. </p>
          <br />
          <p className='text-xl'> 
            <strong>La città</strong> vanta un patrimonio storico di grande importanza, testimoniato dai suoi numerosi siti archeologici e monumenti.
           Il Duomo di Catania, un capolavoro di architettura barocca, si erge maestoso nella piazza principale, mentre il Teatro Romano,
            risalente al I secolo a.C., offre uno sguardo affascinante nella vita dell&apos;antica Catania.
            </p>
            <br />
            <p className='text-xl'> 
              <strong>La vivace</strong>  vita di strada e la ricca tradizione culinaria rendono Catania un vero paradiso per gli amanti del cibo. I mercati all&apos;aperto, 
            come il famoso Mercato del Pesce e il Mercato della Piazza Carlo Alberto, offrono un&apos;ampia selezione di prodotti freschi e prelibatezze locali. I piatti tradizionali
             catanesi, come la pasta alla Norma e i cannoli siciliani, deliziano i palati di residenti e visitatori.
            </p> 
            <br />
        </div> */}
        <br />
        {/* <div className=" p-1 md:w-auto w-72">
        <p className='text-xl'> <strong className=' font-homeFont text-5xl'><span className='text-pink-600'>S</span>toria:</strong>
          <br /> <br />
          <strong>Catania</strong>,situata sulla costa orientale della Sicilia, vanta una storia e una cultura ricche di fascino e di influssi multietnici.
                     Fondata nell&apos;VIII secolo a.C. dagli antichi greci, Catania è una delle città più antiche dell&apos;isola
                       e ha subito numerosi eventi che hanno plasmato la sua identità unica nel corso dei secoli.</p>
          <br />
          <p className='text-xl'> 
            <strong>La storia</strong> di Catania è stata segnata da diverse dominazioni, tra cui quella greca,
             romana, bizantina, araba, normanna e spagnola. Ogni cultura ha lasciato un&apos;impronta indelebile sulla città,
             contribuendo alla ricchezza del suo patrimonio artistico e architettonico.
            </p>
            <br />
            <p className='text-xl'> 
              <strong>Il centro storico</strong> di Catania è un labirinto di strade strette e antiche, arricchito
               da importanti monumenti barocchi che testimoniano il periodo di splendore della città nel XVIII secolo.
                La Cattedrale di Sant&apos;Agata, con la sua imponente facciata, è uno dei principali luoghi di culto e un simbolo di Catania.
               Il Teatro Romano, risalente al I secolo a.C., è un&apos;importante testimonianza dell&apos;epoca romana.
            </p> 
            <br />
            <p className='text-xl'> 
              <strong>Famosa </strong> anche per i suoi festeggiamenti religiosi, tra cui la Festa di Sant&apos;Agata,
               la patrona della città, che si svolge ogni anno a febbraio.
               Questa festa, una delle più importanti dell&apos;isola, attira visitatori da tutto il mondo per assistere 
               alla spettacolare processione e ai tradizionali &quot;candelieri&quot; portati a spalla dai fedeli.
            </p> 
            <br />
        </div> */}
        <br />
        <div className=" p-1 md:w-auto w-72">
        <p className='text-xl'>  <strong className=' font-homeFont text-5xl'><span className='text-sky-600'>A</span>ppartamento</strong>
          <br /> <br />
                ,vacanze nel cuore della città di Catania, a pochi passi dal centro storico vicino ai 
              principali mezzi di trasporto.
              Dotato di ogni comfort per un soggiorno in pieno relax.
            </p>
          <br />
          <p className='text-xl'> 
            <strong>Lo spazio</strong> L&apos;appartamento dispone di un open space con divano letto e tavolo,
             seguito da un angolo cottura dedicato ed un piccolo balconcino. Inoltre dispone di un&apos;ampia camera da letto e doppi servizi: bagno con doccia e di una lavanderia con servizi dedicati.
             L&apos;appartamento è dotato di ogni comfort: Tv satellitari, condizionatori, frigo, cucina e forno.
            </p>
            <br />
            <p className='text-xl'> 
              <strong>Da tenere a mente</strong> Vicino a bar, supermercati, metro, farmacie.
               Consente di spostarsi anche a piedi e visitare la via più importante della città: Via Etnea.
            </p> 
            <br />
        </div>        
        <br />
        
        
      </section>
      <section className="flex flex-col md:flex-row w-full h-[20rem] items-center  justify-center  "> 
        
        </section>
      <div className="w-72  mt-2 border border-gray-300"></div>

      <div className='flex-row flex-col 0 backdrop-blur-sm w-full items-center justify-center'><section>
        <h2 className=' text-4xl p-2 font-homeFont'><strong><span className=' text-pink-600 text-5xl font-homeFont'>S</span>ervizi</strong></h2>
        <div className="  md:w-auto w-72 m-1">
          <p> <strong className='p-1'>- Politiche:</strong></p>
          <p className='pl-4'>
              -L&apos;host ti accoglie di persona <br />
          -Sono permessi soggiorni a lungo termine
          Consente i soggiorni oltre i 28 giorni <br />
          -Animali domestici ammessi
           Gli animali di servizio sono sempre ammessi
              <br />
          </p>
         </div>
         <div className=" p-1 md:w-auto  w-72">
          <p className='p-1'> <strong className='p-1'>Pulizia:</strong>
          Servizio di pulizia disponibile durante il soggiorno.</p>
         </div>
         <div className="  md:w-auto w-72 m-1">
          <p> <strong className='p-1'>- Posizione:</strong></p>
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
         </div>
    
         <div className="  md:w-auto w-72 m-1">
          <p> <strong className='p-1'>- Cucina e zona pranzo:</strong></p>
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
         </div>

         <div className="  md:w-auto w-72 m-1">
          <p> <strong className='p-1'>- Bagno:</strong></p>
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
         </div>
         
      </section>
      
      <section className='pl-2 pt-2 pr-2'>
      <h2 className='p-2 text-4xl font-homeFont '><strong><span className=' text-pink-600'>R</span>egole</strong></h2>
         <div className=" p-1 md:w-auto w-72">
          <p> <strong className='p-1'>- Check-in:</strong>
          Check-in: 15:00-20:00</p>
         </div>
         <div className=" p-1 md:w-auto w-72">
          <p> <strong className='p-1'>- Check-out:</strong>
          Check-out entro le ore 11:00</p>
         </div>
         <div className=" p-1 md:w-auto w-72">
          <p> <strong className='p-1'>- Orari di silenzio</strong>
          23:00 - 07:00</p>
         </div>
         <div className=" p-1 md:w-auto w-72">
          <p> <strong className='p-1'>- Vietato organizzare feste/eventi</strong> </p>
         </div>
         <div className=" p-1 md:w-auto w-72">
          <p> <strong className='p-1'>- Fotografia pubblicitaria consentita</strong> </p>
         </div>
         <div className=" p-1 md:w-auto w-72">
          <p> <strong className='p-1'>- Non è consentito fumare</strong> </p>
         </div>

         <div className=" w-72 m-1 ">
          <p> <strong className='p-1'>- Note Aggiuntive:</strong></p>
          <p className='pl-4'>
                        Ogni viaggio lascia un ricordo, noi cerchiamo di fare il nostro meglio, per tanto ti chiediamo di rispettare piccole semplici regole della casa: <br />
                      - Non lasciare porte, infissi e finestre aperte quando non c&apos;è nessuno in casa. <br />
                      - Rispettare le regole della raccolta differenziata. <br />
                      - Spegnere i condizionatori se non utilizzati. <br />
                      - Rispettare gli orari di silenzio per non disturbare i condomini.
                 <br />
          </p>
         </div>
         <div className=" p-1 md:w-auto w-72">
          <p> <strong className='p-1'>- Spegnere tutto</strong> </p>
         </div>
         
      </section>
</div>
     
    
    </AboutContainer>

    </>
  )
}

export default About
