//import dotenv from "dotenv";
import axios from "axios";
// dotenv.config();
//Secured storing of API key, see here: https://www.themoviedb.org/settings/api (v3)
const apiKey = import.meta.env.VITE_API_KEY;
//default URL
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const testing = false;
const slowtime = 1500; //ms, used for testing lag

//GET request
const get = async (endpoint, queryParams = "") => {
    const res = await axios.get(
        `${endpoint}?api_key=${apiKey}&language=en-US${queryParams}`
    );
    testing && (await new Promise((r) => setTimeout(r, slowtime))); //slow it for testing
    return res.data;
};

//get a movie with id
const getMovie = (data) => {
    const id = data.queryKey[1];
    return get(`/movie/${id}`);
};

//get movie credits, this goes along with the movie request
const getMovieCredits = (data) => {
    const id = data.queryKey[1];
    return get(`/movie/${id}/credits`);
};

//get similar movies, this goes along with the movie request
const getSimilarMovies = (data) => {
    const id = data.queryKey[1];
    return get(`/movie/${id}/similar`);
};

//get list of all movies using page and genre
const getMovies = (data) => {
    const genre = data.queryKey[1];
    let page = data.queryKey[2];
    if (!page || page < 1) {
        page = 1;
    }

    return get(
        "/discover/movie",
        `&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`
    );
};

//custom search for a title, can go through list with pagination
const getSearch = (data) => {
    let page = data.queryKey[1];
    let search = data.queryKey[2];
    if (!page || page < 1) {
        page = 1;
    }

    if (!search) {
        search === "";
    }
    return get(
        "/search/movie",
        `&language=en-US&query=${search}&page=${page}&include_adult=false`
    );
};

//Get all genres
const getGenres = () => {
    return get("/genre/movie/list");
};

//get movies currently in cinema, can use pagination
const getNowPlaying = (data) => {
    let page = data.queryKey[1];
    if (!page || page < 1) {
        page = 1;
    }
    return get("/movie/now_playing", `&page=${page}&include_adult=false`);
};

//get most popular movies, can use pagination and also popular period (day or week)
const getMostPopular = (data) => {
    let page = data.queryKey[1];
    if (!page || page < 1) {
        page = 1;
    }

    let popularPeriod = Number(data.queryKey[2]);
    if (!popularPeriod || popularPeriod < 1) {
        popularPeriod === 1;
    }
    return get(
        `/trending/all/${popularPeriod === 1 ? "day" : "week"}`,
        `&page=${page}&include_adult=false`
    );
};

//get top rated movies, can use pagination
const getTopRated = (data) => {
    let page = data.queryKey[1];
    if (!page || page < 1) {
        page = 1;
    }
    return get("/movie/top_rated", `&page=${page}&include_adult=false`);
};

//get an actor with id
const getActor = (data) => {
    const id = data.queryKey[1];
    return get(`/person/${id}`);
};

//get all movies actor has been a part of
const getActorMovies = (data) => {
    const id = data.queryKey[1];
    return get(`/person/${id}/movie_credits`);
};

const exports = {
    getMovie,
    getMovieCredits,
    getSimilarMovies,
    getMovies,
    getSearch,
    getGenres,
    getNowPlaying,
    getMostPopular,
    getTopRated,
    getActor,
    getActorMovies,
};

export default exports;
