import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import MovieList from "../MovieList";

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
            <h3>Similar Movies</h3>
            <MovieList movies={similarMovies.results} />
        </div>
    );
}
