import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useTopRated(page) {
    return useQuery(["toprated", page], MoviesAPI.getTopRated, {
        keepPreviousData: true,
    });
}
