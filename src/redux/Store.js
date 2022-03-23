import { configureStore } from '@reduxjs/toolkit'
import StAuthSlice from './features/StAuthSlice'

export const store = configureStore({
    reducer: { studentuser: StAuthSlice },
})