import Image from 'next/image'
import HeroClient from './HeroClient'

export default function Hero() {
  return (
    <div>
      <section id="home" className=" relative overflow-hidden border-b border-slate-200/70">
        <div
          className=" relative w-full h-[135vh] sm:h-screen mx-auto px-4 sm:px-6 py-14 sm:py-24 bg-transparent flex flex-col items-center justify-center text-center"
          style={{ backgroundImage: "url('/sea.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <Image
            src="/sea.webp"
            alt="Blue Wave sea"
            priority
            fill
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover"
          />
          <HeroClient />
        </div>
      </section>
    </div>
  )
}
