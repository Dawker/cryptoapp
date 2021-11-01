export interface ICoinStats{
    total:number;
    total24hVolume:number;
    totalExchanges:number;
    totalMarketCap:number;
    totalMarkets:number;
}

export interface IExchanges{
    rank:number;
    volume:number;
    totalExchanges:number;
    numberOfMarkets:number;
    description:string | JSX.Element | JSX.Element[];
}

export interface ICryptoDetails{
    title:number;
    volume:number;
    totalExchanges:number;
    numberOfMarkets:number;
    description:string | JSX.Element | JSX.Element[];
}

export interface INewsApi{
    newsCategory:string;
    count:number;
}