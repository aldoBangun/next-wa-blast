import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  },
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer