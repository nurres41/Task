import { createSlice } from '@reduxjs/toolkit'

export const searchDisplaySlice = createSlice({
  name: 'searchDisplay',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
})

export const { toggle } = searchDisplaySlice.actions

export default searchDisplaySlice.reducer