import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    movies: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.movies.find(movie => movie.id === action.payload.id);
      if (exists) {
        state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
      } else {
        state.movies.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
    }
  },
});

export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
