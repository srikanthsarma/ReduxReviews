import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Movies/MoviesSlice';


export const Store = configureStore({
    reducer: {
        movies: moviesReducer,
    },

});