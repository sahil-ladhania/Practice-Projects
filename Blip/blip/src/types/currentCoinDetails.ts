
export interface coinDetails {
    id: string;
    name: string;
    symbol: string;
    market_data: {
      current_price: { usd: number };
      price_change_percentage_7d: number;
      market_cap: { usd: number };
      circulating_supply: number;
      max_supply: number;
      total_supply: number;
      total_volume: { usd: number };
      fully_diluted_valuation: { usd: number };
      ath: { usd: number };
      ath_date: { usd: string };
      atl: { usd: number };
      atl_date: { usd: string };
    };
};

export interface currentCoinDetailsState {
    currentCoinDetails: coinDetails
};