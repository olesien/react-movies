import useMovie from "../../hooks/useMovie";

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
    return <div>Movie {id}</div>;
}
