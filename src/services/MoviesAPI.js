//import dotenv from "dotenv";
import axios from "axios";
// dotenv.config();
//Secured storing of API key, see here: https://www.themoviedb.org/settings/api (v3)
const apiKey = import.meta.env.VITE_API_KEY;
//default URL
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const testing = true;
const slowtime = 1500; //ms

const get = async (endpoint, queryParams = "") => {
    const res = await axios.get(
        `${endpoint}?api_key=${apiKey}&language=en-US${queryParams}`
    );
    testing && (await new Promise((r) => setTimeout(r, slowtime))); //slow it for testing
    return res.data;
};

const getMovie = () => {
    return get("/movie/550");
};

const getMovies = (data) => {
    const id = data.queryKey[1];
    return get(
        "/discover/movie",
        `&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=[${id}]&with_watch_monetization_types=flatrate`
    );
};

const getGenres = () => {
    return get("/genre/movie/list");
};

const exports = {
    getMovie,
    getMovies,
    getGenres,
};

export default exports;
