import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const accountsApi = createApi({
  reducerPath: 'accountsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Account'],
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: ({ limit = 10, offset = 0 }) => `/accounts?limit=${limit}&offset=${offset}`,
      providesTags: ['Account'],
    }),
    requestQr: builder.mutation({
      query: (payload) => ({
        url: '?path=accounts&dest=requestQr',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
    })
  })
})

export const {
  useGetAccountsQuery,
  useRequestQrMutation
} = accountsApi