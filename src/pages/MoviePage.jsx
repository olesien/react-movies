import { Container } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import Movie from "../components/subpages/Movie";

import NavStatus from "../components/NavStatus";
import useHistoryArray from "../hooks/useHistoryArray";

export default function MoviePage() {
    const { movieId } = useParams();
    let [searchParams] = useSearchParams();
    //get search params
    let page = searchParams.get("page");
    let categoryId = searchParams.get("categoryId");
    let search = searchParams.get("search");
    let type = searchParams.get("type");

    let { historyArray } = useHistoryArray(
        movieId,
        page,
        categoryId,
        search,
        type
    );
    return (
        <Container className="py-3">
            <NavStatus progress={historyArray} />
            <Movie
                id={movieId}
                categoryId={categoryId}
                type={type}
                search={search}
                page={page}
            />
        </Container>
    );
}
