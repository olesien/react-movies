import Movies from "../components/subpages/Movies";
import ShowGenre from "../components/subpages/ShowGenre";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavStatus from "../components/NavStatus";

export default function MoviesPage() {
    const { categoryId } = useParams();

    return (
        <Container className="py-3">
            <NavStatus
                progress={[
                    { name: "Home", active: false, url: "/" },
                    {
                        name: "category",
                        active: true,
                        url: `/category/${categoryId}/`,
                    },
                ]}
            />
            <ShowGenre id={categoryId} />
            <Movies id={categoryId} />
        </Container>
    );
}
