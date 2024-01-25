'use client'
import React from 'react'





function Map() {
  return (
    <div className=' lg:h-[70vh]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2315916083!2d15.163503676406021!3d37.573163923747174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fb8e58367149%3A0x9e678fd1171cc002!2sBlue%20Wave%20Holiday%20House!5e0!3m2!1sit!2sit!4v1704220124957!5m2!1sit!2sit"
            className='w-full lg:h-full h-[70vh]  z-0'
        //    width="600"
        //    height="450"
        //    style="border:0;"  
            loading="lazy" 
            // referrerpolicy="no-referrer-when-downgrade"
            >
        </iframe>
    </div>
  )
}

export default Map
