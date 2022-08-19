import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";
import { Image } from "react-bootstrap";

export default function Movie({ id }) {
    const {
        isLoading,
        isPreviousData,
        isError,
        error,
        data: movie,
    } = useMovie(id);

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
            </div>
            <div className="right">r</div>
        </div>
    );
}
