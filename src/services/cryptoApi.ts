import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { ICoinStats, ICryptoDetails, IExchanges } from '../typescript/api.types';
import { createRequest } from './utils';

const cryptoApiHeaders = {
  'x-rapidapi-host': '',
  'x-rapidapi-key': ''
}

const baseUrl = ''

export const cryptoApi = createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos: builder.query<ICoinStats[],number>({
      query: (count) => createRequest(`/coins?limit=${count!}`,cryptoApiHeaders),
    }),
    getExchanges: builder.query<IExchanges,any>({
      query: () => createRequest('/exchanges',cryptoApiHeaders),
    }),
    getCryptoDetails: builder.query<ICryptoDetails, number>({
      query: (coinId) => createRequest(`/coin/${coinId}`,cryptoApiHeaders),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`,cryptoApiHeaders),
    }),
  })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
