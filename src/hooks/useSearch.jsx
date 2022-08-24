import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovieList(page, search) {
    return useQuery(["search", page, search], MoviesAPI.getSearch, {
        keepPreviousData: true,
    });
}
