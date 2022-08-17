import React from "react";
import { useParams } from "react-router-dom";

export default function MoviesPage() {
    const { categoryId } = useParams();
    return <div>MoviesPage {categoryId}</div>;
}
