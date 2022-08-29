import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovieList(genre, page) {
    //Fetch normal movie list, but if page switches, keep previous data
    return useQuery(["movielist", genre, page], MoviesAPI.getMovies, {
        keepPreviousData: true,
    });
}
