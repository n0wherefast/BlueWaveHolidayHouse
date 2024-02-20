import AboutWrapper from '@/app/components/wrapper/AboutWrapper'
import { AboutContainer } from '@/app/styles/About.style'
// import { useDispatch } from 'react-redux'
// import { scrollTo } from '@/app/redux/slices/scroll/scrollSlice'
import bg from "../../assets/blue_wave__abstract_picture_walpaper_amazing.jpg"

export const metadata ={
  title: 'About'
}


function About() {
 
  return (
    <>
      <AboutWrapper/>
    </>
  )
}

export default About
