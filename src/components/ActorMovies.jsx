import useActor from "../hooks/useActor";
import WarningAlert from "./WarningAlert";
import BasicSpinner from "./BasicSpinner";

import MovieList from "./MovieList";

export default function ActorMovies({ id, categoryId, search, page, type }) {
    const { actorMovies: data } = useActor(id);
    const { isLoading, isError, error, data: actorMovies } = data;
    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    console.log(actorMovies);
    return (
        <div>
            <h3>Actor Movies</h3>
            {
                <MovieList
                    movies={actorMovies.cast.filter(
                        (movie, index) => index < 10
                    )}
                    categoryId={categoryId}
                    type={type}
                    search={search}
                    page={page}
                />
            }
        </div>
    );
}
