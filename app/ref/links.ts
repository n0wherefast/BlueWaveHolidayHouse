export interface LINK {
    id:number,
    name:string,
    url:string
}

export const  links = [
    {id:0,
    name:'Home',
    url:'/'
    },
    {id:1,
    name:'About',
    url:'/pages/about'
    },
    {id:2,
    name:'Place',
    url:'/pages/place'
    },
    {id:3,
    name:'Contatti',
    url:'/pages/contacts'
    },
]

// const socialLinks = [
//     {
//       id: 1,
//       url: "https://api.whatsapp.com/send?phone=%2B393497299533&app=facebook&entry_point=page_cta&fbclid=IwAR3GatoFcdCpsIxvMTQWLmRLcFA62qJOM3TDjX0otibXysU8TCn2ABJuvPc",
//       icon: <FaWhatsapp size={'25px'} className="hover:text-sky-500" />,
//     },
//     {
//       id: 2,
//       url: "https://www.facebook.com/cortesehomecasavacanze",
//       icon: <FaFacebook size={'25px'} className="hover:text-sky-500" />,
//     },
//     {
//       id: 3,
//       url: "https://instagram.com/cortesehome_casavacanze?igshid=MzRlODBiNWFlZA==",
//       icon: <FaInstagram size={'25px'} className="hover:text-sky-500" />,
//     },
//   ];