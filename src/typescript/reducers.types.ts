export const GET_NEWS_CATEGORY = 'GET_NEWS_CATEGORY'

export interface INews{
  name: string;
  url:string;
  datePublished:string;
  description:string;
  providerName:string;
}

interface IDispatchNews{
  type:typeof GET_NEWS_CATEGORY;
  payload:INews
}

export type IAction = IDispatchNews