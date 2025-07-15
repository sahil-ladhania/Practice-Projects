import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import watchlistReducer from '../store/slices/watchlistSlice.ts';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['watchlist'],
};

const rootReducer = combineReducers({
    watchlist : watchlistReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const createPersistor = (store: any) => persistStore(store);