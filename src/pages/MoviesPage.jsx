import Movies from "../components/subpages/Movies";
import ShowGenre from "../components/subpages/ShowGenre";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function MoviesPage() {
    const { categoryId } = useParams();
    return (
        <Container className="py-3">
            <ShowGenre id={categoryId} />
            <Movies id={categoryId} />
        </Container>
    );
}
