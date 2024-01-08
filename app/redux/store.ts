'use client'
import { configureStore } from "@reduxjs/toolkit";
import manageResizeSlice from "./slice/manageResizeSlice";

export const store = configureStore({
    reducer:{
        size:manageResizeSlice
    }
})

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;