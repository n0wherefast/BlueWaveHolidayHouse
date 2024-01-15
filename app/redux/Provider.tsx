'use client'
import React from 'react'
import { Provider } from 'react-redux'
import {store} from './/store'
import { useEffect,useState } from 'react'
import type { RootState } from '@/app/redux/store'
import { useSelector,useDispatch } from 'react-redux'
import { updateValue,setCheckSize } from '@/app/redux/slice/manageResizeSlice'

function Providers({children}:any) {
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers
