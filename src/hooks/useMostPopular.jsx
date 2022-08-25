import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMostPopular(page, popularPeriod) {
    return useQuery(
        ["mostpopular", page, popularPeriod],
        MoviesAPI.getMostPopular,
        {
            keepPreviousData: true,
        }
    );
}
