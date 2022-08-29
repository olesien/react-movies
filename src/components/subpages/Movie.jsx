import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";

import { NavLink } from "react-router-dom";
import Actors from "../Actors";
import SimilarMovies from "../SimilarMovies";

import RenderDetails from "../renders/RenderDetails";
import useMovieHistory from "../../hooks/useMovieHistory";
import { useEffect } from "react";

export default function Movie({ id, categoryId, search, page, type }) {
    const { movie: data } = useMovie(id);
    const { isLoading, isError, error, data: movie } = data;

    const [prevMovies, changePrevMovies] = useMovieHistory();

    //When we have a movie loaded, set the previous movies in localstorage! This is then used in Home page as last 10.
    useEffect(() => {
        if (!movie) return;
        console.log(prevMovies);
        if (!prevMovies || prevMovies.length < 1) {
            return changePrevMovies([movie]);
        }
        //Filter out current movie
        let newPrevMovies = prevMovies.filter(
            (prevMovie) => prevMovie.id != movie.id
        );
        //If it's over 10 length, remove last one
        if (newPrevMovies.length > 10) {
            newPrevMovies.pop();
        }
        //Add this one
        newPrevMovies.unshift(movie);

        changePrevMovies(newPrevMovies);

        console.log(newPrevMovies);
    }, [movie]);

    //Return if it's error or loading
    if (isError) {
        return <WarningAlert errorMessage={error.message} />;
    }
    if (isLoading) {
        return <BasicSpinner />;
    }
    console.log(movie);
    return (
        <RenderDetails
            data={{
                title: movie.title,
                image_url: movie.backdrop_path,
                overview: movie.overview,
            }}
            misc={[
                {
                    name: "Release",
                    info: movie.release_date,
                },
                {
                    name: "Populairty",
                    info: movie.popularity,
                },
                {
                    name: "Rating",
                    info: `${movie.vote_average}* (${movie.vote_count})`,
                },
                {
                    name: "Revenue",
                    info: movie.revenue,
                },
                {
                    name: "Revenue",
                    info: movie.genres.map((genre) => (
                        <span key={genre.id}>
                            <NavLink to={"/category/" + genre.id}>
                                {genre.name}
                            </NavLink>
                            ,
                        </span>
                    )),
                },
            ]}
            leftslot={
                <SimilarMovies
                    id={id}
                    categoryId={categoryId}
                    type={type}
                    search={search}
                    page={page}
                />
            }
            rightslot={
                <Actors
                    id={id}
                    categoryId={categoryId}
                    type={type}
                    search={search}
                    page={page}
                />
            }
        />
    );
}
