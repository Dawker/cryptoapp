import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { INewsApi } from '../typescript/api.types';

import { createRequest } from './utils';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': '',
  'x-rapidapi-key': ''
}

const baseUrl = ''

export const cryptoNewsApi = createApi({
  reducerPath:'cryptoNewsApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptoNews: builder.query<any,INewsApi>({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,cryptoNewsHeaders),
    }),
  })
})

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi