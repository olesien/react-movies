import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovie(id) {
    console.log(id);
    return useQuery(["movie", id], MoviesAPI.getMovie);
}
