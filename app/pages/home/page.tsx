import HomeWrapper from "@/app/components/wrapper/HomeWrapper"
import { client } from "@/app/ref/sanity"

async function getData() {
  const query = `
  *[_type == 'homeContent']{
    title,id,image,url,content,
}
  `
  const data = await client.fetch(query)
  return data
}

export default async function HomePage() {
 const data = await getData()
  
return (
  <>
    <HomeWrapper data={data} />
  </>
)
}
