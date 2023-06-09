import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ limit, offset }) => {
        if (!limit && !offset) return 'users'
        return `users?limit=${limit}&offset=${offset}`
      }
    }),
  }),
})


export const { useGetUsersQuery } = usersApi