import React from 'react'

import WrappedPlaces from './wrapped/WrappedPlaces';

export const dynamic = 'force-dynamic'



const getData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  const fetchUrl = apiUrl ? `${apiUrl}/api/places` : `/api/places`;
  const response = await fetch(fetchUrl, { next: { revalidate: 36 } });
  return await response.json();
};

async function Places() {
  const dataPlaces = await getData()

  return (
     <>
        <WrappedPlaces data={dataPlaces} /> 
      </>
  )
}

export default Places 