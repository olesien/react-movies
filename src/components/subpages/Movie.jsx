import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Actors from "./Actors";
import SimilarMovies from "./SimilarMovies";

export default function Movie({ id }) {
    const { movie: data } = useMovie(id);
    const { isLoading, isPreviousData, isError, error, data: movie } = data;

    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    console.log(movie);
    return (
        <div className="movieContainer">
            <div className="left">
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    className="thumbnail rounded "
                    alt={`Image of the movie ${movie.title}`}
                />
                <ul className="miscContainer">
                    <li>
                        <span>Release</span>
                        <span>{movie.release_date}</span>
                    </li>
                    <li>
                        <span>Populairty</span>
                        <span>{movie.popularity}</span>
                    </li>

                    <li>
                        <span>Rating</span>
                        <span>
                            {movie.vote_average} * ({movie.vote_count})
                        </span>
                    </li>
                    {movie.revenue > 0 && (
                        <li>
                            <span>Revenue</span>
                            <span>${movie.revenue}</span>
                        </li>
                    )}
                    <li>
                        <span>Genres</span>
                        <span>
                            {movie.genres.map((genre) => (
                                <span key={genre.id}>
                                    <NavLink to={"/category/" + genre.id}>
                                        {genre.name}
                                    </NavLink>
                                    ,{" "}
                                </span>
                            ))}
                        </span>
                    </li>
                </ul>
                <SimilarMovies id={id} />
            </div>
            <div className="right">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <Actors id={id} />
            </div>
        </div>
    );
}
