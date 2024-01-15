'use client'
import { configureStore } from "@reduxjs/toolkit";
import manageResizeSlice from "./slice/manageResizeSlice";
import  manageScroll  from "./slice/scrollTo";

export const store = configureStore({
    reducer:{
        size:manageResizeSlice,
        scroll:manageScroll
    }
})

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;