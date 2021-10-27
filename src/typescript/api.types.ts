export interface ICoinStats{
    total:number;
    total24hVolume:number;
    totalExchanges:number;
    totalMarketCap:number;
    totalMarkets:number;
}

export interface INewsApi{
    newsCategory:string;
    count:number;
}