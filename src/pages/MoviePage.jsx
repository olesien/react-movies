import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Movie from "../components/subpages/Movie";

export default function MoviePage() {
    const { movieId } = useParams();
    return (
        <Container>
            <Movie id={movieId} />
        </Container>
    );
}
