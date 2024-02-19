import HomeContent from "@/app/components/HomeContent"
import { client } from "@/app/ref/sanity"

async function getData() {
  const query = `
  *[_type == 'homeContent']{
    title,id,image
}
  `
  const data = await client.fetch(query)
  return data
}

export default async function HomePage() {
 const data = await getData()
  
return (
  <>
    <HomeContent data={data} />
  </>
)
}
