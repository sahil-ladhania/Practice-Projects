import type { Coin } from "@/types/coin";
import type { WatchlistState } from "@/types/watchlist";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: WatchlistState = {
  coins : []
};

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    bookmarkCoin(state , action: PayloadAction<Coin>){
        state.coins.push(action.payload);
    },
    removeCoin(state , action: PayloadAction<string>){
        state.coins = state.coins.filter(coin => coin.id !== action.payload);
    }    
  },
});

export const { 
    bookmarkCoin,
    removeCoin,
} = WatchlistSlice.actions;
export default WatchlistSlice.reducer;