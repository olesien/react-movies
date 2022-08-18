import useGenres from "../../hooks/useGenres";

export default function ShowGenre({ id }) {
    const { isLoading, isError, error, data } = useGenres();
    if (isError || isLoading) return <div></div>;
    const genres = data?.genres;
    const category = genres.find((genre) => genre.id === Number(id));
    return <div>Genre of choice: {category ? category.name : "unknown"}</div>;
}
