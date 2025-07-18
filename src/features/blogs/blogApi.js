import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const blogApi = createApi({
  reducerPath: 'blogApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://6878638331d28a460e1e1dd7.mockapi.io' }),

  endpoints: (builder) => ({

    getBlogs: builder.query({
      query: () => ({
        url: '/blogs',
        method: 'GET'
      }),
      providesTags: ['Blogs']

    }),

    addBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        body: data,
        method: 'POST'
      }),
      invalidatesTags: ['Blogs']
    })



  })


});

export const { useGetBlogsQuery, useLazyGetBlogsQuery, useAddBlogMutation } = blogApi;