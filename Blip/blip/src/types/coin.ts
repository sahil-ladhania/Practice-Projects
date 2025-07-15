
export interface Coin{
    id: string,
    market_cap_rank: number,
    name: string,
    market_cap: number,
    current_price: number,
    market_cap_change_percentage_24h: number,
    market_cap_change_24h: number
}
  
export type CryptoTableProps = {
    isLoading : boolean;
    coinsData : Coin[];
};