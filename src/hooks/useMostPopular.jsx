import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMostPopular(page, popularPeriod) {
    //Fetch most popular movies, but if page switches, keep previous data
    return useQuery(
        ["mostpopular", page, popularPeriod],
        MoviesAPI.getMostPopular,
        {
            keepPreviousData: true,
        }
    );
}
