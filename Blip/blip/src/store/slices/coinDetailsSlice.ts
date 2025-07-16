import type { coinDetails, currentCoinDetailsState } from "@/types/currentCoinDetails";
import { createSlice } from "@reduxjs/toolkit";

const initialState: currentCoinDetailsState = {
    currentCoinDetails : {} as coinDetails
};

const coinDetailsSlice = createSlice({
    name: "coinDetails",
    initialState,
    reducers: {
        setCurrentCoinDetails : (state , action) => {
            state.currentCoinDetails = action.payload;
        },
        clearCurrentCoinDetails : (state) => {
            state.currentCoinDetails = {} as coinDetails;
        }
    }
});

export const { 
    setCurrentCoinDetails,
    clearCurrentCoinDetails
} = coinDetailsSlice.actions;
export default coinDetailsSlice.reducer;