import AboutWrapper from '@/app/components/wrapper/AboutWrapper'
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
