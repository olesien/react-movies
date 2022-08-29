import useMovieHistory from "../../hooks/useMovieHistory";
import MovieList from "../MovieList";

export default function FilmHistory() {
    const [prevMovies] = useMovieHistory();
    return (
        <div>
            Last 10 viewed films:
            <div>
                {!prevMovies || prevMovies.length < 1 ? (
                    <p>Go look up some movies!</p>
                ) : (
                    <MovieList
                        movies={prevMovies}
                        categoryId={0}
                        type={"history"}
                        search={null}
                        page={null}
                    />
                )}
            </div>
        </div>
    );
}
