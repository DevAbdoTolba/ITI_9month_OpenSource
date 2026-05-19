import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import loaderReducer from './loaderSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    loader: loaderReducer,
  },
});
