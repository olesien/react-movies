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
    let categoryId = searchParams.get("categoryId");
    return (
        <Container className="py-3">
            <NavStatus
                progress={[
                    { name: "Home", active: false, url: "/" },
                    {
                        name: "Movies",
                        active: false,
                        url: `/category/${categoryId}/`,
                    },
                    { name: "Movie", active: true, url: `/movie/${movieId}/` },
                ]}
            />
            <Movie id={movieId} />
        </Container>
    );
}
