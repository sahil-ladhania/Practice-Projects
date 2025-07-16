import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import watchlistReducer from '../store/slices/watchlistSlice.ts';
import coinDetailsReducer from './slices/coinDetailsSlice.ts';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['watchlist' , 'coinDetails'],
};

const rootReducer = combineReducers({
    watchlist : watchlistReducer,
    coinDetails : coinDetailsReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const createPersistor = (store: any) => persistStore(store);