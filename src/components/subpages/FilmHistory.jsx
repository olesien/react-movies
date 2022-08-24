import useMovieHistory from "../../hooks/useMovieHistory";
import MovieList from "../MovieList";

export default function FilmHistory() {
    const [prevMovies, changePrevMovies] = useMovieHistory();
    console.log(prevMovies);
    return (
        <div>
            Last 10 viewed films:
            <div>
                {!prevMovies || prevMovies.length < 1 ? (
                    <p>Go look up some movies!</p>
                ) : (
                    <MovieList movies={prevMovies} />
                )}
            </div>
        </div>
    );
}
