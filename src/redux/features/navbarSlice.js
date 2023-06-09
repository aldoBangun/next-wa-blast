import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isOpen: true
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen
    }
  },
})

export const { toggle } = navbarSlice.actions

export default navbarSlice.reducer