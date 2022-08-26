import useMovie from "../hooks/useMovie";
import WarningAlert from "./WarningAlert";
import BasicSpinner from "./BasicSpinner";
import { useState } from "react";
import { Button } from "react-bootstrap";

import MovieList from "./MovieList";

export default function SimilarMovies({ id, categoryId, search, page, type }) {
    const [loadedMore, setLoadedMore] = useState(false);
    const { similar: data } = useMovie(id);
    const { isLoading, isError, error, data: similarMovies } = data;
    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    console.log(similarMovies);
    return (
        <div>
            <h3 className="text-center">Similar Movies</h3>

            <MovieList
                movies={similarMovies.results.filter((movie, length) =>
                    !loadedMore ? length < 6 : true
                )}
                categoryId={categoryId}
                type={type}
                search={search}
                page={page}
            />
            <Button onClick={() => setLoadedMore((loadedMore) => !loadedMore)}>
                {loadedMore ? "Hide" : "Load More"}
            </Button>
        </div>
    );
}
