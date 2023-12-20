'use client'
import React from 'react'
import { HomeContainer,ImageContainer 
  ,DiscoverContainer,DescripitonHome,ParagraphContainer,
ImageParagraphContainer,GalleryContainer,} from '@/app/styles/HomePage.style'
import Gallery from '@/app/components/Gallery'
import Image from 'next/image'
import img from '../../assets/wave.png'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Slide from '@/app/components/Slide'
import '../../globals.css'
import WaveLine from '@/app/components/WaveLine'

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(3 105 161); */
  width: 100vw;
  height: 93.5vh;
`
export const SvgContainer = styled.div`
 width: 100vw;
 height: 90vh;
 /* background-color:rgb(3 105 161); */
`

export default function HomePage() {
 

  return (
    <HomeContainer className='overflow-hidden'>
      <BgContainer>
        <ImageContainer className='image'>
          <DiscoverContainer>
            discover!
          </DiscoverContainer>
          <SvgContainer>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,160C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,0L80,48C160,96,320,192,480,218.7C640,245,800,203,960,176C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00aeff" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,112C640,149,800,235,960,229.3C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#07c9bf" fill-opacity="1" d="M0,288L80,272C160,256,320,224,480,181.3C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0066ff" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,250.7C640,267,800,245,960,202.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className='svg'  viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="24%" y1="7%" x2="76%" y2="93%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 L 0,131 C 35.67978270638926,119.76685875915302 71.35956541277852,108.53371751830605 120,110 C 168.64043458722148,111.46628248169395 230.2415210552751,125.6319886859288 291,140 C 351.7584789447249,154.3680113140712 411.6743503661212,168.9383277379788 453,166 C 494.3256496338788,163.0616722620212 517.0610774802401,142.61470036215601 562,148 C 606.9389225197599,153.38529963784399 674.0813397129187,184.60287081339712 726,168 C 777.9186602870813,151.39712918660288 814.6135636680852,86.97381638425546 852,78 C 889.3864363319148,69.02618361574454 927.4644056147401,115.50186364958103 985,145 C 1042.5355943852599,174.49813635041897 1119.5288138729547,187.01872901742047 1168,189 C 1216.4711861270453,190.98127098257953 1236.4203388934416,182.423220280737 1277,171 C 1317.5796611065584,159.576779719263 1378.7898305532792,145.28838985963148 1440,131 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="24%" y1="7%" x2="76%" y2="93%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 L 0,306 C 47.60276507441381,336.3849692035211 95.20553014882762,366.7699384070423 146,365 C 196.79446985117238,363.2300615929577 250.78064447910333,329.30521557535224 306,307 C 361.21935552089667,284.69478442464776 417.67189193475906,274.00919929154884 458,288 C 498.32810806524094,301.99080070845116 522.5317877818604,340.6579872584525 565,342 C 607.4682122181396,343.3420127415475 668.200956937799,307.35885167464113 716,308 C 763.799043062201,308.64114832535887 798.6643844669433,345.90660604298284 850,346 C 901.3356155330567,346.09339395701716 969.1415051944275,309.0147241534273 1016,297 C 1062.8584948055725,284.9852758465727 1088.7695947553466,298.03449734330803 1139,309 C 1189.2304052446534,319.96550265669197 1263.7801157841866,328.84728647334055 1318,328 C 1372.2198842158134,327.15271352665945 1406.1099421079066,316.5763567633297 1440,306 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="24%" y1="7%" x2="76%" y2="93%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 L 0,481 C 41.370126093737596,471.68143487800364 82.74025218747519,462.36286975600734 129,457 C 175.2597478125248,451.63713024399266 226.40911734383678,450.2299558539745 274,451 C 321.5908826561632,451.7700441460255 365.62327843717776,454.7173068280949 422,468 C 478.37672156282224,481.2826931719051 547.097768907452,504.9008168336461 602,518 C 656.902231092548,531.0991831663539 697.9856459330143,533.6794258373207 735,520 C 772.0143540669857,506.3205741626794 804.9596473604906,476.3814798170716 845,485 C 885.0403526395094,493.6185201829284 932.175764625023,540.7946548943931 989,534 C 1045.824235374977,527.2053451056069 1112.337294139417,466.4399006053557 1164,459 C 1215.662705860583,451.5600993946443 1252.4750588173094,497.445742684184 1296,510 C 1339.5249411826906,522.554257315816 1389.7624705913454,501.777128657908 1440,481 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
          </SvgContainer>
        </ImageContainer> 
      </BgContainer>
      
        <br />
        <br />   {/* last change */}

        <GalleryContainer>
          <Gallery /> 
        </GalleryContainer>
      
      <DescripitonHome id='home'>
        <h1 className=" m-5 flex items-center justify-center text-5xl text-slate-950 font-black italic">
        BlueWave HolidayHouse
        </h1>
        <br />
     
        <strong className="text-black font-bold mb-6">La tua casa vacanza ideale nel cuore di Catania!</strong>
        
          <ParagraphContainer>
              <motion.p className=' w-full lg:w-[40vw]'>
                  Scegliere di soggiornare da noi significa avere tutto a portata di mano per una visita indimenticabile alla città.
                  Situata a soli 15 minuti in auto dall&apos;aeroporto di Catania Fontana Rossa, la nostra casa vacanza è la base perfetta
                    per un weekend nella meravigliosa Catania.
              </motion.p> 
              <ImageParagraphContainer src={img} alt=''/>
          </ParagraphContainer>

        <WaveLine/>
        <strong className="text-black font-bold ">La tua casa vacanza</strong>

        <ParagraphContainer>            
          <ImageParagraphContainer src={img} alt=''/>
          <motion.p className=" w-full lg:w-[40vw] ">
           Con la sua posizione strategica, potrai visitare facilmente il centro storico e immergerti nella ricca storia e cultura
           della città. Passeggiando lungo
           <strong className="text-sky-700 font-bold">Via Etna</strong>, la via più importante di Catania,
           potrai ammirare le affascinanti architetture e goderti lo spirito vivace della
            <strong className="text-sky-700 font-bold">movida catanese</strong>, sorseggiando un delizioso cocktail.
          </motion.p>
          
        </ParagraphContainer>
        
        <WaveLine />
        <strong className="text-black font-bold">La tua casa vacanza</strong>
        <ParagraphContainer>
          <motion.p className='w-full lg:w-[40vw]'>
          Tutto ciò sarà ancora più piacevole grazie alla comodità offerta dalla nostra posizione privilegiata:
           Cortese Home si trova a soli 10 minuti a piedi dalle principali attrazioni turistiche della città.
        </motion.p>
         <ImageParagraphContainer src={img} alt=''/>
        </ParagraphContainer>
        <WaveLine />
        <strong className="text-black font-bold">La tua casa vacanza</strong>
        <ParagraphContainer>
        <ImageParagraphContainer src={img} alt=''/>
          <motion.p className='w-full lg:w-[40vw]]'>
          Confortevole, accogliente e dotata di tutti i comfort di cui hai bisogno, Cortese Home ti offre un rifugio
           tranquillo e rilassante dopo una giornata intensa di visite turistiche. La nostra casa vacanza è arredata con 
           gusto e dispone di spazi luminosi e accoglienti per garantirti un soggiorno piacevole e rigenerante.
        </motion.p>
        </ParagraphContainer>
      <WaveLine/>
        <strong className="text-black font-bold ">La tua casa vacanza</strong>
        <ParagraphContainer>
          <motion.p className='w-full lg:w-[40vw]'>
          Potrai goderti il tuo weekend a Catania sapendo di avere un comodo ritiro a pochi passi dalle principali attrazioni.
        </motion.p>
        <ImageParagraphContainer src={img} alt=''/>
        </ParagraphContainer>
      <WaveLine/>
        <strong className="text-black font-bold">La tua casa vacanza</strong>
        <ParagraphContainer>
        <ImageParagraphContainer src={img} alt=''/>
          <motion.p className='w-full lg:w-[40vw]'>
          Non perdere l&apos;opportunità di visitare Catania e scegliere Cortese Home come la tua casa vacanza ideale nel centro della città.
           Prenota ora e scopri tutto ciò che questa affascinante destinazione ha da offrire.
        </motion.p> 
        </ParagraphContainer>
         

      </DescripitonHome>
    </HomeContainer> 
  )
}
