import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMostPopular(page) {
    return useQuery(["mostpopular", page], MoviesAPI.getMostPopular, {
        keepPreviousData: true,
    });
}
