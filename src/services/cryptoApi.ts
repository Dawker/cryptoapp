import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { coinStats } from '../typescript/api.types';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'b40d8bb5f9mshcdb3d7d2e5128eep164ad6jsn60f60238aa85'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url:string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos: builder.query<coinStats,number>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi