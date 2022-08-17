import { ListGroup, ListGroupItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import useGenres from "../hooks/useGenres";

const HomePage = () => {
    const { isLoading, isError, error, data } = useGenres();
    const genres = data?.genres;
    console.log(genres);
    return (
        <Container className="py-3">
            <h1>Welcome!</h1>
            {isLoading ? (
                "Loading"
            ) : (
                <ListGroup>
                    {genres.map((genre) => (
                        <ListGroup.Item
                            key={genre.id}
                            as={NavLink}
                            end
                            to={"/category/" + genre.id}
                        >
                            {genre.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
};

export default HomePage;
