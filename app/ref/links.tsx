import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export interface LINK {
    id:number,
    name:string,
    url:string
    delay:number,
}

export const  links = [
    {id:0,
    name:'Home',
    url:'/',
    delay:0.3
    },
    {id:1,
    name:'About',
    url:'/pages/about',
    delay:0.4
    },
    {id:2,
    name:'Gallery',
    url:'/pages/gallery',
    delay:0.6
    },
    {id:3,
    name:'Places',
    url:'/pages/place',
    delay:0.8
    },
    {id:4,
    name:'Contacts',
    url:'/pages/contacts',
    delay:1
    },
]




 export const socialLinks = [
    {
      id: 1,
      url: "https://wa.me/message/RJUSAJYMVHYHF1",
      icon: <FaWhatsapp size={'28px'} className="hover:text-sky-500" />,
    },
    {
      id: 2,
      url: "https://www.facebook.com/profile.php?id=61550682879182",
      icon: <FaFacebook size={'28px'} className="hover:text-sky-500" />,
    },
    {
      id: 3,
      url: "https://www.instagram.com/bwholidayhouse/",
      icon: <FaInstagram size={'28px'} className="hover:text-sky-500" />,
    },
  ];

