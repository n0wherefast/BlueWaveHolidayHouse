import {client} from '../../ref/sanity'
import Card from '@/app/components/Card'
import {PLACES} from '../../ref/types'
import PlaceWrapper from '@/app/components/wrapper/PlaceWrapper'

async function getData() {
  const query = `
  *[_type=='place'] | order(_createdAT desc) {
    title,smalldesc,description,image,id,
    "slug": slug.current
    ,content
  } 
  `
  const data = await client.fetch(query)
  return data
} 

export const metadata = {
  title: 'Place'
}

export const revalidate = 30 
async function Place() {
  const data = await getData()
      
  return (
 <PlaceWrapper>
 {data.map((place:PLACES) => {
  // const {title,id,image,desc,smalldesc} = place
  return(
    <div key={place.id}>
       <Card {...place} />
    </div>
  )
 })}
 </PlaceWrapper>
  )
}

export default Place





  {/* <div className=" w-full  lg:text-8xl text-7xl text-slate-950 font-black italic ">
            <motion.h1 variants={variant} initial='start' whileInView='end' transition={{delay:0.7}} className=' ] flex items-center justify-center w-full text-amber-400 '>Places</motion.h1>
    </div>     */}
{/* <div className=' w-full h-[100vh]'>

<Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        autoplay={{
          delay:10000,
          disableOnInteraction:false
        }}
        loop={true}
        modules={[Pagination, Navigation,Autoplay]}
        className=""
        style={{color:'red'}}

      >
    {
      places.map((itm:DataPlace)=>{
        const {place,id,desc,src} = itm


        return(
          <SwiperSlide className='text-slate-50 p-[1rem]' key={id}>
            <Image className='w-full h-[88vh] object-cover' src={src!} height={1000} width={1000}  alt={desc!}/>
            <motion.div transition={{delay:0.5}} initial={{opacity:0 ,x:22}} whileInView={{opacity:1 ,x:0}}
             className=' p-2 w-[18rem] lg:w-[30rem] min-h-[30rem] absolute left-[3rem] lg:left-[10rem] top-[3rem] lg:top-[10rem] border-2  backdrop-blur-xl'>
             <p className='p-2 text-5xl font-bold italic'>{place}</p>
            <p className='p-2 font-medium text-sm lg:text-xl '>{desc}</p>
            </motion.div>           
          </SwiperSlide>
        )
      })
    }
    </Swiper>
</div> */}