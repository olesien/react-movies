import React from "react";
import { useParams } from "react-router-dom";
import useMovieList from "../hooks/useMovieList";

export default function MoviesPage() {
    const { categoryId } = useParams();
    const { isLoading, isError, error, data } = useMovieList(categoryId);
    console.log(data);
    return <div>MoviesPage {categoryId}</div>;
}
