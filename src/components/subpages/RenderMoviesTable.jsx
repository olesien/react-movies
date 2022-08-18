import { useMemo } from "react";
import { Image } from "react-bootstrap";
import RenderTable from "../RenderTable";

export default function RenderMoviesTable({ movies }) {
    const results = movies.results;
    const columns = useMemo(
        () => [
            {
                Header: "Img",
                Cell: ({ row: { original: movie } }) => (
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        className="thumbnail rounded movie-img"
                        alt={`Image of the movie ${movie.title}`}
                    ></Image>
                ),
            },
            {
                Header: "Title",
                accessor: "title",
            },
            {
                Header: "Rating",
                Cell: ({ row: { original: movie } }) => (
                    <p>
                        {movie.vote_average} * ({movie.vote_count})
                    </p>
                ),
            },
            {
                Header: "Release date",
                accessor: "release_date",
            },
            {
                Header: "Popularity",
                accessor: "popularity",
            },
        ],
        []
    );
    return <RenderTable columns={columns} data={results} />;
}