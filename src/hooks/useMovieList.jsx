import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovieList(id, page) {
    console.log(id);
    return useQuery(["movielist", id, page], MoviesAPI.getMovies, {
        keepPreviousData: true,
    });
}
