import MoviesAPI from "../services/MoviesAPI";
import { useQuery } from "react-query";

export default function useMovie(id) {
    console.log(id);
    const movie = useQuery(["movie", id], MoviesAPI.getMovie);
    const credits = useQuery(["moviecredits", id], MoviesAPI.getMovieCredits);
    const similar = useQuery(["moviesimilar", id], MoviesAPI.getSimilarMovies);
    return { movie, credits, similar };
}
