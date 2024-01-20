import { StaticImageData } from 'next/image'
import catania from '../assets/pexels-oscar-m-17650773.webp'
import etna from '../assets/etna2018-3.webp'
import acitrezza from '../assets/acitrezza.webp'
import img from '../assets/mobile.webp'

type src = { src:string} 

export interface DataHome {
    id:number,
    img?:string | StaticImageData,
    desc:string,
    title:string,
}
export interface DataPlace {
    id:number,
    moveX:number,
    moveY:number,
    src?:  StaticImageData | src,
    place:string,
    desc?:string,
    DelayValue:number,
    Bradius:string
    moveYsm:number,
    moveXsm:number,
    moveYmd?:number,
    moveXmd?:number,
}

export const  dataHomeDescription = [
    {
        id:0,
        img:img,
        title:"La tua casa vacanza ideale nel cuore di Catania!",
        desc:"Scegliere di soggiornare da noi significa avere tutto a portata di         mano per una visita indimenticabile alla città. Situata a soli 15 minuti in        auto dall'aeroporto di Catania Fontana Rossa, la nostra casa vacanza è la         base perfetta per un weekend nella meravigliosa Catania."
    },
    {
        id:1,
        img:img,
        title:"La tua casa vacanza",
        desc:`Tutto ciò sarà ancora più piacevole grazie alla comodità offerta dalla nostra posizione privilegiata: Cortese Home si trov
        a a soli 10 minuti a piedi dalle principali attrazioni turistiche della città.`
    },
    {
        id:2,
        img:img,
        title:"La tua casa vacanza",
        desc:`Con la sua posizione strategica, potrai visitare facilmente il centro storico e immergerti nella ricca storia e cultura
        della città. Passeggiando lungo
        <strong className="text-sky-700 font-bold">Via Etna</strong>, la via più importante di Catania,
        potrai ammirare le affascinanti architetture e goderti lo spirito vivace della`
    },
    {
        id:3,
        img:img,
        title:"La tua casa vacanza",
        desc:`Confortevole, accogliente e dotata di tutti i comfort di cui hai bisogno, Cortese Home ti offre un rifugio
        tranquillo e rilassante dopo una giornata intensa di visite turistiche. La nostra casa vacanza è arredata con 
        gusto e dispone di spazi luminosi e accoglienti per garantirti un soggiorno piacevole e rigenerante.`
    },
    {
        id:4,
        img:img,
        title:"La tua casa vacanza",
        desc:`Potrai goderti il tuo weekend a Catania sapendo di avere un comodo ritiro a pochi passi dalle principali attrazioni.`
    },
    {
        id:5,
        img:img,
        title:"La tua casa vacanza",
        desc:` Non perdere l&apos;opportunità di visitare Catania e scegliere Cortese Home come la tua casa vacanza ideale nel centro della città.
        Prenota ora e scopri tutto ciò che questa affascinante destinazione ha da offrire.`
    },
    
]


export const dataPlace = [
    {   
        // store:store.getState().size.value,
        id:0,
        moveY:-250,
        moveX:0, 
        moveYsm:-90,
        moveXsm:-50, 
        moveYmd:-250,
        moveXmd:-280, 
        DelayValue:0.3,
        Bradius:'68% 32% 67% 33% / 34% 25% 75% 66%',
        src:acitrezza,
        place:'Aci Castello',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    {
        id:4,
        moveY:250,
        moveX:400, 
        moveYsm:80,
        moveXsm:50,
        moveYmd:100,
        moveXmd:200, 
        DelayValue:0.3,
        Bradius:'68% 32% 67% 33% / 34% 25% 75% 66%',
        src:acitrezza,
        place:'Aci Trezza',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
            asperiores sint porro nesciunt ipsam minus at? Dignissimos,
             atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
              unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
               quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    {
        id:1,
        moveY:220,    
        moveX:-100,
        moveYsm:250,
        moveXsm:-50,
        moveYmd:480,
        moveXmd:10,  
        DelayValue:0.7,
        Bradius:'40% 60% 89% 11% / 87% 37% 63% 13% ',
        src:catania,
        place:'Catania',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    {
        id:2,
        moveX:-480,
        moveY:20,
        moveYsm:400,
        moveXsm:50,
        moveYmd:200,
        moveXmd:-350,
        DelayValue:0.1,
        Bradius:'27% 93% 28% 92% / 33% 48% 72% 87% ',
        src:etna,
        place:'Etna',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    {
        id:3,
        moveX:500,
        moveY:-100,
        moveYsm:600,
        moveXsm:-50,
        moveYmd:-320,
        moveXmd:200,
        DelayValue:0.5,
        Bradius:'68% 32% 27% 73% / 38% 80% 20% 62% ',
        src:img,
        place:'Acireale',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    
]