import { useState, useEffect } from "react";

export default function useMovieHistory() {
    //Fetch the last 10 movies from localstorage
    const [prevMovies, setPrevMovies] = useState(
        JSON.parse(localStorage.getItem("react-movies-history"))
    );
    const [loading, setLoading] = useState(true);
    const changePrevMovies = (newMovies) => {
        if (!newMovies) return;
        setPrevMovies(newMovies);
    };
    //If prevmovies updates, update localstorage
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
