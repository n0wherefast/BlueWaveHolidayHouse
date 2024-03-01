import AboutWrapper from '@/app/components/wrapper/AboutWrapper'
import { AboutContainer } from '@/app/styles/About.style'
import bg from "../../assets/blue_wave__abstract_picture_walpaper_amazing.jpg"
import { client } from '@/app/ref/sanity'

async function getData() {
  const query = `
  *[_type == 'aboutContent']{
    title,id,
    image,
    content
}
  `
  const data = await client.fetch(query)
  return data
}

export const metadata ={
  title: 'About'
}
export const revalidate = 30 

async function About() {
  const data = await getData()
  return (
    <>
      <AboutWrapper data={data}/>
    </>
  )
}

export default About
