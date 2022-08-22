import { Container } from "react-bootstrap";
import {
    Link,
    Route,
    Routes,
    useParams,
    useSearchParams,
} from "react-router-dom";
import NavStatus from "../components/NavStatus";
import Actor from "../components/subpages/Actor";

export default function ActorPage() {
    const { actorId } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    let categoryId = searchParams.get("categoryId");
    let movieId = searchParams.get("movieId");
    console.log(actorId);
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
                    { name: "Movie", active: false, url: `/movie/${movieId}/` },
                    { name: "Actor", active: true, url: `/actor/${actorId}/` },
                ]}
            />
            <Actor id={actorId} />
        </Container>
    );
}
