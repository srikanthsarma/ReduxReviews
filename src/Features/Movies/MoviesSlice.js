import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import NodeAPI from '../../../src/Common/APIs/MovieAPI';

const initialState = {
    userName: '',
    movies: [],
    shows: [],
    details: [],
    searchText: "Harry",
};

export const asyncFetchMovies = createAsyncThunk('movies/asyncFetchMovies', async (searchText) => {
    const moviesResponse = await NodeAPI.get(`/movies?s=${searchText}`);
    return moviesResponse.data;
}
);
export const asyncFetchShows = createAsyncThunk('movies/asyncFetchShows', async (searchText) => {
    const showsResponse = await NodeAPI.get(`/series?s=${searchText}`);
    return showsResponse.data;
}
);
export const asyncFetchDetails = createAsyncThunk('movies/asyncFetchDetails', async (imdbID) => {
    const detailsResponse = await NodeAPI.get(`/details?id=${imdbID}`);
    return detailsResponse.data;
}
);



const movieSlice = createSlice(
    {
        name: "movies",
        initialState,
        reducers: {
            addUserName: (state, action) => {
                state.userName = action.payload;
            },
            removeUserName: (state) => {
                state.userName = '';
            },
            removeMovies: (state) => {
                state.details = [];
            },
            setSearchTerm: (state, action) => {
                state.searchText = action.payload;
            }

        },
        extraReducers: {
            [asyncFetchMovies.fulfilled]: (state, action) => {
                return { ...state, movies: action.payload };
            },
            [asyncFetchShows.fulfilled]: (state, action) => {
                return { ...state, shows: action.payload };
            },
            [asyncFetchDetails.fulfilled]: (state, action) => {
                return { ...state, details: action.payload };
            },
        },

    },
);

export const { removeMovies, setSearchTerm, addUserName, removeUserName } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetails = (state) => state.movies.details;
export const getSearchTerm = (state) => state.movies.searchText;
export const getUserName = (state) => state.movies.userName;