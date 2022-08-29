import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovieList(page, search) {
    //Fetch search, but if page switches, keep previous data
    return useQuery(["search", page, search], MoviesAPI.getSearch, {
        keepPreviousData: true,
    });
}
