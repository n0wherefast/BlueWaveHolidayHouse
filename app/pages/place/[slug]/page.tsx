import { client, urlFor } from '@/app/ref/sanity'
import { singlePlace } from '@/app/ref/types'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import React from 'react'


async function getData(place:string) {
    const query = `
    *[_type == 'place' && slug.current == '${place}'] {
        "place" : slug.current ,
          title, content,image
      }[0]
    `
    const data = await client.fetch(query)
    return data
}

async function Article({params}:{params:{slug:string}}) {
  const data:singlePlace = await  getData(params.slug)
   const { title,image,content,currentSlug } = data!
  return (
    <div className='pt-[5rem] px-5 flex flex-col items-center justify-center gap-10 bg-sky-950  '>
         <h1 className=' w-full flex items-center justify-center font-bold text-5xl md:text-7xl prose prose-invert  prose-2xl'>{title}</h1>
        <Image priority className=' rounded-xl w-full lg:w-[50%] h-1/2 flex items-center object-cover' src={urlFor(image!).url()} height={500} width={500}  alt={title}/>
        <div className=' prose prose-blue prose-lg md:prose-xl prose-invert ' >
            <PortableText value={content} />
        </div>
        
    </div>
  )
}

export default Article
