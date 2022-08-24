import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SerachBar";

const Navigation = () => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    React Movies
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} end to="/now-playing">
                            Now Playing
                        </Nav.Link>
                        <Nav.Link as={NavLink} end to="/most-popular">
                            Most Popular
                        </Nav.Link>
                        <Nav.Link as={NavLink} end to="/top-rated">
                            Top Rated
                        </Nav.Link>
                        <SearchBar />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
