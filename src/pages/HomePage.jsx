import Container from "react-bootstrap/Container";

import Genres from "../components/subpages/Genres";

const HomePage = () => {
    return (
        <Container className="py-3">
            <h1>Welcome!</h1>
            <p>Please select your preferred genre</p>
            <Genres />
        </Container>
    );
};

export default HomePage;
