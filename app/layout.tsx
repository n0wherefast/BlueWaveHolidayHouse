
import type { Metadata } from 'next'
import { Inter ,East_Sea_Dokdo} from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Providers from './redux/Provider'
import { useEffect } from 'react'
import Button from './components/Button'
import ButtonScrollTop from './components/ButtonScrollTop'
const inter = Inter({ subsets: ['latin'] })


{/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"></link> */}

export const metadata: Metadata = {
  title: 'BlueWave HolidayHouse',
  description: 'BlueWave HolidayHouse',
  icons:{
    icon:"/favicon-32x32.png",
    apple:"/apple-touch-icon.png",
    shortcut:"/apple-touch-icon.png",
  },
  other:{
    rel:'/favicon.ico'
  },
  manifest:"/site.webmanifest"
}

export default function RootLayout({children,}:{ children: React.ReactNode}) {

  
 

  return (
    <html lang="en" className=' scroll-smooth'>
      <body id='top' className={inter.className}>
        <Providers>
          <Nav/>
           {children}
           <Footer/>
           <ButtonScrollTop to={'top'} color={'text-amber-400'}/>
        </Providers>
      </body>
     
    </html>
  )
}
