import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useGenres() {
    //get genres
    return useQuery("genres", MoviesAPI.getGenres);
}
