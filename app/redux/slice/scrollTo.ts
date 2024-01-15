'use client'
import { createSlice } from "@reduxjs/toolkit"

interface INITIALSTATE {
    value :string
}
const initialState:INITIALSTATE = {
    value:''
}

export const manageScroll = createSlice({
    name:'scroll',
    initialState,
    reducers:{
       scrollToTop : (value:any,action) => {
        const element = document.getElementById(action.payload)
        element?.scrollIntoView()
       } 
    }
}) 
export const {scrollToTop} = manageScroll.actions
export default manageScroll.reducer