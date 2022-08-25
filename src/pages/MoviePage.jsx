import { Container } from "react-bootstrap";
import {
    Link,
    Route,
    Routes,
    useParams,
    useSearchParams,
} from "react-router-dom";
import Movie from "../components/subpages/Movie";

import NavStatus from "../components/NavStatus";

export default function MoviePage() {
    const { movieId } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    let categoryId = searchParams.get("categoryId");
    let search = searchParams.get("search");
    let type = searchParams.get("type");
    const base_url = `${type}${
        type === "category"
            ? "/" + categoryId
            : type === "search"
            ? "/" + search
            : ""
    }`;
    const historyArray = [{ name: "Home", active: false, url: "/" }];
    if (type !== "history") {
        historyArray.push({
            name: type,
            active: false,
            url: `/${base_url}?page=${page ? page : 1}`,
        });
    }
    historyArray.push({
        name: "Movie",
        active: true,
        url: `/movie/${movieId}/`,
    });
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
