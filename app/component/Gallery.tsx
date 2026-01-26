
import Image from 'next/image'
import WrappedGallery from '@/app/component/wrapped/WrappedGallery'

export const dynamic = 'force-dynamic'



const getGallery = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL 
  const response = await fetch(apiUrl+"/api/gallery",{ next: { revalidate: 36 } });
  return await response.json();
};

async function Gallery() {
  const gallery_image = await getGallery()
  // console.log(gallery_image)
  return (
     <>
        <WrappedGallery gallery={gallery_image} /> 
      </>
  )
}

export default Gallery 