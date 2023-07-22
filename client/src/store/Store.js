import { configureStore } from '@reduxjs/toolkit'
import searchDisplaySlice from '../slices/SearchDisplay'
import  searchSlice  from '../slices/SearchValue'

export const store = configureStore({
  reducer: {
    searchDisplay: searchDisplaySlice,
    search: searchSlice,
  },
})