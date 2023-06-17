const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 8000

const app = express()
app.use(cors())

const MovieAPI = axios.create(
    {
        baseURL: process.env.REACT_APP_IMDB_BASE_URL,
    }
);
const APIKEY = process.env.REACT_APP_IMDB_API_KEY;

app.get("/movies", async (req, res) => {
    let searchText = req.query.s;
    const moviesResponse = await MovieAPI.get(`?apikey=${APIKEY}&s=${searchText}&type=movie`);
    res.json(moviesResponse.data);
})
app.get("/series", async (req, res) => {
    let searchText = req.query.s;
    const showsResponse = await MovieAPI.get(`?apikey=${APIKEY}&s=${searchText}&type=series`);
    res.json(showsResponse.data);
})
app.get("/details", async (req, res) => {
    let imdbID = req.query.id;
    const details = await MovieAPI.get(`?apikey=${APIKEY}&i=${imdbID}&Plot=full`);
    res.json(details.data);
})

app.get('/', (req, res) => {
    res.json("Hello")
})
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
