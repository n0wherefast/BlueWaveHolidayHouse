import React from 'react'
import WrappedForm from './wrapped/WrappedForm';
import { FormRespsonse } from '../types/dataTypes';

const getForm = async ():Promise<FormRespsonse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
  const res = await fetch(apiUrl+"/api/form",{next:{revalidate:36}})
  return  await res.json()
}

async function Contact() {
  const form = await getForm()
  return (
    <>
    <div className=' bg-teal-400/20'>
      <WrappedForm />
    </div>
      
    </>
  )
}

export default Contact
