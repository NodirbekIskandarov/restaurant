import { configureStore } from '@reduxjs/toolkit'
import count, { reducerCounter } from './actions/Counter'
export const store = configureStore({
    reducer: {
        count: reducerCounter
    }
})