import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovieList(id) {
    console.log(id);
    return useQuery(["movielist", id], MoviesAPI.getMovies);
}
