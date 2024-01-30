import { StaticImageData } from 'next/image'
import catania from '../assets/pexels-oscar-m-17650773.webp'
import etna from '../assets/etna2018-3.webp'
import acitrezza from '../assets/acitrezza.webp'
import img from '../assets/mobile.webp'

type src = { src:string} 

export interface DataHome {
    id:number,
    img?: StaticImageData,
    desc:string,
    title:string,
    blurDataURL?:string,
    url?:string
}
export interface DataPlace {
    id?:number,
    moveX?:number,
    moveY?:number,
    src?:  StaticImageData ,
    place?:string,
    desc?:string,
    smalldesc?:string,
    DelayValue?:number,
    Bradius?:string
    moveYsm?:number,
    moveXsm?:number,
    moveYmd?:number,
    moveXmd?:number,

}

export const  dataHomeDescription = [
    {
        id:0,
        img:img,
        url:'/pages/contacts',
        title:"La base perfetta per esplorare la Sicilia!",
        desc:"Situata ad Aci Trezza, in Sicilia orientale, la Blue Wave Holiday House è la soluzione ideale per chi desidera trascorrere una vacanza all'insegna del relax e della scoperta. L'appartamento, di circa 50 mq, è composto da una camera da letto, un soggiorno con divano letto, una cucina, un bagno e un terrazzino vista mare."
    },
    {
        id:1,
        img:img,
        url:'/pages/place',
        title:"Posizione strategica",
        desc:` Dall'appartamento è possibile raggiungere facilmente tutti i principali luoghi d'interesse della zona, tra cui:
        Catania, la città barocca più importante della Sicilia, con il suo centro storico patrimonio dell'UNESCO, l'Etna, il vulcano attivo più alto d'Europa, le spiagge di Acitrezza, i Faraglioni, le città barocche di Siracusa e Taormina, e molto altro ancora.
       `
    },
    {
        id:2,
        img:img,
        url:'/pages/about',
        title:"L'appartamento",
        desc:`Dotato di tutti i comfort necessari per un soggiorno confortevole, tra cui:
        Aria condizionata, riscaldamento, TV, Wi-Fi gratuito, parcheggio privato, lavatrice.
        Inoltre l'appartamento è situato vicino a un centro commerciale e a diverse fermate del bus che permettono di raggiungere facilmente tutte le destinazioni desiderate.`
    },
    // {
    //     id:3,
    //     img:img,
    //     title:"A due passi da Catania",
    //     desc:`

    //     La città dei vulcani
        
    //     Catania è una città ricca di storia e cultura, situata ai piedi dell'Etna, il vulcano attivo più alto d'Europa.
        
    //     Il centro storico di Catania, dichiarato Patrimonio dell'Umanità dall'UNESCO, è caratterizzato da un'architettura barocca unica al mondo.
        
    //     Tra i monumenti più importanti della città si possono ammirare la Cattedrale di Sant'Agata, il Teatro Massimo Bellini, la Fontana dell'Elefante, e la Villa Bellini.`
    // },
    // {
    //     id:4,
    //     img:img,
    //     title:"Aci Trezza",
    //     desc:`La perla del mare

    //     Aci Trezza è un piccolo borgo marinaro situato sulla costa ionica siciliana.
        
    //     Il borgo è famoso per i Faraglioni, tre faraglioni di roccia lavica che si stagliano nel mare cristallino.
        
    //     Aci Trezza è anche una meta ideale per gli amanti del mare, con le sue spiagge rocciose e le sue acque limpide.
        
    //     Prenota subito la tua vacanza alla Blue Wave Holiday House e scopri la bellezza della Sicilia orientale!`
    // },
    // {
    //     id:5,
    //     img:img,
    //     title:"La tua casa vacanza",
    //     desc:` Non perdere l'opportunità di visitare Catania e scegliere Cortese Home come la tua casa vacanza ideale nel centro della città.
    //     Prenota ora e scopri tutto ciò che questa affascinante destinazione ha da offrire.`
    // },
    
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
        smalldesc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,',
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
        smalldesc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,',
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
        smalldesc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
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
        smalldesc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,',
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
        smalldesc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,',
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
    
]