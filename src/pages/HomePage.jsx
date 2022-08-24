import Container from "react-bootstrap/Container";
import NavStatus from "../components/NavStatus";
import FilmHistory from "../components/subpages/FilmHistory";

import Genres from "../components/subpages/Genres";

const HomePage = () => {
    return (
        <Container className="py-3">
            <NavStatus progress={[{ name: "Home", active: true, url: "/" }]} />
            <h1>Welcome!</h1>

            <FilmHistory />
            <p>Please select your preferred genre</p>
            <Genres />
        </Container>
    );
};

export default HomePage;
