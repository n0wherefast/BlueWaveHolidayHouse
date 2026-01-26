import React from 'react'

import WrappedAbout from './wrapped/WrappedAbout';

export const dynamic = 'force-dynamic'



const getData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL 
  const response = await fetch(apiUrl+"/api/about",{ next: { revalidate: 36 } });
  return await response.json();
};

async function About() {
  const dataAbout = await getData()

  return (
     <>
        <WrappedAbout className="" data={dataAbout} /> 
      </>
  )
}

export default About 