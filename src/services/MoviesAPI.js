//import dotenv from "dotenv";
import axios from "axios";
// dotenv.config();
//Secured storing of API key, see here: https://www.themoviedb.org/settings/api (v3)
const apiKey = import.meta.env.VITE_API_KEY;
//default URL
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const get = async (endpoint) => {
    const res = await axios.get(endpoint + `?api_key=${apiKey}&language=en-US`);
    return res.data;
};

const getMovies = () => {
    return get("/movie/550");
};

const getGenres = () => {
    return get("/genre/movie/list");
};

const exports = {
    getMovies,
    getGenres,
};

export default exports;
