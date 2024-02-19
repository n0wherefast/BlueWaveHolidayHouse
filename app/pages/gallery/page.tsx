import { client } from "@/app/ref/sanity"
import GalleryContent from "../../components/GalleryContent"

 async function getData() {
    const query = `
    *[_type == 'galleryContent']{
        title,id,image
   }
    `
    const data  = await client.fetch(query)
    return data
 } 

 

export const metadata ={
        title: 'Gallery'
      }

async function Gallery() {
 const data = await getData()

    
  return (
    <>
        <GalleryContent data = {data}/>
    </>
  )
}

export default Gallery
