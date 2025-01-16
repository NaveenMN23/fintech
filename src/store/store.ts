import { combineReducers, configureStore } from "@reduxjs/toolkit";

import reducer from "./slice/appSlice";

const reducers = combineReducers({
  // counter: counterReducer, // Add reducers here
  details: reducer,
});

export const store = configureStore({
  reducer: reducers,
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
