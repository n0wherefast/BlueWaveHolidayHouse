'use client'
import { createSlice } from "@reduxjs/toolkit"

interface ManagerRisize {
    value:number,
    checkSize:boolean,
}

const  initialState:ManagerRisize = {
    value:0,
    checkSize:false
}

export const manageResize = createSlice({
    name:'sizeManager',
    initialState,
    reducers:{
        updateValue: (state,action) =>{state.value = action.payload},
        setCheckSize : (state, action) =>{state.checkSize = action.payload}
       
    }
})

export const {updateValue,setCheckSize} = manageResize.actions
export default manageResize.reducer