//import dotenv from "dotenv";
import axios from "axios";
// dotenv.config();
//Secured storing of API key, see here: https://www.themoviedb.org/settings/api (v3)
const apiKey = import.meta.env.VITE_API_KEY;
//default URL
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const testing = false;
const slowtime = 1500; //ms

const get = async (endpoint, queryParams = "") => {
    const res = await axios.get(
        `${endpoint}?api_key=${apiKey}&language=en-US${queryParams}`
    );
    testing && (await new Promise((r) => setTimeout(r, slowtime))); //slow it for testing
    return res.data;
};

const getMovie = (data) => {
    const id = data.queryKey[1];
    return get(`/movie/${id}`);
};

const getMovieCredits = (data) => {
    const id = data.queryKey[1];
    return get(`/movie/${id}/credits`);
};

const getSimilarMovies = (data) => {
    const id = data.queryKey[1];
    return get(`/movie/${id}/similar`);
};
const getMovies = (data) => {
    const id = data.queryKey[1];
    let page = data.queryKey[2];
    if (!page || page < 1) {
        page === 1;
    }
    return get(
        "/discover/movie",
        `&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=[${id}]&with_watch_monetization_types=flatrate`
    );
};

const getGenres = () => {
    return get("/genre/movie/list");
};

const getNowPlaying = (data) => {
    let page = data.queryKey[1];
    if (!page || page < 1) {
        page === 1;
    }
    return get("/movie/now_playing", `&page=${page}&include_adult=false`);
};

const getMostPopular = (data) => {
    let page = data.queryKey[1];
    if (!page || page < 1) {
        page === 1;
    }
    return get("/movie/popular", `&page=${page}&include_adult=false`);
};

const getTopRated = (data) => {
    let page = data.queryKey[1];
    if (!page || page < 1) {
        page === 1;
    }
    return get("/movie/top_rated", `&page=${page}&include_adult=false`);
};

const getActor = (data) => {
    const id = data.queryKey[1];
    return get(`/person/${id}`);
};

const getActorMovies = (data) => {
    const id = data.queryKey[1];
    return get(`/person/${id}/movie_credits`);
};

const exports = {
    getMovie,
    getMovieCredits,
    getSimilarMovies,
    getMovies,
    getGenres,
    getNowPlaying,
    getMostPopular,
    getTopRated,
    getActor,
    getActorMovies,
};

export default exports;
