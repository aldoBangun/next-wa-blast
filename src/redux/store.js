import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from './services/users'
import { accountsApi } from './services/accounts'
import navbarSlice from './features/navbarSlice'
import modalSlice from './features/modalSlice'
import themeSlice from './features/themeSlice'

export const store = configureStore({
  reducer: {
    [accountsApi.reducerPath]: accountsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    navbar: navbarSlice,
    modal: modalSlice,
    theme: themeSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware, accountsApi.middleware)
  },
})

setupListeners(store.dispatch)