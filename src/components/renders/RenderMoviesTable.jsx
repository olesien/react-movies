import { useMemo } from "react";
import { Image } from "react-bootstrap";
import RenderTable from "./RenderTable";
import { NavLink } from "react-router-dom";
import backdropImg from "../../assets/backdrop.png";

export default function RenderMoviesTable({
    movies,
    categoryId,
    search,
    page,
    type,
}) {
    const results = movies.results;
    let endUrl = ``;
    if (type === "category") {
        endUrl = `&categoryId=${categoryId}`;
    } else if (type === "search") {
        endUrl = `&search=${search}`;
    }
    const columns = useMemo(
        () => [
            {
                Header: "Img",
                Cell: ({ row: { original: movie } }) => (
                    <Image
                        src={
                            movie.backdrop_path
                                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                : backdropImg
                        }
                        className="thumbnail rounded movie-img"
                        alt={`Image of the movie ${
                            movie.title ? movie.title : movie.name
                        }`}
                    ></Image>
                ),
            },
            {
                Header: "Title",
                Cell: ({ row: { original: movie } }) => (
                    <NavLink
                        to={`/movie/${movie.id}?page=${
                            page ? page : 1
                        }&type=${type}${endUrl}`}
                    >
                        {movie.title ? movie.title : movie.name}
                    </NavLink>
                ),
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
    return (
        <RenderTable
            columns={columns}
            data={results.map((movie) => {
                return {
                    ...movie,
                    release_date: movie.release_date ? movie.release_date : "-",
                };
            })}
        />
    );
}
