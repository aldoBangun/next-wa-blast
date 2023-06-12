import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ limit = 10, offset = 0 }) => `?path=users&dest=userLists&limit=${limit}&offset=${offset}`,
      providesTags: ['User']
    }),
    changePassword: builder.mutation({
      query: (payload) => {
        return {
          url: '?path=users&dest=changePassword',
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      } 
    }),
    createUser: builder.mutation({
      query: (payload) => ({
        url: '?path=users&dest=createUser',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    }),
    deleteUser: builder.mutation({
      query: (payload) => ({
        url: '?path=users&dest=deleteUser',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['User'],
    }),
    enableUser: builder.mutation({
      query: (payload) => ({
        url: '?path=users&dest=enableUser',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['User'],
    }),
    disableUser: builder.mutation({
      query: (payload) => ({
        url: '?path=users&dest=disableUser',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['User']
    }),
    updateUser: builder.mutation({
      query: (payload) => ({
        url: '?path=users&dest=updateUser',
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
  useGetUsersQuery,
  useChangePasswordMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useEnableUserMutation,
  useDisableUserMutation
} = usersApi