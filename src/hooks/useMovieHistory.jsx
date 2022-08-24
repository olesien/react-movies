import React, { useState, useEffect } from "react";

export default function useMovieHistory() {
    const [prevMovies, setPrevMovies] = useState(
        JSON.parse(localStorage.getItem("react-movies-history"))
    );
    const [loading, setLoading] = useState(true);
    const changePrevMovies = (newMovies) => {
        if (!newMovies) return;
        setPrevMovies(newMovies);
    };
    useEffect(() => {
        if (loading) return;
        localStorage.setItem(
            "react-movies-history",
            JSON.stringify(prevMovies)
        );
    }, [prevMovies]);
    useEffect(() => {
        setLoading(false);
    }, []);
    return [prevMovies, changePrevMovies];
}
