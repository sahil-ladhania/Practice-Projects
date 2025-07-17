import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
    // 
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const createPersistor = (store: any) => persistStore(store);