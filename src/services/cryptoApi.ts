import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { createRequest } from './utils';

const cryptoApiHeaders = {
  'x-rapidapi-host': '',
  'x-rapidapi-key': ''
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count!}`,cryptoApiHeaders),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges',cryptoApiHeaders),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`,cryptoApiHeaders),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`,cryptoApiHeaders),
    }),
  })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
