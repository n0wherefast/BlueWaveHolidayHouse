export interface DataHome {
    id:number,
    img?:string,
    title:string,
    desc:string,
}
export interface DataPlace {
    id:number,
    moveX:number,
    moveY:number,
    img?:string,
    place:string,
    desc?:string,
    DelayValue:number,
}

export const  dataHomeDescription = [
    {
        id:0,
        img: '',
        title:"La tua casa vacanza ideale nel cuore di Catania!",
        desc:"Scegliere di soggiornare da noi significa avere tutto a portata di         mano per una visita indimenticabile alla città. Situata a soli 15 minuti in        auto dall'aeroporto di Catania Fontana Rossa, la nostra casa vacanza è la         base perfetta per un weekend nella meravigliosa Catania."
    },
    {
        id:1,
        img: '',
        title:"La tua casa vacanza",
        desc:`Tutto ciò sarà ancora più piacevole grazie alla comodità offerta dalla nostra posizione privilegiata: Cortese Home si trov
        a a soli 10 minuti a piedi dalle principali attrazioni turistiche della città.`
    },
    {
        id:2,
        img: '',
        title:"La tua casa vacanza",
        desc:`Con la sua posizione strategica, potrai visitare facilmente il centro storico e immergerti nella ricca storia e cultura
        della città. Passeggiando lungo
        <strong className="text-sky-700 font-bold">Via Etna</strong>, la via più importante di Catania,
        potrai ammirare le affascinanti architetture e goderti lo spirito vivace della`
    },
    {
        id:3,
        img: '',
        title:"La tua casa vacanza",
        desc:`Confortevole, accogliente e dotata di tutti i comfort di cui hai bisogno, Cortese Home ti offre un rifugio
        tranquillo e rilassante dopo una giornata intensa di visite turistiche. La nostra casa vacanza è arredata con 
        gusto e dispone di spazi luminosi e accoglienti per garantirti un soggiorno piacevole e rigenerante.`
    },
    {
        id:4,
        img: '',
        title:"La tua casa vacanza",
        desc:`Potrai goderti il tuo weekend a Catania sapendo di avere un comodo ritiro a pochi passi dalle principali attrazioni.`
    },
    {
        id:5,
        img: '',
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
        DelayValue:0.5,
        img:'',
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
        DelayValue:0.4,
        img:'',
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
        DelayValue:0.3,
        img:'',
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
        DelayValue:0.2,
        img:'',
        place:'Acireale',
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt temporibus beatae ratione,
         asperiores sint porro nesciunt ipsam minus at? Dignissimos,
          atque perspiciatis dolor ab sint, necessitatibus velit quaerat obcaecati
           unde tenetur debitis quisquam rerum quia praesentium? Quod, eos itaque eum impedit
            quaerat laudantium molestias ad odit nam praesentium vero!`
    },
    
]