'use client'
import { createSlice } from "@reduxjs/toolkit"

interface ManagerRisize {
    value:number,
    checkSize:boolean,
    isDownPage:boolean,
}

const  initialState:ManagerRisize = {
    value:0,
    checkSize:false,
    isDownPage:false,
}

export const manageResize = createSlice({
    name:'sizeManager',
    initialState,
    reducers:{
        updateValue: (state,action) =>{state.value = action.payload},
        setCheckSize : (state, action) =>{state.checkSize = action.payload},  
        checkPageHeight: (state)=>{
           if( document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 1000){
              state.isDownPage=true
           }else {state.isDownPage=false}
        }     
    }
})

export const {updateValue,setCheckSize,checkPageHeight} = manageResize.actions
export default manageResize.reducer