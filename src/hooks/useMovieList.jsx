import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovieList() {
    return useQuery("movielist", MoviesAPI.getMovies);
}
