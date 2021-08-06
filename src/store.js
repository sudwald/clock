import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from './CardSlice';
import playSliceReducer from './PlaySlice';

export const store = configureStore({
  reducer: {
    cardInfo: cardSliceReducer,
    playInfo: playSliceReducer
  },
});
