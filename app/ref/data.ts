import { StaticImageData } from 'next/image'
import img from '../assets/blue_wave__abstract_picture_walpaper_amazing.jpg'

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
        id:0,
        moveY:-250,
        moveX:0, 
        DelayValue:0.3,
        Bradius:'68% 32% 67% 33% / 34% 25% 75% 66%',
        src:img,
        place:'Aci Castello',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    {
        id:1,
        moveY:220,    
        moveX:-150, 
        DelayValue:0.7,
        Bradius:'40% 60% 89% 11% / 87% 37% 63% 13% ',
        src:img,
        place:'Catania',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    {
        id:2,
        moveX:-590,
        moveY:-120,
        DelayValue:0.1,
        Bradius:'27% 93% 28% 92% / 33% 48% 72% 87% ',
        src:img,
        place:'Capo Mulini',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    {
        id:3,
        moveX:550,
        moveY:-100,
        DelayValue:0.5,
        Bradius:'68% 32% 27% 73% / 38% 80% 20% 62% ',
        src:img,
        place:'Acireale',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    
]