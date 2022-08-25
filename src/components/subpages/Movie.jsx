import useMovie from "../../hooks/useMovie";
import WarningAlert from "../WarningAlert";
import BasicSpinner from "../BasicSpinner";

import { NavLink } from "react-router-dom";
import Actors from "./Actors";
import SimilarMovies from "../SimilarMovies";

import RenderDetails from "../RenderDetails";
import useMovieHistory from "../../hooks/useMovieHistory";
import React, { useState, useEffect } from "react";

export default function Movie({ id, categoryId, search, page, type }) {
    const { movie: data } = useMovie(id);
    const { isLoading, isPreviousData, isError, error, data: movie } = data;

    const [prevMovies, changePrevMovies] = useMovieHistory();
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
        if (newPrevMovies.length > 10) {
            newPrevMovies.pop();
        }
        newPrevMovies.unshift(movie);

        changePrevMovies(newPrevMovies);

        console.log(newPrevMovies);
    }, [movie]);

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
                    info: Math.round(movie.vote_average * movie.vote_count),
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
