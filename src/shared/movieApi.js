import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie' }),


  endpoints: (builder) => ({


    getNowPlaying: builder.query({
      query: () => ({
        url: '/now_playing',
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        },
        method: 'GET'
      })
    })



  })



})

export const { useGetNowPlayingQuery } = movieApi;