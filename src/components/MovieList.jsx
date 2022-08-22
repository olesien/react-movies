import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function MovieList({ movies }) {
    return (
        <>
            {movies.map((movie, index) => (
                <span key={index}>
                    {movie.poster_path ? (
                        <NavLink
                            to={`/movie/${movie.id}?categoryId=${0}`}
                            key={index}
                        >
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                className="thumbnail rounded poster-img m-2"
                                alt={`Image of the movie ${movie.name}`}
                            />
                        </NavLink>
                    ) : (
                        <></>
                    )}
                </span>
            ))}
        </>
    );
}
