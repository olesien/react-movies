import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SimilarMovies({ id }) {
    const { similar: data } = useMovie(id);
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: similarMovies,
    } = data;
    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    console.log(similarMovies);
    return (
        <div>
            {" "}
            <h3>Similar Movies</h3>
            {similarMovies.results.map((movie) => (
                <Image
                    as={NavLink}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="thumbnail rounded poster-img m-2"
                    alt={`Image of the actor ${movie.name}`}
                    to={`/movie/${movie.id}?categoryId=${0}`}
                />
            ))}
        </div>
    );
}
