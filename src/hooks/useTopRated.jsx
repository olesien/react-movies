import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useTopRated(page) {
    //Fetch top rated, but if page switches, keep previous data
    return useQuery(["toprated", page], MoviesAPI.getTopRated, {
        keepPreviousData: true,
    });
}
