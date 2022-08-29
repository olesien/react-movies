import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function MovieList({ movies, categoryId, type, search, page }) {
    //set endurl
    let endUrl = ``;
    if (type === "category") {
        endUrl = `&categoryId=${categoryId}`;
    } else if (type === "search") {
        endUrl = `&search=${search}`;
    }
    return (
        <ul className="poster-list">
            {movies.map((movie, index) => (
                <li key={index}>
                    {movie.poster_path ? (
                        <NavLink
                            to={`/movie/${movie.id}?page=${
                                page ? page : 1
                            }&type=${type}${endUrl}`}
                            key={index}
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${
                                    movie.poster_path
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                className="thumbnail rounded poster-img m-2"
                                alt={`Image of the movie ${movie.name}`}
                            />
                        </NavLink>
                    ) : (
                        <></>
                    )}
                </li>
            ))}
        </ul>
    );
}
