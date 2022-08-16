import Container from "react-bootstrap/Container";
import useMovieList from "../hooks/useMovieList";

const HomePage = () => {
    const { isLoading, isError, error, data } = useMovieList();
    console.log(data);
    return (
        <Container className="py-3">
            <h1>Welcome!</h1>
        </Container>
    );
};

export default HomePage;
